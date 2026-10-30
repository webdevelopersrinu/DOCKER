import { Plane, TrainFront, Bus } from "lucide-react";
import { PlaceAutocomplete } from "./PlaceAutocomplete";
import { Button } from "../../../components/Button";

const MODES = [
  { key: "flights", label: "Flights", Icon: Plane },
  { key: "trains", label: "Trains", Icon: TrainFront },
  { key: "buses", label: "Buses", Icon: Bus },
];

export function SearchWidget({ mode, from, to, onModeChange, onFromChange, onToChange, onSubmit, compact = false }) {
  return (
    <div className={`rounded-2xl border border-border bg-surface-elevated shadow-[0_12px_32px_rgba(16,18,23,0.08)] ${compact ? "p-4" : "p-6"}`}>
      <div role="tablist" aria-label="Transport mode" className="mb-4 flex gap-1 rounded-lg bg-background p-1">
        {MODES.map((m) => (
          <button
            key={m.key}
            role="tab"
            type="button"
            aria-selected={mode === m.key}
            onClick={() => onModeChange(m.key)}
            className={`flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-md text-sm font-semibold transition-colors
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
              ${mode === m.key ? "bg-surface text-accent shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "text-ink-soft hover:text-ink"}`}
          >
            <m.Icon className="h-4 w-4" aria-hidden="true" /> {m.label}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto] sm:items-end"
      >
        <PlaceAutocomplete label="From" value={from} onChange={onFromChange} placeholder="Hyderabad" />
        <div className="hidden items-center justify-center pb-3 text-ink-soft sm:flex" aria-hidden="true">
          →
        </div>
        <PlaceAutocomplete label="To" value={to} onChange={onToChange} placeholder="Bangalore" />
        <Button type="submit" disabled={!from.trim() || !to.trim()} className="w-full sm:w-auto">
          Search
        </Button>
      </form>
    </div>
  );
}
