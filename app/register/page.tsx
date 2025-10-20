'use client'

import { useState } from 'react'

export default function RegisterPage() {
  const [form, setForm] = useState({ username: '', realName: '', email: '', password: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    setMessage(data.message || data.error)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        {['username', 'realName', 'email', 'password'].map((f) => (
          <input
            key={f}
            type={f === 'password' ? 'password' : 'text'}
            placeholder={f}
            value={form[f as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [f]: e.target.value })}
            className="w-full p-2 border rounded"
          />
        ))}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Register
        </button>
      </form>
      {message && <p className="mt-3 text-center text-sm">{message}</p>}
    </div>
  )
}
