import app from "./app.js";
import { PORT } from "./config/env.js";

const server = app.listen(PORT, () => {
  console.log(`chat-backend listening on port ${PORT}`);
});

// graceful shutdown for Docker / Kubernetes
process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});
