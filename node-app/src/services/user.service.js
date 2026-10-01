import * as userRepo from "../repositories/user.repository.js";

export function list({ page, limit }) {
  const total = userRepo.count();
  const data = userRepo.findAll({ skip: (page - 1) * limit, limit });
  return { data, page, limit, total, totalPages: Math.ceil(total / limit) };
}
