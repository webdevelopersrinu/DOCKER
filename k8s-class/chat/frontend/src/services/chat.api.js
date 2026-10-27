import { post } from './httpClient.js';

export async function sendChat(messages) {
  const data = await post('/api/v1/chat', { messages });
  return data.data.reply;
}
