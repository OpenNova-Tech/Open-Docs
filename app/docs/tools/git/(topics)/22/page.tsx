'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git restore <file>`

  const code2 = `git restore index.html`

  const code3 = `git checkout -- <file>`

  const code4 = `git restore .`

  const code5 = `git restore --staged <file>`

  const code6 = `git restore --staged app.js`

  const code7 = `git reset --hard`

  const code8 = `git restore .
git switch main`

  const code9 = `git stash`


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
            Discarding Changes
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
            <b className='text-[#F05032]'>{num(1)}</b> Discarding Changes in a File (Working Directory)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To discard changes in a specific file and restore it to the last commit:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code2} />
            This removes all uncommitted changes in that file. <br />
            <br />
            Older syntax (still works):
            <CodeBlock language="bash" filename="" code={code3} />
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
            <b className='text-[#F05032]'>{num(2)}</b> Discarding All Local Changes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To discard <b>all</b> uncommitted changes in the working directory:
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            ⚠️ This cannot be undone.
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
            <b className='text-[#F05032]'>{num(3)}</b> Unstaging Changes (Keep File Changes)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            If you accidentally staged a file:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            This removes the file from the staging area but keeps the file changes.
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
            <b className='text-[#F05032]'>{num(4)}</b> Discarding Both Staged and Unstaged Changes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To completely reset the working directory and staging area:
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            This: <br />
            <b>•</b> Clears staging <br />
            <b>•</b> Discards all local changes <br />
            <b>•</b> Resets to the last commit <br />
            ⚠️ Very destructive — use only when you are sure.
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
            <b className='text-[#F05032]'>{num(5)}</b> Discarding Changes by Switching Branches
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When switching branches: <br />
            <b>•</b> Git prevents switching if changes would be lost <br />
            <b>•</b> You must either commit, stash, or discard changes <br />
            <br />
            Example:
            <CodeBlock language="bash" filename="" code={code8} /> 
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
            <b className='text-[#F05032]'>{num(6)}</b> When Not to Discard
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Do <b>not</b> discard changes when: <br />
            <b>•</b> You might need the work later <br />
            <b>•</b> You are unsure what changed <br />
            <br />
            Instead, use:
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            Stashing is safer and reversible (covered later).
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
            <b className='text-[#F05032]'>{num(7)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Discarding applies only to uncommitted changes. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git restore &lt;file&gt;</span> discards changes in a file. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git restore .</span> discards all working directory changes. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git restore --staged</span> unstages files without losing edits. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git reset --hard</span> is destructive and irreversible. <br />
            <b>•</b> When unsure, <b>stash instead of discarding</b>.
          </div>
        </motion.div>
      </div>
    </main>
  )
}