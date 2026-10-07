import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";
import { logger } from "./logger.js";

let mongod;

export async function connectDB() {
  // Real MongoDB (Docker/production) when MONGO_URI is set.
  if (MONGO_URI) {
    await mongoose.connect(MONGO_URI);
    logger.info(`MongoDB connected at ${MONGO_URI}`);
    return;
  }

  // Local dev fallback: temporary in-memory MongoDB, discarded on exit.
  // Dynamic import keeps mongodb-memory-server out of the production image.
  const { MongoMemoryServer } = await import("mongodb-memory-server");
  mongod = await MongoMemoryServer.create();
  await mongoose.connect(mongod.getUri("todos"));
  logger.info(`MongoDB (in-memory) connected at ${mongod.getUri()}`);
}

export async function disconnectDB() {
  await mongoose.disconnect();
  if (mongod) await mongod.stop();
}
