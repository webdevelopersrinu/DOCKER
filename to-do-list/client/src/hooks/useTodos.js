import { useCallback, useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/todo.api";
import { showToast } from "../utils/toast";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchTodos = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getTodos();
      setTodos(res.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  async function addTodo(title) {
    setIsSubmitting(true);
    try {
      const res = await createTodo({ title });
      setTodos((prev) => [res.data.data, ...prev]);
      showToast.success("Task added");
      return true;
    } catch {
      return false; // already toasted by the interceptor
    } finally {
      setIsSubmitting(false);
    }
  }

  async function toggleTodo(todo) {
    try {
      const res = await updateTodo(todo.id, { completed: !todo.completed });
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? res.data.data : t)));
    } catch {
      // already toasted by the interceptor
    }
  }

  async function removeTodo(id) {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
      showToast.success("Task deleted");
    } catch {
      // already toasted by the interceptor
    }
  }

  return { todos, isLoading, error, isSubmitting, fetchTodos, addTodo, toggleTodo, removeTodo };
}
