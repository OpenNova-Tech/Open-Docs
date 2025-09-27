'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Reply = {
  id: number
  author: string
  content: string
  createdAt: string
}

type Thread = {
  id: number
  title: string
  desc: string
  category: string
  replies: Reply[]
}

export default function page() {
  const { id } = useParams()
  const [thread, setThread] = useState<Thread | null>(null)
  const [loading, setLoading] = useState(true)
  const [replyContent, setReplyContent] = useState('')
  const [posting, setPosting] = useState(false)

  useEffect(() => {
    async function fetchThread() {
      try {
        const res = await fetch(`/api/forum?id=${id}`)
        if (!res.ok) throw new Error('Failed to fetch thread')
        const data = await res.json()
        setThread(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchThread()
  }, [id])

  const handleReply = async () => {
    if (!replyContent.trim() || !thread) return
    setPosting(true)
    try {
      const res = await fetch('/api/forum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          threadId: thread.id,
          author: 'Anonymous',
          content: replyContent,
        }),
      })
      if (!res.ok) throw new Error('Failed to post reply')
      const newReply: Reply = await res.json()
      setThread((prev) =>
        prev ? { ...prev, replies: [...prev.replies, newReply] } : prev
      )
      setReplyContent('')
    } catch (err) {
      console.error(err)
      alert('Failed to post reply')
    } finally {
      setPosting(false)
    }
  }

  if (loading) return <div className='py-20 text-center'>Loading thread...</div>
  if (!thread)
    return (
      <div className='py-20 text-center'>
        <h2 className='text-2xl font-bold'>Thread not found</h2>
        <Link href='/forum' className='text-blue-600 underline'>
          ← Back to Forum
        </Link>
      </div>
    )

  return (
    <section className='py-36 bg-black px-6  mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mb-8 max-w-5xl mx-auto'
      >
        <h1 className='text-3xl font-bold mb-2'>{thread.title}</h1>
        <p className='text-gray-400 mb-4'>{thread.desc}</p>
        <span className='px-3 py-1 bg-gray-800 rounded-full text-xs font-medium'>
          {thread.category}
        </span>
      </motion.div>

      <div className='space-y-6'>
        {thread.replies.map((reply) => (
          <motion.div
            key={reply.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='p-5 max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow'
          >
            <div className='flex justify-between mb-2'>
              <span className='font-semibold'>{reply.author}</span>
              <span className='text-sm text-gray-500'>
                {new Date(reply.createdAt).toLocaleString()}
              </span>
            </div>
            <p className='text-gray-700 dark:text-gray-300'>{reply.content}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='mt-10 max-w-5xl mx-auto'
      >
        <h3 className='text-lg font-semibold mb-3'>Add a Reply</h3>
        <textarea
          className='w-full focus:outline-none focus:ring-0 p-3 resize-none rounded-xl bg-gray-800 text-white'
          rows={4}
          placeholder='Write your reply'
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
        />
        <button
          onClick={handleReply}
          disabled={posting}
          className='mt-3 px-5 py-2 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {posting ? 'Posting...' : 'Post Reply'}
        </button>
      </motion.div>

      <div className='text-center mt-12'>
        <Link
          href='/forum'
          className='inline-block px-5 py-2 bg-gray-800 rounded-xl text-gray-300 hover:bg-gray-700'
        >
          ← Back to Forum
        </Link>
      </div>
    </section>
  )
}
