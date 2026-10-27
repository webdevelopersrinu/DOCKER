export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  return (
    <div className={`bubble-row ${isUser ? 'user' : 'assistant'}`}>
      <div className={`bubble ${isUser ? 'user-bubble' : 'assistant-bubble'}`}>
        {message.content}
      </div>
    </div>
  );
}
