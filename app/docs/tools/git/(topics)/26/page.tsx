'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git stash`

  const code2 = `git stash push -m "WIP: login form"`

  const code3 = `git stash list`

  const code4 = `stash@{0}: WIP: login form
stash@{1}: WIP: navbar fix`

  const code5 = `git stash apply`

  const code6 = `git stash apply stash@{1}`

  const code7 = `git stash pop`

  const code8 = `git stash -u`

  const code9 = `git stash -a`

  const code10 = `git stash drop stash@{0}`

  const code11 = `git stash clear`


  return (
    <main className='pt-32 dark:bg-black py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#F05032] bg-black'>
            Stashing
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(1)}</b> What Stashing Does
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Stashing temporarily saves uncommitted changes and restores the working directory to a clean state. This allows you to switch branches or pull updates without committing incomplete work.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(2)}</b> Creating a Stash
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To stash all tracked, uncommitted changes:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            This saves: <br />
            <b>•</b> Modified files <br />
            <b>•</b> Staged changes <br />
            Untracked files are not included by default.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(3)}</b> Stashing With a Message
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To make stashes easier to identify:
            <CodeBlock language="bash" filename="" code={code2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(4)}</b> Viewing Stashes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            List all saved stashes:
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            Example output:
            <CodeBlock language="bash" filename="" code={code4} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(5)}</b> Applying a Stash
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Apply the latest stash and keep it:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            Apply a specific stash:
            <CodeBlock language="bash" filename="" code={code6} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(6)}</b> Popping a Stash
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Apply the latest stash and remove it from the stash list:
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            This is the most commonly used stash command.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(7)}</b> Stashing Untracked Files
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To include untracked files:
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            To include ignored files as well:
            <CodeBlock language="bash" filename="" code={code9} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(8)}</b> Dropping and Clearing Stashes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Remove a specific stash:
            <CodeBlock language="bash" filename="" code={code10} /> <br />
            Remove all stashes:
            <CodeBlock language="bash" filename="" code={code11} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(9)}</b> Common Use Cases
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Switching branches mid-work <br />
            <b>•</b> Pulling updates without committing <br />
            <b>•</b> Parking experimental changes <br />
            <b>•</b> Cleaning working directory quickly
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(10)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git stash</span> temporarily saves uncommitted changes. <br />
            <b>•</b> Stashes can be listed, applied, popped, or deleted. <br />
            <b>•</b> Use messages to manage multiple stashes. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>apply</span> keeps the stash; <span className='bg-neutral-800 px-2 rounded-lg'>pop</span> removes it. <br />
            <b>•</b> Stashing is reversible and safer than discarding.
          </div>
        </motion.div>
      </div>
    </main>
  )
}