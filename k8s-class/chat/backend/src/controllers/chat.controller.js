import * as geminiService from "../services/gemini.service.js";

export async function chat(req, res) {
  const reply = await geminiService.generateReply(req.body.messages);
  res.status(200).json({ success: true, data: { reply } });
}
