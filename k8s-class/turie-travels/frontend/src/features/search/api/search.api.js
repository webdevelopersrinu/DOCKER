import { api } from "../../../services/httpClient";

// Everything catalog-service owns lives under one shared prefix (see
// backend/catalog-service/src/app.js) so the Ingress only needs one rule
// for this whole service, no matter how many endpoints it grows.
const CATALOG = "/api/v1/catalog";

export const searchPlaces = (q) =>
  api.get(`${CATALOG}/places`, { params: { q } }).then((r) => r.data.data);

export const searchTrips = (mode, from, to) =>
  api.get(`${CATALOG}/${mode}/search`, { params: { from, to } }).then((r) => r.data.data);

export const getTripById = (id) => api.get(`${CATALOG}/trips/${id}`).then((r) => r.data.data);
