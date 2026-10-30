import { Router } from "express";
import { getProfile, updateProfile, addPassenger } from "../controllers/profile.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { updateProfileSchema, addPassengerSchema } from "../validations/profile.validation.js";

const router = Router();

router.use(requireAuth);
router.get("/", getProfile);
router.put("/", validate(updateProfileSchema), updateProfile);
router.post("/passengers", validate(addPassengerSchema), addPassenger);

export default router;
