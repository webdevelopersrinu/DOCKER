import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("invalid email"),
  phone: z.string().min(10, "phone must be at least 10 digits"),
  password: z.string().min(6, "password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("invalid email"),
  password: z.string().min(1, "password is required"),
});

export const otpSendSchema = z.object({
  phone: z.string().min(10, "phone must be at least 10 digits"),
});

export const otpVerifySchema = z.object({
  phone: z.string().min(10, "phone must be at least 10 digits"),
  otp: z.string().length(6, "otp must be 6 digits"),
});
