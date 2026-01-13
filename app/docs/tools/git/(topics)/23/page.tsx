'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git reset --soft <commit>`

  const code2 = `git reset --soft HEAD~1`

  const code3 = `git reset <commit>`

  const code4 = `git reset --mixed <commit>`

  const code5 = `git reset --hard <commit>`

  const code6 = `git reset --hard abc1234`


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
            Resetting Commits
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
            <b className='text-[#F05032]'>{num(1)}</b> What Resetting Commits Means
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Resetting moves <span className='bg-neutral-800 px-2 rounded-lg'>HEAD</span> to an earlier commit. Depending on the reset type, Git may also modify the <b>staging area</b> and <b>working directory</b>. This is used only on <b>local commits</b>.
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
            <b className='text-[#F05032]'>{num(2)}</b> Soft Reset (--soft)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Moves <span className='bg-neutral-800 px-2 rounded-lg'>HEAD</span> backward but keeps changes staged.
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Use case: <br />
            <b>•</b> Edit or combine recent commits <br />
            <b>•</b> Change commit message or grouping <br />
            <br />
            Example:
            <CodeBlock language="bash" filename="" code={code2} />
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
            <b className='text-[#F05032]'>{num(3)}</b> Mixed Reset (--mixed) - Default
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Moves <span className='bg-neutral-800 px-2 rounded-lg'>HEAD</span> backward and unstages changes but keeps file modifications.
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            or explicitly:
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            Use case: <br />
            <b>•</b> Rework staged files <br />
            <b>•</b> Reorganize commits 
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
            <b className='text-[#F05032]'>{num(4)}</b> Hard Reset (--hard)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Moves <span className='bg-neutral-800 px-2 rounded-lg'>HEAD</span> backward and discards all changes.
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            Use case: <br />
            <b>•</b> Throw away commits and changes completely <br />
            ⚠️ Irreversible if commits are not backed up.
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
            <b className='text-[#F05032]'>{num(5)}</b> Resetting to a Specific Commit
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Reset directly using commit hash:
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            Git history beyond that commit is removed from the current branch.
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
            <b className='text-[#F05032]'>{num(6)}</b> Reset vs Revert (Quick Contrast)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>Reset</b> rewrites history (local only) <br />
            <b>•</b> <b>Revert</b> creates a new commit (safe for shared branches) <br />
            Never reset commits that have already been pushed to shared branches.
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
            <b className='text-[#F05032]'>{num(7)}</b> Safe Usage Rules
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Use reset only on local branches <br />
            <b>•</b> Avoid <span className='bg-neutral-800 px-2 rounded-lg'>--hard</span> unless certain <br />
            <b>•</b> Prefer revert for public history <br />
            <b>•</b> Backup commit hashes if unsure
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
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git reset</span> moves <span className='bg-neutral-800 px-2 rounded-lg'>HEAD</span> backward. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>--soft</span> keeps changes staged. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>--mixed</span> keeps changes unstaged (default). <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>--hard</span> deletes commits and changes permanently. <br />
            <b>•</b> Never reset shared or pushed commits. <br />
          </div>
        </motion.div>
      </div>
    </main>
  )
}