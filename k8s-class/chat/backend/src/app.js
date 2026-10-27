import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.routes.js";
import { notFound, errorHandler } from "./middlewares/error.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/healthz", (req, res) => res.status(200).json({ success: true, data: { status: "ok" } }));
app.use("/api/v1", chatRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
