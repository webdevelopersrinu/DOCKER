import { Router } from "express";
import { charge, getByBooking } from "../controllers/payment.controller.js";
import { validate } from "../middlewares/validate.js";
import { chargeSchema } from "../validations/payment.validation.js";

const router = Router();

router.post("/charge", validate(chargeSchema), charge);
router.get("/:bookingId", getByBooking);

export default router;
