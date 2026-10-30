function log(level, msg, meta = {}) {
  const line = { level, msg, time: new Date().toISOString(), service: "notification-service", ...meta };
  (level === "error" ? console.error : console.log)(JSON.stringify(line));
}

export const logger = {
  info: (msg, meta) => log("info", msg, meta),
  error: (msg, meta) => log("error", msg, meta),
};
