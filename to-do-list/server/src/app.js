import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import v1Routes from "./routes/v1/index.js";
import { notFoundHandler, errorHandler } from "./middlewares/error.middleware.js";
import { CLIENT_ORIGIN, IS_PROD } from "./config/env.js";

export const app = express();

app.use(helmet());
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());
app.use(morgan(IS_PROD ? "combined" : "dev"));

app.get("/health", (_req, res) => res.json({ success: true, status: "ok" }));

app.use("/api/v1", v1Routes);

app.use(notFoundHandler);
app.use(errorHandler);
