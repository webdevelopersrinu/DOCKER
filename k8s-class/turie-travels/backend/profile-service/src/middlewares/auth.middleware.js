import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { failure } from "../utils/apiResponse.js";

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return failure(res, 401, "Missing bearer token");
  try {
    req.user = jwt.verify(token, env.jwtSecret);
    next();
  } catch {
    failure(res, 401, "Invalid or expired token");
  }
}
