import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true },
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ["UPI", "CARD", "NETBANKING"], required: true },
    status: { type: String, enum: ["SUCCESS", "FAILED"], required: true },
    txnId: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Transaction = mongoose.model("Transaction", transactionSchema);
