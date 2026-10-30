import "dotenv/config";

export const env = {
  port: process.env.PORT || 5002,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/catalogdb",
  nodeEnv: process.env.NODE_ENV || "development",
};
