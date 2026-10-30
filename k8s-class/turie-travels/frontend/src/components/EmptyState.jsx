import { Compass } from "lucide-react";

export function EmptyState({ icon: Icon = Compass, title, description, action }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-surface px-6 py-14 text-center">
      <Icon className="h-8 w-8 text-ink-soft" aria-hidden="true" />
      <p className="font-semibold text-ink">{title}</p>
      {description && <p className="max-w-sm text-sm text-ink-soft">{description}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}
