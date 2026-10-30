import * as catalogService from "../services/catalog.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { success } from "../utils/apiResponse.js";

export const searchPlaces = asyncHandler(async (req, res) => {
  const places = await catalogService.searchPlaces(req.query.q);
  success(res, places);
});

export const searchTrips = (mode) =>
  asyncHandler(async (req, res) => {
    const trips = await catalogService.searchTrips(mode, req.query.from, req.query.to);
    success(res, trips);
  });

export const getTripById = asyncHandler(async (req, res) => {
  const trip = await catalogService.getTripById(req.params.id);
  success(res, trip);
});

export const adjustSeats = asyncHandler(async (req, res) => {
  const trip = await catalogService.adjustSeats(req.params.id, req.body.delta, req.body.classType);
  success(res, trip);
});
