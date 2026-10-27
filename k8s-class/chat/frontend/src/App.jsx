import { useState } from 'react';
import MessageList from './components/MessageList.jsx';
import ChatInput from './components/ChatInput.jsx';
import useChat from './hooks/useChat.js';

export default function App() {
  const { messages, isLoading, error, sendMessage, dismissError } = useChat();
  const [draft, setDraft] = useState('');

  return (
    <div className="page">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <main className="chat-card">
        <header className="chat-header">
          <h1 className="app-name">Chat Me</h1>
        </header>
        {error && (
          <div className="error-notice" role="alert">
            <span>{error}</span>
            <button className="error-dismiss" onClick={dismissError} aria-label="Dismiss error">
              &times;
            </button>
          </div>
        )}
        <MessageList
          messages={messages}
          isLoading={isLoading}
          onPromptClick={setDraft}
        />
        <ChatInput
          value={draft}
          onChange={setDraft}
          onSend={sendMessage}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}
