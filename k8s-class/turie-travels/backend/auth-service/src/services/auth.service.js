import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/user.repository.js";
import { ApiError } from "../utils/apiError.js";
import { logger } from "../utils/logger.js";
import { env } from "../config/env.js";

function signToken(user) {
  return jwt.sign({ sub: user._id.toString(), email: user.email, name: user.name }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn,
  });
}

function toPublic(user) {
  return { id: user._id, name: user.name, email: user.email, phone: user.phone, createdAt: user.createdAt };
}

export async function signup({ name, email, phone, password }) {
  const existing = await userRepository.findByEmail(email);
  if (existing) throw new ApiError(409, "Email already registered");

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await userRepository.create({ name, email, phone, passwordHash });
  return { token: signToken(user), user: toPublic(user) };
}

export async function login({ email, password }) {
  const user = await userRepository.findByEmail(email);
  if (!user) throw new ApiError(401, "Invalid credentials");

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) throw new ApiError(401, "Invalid credentials");

  return { token: signToken(user), user: toPublic(user) };
}

// Sandbox OTP flow: fixed code until an SMS provider is wired in.
export function sendOtp(phone) {
  logger.info("OTP dispatched (sandbox mode)", { phone, otp: "123456" });
  return { sent: true, devOtp: "123456" };
}

export function verifyOtp({ otp }) {
  if (otp !== "123456") throw new ApiError(400, "Invalid OTP");
  return { verified: true };
}

export async function me(userId) {
  const user = await userRepository.findById(userId);
  if (!user) throw new ApiError(404, "User not found");
  return toPublic(user);
}
