'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateThreadPage() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('General')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/forum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, desc, category }),
      })

      if (!res.ok) throw new Error('Failed to create thread')

      setTitle('')
      setDesc('')
      setCategory('General')

      router.push('/forum')
    } catch (err) {
      console.error(err)
      alert('Error creating thread. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='py-12 px-6 max-w-3xl mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-10'
      >
        <h1 className='text-3xl font-bold mb-2'>Create New Thread</h1>
        <p className='text-gray-600 dark:text-gray-400'>
          Start a discussion by creating a new thread.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='bg-white dark:bg-gray-900 p-6 rounded-2xl shadow space-y-6'
      >
        <div>
          <label className='block font-semibold mb-2'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter thread title...'
            required
            className='w-full p-3 border rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white'
          />
        </div>

        <div>
          <label className='block font-semibold mb-2'>Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder='Describe your question or discussion topic...'
            rows={5}
            required
            className='w-full p-3 border rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white'
          />
        </div>

        <div>
          <label className='block font-semibold mb-2'>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full p-3 border rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white'
          >
            <option>General</option>
            <option>Next.js</option>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>Other</option>
          </select>
        </div>

        <div className='flex justify-between items-center'>
          <Link
            href='/forum'
            className='px-5 py-2 bg-gray-200 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
          >
            ← Back
          </Link>
          <button
            type='submit'
            disabled={loading}
            className='px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? 'Creating...' : 'Create Thread'}
          </button>
        </div>
      </motion.form>
    </section>
  )
}
