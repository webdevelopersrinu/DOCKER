import { NODE_ENV } from "../config/env.js";

export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export function notFound(req, res) {
  res.status(404).json({ success: false, message: "Route not found" });
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  console.error(`[error] ${status} ${err.message}`);
  res.status(status).json({
    success: false,
    message: status === 500 && NODE_ENV === "production" ? "Internal server error" : err.message,
  });
}
