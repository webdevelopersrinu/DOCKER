import "dotenv/config";

export const env = {
  port: process.env.PORT || 5004,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/paymentdb",
  nodeEnv: process.env.NODE_ENV || "development",
};
