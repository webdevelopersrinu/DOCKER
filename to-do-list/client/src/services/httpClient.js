import axios from "axios";
import { showToast } from "../utils/toast";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Errors handled (and toasted) in one place — components don't double-toast.
api.interceptors.response.use(
  (res) => res,
  (err) => {
    showToast.error(err.response?.data?.message || "Something went wrong");
    return Promise.reject(err);
  }
);
