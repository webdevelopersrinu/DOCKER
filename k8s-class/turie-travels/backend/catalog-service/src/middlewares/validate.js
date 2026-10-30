import { failure } from "../utils/apiResponse.js";

// Validates req.query (search/filter params) rather than req.body — catalog-service is read-mostly.
export const validateQuery = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.query);
  if (!result.success) {
    return failure(res, 400, result.error.issues.map((i) => i.message).join(", "));
  }
  req.query = result.data;
  next();
};

export const validateBody = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return failure(res, 400, result.error.issues.map((i) => i.message).join(", "));
  }
  req.body = result.data;
  next();
};
