import { Button } from "../../components/Button";

export function TodoItem({ todo, onToggle, onDelete }) {
  function handleDelete() {
    if (window.confirm(`Delete "${todo.title}"?`)) {
      onDelete(todo.id);
    }
  }

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        <span className="todo-title">{todo.title}</span>
      </label>
      <Button variant="danger" onClick={handleDelete} aria-label={`Delete ${todo.title}`}>
        Delete
      </Button>
    </li>
  );
}
