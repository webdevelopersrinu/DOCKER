const VARIANTS = {
  primary: "bg-accent text-on-accent hover:bg-accent-strong active:scale-[0.98]",
  secondary: "bg-surface text-ink border border-border hover:bg-background active:scale-[0.98]",
  ghost: "bg-transparent text-ink hover:bg-background active:scale-[0.98]",
  danger: "bg-error text-on-accent hover:bg-red-700 active:scale-[0.98]",
};

export function Button({ variant = "primary", loading = false, disabled, className = "", children, ...rest }) {
  return (
    <button
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold
        transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
        disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100
        ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
      )}
      {children}
    </button>
  );
}
