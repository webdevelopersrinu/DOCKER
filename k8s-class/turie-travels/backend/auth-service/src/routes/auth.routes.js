import { Router } from "express";
import { signup, login, sendOtp, verifyOtp, me } from "../controllers/auth.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { authRateLimiter } from "../middlewares/rateLimit.js";
import { signupSchema, loginSchema, otpSendSchema, otpVerifySchema } from "../validations/auth.validation.js";

const router = Router();

router.post("/signup", authRateLimiter, validate(signupSchema), signup);
router.post("/login", authRateLimiter, validate(loginSchema), login);
router.post("/otp/send", authRateLimiter, validate(otpSendSchema), sendOtp);
router.post("/otp/verify", authRateLimiter, validate(otpVerifySchema), verifyOtp);
router.get("/me", requireAuth, me);

export default router;
