'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type ForumThread = {
  id: number
  title: string
  desc: string
  category: string
  replies: number
  lastActivity: string
}

export default function page() {
  const [threads, setThreads] = useState<ForumThread[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchThreads() {
      try {
        const res = await fetch('/api/forum')
        const data = await res.json()
        setThreads(data)
      } catch (err) {
        console.error('Failed to fetch threads:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchThreads()
  }, [])

  if (loading) {
    return (
      <div className='text-center py-20 text-gray-600 dark:text-gray-400'>
        Loading threads...
      </div>
    )
  }

  return (
    <section className='py-12 bg-black px-6 '>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12 pt-24'
      >
        <h1 className='text-5xl font-bold mb-5 text-indigo-400'>OpenDocs Forum</h1>
        <p className='text-gray-600 dark:text-gray-400'>
          Discuss, ask questions, and share knowledge with the community.
        </p>
      </motion.div>

      <div className='px-32 grid grid-cols-3 gap-6'>
        {threads.map((thread) => (
          <motion.div
            key={thread.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: thread.id * 0.1 }}
            className='p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition cursor-pointer'
          >
            <Link href={`/forum/${thread.id}`}>
              <h2 className='text-xl font-semibold mb-1'>{thread.title}</h2>
              <p className='text-gray-600 dark:text-gray-400 text-sm mb-3'>
                {thread.desc}
              </p>
              <div className='flex justify-between text-sm text-gray-500 dark:text-gray-400'>
                <span className='px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium'>
                  {thread.category}
                </span>
                <span>
                  {thread.replies} replies • {thread.lastActivity}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center mt-12'
      >
        <Link
          href='/forum/create'
          className='inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-xl shadow hover:bg-indigo-600 transition'
        >
          + Create New Thread
        </Link>
      </motion.div>
    </section>
  )
}
