import * as userService from "../services/user.service.js";

export async function getUsers(req, res) {
  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 10);

  // Validate query input — never trust the client.
  if (!Number.isInteger(page) || page < 1 || !Number.isInteger(limit) || limit < 1 || limit > 100) {
    return res.status(400).json({ success: false, message: "page must be >= 1 and limit between 1 and 100" });
  }

  const result = userService.list({ page, limit });
  res.status(200).json({ success: true, ...result });
}
