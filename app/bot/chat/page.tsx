'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, Loader2, Bot, User } from 'lucide-react'

type Message = {
  role: 'user' | 'bot'
  text: string
}

export default function GeminiChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage() {
    if (!input.trim() || loading) return

    const userMessage = input

    setMessages((prev) => [
      ...prev,
      { role: 'user', text: userMessage },
    ])

    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await res.json()

      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: data.reply,
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Error: Failed to connect.',
        },
      ])
    }

    setLoading(false)
  }

  return (
    <div className="flex flex-col h-screen bg-neutral-950 text-white">

      {/* Header */}
      <header className="px-6 py-4 border-b border-neutral-800 flex items-center gap-3">
        <Bot className="text-blue-500" />
        <h1 className="text-xl font-semibold">Gemini Chat</h1>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6">

        {messages.length === 0 && (
          <div className="text-center text-neutral-400 mt-32">
            <h2 className="text-2xl font-bold mb-2">
              Welcome to Gemini AI
            </h2>
            <p>Ask anything to get started 🚀</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === 'user'
                ? 'justify-end'
                : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
              ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-neutral-800 text-neutral-100 rounded-bl-none'
              }`}
            >
              <div className="flex items-center gap-2 mb-1 text-xs opacity-70">
                {msg.role === 'user' ? (
                  <>
                    <User size={14} /> You
                  </>
                ) : (
                  <>
                    <Bot size={14} /> Gemini
                  </>
                )}
              </div>

              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-neutral-800 px-4 py-3 rounded-xl flex items-center gap-2 text-sm">
              <Loader2 className="animate-spin" size={16} />
              Thinking...
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </main>

      {/* Input */}
      <footer className="border-t border-neutral-800 p-4">

        <div className="max-w-4xl mx-auto flex gap-3">

          <input
            type="text"
            placeholder="Ask Gemini..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-xl transition disabled:opacity-50"
          >
            <Send size={18} />
          </button>

        </div>
      </footer>

    </div>
  )
}