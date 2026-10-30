import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    channel: { type: String, enum: ["EMAIL", "SMS"], required: true },
    type: { type: String, required: true }, // e.g. BOOKING_CONFIRMED, PAYMENT_FAILED
    message: { type: String, required: true },
    status: { type: String, enum: ["SENT"], default: "SENT" },
  },
  { timestamps: true }
);

export const Notification = mongoose.model("Notification", notificationSchema);
