'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git branch -d branch-name`

  const code2 = `git branch -d feature/login-auth`

  const code3 = `git branch -D branch-name`

  const code4 = `git push origin --delete branch-name`

  const code5 = `git push origin --delete feature/old-ui`

  const code6 = `git fetch --prune`

  const code7 = `git remote prune origin`

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
            Deleting Branches
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
            <b className='text-[#F05032]'>{num(1)}</b> Deleting a Local Branch
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            After a branch has been merged:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            Git performs a safety check and refuses if the branch is not fully merged.
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
            <b className='text-[#F05032]'>{num(2)}</b> Force Deleting a Local Branch
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            If the branch is <b>not merged</b> but you still want to delete it:
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            This skips safety checks. <br />
            ⚠️ Use carefully — unmerged commits may be lost.
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
            <b className='text-[#F05032]'>{num(3)}</b> Deleting a Remote Branch
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To delete a branch from a remote (like GitHub):
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            This removes the branch from the remote repository.
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
            <b className='text-[#F05032]'>{num(4)}</b> Deleting Remote-Tracking References (Cleanup)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Sometimes remote branches are deleted but still appear locally. <br />
            <br />
            Clean them up using:
            <CodeBlock language="bash" filename="" code={code6} />
            or
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            This removes stale remote-tracking branches.
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
            <b className='text-[#F05032]'>{num(5)}</b> Best Practices
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Delete feature branches after merging <br />
            • Never delete shared branches like <span className='bg-neutral-800 px-2 rounded-lg'>main</span> or <span className='bg-neutral-800 px-2 rounded-lg'>develop</span> <br />
            • Clean up stale branches regularly <br /> 
            • Coordinate before deleting someone else&apos;s branch  
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
            <b className='text-[#F05032]'>{num(6)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>git branch -d</span> for safe local deletion. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>git branch -D</span> to force delete unmerged branches. <br />
            • Remote branches are deleted with <span className='bg-neutral-800 px-2 rounded-lg'>git push origin --delete</span>. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>git fetch --prune</span> cleans stale remote references. <br />
            • Regular cleanup keeps repositories readable and manageable.
          </div>
        </motion.div>
      </div>
    </main>
  )
}