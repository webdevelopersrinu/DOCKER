import { app } from "./app.js";
import { connectDb } from "./config/db.js";
import { env } from "./config/env.js";
import { logger } from "./utils/logger.js";

connectDb()
  .then(() => {
    const server = app.listen(env.port, () => logger.info(`listening on port ${env.port}`));

    process.on("SIGTERM", () => {
      logger.info("SIGTERM received, shutting down");
      server.close(() => process.exit(0));
    });
  })
  .catch((err) => {
    logger.error("failed to connect to MongoDB", { error: err.message });
    process.exit(1);
  });
