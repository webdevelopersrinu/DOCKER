import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="page">
          <div className="chat-card error-fallback">
            <h1 className="app-name">Something went wrong</h1>
            <p>Please refresh the page and try again.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
