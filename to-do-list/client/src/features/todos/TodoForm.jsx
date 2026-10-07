import { useRef } from "react";
import { Button } from "../../components/Button";

// Uncontrolled input + native validation: no re-render per keystroke.
// Enter submits via native <form onSubmit>.
export function TodoForm({ onAdd, isSubmitting }) {
  const inputRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const title = new FormData(e.target).get("title").trim();
    if (!title) return;
    const ok = await onAdd(title);
    if (ok) {
      e.target.reset();
      inputRef.current?.focus();
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        name="title"
        type="text"
        placeholder="What needs to be done?"
        aria-label="New task title"
        maxLength={200}
        required
        autoFocus
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add"}
      </Button>
    </form>
  );
}
