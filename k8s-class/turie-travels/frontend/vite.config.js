import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Dev-time proxy mirrors the production K8s Ingress path routing (see
// k8s-class/turie-travels/backend/README.md) — the frontend always calls a
// single relative /api/v1/... origin, never a per-service port directly.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api/v1/auth": "http://localhost:5001",
      "/api/v1/places": "http://localhost:5002",
      "/api/v1/flights": "http://localhost:5002",
      "/api/v1/trains": "http://localhost:5002",
      "/api/v1/buses": "http://localhost:5002",
      "/api/v1/trips": "http://localhost:5002",
      "/api/v1/bookings": "http://localhost:5003",
      "/api/v1/profile": "http://localhost:5005",
      "/api/v1/notifications": "http://localhost:5006",
    },
  },
});
