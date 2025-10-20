'use client'

import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: '',
    realName: '',
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage('')
    setError('')

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setMessage(data.message || 'Registration successful!')
      } else {
        setError(data.error || 'Something went wrong.')
      }
    } catch {
      setError('Server error. Please try again.')
    }
  }

  const handleGoogleRegister = () => {
    window.location.href = 'http://localhost:8000/auth/google'
  }

  const handleGithubRegister = () => {
    window.location.href = 'http://localhost:8000/auth/github'
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <div className="text-left">
          <h2 className="text-2xl font-bold">Create your Open Auth account</h2>
          <p className="text-sm text-zinc-400 mt-1">Sign up to access Open Docs</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring focus:ring-indigo-500"
          />

          <input
            type="text"
            placeholder="Full Name"
            value={form.realName}
            onChange={(e) => setForm({ ...form, realName: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring focus:ring-indigo-500"
          />

          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring focus:ring-indigo-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-2 rounded font-semibold"
          >
            Sign up →
          </button>
        </form>

        {message && <p className="text-green-400 text-center text-sm">{message}</p>}
        {error && <p className="text-red-400 text-center text-sm">{error}</p>}

        <div className="space-y-3 pt-2">
          <button
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition text-white py-2 rounded"
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>

          <button
            onClick={handleGithubRegister}
            className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition text-white py-2 rounded"
          >
            <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
            Sign up with GitHub
          </button>
        </div>
      </div>
    </div>
  )
}
