import * as todoRepo from "../repositories/todo.repository.js";
import { ApiError } from "../utils/ApiError.js";

export async function list({ page = 1, limit = 20 }) {
  const [todos, total] = await Promise.all([
    todoRepo.findAll({ page, limit }),
    todoRepo.count(),
  ]);
  return { data: todos, page, limit, total };
}

export async function create(data) {
  return todoRepo.create(data);
}

export async function update(id, data) {
  const todo = await todoRepo.updateById(id, data);
  if (!todo) throw new ApiError(404, "Todo not found");
  return todo;
}

export async function remove(id) {
  const todo = await todoRepo.deleteById(id);
  if (!todo) throw new ApiError(404, "Todo not found");
}
