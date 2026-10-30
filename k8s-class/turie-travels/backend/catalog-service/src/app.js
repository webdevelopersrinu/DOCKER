import express from "express";
import cors from "cors";
import helmet from "helmet";
import catalogRoutes from "./routes/catalog.routes.js";
import { notFound, errorHandler } from "./middlewares/error.js";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok", service: "catalog-service" }));
// Everything this service owns lives under one shared prefix so the Ingress
// only ever needs a single rule for this service, no matter how many
// endpoints it grows (places/flights/trains/buses/trips today, more later).
app.use("/api/v1/catalog", catalogRoutes);

app.use(notFound);
app.use(errorHandler);
