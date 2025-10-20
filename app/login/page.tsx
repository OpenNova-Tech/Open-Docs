'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setMessage('')

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (res?.error) setError('Invalid credentials')
    else {
      setMessage('Login successful!')
      window.location.href = '/'
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8000/auth/google'
  }

  const handleGithubLogin = () => {
    window.location.href = 'http://localhost:8000/auth/github'
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <div className="text-left">
          <h2 className="text-2xl font-bold">Welcome to Open Auth</h2>
          <p className="text-sm text-zinc-400 mt-1">Login to access Open Docs</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring focus:ring-indigo-500"
          />

          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Login →
          </button>
        </form>

        {message && <p className="text-green-400 text-center text-sm">{message}</p>}
        {error && <p className="text-red-400 text-center text-sm">{error}</p>}

        <div className="space-y-3 pt-2">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition text-white py-2 rounded"
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <button
            onClick={handleGithubLogin}
            className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition text-white py-2 rounded"
          >
            <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  )
}
