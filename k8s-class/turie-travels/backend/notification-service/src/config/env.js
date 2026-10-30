import "dotenv/config";

export const env = {
  port: process.env.PORT || 5006,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/notificationdb",
  nodeEnv: process.env.NODE_ENV || "development",
};
