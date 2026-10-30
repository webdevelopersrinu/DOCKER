import * as bookingService from "../services/booking.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { success } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";

// Partial-failure saga outcomes (not enough seats / payment declined) need to carry
// BOTH an error message and the booking record the caller already knows about, so
// this one handler responds directly instead of going through success()/failure().
export const createBooking = asyncHandler(async (req, res, next) => {
  try {
    const booking = await bookingService.createBooking(req.user.sub, req.body);
    success(res, booking, 201);
  } catch (err) {
    if (err instanceof ApiError && err.booking) {
      return res.status(err.status).json({ success: false, message: err.message, data: { booking: err.booking } });
    }
    next(err);
  }
});

export const listBookings = asyncHandler(async (req, res) => {
  const bookings = await bookingService.listBookings(req.user.sub);
  success(res, bookings);
});

export const getBooking = asyncHandler(async (req, res) => {
  const booking = await bookingService.getBooking(req.user.sub, req.params.id);
  success(res, booking);
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const booking = await bookingService.cancelBooking(req.user.sub, req.params.id);
  success(res, booking);
});
