import "dotenv/config";

export const env = {
  port: process.env.PORT || 5003,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/bookingdb",
  jwtSecret: process.env.JWT_SECRET || "dev_secret_change_me",
  catalogServiceUrl: process.env.CATALOG_SERVICE_URL || "http://localhost:5002",
  paymentServiceUrl: process.env.PAYMENT_SERVICE_URL || "http://localhost:5004",
  notificationServiceUrl: process.env.NOTIFICATION_SERVICE_URL || "http://localhost:5006",
  nodeEnv: process.env.NODE_ENV || "development",
};
