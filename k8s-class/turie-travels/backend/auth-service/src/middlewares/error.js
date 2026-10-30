import { failure } from "../utils/apiResponse.js";
import { logger } from "../utils/logger.js";
import { env } from "../config/env.js";

export function notFound(req, res) {
  failure(res, 404, "Not found");
}

export function errorHandler(err, req, res, next) {
  logger.error(err.message, { stack: err.stack, path: req.path });
  const status = err.status || 500;
  // Hide internal error details in production — only ApiError (4xx, expected) messages are safe to leak.
  const message = status < 500 || env.nodeEnv !== "production" ? err.message : "Internal server error";
  failure(res, status, message);
}
