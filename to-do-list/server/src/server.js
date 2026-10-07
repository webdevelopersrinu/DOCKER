import { app } from "./app.js";
import { connectDB, disconnectDB } from "./config/db.js";
import { PORT } from "./config/env.js";
import { logger } from "./config/logger.js";

await connectDB();

const server = app.listen(PORT, () => {
  logger.info(`Server running at http://localhost:${PORT}`);
});

function shutdown(signal) {
  logger.info(`${signal} received, shutting down gracefully`);
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
