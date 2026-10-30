import { api } from "../../../services/httpClient";

export const createBooking = (payload) =>
  api.post("/api/v1/bookings", payload).then((r) => r.data.data);

export const listBookings = () => api.get("/api/v1/bookings").then((r) => r.data.data);

export const getBooking = (id) => api.get(`/api/v1/bookings/${id}`).then((r) => r.data.data);

export const cancelBooking = (id) =>
  api.patch(`/api/v1/bookings/${id}/cancel`).then((r) => r.data.data);
