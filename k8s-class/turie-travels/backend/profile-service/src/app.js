import express from "express";
import cors from "cors";
import helmet from "helmet";
import profileRoutes from "./routes/profile.routes.js";
import { notFound, errorHandler } from "./middlewares/error.js";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok", service: "profile-service" }));
app.use("/api/v1/profile", profileRoutes);

app.use(notFound);
app.use(errorHandler);
