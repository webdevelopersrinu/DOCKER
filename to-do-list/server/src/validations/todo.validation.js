import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200),
});

export const updateTodoSchema = z
  .object({
    title: z.string().trim().min(1, "Title cannot be empty").max(200).optional(),
    completed: z.boolean().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required",
  });

export const idParamSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid todo id"),
});
