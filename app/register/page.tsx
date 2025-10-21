'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [form, setForm] = useState({ username: '', realName: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.error || 'Registration failed')
      setLoading(false)
      return
    }

    const loginRes = await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    })

    setLoading(false)

    if (loginRes?.error) {
      alert('Login failed after registration')
    } else {
      router.push('/')
    }
  }

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center px-4'>
      <form onSubmit={handleSubmit} className='bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6'>
        <h2 className='text-2xl font-bold mb-4'>Sign Up to Open Docs</h2>
        {['username', 'realName', 'email', 'password'].map((f) => (
          <input
            key={f}
            type={f === 'password' ? 'password' : f === 'email' ? 'email' : 'text'}
            placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
            className='w-full bg-neutral-800  rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring focus:ring-indigo-500'
            onChange={(e) => setForm({ ...form, [f]: e.target.value })}
            required
          />
        ))}
        <button
          type='submit'
          className='w-full bg-indigo-600 text-white p-2 rounded-lg disabled:opacity-50 cursor-pointer'
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>

        <div className='space-y-3 pt-2'>
          <button className='w-full flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition text-white py-2 rounded-lg cursor-pointer'>
            <img src='/google.svg' alt='Google' className='w-5 h-5' />
            Google
          </button>

          <button className='w-full flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition text-white py-2 rounded-lg cursor-pointer'>
            <img src='/github.svg' alt='GitHub' className='w-5 h-5' />
            Github
          </button>
        </div>
      </form>
    </div>
  )
}
