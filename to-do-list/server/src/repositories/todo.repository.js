import { Todo } from "../models/todo.model.js";

export function findAll({ page, limit }) {
  return Todo.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
}

export function count() {
  return Todo.countDocuments();
}

export function findById(id) {
  return Todo.findById(id);
}

export function create(data) {
  return Todo.create(data);
}

export function updateById(id, data) {
  return Todo.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

export function deleteById(id) {
  return Todo.findByIdAndDelete(id);
}
