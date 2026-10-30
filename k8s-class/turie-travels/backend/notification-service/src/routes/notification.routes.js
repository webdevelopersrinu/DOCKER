import { Router } from "express";
import { send, listForUser } from "../controllers/notification.controller.js";
import { validateBody } from "../middlewares/validate.js";
import { sendNotificationSchema } from "../validations/notification.validation.js";

const router = Router();

router.post("/", validateBody(sendNotificationSchema), send);
router.get("/:userId", listForUser);

export default router;
