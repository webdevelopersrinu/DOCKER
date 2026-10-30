import * as paymentService from "../services/payment.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { success } from "../utils/apiResponse.js";

export const charge = asyncHandler(async (req, res) => {
  const transaction = await paymentService.charge(req.body);
  success(res, transaction, transaction.status === "SUCCESS" ? 201 : 402);
});

export const getByBooking = asyncHandler(async (req, res) => {
  const transaction = await paymentService.getByBooking(req.params.bookingId);
  success(res, transaction);
});
