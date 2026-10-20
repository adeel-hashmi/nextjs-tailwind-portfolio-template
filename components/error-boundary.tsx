"use client"

import { Component, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Portfolio Error:", error, errorInfo)
    // In production, send to error tracking service
    // trackError(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <AlertTriangle className="w-12 h-12 text-red-400 mx-auto" />
              <h2 className="text-2xl font-bold">Something went wrong</h2>
              <p className="text-gray-400">Don&apos;t worry, this rarely happens in production!</p>
              <Button
                onClick={() => this.setState({ hasError: false })}
                className="bg-white text-black hover:bg-gray-200"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
