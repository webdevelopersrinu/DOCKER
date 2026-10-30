import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDb() {
  await mongoose.connect(env.mongoUri);
  console.log(`[booking-service] connected to MongoDB: ${env.mongoUri}`);
}
