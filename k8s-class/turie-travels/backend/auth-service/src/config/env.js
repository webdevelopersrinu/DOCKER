import "dotenv/config";

export const env = {
  port: process.env.PORT || 5001,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/authdb",
  jwtSecret: process.env.JWT_SECRET || "dev_secret_change_me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  nodeEnv: process.env.NODE_ENV || "development",
};
