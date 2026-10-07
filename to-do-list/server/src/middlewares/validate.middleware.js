import { ApiError } from "../utils/ApiError.js";

// validate({ body: schema, params: schema })
export function validate(schemas) {
  return (req, _res, next) => {
    for (const key of ["body", "params", "query"]) {
      if (!schemas[key]) continue;
      const result = schemas[key].safeParse(req[key]);
      if (!result.success) {
        return next(new ApiError(400, result.error.issues[0].message));
      }
      Object.assign(req[key], result.data);
    }
    next();
  };
}
