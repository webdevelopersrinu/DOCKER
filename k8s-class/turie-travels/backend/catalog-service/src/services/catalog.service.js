import { placeRepository } from "../repositories/place.repository.js";
import { tripRepository } from "../repositories/trip.repository.js";
import { ApiError } from "../utils/apiError.js";

export function searchPlaces(q) {
  return placeRepository.search(q);
}

export function searchTrips(mode, from, to) {
  return tripRepository.searchByMode(mode, from, to);
}

export async function getTripById(id) {
  const trip = await tripRepository.findById(id);
  if (!trip) throw new ApiError(404, "Trip not found");
  return trip;
}

// Internal — called by booking-service to reserve (negative delta) or release (positive delta) seats.
export async function adjustSeats(id, delta, classType) {
  const trip = await tripRepository.findById(id);
  if (!trip) throw new ApiError(404, "Trip not found");

  if (classType && trip.classes?.length) {
    const cls = trip.classes.find((c) => c.type === classType);
    if (!cls) throw new ApiError(400, "Unknown class");
    if (cls.seatsAvailable + delta < 0) throw new ApiError(409, "Not enough seats available");
    cls.seatsAvailable += delta;
  } else {
    if (trip.seatsAvailable + delta < 0) throw new ApiError(409, "Not enough seats available");
    trip.seatsAvailable += delta;
  }

  return tripRepository.save(trip);
}
