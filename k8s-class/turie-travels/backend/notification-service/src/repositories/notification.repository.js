import { Notification } from "../models/notification.model.js";

export const notificationRepository = {
  create: (data) => Notification.create(data),
  listByUser: (userId) => Notification.find({ userId }).sort({ createdAt: -1 }),
};
