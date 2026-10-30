import { notificationRepository } from "../repositories/notification.repository.js";
import { logger } from "../utils/logger.js";

// Sandbox mode until a real email/SMS provider is wired in — logs + stores the record.
export function send({ userId, channel, type, message }) {
  logger.info(`${channel} notification dispatched (sandbox mode) to user ${userId}: [${type}] ${message}`);
  return notificationRepository.create({ userId, channel, type, message });
}

export function listForUser(userId) {
  return notificationRepository.listByUser(userId);
}
