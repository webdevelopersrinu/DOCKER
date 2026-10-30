import { api } from "../../../services/httpClient";

export const getProfile = () => api.get("/api/v1/profile").then((r) => r.data.data);

export const updateProfile = (payload) =>
  api.put("/api/v1/profile", payload).then((r) => r.data.data);

export const addPassenger = (payload) =>
  api.post("/api/v1/profile/passengers", payload).then((r) => r.data.data);
