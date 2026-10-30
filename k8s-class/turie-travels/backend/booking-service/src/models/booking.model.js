import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    tripId: { type: String, required: true },
    mode: { type: String, enum: ["flight", "train", "bus"], required: true },
    classType: { type: String }, // only meaningful for trains
    tripSnapshot: { type: mongoose.Schema.Types.Mixed, required: true }, // copy of trip at booking time
    passengers: [
      {
        name: String,
        age: Number,
        gender: { type: String, enum: ["M", "F", "O"] },
      },
    ],
    fareTotal: { type: Number, required: true },
    status: { type: String, enum: ["PENDING", "CONFIRMED", "FAILED", "CANCELLED"], default: "PENDING" },
    paymentTxnId: { type: String },
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
