import { useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { useTrip } from "../features/search/hooks/useTripSearch";
import { useCreateBooking } from "../features/booking/hooks/useCreateBooking";
import { PassengerForm } from "../features/booking/components/PassengerForm";
import { Shimmer } from "../components/Shimmer";
import { EmptyState } from "../components/EmptyState";

export default function BookingPage() {
  const { tripId } = useParams();
  const [searchParams] = useSearchParams();
  const classType = searchParams.get("classType") || undefined;
  const navigate = useNavigate();

  const { data: trip, isLoading, isError } = useTrip(tripId);
  const createBooking = useCreateBooking();
  const [declineMessage, setDeclineMessage] = useState(null);

  async function handleSubmit({ passengers, paymentMethod }) {
    setDeclineMessage(null);
    try {
      await createBooking.mutateAsync({ tripId, classType, passengers, paymentMethod });
      navigate("/bookings");
    } catch (err) {
      const booking = err.response?.data?.data?.booking;
      const message = err.response?.data?.message || "Booking could not be completed.";
      if (booking) {
        setDeclineMessage(message);
      }
    }
  }

  if (isLoading) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <Shimmer height="h-28" />
        <Shimmer count={3} height="h-16" />
      </div>
    );
  }

  if (isError || !trip) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <EmptyState title="Trip not found" description="This trip may no longer be available. Go back and search again." />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="mb-6 rounded-xl border border-border bg-surface p-5">
        <p className="font-semibold text-ink">
          {trip.operatorName} <span className="text-ink-soft">· {trip.code}</span>
        </p>
        <p className="text-sm text-ink-soft">
          {trip.departure} → {trip.arrival}
        </p>
        <p className="mt-1 text-lg font-bold text-ink">₹{trip.fare}</p>
      </div>

      {declineMessage && (
        <div className="mb-4 flex items-start gap-2 rounded-lg bg-error-soft p-4 text-sm text-error">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{declineMessage} Please review the details and try again.</p>
        </div>
      )}

      <PassengerForm onSubmit={handleSubmit} isSubmitting={createBooking.isPending} />
    </div>
  );
}
