import * as authService from "../services/auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { success } from "../utils/apiResponse.js";

export const signup = asyncHandler(async (req, res) => {
  const result = await authService.signup(req.body);
  success(res, result, 201);
});

export const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body);
  success(res, result);
});

export const sendOtp = asyncHandler(async (req, res) => {
  const result = authService.sendOtp(req.body.phone);
  success(res, result);
});

export const verifyOtp = asyncHandler(async (req, res) => {
  const result = authService.verifyOtp(req.body);
  success(res, result);
});

export const me = asyncHandler(async (req, res) => {
  const result = await authService.me(req.user.sub);
  success(res, result);
});
