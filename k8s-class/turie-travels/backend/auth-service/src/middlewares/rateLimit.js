import rateLimit from "express-rate-limit";

// Login/signup/OTP are brute-force targets — cap attempts per IP.
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many attempts, try again later" },
});
