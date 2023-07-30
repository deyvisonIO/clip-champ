'use client'
import React, { ErrorInfo, ReactNode } from "react";

interface ErrorState {
  hasError: Boolean
}

interface BoundaryProps {
  fallback: any,
  children: ReactNode
}

class ErrorBoundary extends React.Component<BoundaryProps> {
  state:ErrorState = { hasError: false };

  static getDerivedStateFromError(error: unknown) {
    console.error(error);
    return { hasError: true }
  }

  componentDidMount(): void {
      addEventListener("unhandledrejection", (error) => { ErrorBoundary.getDerivedStateFromError(error) })
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary;
