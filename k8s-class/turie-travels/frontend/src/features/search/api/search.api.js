import { api } from "../../../services/httpClient";

export const searchPlaces = (q) =>
  api.get("/api/v1/places", { params: { q } }).then((r) => r.data.data);

export const searchTrips = (mode, from, to) =>
  api.get(`/api/v1/${mode}/search`, { params: { from, to } }).then((r) => r.data.data);

export const getTripById = (id) => api.get(`/api/v1/trips/${id}`).then((r) => r.data.data);
