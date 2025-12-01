'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git branch <branch-name>`

  const code2 = `git branch feature/login-auth`

  const code3 = `git switch -c <branch-name>`

  const code4 = `git checkout -b <branch-name>`

  const code5 = `git switch -c feature/cart-ui`

  const code6 = `git branch <branch-name> <commit-hash>`

  const code7 = `git branch legacy-fix 3a9f122`

  const code8 = `git branch`

  const code9 = `git branch -a`

  const code10 = `remotes/origin/main
remotes/origin/feature/login-auth`

  const code11 = `git push -u origin <branch-name>`

  const code12 = `git push -u origin feature/user-profile`

  const code13 = `git push
git pull`

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
            Creating Branches
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
            <b className='text-[#F05032]'>{num(1)}</b> Creating a New Branch
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To create a branch:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            This <b>only creates the branch</b>, it does not switch to it.
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
            <b className='text-[#F05032]'>{num(2)}</b> Creating and Switching in One Step
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The most common way:
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            or the older syntax: <br />
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
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
            <b className='text-[#F05032]'>{num(3)}</b> Creating a Branch from a Specific Commit
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Sometimes you want your branch to start from a particular commit instead of the current one.
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            Useful for: <br />
            • Fixing older versions <br />
            • Starting a patch on historical code <br />
            • Creating branches from tags or stable release points
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
            <b className='text-[#F05032]'>{num(4)}</b> Listing All Branches
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To see all local branches:
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            To see remote + local branches:
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            Remote branches appear as:
            <CodeBlock language="bash" filename="" code={code10} />
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
            <b className='text-[#F05032]'>{num(5)}</b> Pushing a New Branch to Remote
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            After creating a local branch, push it to GitHub:
            <CodeBlock language="bash" filename="" code={code11} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code12} /> <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>-u</span> sets upstream tracking, so next time you can simply run:
            <CodeBlock language="bash" filename="" code={code13} /> <br />
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
            • <span className='bg-neutral-800 px-2 rounded-lg'>git branch &lt;name&gt;</span> creates a branch; <span className='bg-neutral-800 px-2 rounded-lg'>git switch -c &lt;name&gt;</span> creates and switches to it. <br />
            • Follow clean naming conventions like <span className='bg-neutral-800 px-2 rounded-lg'>feature/</span>, <span className='bg-neutral-800 px-2 rounded-lg'>bugfix/</span>, <span className='bg-neutral-800 px-2 rounded-lg'>hotfix/</span>, and <span className='bg-neutral-800 px-2 rounded-lg'>release/</span>. <br />
            • You can create branches from any commit or tag, not just the latest one. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>git branch -a</span> to view local and remote branches. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>git push -u origin &lt;branch&gt;</span> to publish a new branch and set upstream tracking.
          </div>
        </motion.div>
      </div>
    </main>
  )
}