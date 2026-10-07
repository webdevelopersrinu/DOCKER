import { api } from "./httpClient";

export const getTodos = () => api.get("/api/v1/todos");
export const createTodo = (data) => api.post("/api/v1/todos", data);
export const updateTodo = (id, data) => api.patch(`/api/v1/todos/${id}`, data);
export const deleteTodo = (id) => api.delete(`/api/v1/todos/${id}`);
