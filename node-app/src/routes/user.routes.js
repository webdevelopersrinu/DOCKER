import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(getUsers));

export default router;
