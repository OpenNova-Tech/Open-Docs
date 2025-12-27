'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git checkout main
git merge feature   # simply moves main pointer forward`

  const code2 = `git checkout main
git merge feature`

  const code3 = `main: A — B — C — M
                 ↖ feature: D — E`

  const code4 = `git merge --squash feature`

  const code5 = `git merge --no-ff feature`

  const code6 = `git checkout main
git merge login-page`

  const code7 = `<<<<<<< HEAD
your changes
=======
incoming branch changes
>>>>>>> feature`

  const code8 = `git add <file>
git commit`

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
            Merging
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
            <b className='text-[#F05032]'>{num(1)}</b> What Is a Merge in Git?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>merge</b> is the process of combining the latest commits from one branch into another. <br />
            Examples: <br />
            • Merging a feature branch into <span className='bg-neutral-800 px-2 rounded-lg'>main</span> <br />
            • Merging bugfix work into <span className='bg-neutral-800 px-2 rounded-lg'>develop</span> <br />
            <br />
            Git tries to auto-combine file changes. If it cannot, it asks you to resolve conflicts manually.
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
            <b className='text-[#F05032]'>{num(2)}</b> Types of Merges
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Git supports several merge behaviors depending on the commit history. <br />
            <br />
            <b>Fast-Forward Merge</b> <br />
            Happens when the target branch has no new commits since branching. <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>main -----&gt; feature</span> <br />
            Merging just moves the pointer:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            <b>3-Way Merge (Non-Fast Forward)</b> <br />
            Occurs when both branches have diverged (i.e., both have unique commits). <br />
            Git creates a new merge commit linking the two histories:
            <CodeBlock language="bash" filename="" code={code2} />
            Result:
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            <b>Squash Merge</b> <br />
            Combines all commits from a branch into a single commit.
            <CodeBlock language="bash" filename="" code={code4} /> 
            Useful for: <br />
            • Cleaning up messy commit history <br />
            • Feature branches with many WIP commits <br />
            <br />
            <b>No-Fast-Forward Merge</b> <br />
            Forces Git to create a merge commit even if a fast-forward is possible.
            <CodeBlock language="bash" filename="" code={code5} />
            Ensures feature branches appear as distinct history blocks.
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
            <b className='text-[#F05032]'>{num(3)}</b> Performing a Basic Merge
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Example:
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            Git outputs either: <br />
            • &quot;Fast-forward&quot; <br />
            • &quot;Merge made by the &apos;recursive&apos; strategy&quot; <br />
            • Or conflict information
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
            <b className='text-[#F05032]'>{num(4)}</b> Merge Conflicts
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A merge conflict happens when Git cannot automatically reconcile changes. <br />
            <br />
            Typical conflict markers:
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            To resolve: <br />
            1. Open conflict file <br />
            2. Edit manually <br />
            3. Mark resolved <br />
            <br />
            <CodeBlock language="bash" filename="" code={code8} /> 
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
            <b className='text-[#F05032]'>{num(5)}</b> When Should You Merge?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Merge is appropriate when: <br />
            • You want to preserve the <b>true commit history</b> <br />
            • You prefer a non-linear but complete visualization of work <br />
            • Multiple developers contribute to the same code base <br />
            Use merge when you want clarity and visibility of all changes.
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
            <b className='text-[#F05032]'>{num(6)}</b> Best Practices for Merging
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <b>Merge often</b> to reduce conflicts <br />
            • Merge from <span className='bg-neutral-800 px-2 rounded-lg'>main</span> into your feature branch periodically <br />
            • Avoid long-lived branches if possible <br />
            • Name branches clearly before merging <br />
            • Prefer <span className='bg-neutral-800 px-2 rounded-lg'>--no-ff</span> for feature development (optional but common)
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
            • Merging integrates changes between branches. <br />
            • Git supports fast-forward, no-ff, squash, and 3-way merges. <br />
            • Merge conflicts must be resolved manually. <br />
            • Merges preserve full commit history. <br />
            • Choose merging when team collaboration requires safer, non-destructive history management.
          </div>
        </motion.div>
      </div>
    </main>
  )
}