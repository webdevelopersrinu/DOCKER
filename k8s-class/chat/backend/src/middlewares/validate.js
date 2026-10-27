const MAX_MESSAGES = 50;
const MAX_CONTENT_LENGTH = 8000;

// ponytail: hand-rolled validation instead of a schema library — one endpoint, one shape
export function validateChat(req, res, next) {
  const { messages } = req.body || {};

  const bad = (message) => res.status(400).json({ success: false, message });

  if (!Array.isArray(messages) || messages.length === 0) {
    return bad("'messages' must be a non-empty array");
  }
  if (messages.length > MAX_MESSAGES) {
    return bad(`'messages' cannot exceed ${MAX_MESSAGES} items`);
  }
  for (const m of messages) {
    if (!m || (m.role !== "user" && m.role !== "assistant")) {
      return bad("each message needs role 'user' or 'assistant'");
    }
    if (typeof m.content !== "string" || !m.content.trim()) {
      return bad("each message needs non-empty string 'content'");
    }
    if (m.content.length > MAX_CONTENT_LENGTH) {
      return bad(`message content cannot exceed ${MAX_CONTENT_LENGTH} characters`);
    }
  }
  next();
}
