import { z } from "zod";

export const createBookingSchema = z.object({
  tripId: z.string().min(1),
  classType: z.string().optional(),
  passengers: z
    .array(
      z.object({
        name: z.string().min(1),
        age: z.number().int().positive(),
        gender: z.enum(["M", "F", "O"]),
      })
    )
    .min(1),
  paymentMethod: z.enum(["UPI", "CARD", "NETBANKING"]),
});
