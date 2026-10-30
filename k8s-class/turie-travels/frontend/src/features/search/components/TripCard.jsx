import { Plane, TrainFront, Bus } from "lucide-react";
import { Button } from "../../../components/Button";

const MODE_ICON = { flight: Plane, train: TrainFront, bus: Bus };

export function TripCard({ trip, onSelect }) {
  const lowestFare = trip.classes?.length ? Math.min(...trip.classes.map((c) => c.fare)) : trip.fare;
  const ModeIcon = MODE_ICON[trip.mode];

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-accent" aria-hidden="true">
          <ModeIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-semibold text-ink">
            {trip.operatorName} <span className="text-ink-soft">· {trip.code}</span>
          </p>
          <p className="text-sm text-ink-soft">
            {trip.departure} → {trip.arrival} · {Math.floor(trip.durationMins / 60)}h {trip.durationMins % 60}m
          </p>
          <p className="text-sm text-ink-soft">
            {trip.seatsAvailable > 0 ? (
              <span>{trip.seatsAvailable} seats left</span>
            ) : (
              <span className="text-error">Sold out</span>
            )}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <p className="text-lg font-bold text-ink">
          ₹{lowestFare}
          {trip.classes?.length > 0 && <span className="text-xs font-normal text-ink-soft"> onwards</span>}
        </p>
        <Button onClick={() => onSelect(trip)} disabled={trip.seatsAvailable === 0}>
          Select
        </Button>
      </div>
    </div>
  );
}
