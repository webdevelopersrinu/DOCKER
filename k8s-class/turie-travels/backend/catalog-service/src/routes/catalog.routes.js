import { Router } from "express";
import { searchPlaces, searchTrips, getTripById, adjustSeats } from "../controllers/catalog.controller.js";
import { validateQuery, validateBody } from "../middlewares/validate.js";
import { placesSearchSchema, tripSearchSchema, seatAdjustSchema } from "../validations/catalog.validation.js";

const router = Router();

router.get("/places", validateQuery(placesSearchSchema), searchPlaces);

router.get("/flights/search", validateQuery(tripSearchSchema), searchTrips("flight"));
router.get("/trains/search", validateQuery(tripSearchSchema), searchTrips("train"));
router.get("/buses/search", validateQuery(tripSearchSchema), searchTrips("bus"));

router.get("/trips/:id", getTripById);
router.patch("/trips/:id/seats", validateBody(seatAdjustSchema), adjustSeats);

export default router;
