import { forwardRef } from "react";

// Uncontrolled-friendly: just a styled native input. Forwarding the ref lets
// react-hook-form (or a plain form ref) register it without forcing value/onChange.
export const Input = forwardRef(function Input({ label, error, id, className = "", ...rest }, ref) {
  const inputId = id || rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-ink">
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`min-h-11 rounded-lg border bg-surface px-3.5 text-sm text-ink placeholder:text-ink-soft
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
          ${error ? "border-error" : "border-border"} ${className}`}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
});
