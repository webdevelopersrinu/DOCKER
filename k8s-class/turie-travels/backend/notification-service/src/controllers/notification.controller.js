import * as notificationService from "../services/notification.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { success } from "../utils/apiResponse.js";

export const send = asyncHandler(async (req, res) => {
  const notification = await notificationService.send(req.body);
  success(res, notification, 201);
});

export const listForUser = asyncHandler(async (req, res) => {
  const notifications = await notificationService.listForUser(req.params.userId);
  success(res, notifications);
});
