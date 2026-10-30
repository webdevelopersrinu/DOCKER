import { Router } from "express";
import { createBooking, listBookings, getBooking, cancelBooking } from "../controllers/booking.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { createBookingSchema } from "../validations/booking.validation.js";

const router = Router();

router.use(requireAuth);
router.post("/", validate(createBookingSchema), createBooking);
router.get("/", listBookings);
router.get("/:id", getBooking);
router.patch("/:id/cancel", cancelBooking);

export default router;
