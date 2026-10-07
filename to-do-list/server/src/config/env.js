import "dotenv/config";

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI || "";
export const NODE_ENV = process.env.NODE_ENV || "development";
export const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";
export const IS_PROD = NODE_ENV === "production";
