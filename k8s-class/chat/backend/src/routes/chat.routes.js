import { Router } from "express";
import { chat } from "../controllers/chat.controller.js";
import { validateChat } from "../middlewares/validate.js";
import { asyncHandler } from "../middlewares/error.js";

const router = Router();

router.post("/chat", validateChat, asyncHandler(chat));

export default router;
