// Minimal structured logger — swap for pino/winston without touching callers.
function log(level, message, meta) {
  const entry = { level, time: new Date().toISOString(), message, ...meta };
  const line = JSON.stringify(entry);
  level === "error" ? console.error(line) : console.log(line);
}

export const logger = {
  info: (message, meta) => log("info", message, meta),
  warn: (message, meta) => log("warn", message, meta),
  error: (message, meta) => log("error", message, meta),
};
