import { ApiError } from "../utils/ApiError.js";
import { IS_PROD } from "../config/env.js";
import { logger } from "../config/logger.js";

export function notFoundHandler(req, _res, next) {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, _req, res, _next) {
  const status = err instanceof ApiError ? err.status : 500;

  if (status >= 500) {
    logger.error(err.message, { stack: err.stack });
  }

  res.status(status).json({
    success: false,
    message: status >= 500 && IS_PROD ? "Internal server error" : err.message,
  });
}
