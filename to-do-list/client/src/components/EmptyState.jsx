export function EmptyState({ title, hint }) {
  return (
    <div className="empty-state">
      <p className="empty-state-title">{title}</p>
      {hint && <p className="empty-state-hint">{hint}</p>}
    </div>
  );
}
