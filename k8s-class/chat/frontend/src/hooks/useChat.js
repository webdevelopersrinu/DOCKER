import { useState, useCallback } from 'react';
import { sendChat } from '../services/chat.api.js';

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(
    async (text) => {
      const next = [...messages, { role: 'user', content: text }];
      setMessages(next);
      setIsLoading(true);
      setError(null);
      try {
        const reply = await sendChat(next);
        setMessages([...next, { role: 'assistant', content: reply }]);
      } catch (err) {
        setError(err.message || 'Something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  const dismissError = useCallback(() => setError(null), []);

  return { messages, isLoading, error, sendMessage, dismissError };
}
