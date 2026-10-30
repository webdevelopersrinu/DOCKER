import "dotenv/config";

export const env = {
  port: process.env.PORT || 5005,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/profiledb",
  jwtSecret: process.env.JWT_SECRET || "dev_secret_change_me",
  nodeEnv: process.env.NODE_ENV || "development",
};
