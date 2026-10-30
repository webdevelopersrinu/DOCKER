import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchX } from "lucide-react";
import { SearchWidget } from "../features/search/components/SearchWidget";
import { TripCard } from "../features/search/components/TripCard";
import { useTripSearch } from "../features/search/hooks/useTripSearch";
import { TripCardShimmer } from "../components/Shimmer";
import { EmptyState } from "../components/EmptyState";
import { Button } from "../components/Button";

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "buses";
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const hasQuery = Boolean(searchParams.get("from") && searchParams.get("to"));

  const { data, isLoading, isError, refetch } = useTripSearch(mode, from, to);

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <SearchWidget
        mode={mode}
        from={from}
        to={to}
        onModeChange={(m) => updateParam("mode", m)}
        onFromChange={(v) => updateParam("from", v)}
        onToChange={(v) => updateParam("to", v)}
        onSubmit={() => {}}
        compact
      />

      <div className="mt-6">
        {!hasQuery && (
          <EmptyState
            icon={SearchX}
            title="Start your search"
            description="Use the search widget above to find flights, trains or buses."
          />
        )}

        {hasQuery && isLoading && <TripCardShimmer count={4} />}

        {hasQuery && isError && (
          <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-surface px-6 py-14 text-center">
            <p className="font-semibold text-ink">Something went wrong loading results</p>
            <Button onClick={() => refetch()}>Retry</Button>
          </div>
        )}

        {hasQuery && !isLoading && !isError && data?.length === 0 && (
          <EmptyState
            icon={SearchX}
            title="No trips found"
            description="Try different cities or dates — availability changes throughout the day."
          />
        )}

        {hasQuery && !isLoading && !isError && data?.length > 0 && (
          <div className="flex flex-col gap-4">
            {data.map((trip) => (
              <TripCard key={trip._id} trip={trip} onSelect={(t) => navigate(`/book/${t._id}?mode=${mode}`)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
