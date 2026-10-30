export function Shimmer({ count = 1, height = "h-20", className = "" }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`animate-pulse rounded-lg bg-ink-100 ${height} mb-3 ${className}`} />
      ))}
    </>
  );
}

export function TripCardShimmer({ count = 3 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="mb-4 flex animate-pulse items-center gap-4 rounded-xl border border-border bg-surface p-5">
          <div className="h-10 w-10 shrink-0 rounded-full bg-ink-100" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-1/3 rounded bg-ink-100" />
            <div className="h-3 w-1/2 rounded bg-ink-100" />
          </div>
          <div className="h-9 w-24 rounded-lg bg-ink-100" />
        </div>
      ))}
    </>
  );
}
