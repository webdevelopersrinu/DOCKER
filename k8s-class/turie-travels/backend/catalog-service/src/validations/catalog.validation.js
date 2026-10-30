import { z } from "zod";

export const placesSearchSchema = z.object({
  q: z.string().optional(),
});

export const tripSearchSchema = z.object({
  from: z.string().min(1, "from is required"),
  to: z.string().min(1, "to is required"),
});

export const seatAdjustSchema = z.object({
  delta: z.number().int().refine((v) => v !== 0, "delta must not be zero"),
  classType: z.string().optional(),
});
