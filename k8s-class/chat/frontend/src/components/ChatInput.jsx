import { useEffect, useRef } from 'react';

export default function ChatInput({ value, onChange, onSend, isLoading }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const submit = () => {
    const text = value.trim();
    if (!text || isLoading) return;
    onChange('');
    onSend(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="input-area">
      <textarea
        ref={textareaRef}
        className="chat-textarea"
        rows={1}
        placeholder="Type a message..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="send-button"
        onClick={submit}
        disabled={isLoading}
        aria-label="Send message"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </button>
    </div>
  );
}
