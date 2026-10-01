import app from "./app.js";
import { PORT } from "./config/env.js";

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown — important for Docker/K8s.
process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});
