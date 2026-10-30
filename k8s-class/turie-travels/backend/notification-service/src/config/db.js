import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDb() {
  await mongoose.connect(env.mongoUri);
  console.log(`[notification-service] connected to MongoDB: ${env.mongoUri}`);
}
