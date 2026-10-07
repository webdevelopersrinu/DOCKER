import { useTodos } from "../hooks/useTodos";
import { TodoForm } from "../features/todos/TodoForm";
import { TodoList } from "../features/todos/TodoList";
import { Shimmer } from "../components/Shimmer";
import { ErrorMessage } from "../components/ErrorMessage";

export default function TodosPage() {
  const { todos, isLoading, error, isSubmitting, fetchTodos, addTodo, toggleTodo, removeTodo } =
    useTodos();

  return (
    <main className="card">
      <h1>To-Do List</h1>
      <TodoForm onAdd={addTodo} isSubmitting={isSubmitting} />

      {isLoading ? (
        <Shimmer count={4} />
      ) : error ? (
        <ErrorMessage message="Could not load tasks." onRetry={fetchTodos} />
      ) : (
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={removeTodo} />
      )}
    </main>
  );
}
