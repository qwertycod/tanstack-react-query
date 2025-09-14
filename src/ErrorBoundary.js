import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so fallback UI renders
        return { hasError: true, error };
    }
 
    componentDidCatch(error, info) {
        // You can log error to an external service here
        console.error("Error caught by ErrorBoundary:", error, info);
    }

    render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '1rem', color: 'red' }}>
          <h2>Something went wrong. We are in the error boundary component</h2>
          <p>{this.state.error?.toString()}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;  