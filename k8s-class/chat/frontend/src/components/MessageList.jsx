import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble.jsx';
import Shimmer from './Shimmer.jsx';

const EXAMPLE_PROMPTS = [
  'Explain Kubernetes in simple terms',
  'Write a haiku about the ocean',
  'Give me ideas for a weekend project',
];

export default function MessageList({ messages, isLoading, onPromptClick }) {
  const listRef = useRef(null);

  // scroll only the list itself — scrollIntoView also scrolls the page and shifts the card
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  if (messages.length === 0 && !isLoading) {
    return (
      <div className="message-list">
        <div className="welcome-card">
          <h2>Ask me anything</h2>
          <p>Start a conversation, or try one of these:</p>
          <div className="prompt-chips">
            {EXAMPLE_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                className="prompt-chip"
                onClick={() => onPromptClick(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="message-list" ref={listRef}>
      {messages.map((message, i) => (
        <MessageBubble key={i} message={message} />
      ))}
      {isLoading && <Shimmer />}
    </div>
  );
}
