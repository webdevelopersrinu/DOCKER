import axios from "axios";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/authStore";

// Single shared HTTP client — base URL empty on purpose, relative paths go through
// the Vite dev proxy locally and the K8s Ingress in production (see vite.config.js).
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      useAuthStore.getState().logout();
    }
    const message = err.response?.data?.message || "Something went wrong. Please try again.";
    toast.error(message);
    return Promise.reject(err);
  }
);
