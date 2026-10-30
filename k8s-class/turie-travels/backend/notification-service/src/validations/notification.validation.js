import { z } from "zod";

export const sendNotificationSchema = z.object({
  userId: z.string().min(1, "userId is required"),
  channel: z.enum(["EMAIL", "SMS"]),
  type: z.string().min(1, "type is required"),
  message: z.string().min(1, "message is required"),
});
