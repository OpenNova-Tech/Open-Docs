'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git log`

  const code2 = `commit a1c3f9d
Author: Sarah Lee <sarah@example.com>
Date:   Tue Nov 6 16:22:10 2025

    Add user authentication logic`

  const code3 = `git log --oneline`

  const code4 = `a1c3f9d Add user authentication logic
65ab29c Update README
48cfe19 Fix typo in login page`

  const code5 = `git log -5 --oneline`

  const code6 = `git log --oneline --graph --decorate --all`

  const code7 = `* a1c3f9d (HEAD -> main) Add user authentication logic
|\
| * 48cfe19 Feature: add user avatar upload
* | 65ab29c Update README
|/
* 39fa114 Initial commit`

  const code8 = `git log --author="Sarah"`

  const code9 = `git log --grep="authentication"`

  const code10 = `git log --oneline -- <path/to/file>`

  const code11 = `git log --since="2 weeks ago"
git log --until="2023-01-01"`

  const code12 = `git log -p`

  const code13 = `git show <commit-hash>`

  const code14 = `git show a1c3f9d`

  const code15 = `git blame file.js`

  const code16 = `a1c3f9d (Sarah Lee 2025-11-06) function login() {
48cfe19 (Dev Patel 2025-11-04)   validateUser(input);`

  const code17 = `git log --no-merges --oneline`

  const code18 = `git log --pretty=format:"%h - %an : %s"`

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
            Viewing History
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(1)}</b> Basic Commit History
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The simplest command to view history: <br />
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            This shows: <br />
            • Commit hash <br />
            • Author <br />
            • Date <br />
            • Commit message <br />
            <br />
            Example output:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            Use this to understand the chronological sequence of project changes.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(2)}</b> Compact, Readable Logs
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>One-line version</b>: <br />
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            Gives something like:
            <CodeBlock language="bash" filename="" code={code4} />
            This is great for quick scanning. <br />
            <br />
            <b>Show only last N commits</b>:
            <CodeBlock language="bash" filename="" code={code5} />
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
            <b className='text-[#F05032]'>{num(3)}</b> Visual Graph of Branches
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To understand how branches diverged and merged:
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            This displays a tree-like view: <br />
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            Helpful for navigating complex project histories.
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
            <b className='text-[#F05032]'>{num(4)}</b> Filtering History (Search & Narrowing)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Find commits by author:</b>
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            <b>Search for text in commit messages:</b>
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            <b>Show commits affecting a specific file:</b>
            <CodeBlock language="bash" filename="" code={code10} /> <br />
            <b>Limit by date:</b>
            <CodeBlock language="bash" filename="" code={code11} /> <br />
            Filtering helps you quickly locate relevant changes.
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
            <b className='text-[#F05032]'>{num(5)}</b> Inspecting Changes in Commits
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Show what changed in each commit:</b>
            <CodeBlock language="bash" filename="" code={code12} /> <br />
            <b>Show diffs for only one commit:</b>
            <CodeBlock language="bash" filename="" code={code13} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code14} /> <br />
            This reveals: <br />
            • Added lines <br />
            • Removed lines <br />
            • Updated code segments <br />
            <br />
            This is essential for debugging or code review.
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
            <b className='text-[#F05032]'>{num(6)}</b> Browsing History with Blame
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>git blame</span> lets you see <b>who last changed each line of a file</b>:
            <CodeBlock language="bash" filename="" code={code15} /> <br />
            You get output like:
            <CodeBlock language="bash" filename="" code={code16} /> <br />
            Use this to trace: <br />
            • When a bug was introduced <br />
            • Who last edited a specific line <br />
            • The context around a change
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
            <b className='text-[#F05032]'>{num(7)}</b> Viewing History Without Clutter
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Exclude merge commits:</b>
            <CodeBlock language="bash" filename="" code={code17} /> <br />
            <b>Customize the output format:</b>
            <CodeBlock language="bash" filename="" code={code18} /> <br />
            Custom formats help you generate clean reports or summaries.
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
            • <span className='bg-neutral-800 px-2 rounded-lg'>git log</span> is the main tool for exploring commit history. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>--online</span>, <span className='bg-neutral-800 px-2 rounded-lg'>--graph</span>, and <span className='bg-neutral-800 px-2 rounded-lg'>--decorate</span> for simplified and visual history. <br />
            • Filtering options like <span className='bg-neutral-800 px-2 rounded-lg'>--author</span>, <span className='bg-neutral-800 px-2 rounded-lg'>--grep</span>, <span className='bg-neutral-800 px-2 rounded-lg'>--since</span>, and file-specific logs help pinpoint changes. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>git show</span> and <span className='bg-neutral-800 px-2 rounded-lg'>git log -p</span> reveal actual code modifications. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>git blame</span> identifies line-by-line authorship for deeper investigation. <br />
            • Git&apos;s history tools make it easy to understand, audit, and navigate your project&apos;s evolution.
          </div>
        </motion.div>
      </div>
    </main>
  )
}