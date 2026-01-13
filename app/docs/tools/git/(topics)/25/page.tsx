'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git commit --amend`

  const code2 = `git add <file>
git commit --amend`

  const code3 = `git commit --amend --no-edit`


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
            Amending Commits
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
            <b className='text-[#F05032]'>{num(1)}</b> What Amending a Commit Means
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Amending replaces the <b>most recent commit</b> with a new one. The commit hash changes, but the branch pointer moves forward as if the old commit never existed. <br />
            <br />
            This is meant for <b>local, unpublished commits</b> only.
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
            <b className='text-[#F05032]'>{num(2)}</b> Amending the Commit Message
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To change only the last commit message:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Git opens the editor to modify the message.
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
            <b className='text-[#F05032]'>{num(3)}</b> Amending to Add Forgotten Files
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            If you forgot to include files in the last commit:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            The new commit will include both old and new changes.
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
            <b className='text-[#F05032]'>{num(4)}</b> Amending Without Changing the Message
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To keep the existing commit message:
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            Useful when: <br />
            <b>•</b> Fixing typos <br />
            <b>•</b> Adding missing files <br />
            <b>•</b> Minor corrections
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
            <b className='text-[#F05032]'>{num(5)}</b> Amending After Push (Why It&apos;s Dangerous)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Amending rewrites history. If the commit was already pushed: <br />
            <b>•</b> The remote history diverges <br />
            <b>•</b> Requires force push <br />
            <b>•</b> Can break teammates&apos; work <br />
            Avoid amending pushed commits on shared branches.
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
            <b className='text-[#F05032]'>{num(6)}</b> Amending vs New Commit
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Use <b>amend</b> for small fixes to the latest commit <br />
            <b>•</b> Use a <b>new commit</b> for logical, standalone changes <br />
            Avoid amending pushed commits on shared branches.
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
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git commit --amend</span> replaces the latest commit. <br />
            <b>•</b> Amending changes the commit hash. <br />
            <b>•</b> Safe only for local, unpushed commits. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>--no-edit</span> keeps the existing message. <br />
            <b>•</b> Never amend commits already shared with others.
          </div>
        </motion.div>
      </div>
    </main>
  )
}