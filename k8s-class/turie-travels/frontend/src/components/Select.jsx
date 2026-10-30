import { forwardRef } from "react";

export const Select = forwardRef(function Select({ label, error, id, className = "", children, ...rest }, ref) {
  const selectId = id || rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-ink">
          {label}
        </label>
      )}
      <select
        id={selectId}
        ref={ref}
        aria-invalid={!!error || undefined}
        className={`min-h-11 rounded-lg border bg-surface px-3.5 text-sm text-ink
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
          ${error ? "border-error" : "border-border"} ${className}`}
        {...rest}
      >
        {children}
      </select>
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
});
