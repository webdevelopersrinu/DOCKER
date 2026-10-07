import * as todoService from "../services/todo.service.js";

export async function listTodos(req, res) {
  const { page, limit } = req.query;
  const result = await todoService.list({
    page: Number(page) || 1,
    limit: Number(limit) || 20,
  });
  res.status(200).json({ success: true, ...result });
}

export async function createTodo(req, res) {
  const todo = await todoService.create(req.body);
  res.status(201).json({ success: true, data: todo });
}

export async function updateTodo(req, res) {
  const todo = await todoService.update(req.params.id, req.body);
  res.status(200).json({ success: true, data: todo });
}

export async function deleteTodo(req, res) {
  await todoService.remove(req.params.id);
  res.status(204).end();
}
