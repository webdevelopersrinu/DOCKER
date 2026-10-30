import { bookingRepository } from "../repositories/booking.repository.js";
import { catalogClient, paymentClient, notificationClient } from "./clients.js";
import { ApiError } from "../utils/apiError.js";
import { logger } from "../utils/logger.js";

function fareFor(trip, classType) {
  if (classType && trip.classes?.length) {
    const cls = trip.classes.find((c) => c.type === classType);
    if (!cls) throw new ApiError(400, "Unknown class for this trip");
    return cls.fare;
  }
  return trip.fare;
}

// Translate a failed axios call into an ApiError with the real upstream status/message,
// instead of letting a raw axios error (no .status) fall through as a generic 500.
async function fetchTrip(tripId) {
  try {
    const { data } = await catalogClient.get(`/api/v1/trips/${tripId}`);
    return data.data;
  } catch (err) {
    throw new ApiError(err.response?.status || 502, err.response?.data?.message || "Catalog service unavailable");
  }
}

async function notify(userId, type, message) {
  try {
    await notificationClient.post("/api/v1/notifications", { userId, channel: "EMAIL", type, message });
  } catch (err) {
    logger.error("notification failed (non-fatal)", { error: err.message });
  }
}

export async function createBooking(userId, { tripId, classType, passengers, paymentMethod }) {
  const trip = await fetchTrip(tripId);
  const fareTotal = fareFor(trip, classType) * passengers.length;

  const booking = await bookingRepository.create({
    userId,
    tripId,
    mode: trip.mode,
    classType,
    tripSnapshot: trip,
    passengers,
    fareTotal,
    status: "PENDING",
  });

  // Reserve seats up front so two bookings can't overbook the same trip.
  try {
    await catalogClient.patch(`/api/v1/trips/${tripId}/seats`, { delta: -passengers.length, classType });
  } catch (err) {
    booking.status = "FAILED";
    await bookingRepository.save(booking);
    throw Object.assign(new ApiError(409, "Not enough seats available"), { booking });
  }

  const { data: chargeRes, status: httpStatus } = await paymentClient
    .post("/api/v1/payments/charge", { bookingId: booking._id.toString(), userId, amount: fareTotal, method: paymentMethod })
    .then((r) => ({ data: r.data, status: r.status }))
    .catch((err) => ({ data: err.response?.data, status: err.response?.status || 500 }));

  const transaction = chargeRes?.data;

  if (httpStatus === 201 && transaction?.status === "SUCCESS") {
    booking.status = "CONFIRMED";
    booking.paymentTxnId = transaction.txnId;
    await bookingRepository.save(booking);
    await notify(userId, "BOOKING_CONFIRMED", `Your ${trip.mode} booking ${booking._id} from ${trip.from} to ${trip.to} is confirmed.`);
    return booking;
  }

  // Payment failed — release the seats we reserved and mark booking failed.
  await catalogClient.patch(`/api/v1/trips/${tripId}/seats`, { delta: passengers.length, classType }).catch(() => {});
  booking.status = "FAILED";
  await bookingRepository.save(booking);
  await notify(userId, "PAYMENT_FAILED", `Payment for booking ${booking._id} failed.`);
  throw Object.assign(new ApiError(402, "Payment failed"), { booking });
}

export async function listBookings(userId) {
  return bookingRepository.findByUser(userId);
}

export async function getBooking(userId, id) {
  const booking = await bookingRepository.findOneByUserAndId(userId, id);
  if (!booking) throw new ApiError(404, "Booking not found");
  return booking;
}

export async function cancelBooking(userId, id) {
  const booking = await bookingRepository.findOneByUserAndId(userId, id);
  if (!booking) throw new ApiError(404, "Booking not found");
  if (booking.status !== "CONFIRMED") throw new ApiError(400, "Only confirmed bookings can be cancelled");

  await catalogClient
    .patch(`/api/v1/trips/${booking.tripId}/seats`, { delta: booking.passengers.length, classType: booking.classType })
    .catch(() => {});

  booking.status = "CANCELLED";
  await bookingRepository.save(booking);
  await notify(booking.userId, "BOOKING_CANCELLED", `Booking ${booking._id} has been cancelled.`);
  return booking;
}
