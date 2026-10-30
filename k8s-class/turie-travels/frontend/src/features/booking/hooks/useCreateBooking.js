import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBooking } from "../api/booking.api";

// The global httpClient interceptor already toasts the generic error message
// on any failed request — don't double-toast here. Re-throw on failure so the
// page can read err.response?.data?.data?.booking for the decline/seat-conflict detail.
export function useCreateBooking() {
  return useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      toast.success("Booking confirmed");
    },
  });
}
