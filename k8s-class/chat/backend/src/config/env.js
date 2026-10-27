import "dotenv/config";

export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
export const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
