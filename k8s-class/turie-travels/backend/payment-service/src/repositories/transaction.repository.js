import { Transaction } from "../models/transaction.model.js";

export const transactionRepository = {
  create: (data) => Transaction.create(data),
  findLatestByBooking: (bookingId) => Transaction.findOne({ bookingId }).sort({ createdAt: -1 }),
};
