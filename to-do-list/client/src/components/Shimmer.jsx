export function Shimmer({ count = 1, height = 56, className = "" }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`shimmer ${className}`} style={{ height }} />
      ))}
    </>
  );
}
