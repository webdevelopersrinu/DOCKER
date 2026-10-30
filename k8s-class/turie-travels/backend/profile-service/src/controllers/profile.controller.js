import * as profileService from "../services/profile.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { success } from "../utils/apiResponse.js";

export const getProfile = asyncHandler(async (req, res) => {
  const profile = await profileService.getProfile(req.user.sub);
  success(res, profile);
});

export const updateProfile = asyncHandler(async (req, res) => {
  const profile = await profileService.updateProfile(req.user.sub, req.body);
  success(res, profile);
});

export const addPassenger = asyncHandler(async (req, res) => {
  const profile = await profileService.addPassenger(req.user.sub, req.body);
  success(res, profile, 201);
});
