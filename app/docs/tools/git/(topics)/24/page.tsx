'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git revert <commit-hash>`

  const code2 = `git revert a1b2c3d`

  const code3 = `git revert HEAD`

  const code4 = `git revert <oldest>..<latest>`

  const code5 = `git revert HEAD~3..HEAD`

  const code6 = `git revert --no-commit <commit-hash>`

  const code7 = `git revert --continue`


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
            Reverting Commits
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
            <b className='text-[#F05032]'>{num(1)}</b> What Reverting a Commit Means
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Reverting creates a <b>new commit</b> that undoes the changes introduced by a previous commit. The original commit remains in history, making revert safe for shared branches.
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
            <b className='text-[#F05032]'>{num(2)}</b> Basic Revert Command
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To revert a single commit:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            Git opens an editor to confirm the revert commit message.
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
            <b className='text-[#F05032]'>{num(3)}</b> Reverting the Latest Commit
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To undo the most recent commit:
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            This is the safest way to undo a bad commit on <span className='bg-neutral-800 px-2 rounded-lg'>main</span> or <span className='bg-neutral-800 px-2 rounded-lg'>develop</span>.
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
            <b className='text-[#F05032]'>{num(4)}</b> Reverting Multiple Commits
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To revert a range of commits:
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            Each commit is reverted individually.
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
            <b className='text-[#F05032]'>{num(5)}</b> Revert Without Auto-Commit
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To review changes before committing:
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            This applies the inverse changes but leaves them staged.
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
            <b className='text-[#F05032]'>{num(6)}</b> Handling Revert Conflicts
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Conflicts may occur if later commits depend on reverted changes. <br />
            <br />
            Steps: <br />
            <b>1.</b> Resolve conflicts manually <br />
            <b>2.</b> Stage resolved files <br />
            <b>3.</b> Continue revert: <br />
            <CodeBlock language="bash" filename="" code={code7} /> <br />
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
            <b className='text-[#F05032]'>{num(7)}</b> When to Use Revert vs Reset
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Use <b>revert</b> on shared branches <br />
            <b>•</b> Use <b>reset</b> only for local history cleanup <br />
            <b>•</b> Revert preserves collaboration safety
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
            <b className='text-[#F05032]'>{num(8)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git revert</span> undoes changes by creating a new commit. <br />
            <b>•</b> Reverting does not rewrite history. <br />
            <b>•</b> Safe for public and shared branches. <br />
            <b>•</b> Can revert single or multiple commits. <br />
            <b>•</b> Prefer revert over reset on pushed commits. <br />
          </div>
        </motion.div>
      </div>
    </main>
  )
}