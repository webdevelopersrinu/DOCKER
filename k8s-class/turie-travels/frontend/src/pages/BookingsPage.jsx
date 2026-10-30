import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plane, TrainFront, Bus, Ticket, CircleCheck, Clock, CircleX, Ban } from "lucide-react";
import { useBookings, useCancelBooking } from "../features/booking/hooks/useBookings";
import { TripCardShimmer } from "../components/Shimmer";
import { EmptyState } from "../components/EmptyState";
import { Button } from "../components/Button";

const MODE_ICON = { flight: Plane, train: TrainFront, bus: Bus };

const STATUS_STYLE = {
  CONFIRMED: { className: "bg-success-soft text-success", Icon: CircleCheck },
  PENDING: { className: "bg-warning-soft text-warning", Icon: Clock },
  FAILED: { className: "bg-error-soft text-error", Icon: CircleX },
  CANCELLED: { className: "bg-ink-100 text-ink-soft", Icon: Ban },
};

function StatusBadge({ status }) {
  const { className, Icon } = STATUS_STYLE[status] || STATUS_STYLE.PENDING;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}>
      <Icon className="h-3.5 w-3.5" aria-hidden="true" /> {status}
    </span>
  );
}

function BookingCard({ booking }) {
  const [confirming, setConfirming] = useState(false);
  const cancelBooking = useCancelBooking();
  const trip = booking.tripSnapshot || {};
  const ModeIcon = MODE_ICON[booking.mode] || Plane;

  function handleCancel() {
    cancelBooking.mutate(booking._id, { onSettled: () => setConfirming(false) });
  }

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-accent" aria-hidden="true">
          <ModeIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-semibold text-ink">
            {trip.from} → {trip.to}
          </p>
          <p className="text-sm text-ink-soft">₹{booking.fareTotal}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <StatusBadge status={booking.status} />
        {booking.status === "CONFIRMED" &&
          (confirming ? (
            <div className="flex items-center gap-2">
              <Button variant="danger" onClick={handleCancel} disabled={cancelBooking.isPending}>
                Confirm cancel?
              </Button>
              <Button variant="ghost" onClick={() => setConfirming(false)} disabled={cancelBooking.isPending}>
                Keep it
              </Button>
            </div>
          ) : (
            <Button variant="secondary" onClick={() => setConfirming(true)}>
              Cancel
            </Button>
          ))}
      </div>
    </div>
  );
}

export default function BookingsPage() {
  const navigate = useNavigate();
  const { data: bookings, isLoading, isError } = useBookings();

  if (isLoading) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <TripCardShimmer />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <EmptyState title="Couldn't load bookings" description="Something went wrong. Please try again." />
      </div>
    );
  }

  if (!bookings?.length) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <EmptyState
          icon={Ticket}
          title="No bookings yet"
          description="Your confirmed trips will show up here once you book one."
          action={<Button onClick={() => navigate("/")}>Find a trip</Button>}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      {bookings.map((booking) => (
        <BookingCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
}
