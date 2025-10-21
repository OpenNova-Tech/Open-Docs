'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    })
  }

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center px-4'>
      <form onSubmit={handleSubmit} className='bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6'>
        <h2 className='text-2xl font-bold mb-4'>Log In to Open Docs</h2>

        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='w-full bg-neutral-800  rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring focus:ring-indigo-500' />
        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='w-full bg-neutral-800  rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring focus:ring-indigo-500' />

        <button type='submit' className='w-full bg-indigo-600 text-white p-2 rounded-lg disabled:opacity-50 cursor-pointer'>Log In</button>

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
