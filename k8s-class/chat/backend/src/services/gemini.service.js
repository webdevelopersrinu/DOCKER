import { GEMINI_API_KEY, GEMINI_MODEL } from "../config/env.js";

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const TIMEOUT_MS = 30000;

// messages: [{ role: "user" | "assistant", content: string }]
export async function generateReply(messages) {
  if (!GEMINI_API_KEY) {
    const err = new Error("GEMINI_API_KEY is not configured on the server");
    err.status = 503;
    throw err;
  }

  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY,
      },
      body: JSON.stringify({ contents }),
      signal: controller.signal,
    });

    const body = await res.json();

    if (!res.ok) {
      const err = new Error(body?.error?.message || "Gemini API request failed");
      err.status = res.status === 429 ? 429 : 502;
      throw err;
    }

    const reply = body?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ?? "";
    if (!reply) {
      const err = new Error("Gemini returned an empty response");
      err.status = 502;
      throw err;
    }
    return reply;
  } catch (e) {
    if (e.name === "AbortError") {
      const err = new Error("Gemini API request timed out");
      err.status = 504;
      throw err;
    }
    throw e;
  } finally {
    clearTimeout(timeout);
  }
}
