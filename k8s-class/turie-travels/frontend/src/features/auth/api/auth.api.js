import { api } from "../../../services/httpClient";

export const signup = (payload) => api.post("/api/v1/auth/signup", payload).then((r) => r.data.data);

export const login = (payload) => api.post("/api/v1/auth/login", payload).then((r) => r.data.data);

export const sendOtp = (phone) => api.post("/api/v1/auth/otp/send", { phone }).then((r) => r.data.data);

export const verifyOtp = (payload) => api.post("/api/v1/auth/otp/verify", payload).then((r) => r.data.data);

export const fetchMe = () => api.get("/api/v1/auth/me").then((r) => r.data.data);
