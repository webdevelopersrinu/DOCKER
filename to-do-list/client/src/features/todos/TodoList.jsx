import { TodoItem } from "./TodoItem";
import { EmptyState } from "../../components/EmptyState";

export function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <EmptyState title="No tasks yet" hint="Add your first task above." />;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
