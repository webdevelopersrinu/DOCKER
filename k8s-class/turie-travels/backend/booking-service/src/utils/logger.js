// Minimal structured logger — no Mongo/console spam, just JSON lines a real
// log shipper (CloudWatch, Loki, etc.) can parse. Swap for pino/winston if this
// ever needs log levels/transports beyond stdout.
function log(level, msg, meta = {}) {
  const line = { level, msg, time: new Date().toISOString(), service: "booking-service", ...meta };
  (level === "error" ? console.error : console.log)(JSON.stringify(line));
}

export const logger = {
  info: (msg, meta) => log("info", msg, meta),
  error: (msg, meta) => log("error", msg, meta),
};
