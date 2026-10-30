import crypto from "crypto";
import { transactionRepository } from "../repositories/transaction.repository.js";
import { ApiError } from "../utils/apiError.js";

// Sandbox gateway rule, deterministic so outcomes are reproducible: any amount that is an exact
// multiple of 1300 "declines" (simulates a bank decline), everything else succeeds.
function simulateOutcome(amount) {
  return amount % 1300 === 0 ? "FAILED" : "SUCCESS";
}

export async function charge({ bookingId, userId, amount, method }) {
  const status = simulateOutcome(amount);
  const txnId = `TXN-${Date.now()}-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;
  const transaction = await transactionRepository.create({ bookingId, userId, amount, method, status, txnId });
  return transaction;
}

export async function getByBooking(bookingId) {
  const transaction = await transactionRepository.findLatestByBooking(bookingId);
  if (!transaction) throw new ApiError(404, "Transaction not found");
  return transaction;
}
