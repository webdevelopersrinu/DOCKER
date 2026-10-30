import { z } from "zod";

export const chargeSchema = z.object({
  bookingId: z.string().min(1),
  userId: z.string().min(1),
  amount: z.number().positive(),
  method: z.enum(["UPI", "CARD", "NETBANKING"]),
});
