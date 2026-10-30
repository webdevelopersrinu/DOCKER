import { failure } from "../utils/apiResponse.js";

export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return failure(res, 400, result.error.issues.map((i) => i.message).join(", "));
  }
  req.body = result.data;
  next();
};
