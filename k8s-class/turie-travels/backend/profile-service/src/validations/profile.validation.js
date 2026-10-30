import { z } from "zod";

export const updateProfileSchema = z.object({
  preferences: z
    .object({
      preferredClass: z.string().optional(),
      seatPreference: z.string().optional(),
    })
    .optional(),
});

export const addPassengerSchema = z.object({
  name: z.string().min(1, "name is required"),
  age: z.number().int().positive("age must be a positive integer"),
  gender: z.enum(["M", "F", "O"]),
});
