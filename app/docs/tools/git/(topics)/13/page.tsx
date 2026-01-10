'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git switch <branch-name>`

  const code2 = `git switch feature/login-auth`

  const code3 = `git checkout <branch-name>`

  const code4 = `git add .
git commit -m "WIP: partial work"`

  const code5 = `git stash
git switch main`

  const code6 = `git switch <branch-name> --discard-changes`

  const code7 = `git switch <branch-name> --merge`

  const code8 = `git switch -`

  const code9 = `git switch main
git switch feature/cart-ui
git switch -`

  const code10 = `git branch`

  const code11 = `* feature/login-auth
  main
  dev`

  const code12 = `git switch -c <branch-name> origin/<branch-name>`

  const code13 = `git switch -c design-update origin/design-update`

  const code14 = `git switch --detach <commit-hash>`

  const code15 = `git checkout <commit-hash>`

  const code16 = `git switch -c new-branch-name`

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
            Switching Branches
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
            <b className='text-[#F05032]'>{num(1)}</b> Switching to an Existing Branch
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The modern recommended command:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            Older (still supported):
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            Both do the same: <br />
            ✔ Updates your working directory <br />
            ✔ Points <span className='bg-neutral-800 px-2 rounded-lg'>HEAD</span> to the target branch
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
            <b className='text-[#F05032]'>{num(2)}</b> Auto-Stash Behavior (Newer Git Versions)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            If you have uncommitted changes and you try switching branches, Git may refuse. <br />
            You have options: <br />
            <br />
            <b>Option 1 — Commit your work</b>
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            <b>Option 2 — Stash changes and switch</b>
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            <b>Option 3 — Use auto-stash</b>
            <CodeBlock language="bash" filename="" code={code6} /> 
            or
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            Use with caution — this can overwrite your work.
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
            <b className='text-[#F05032]'>{num(3)}</b> Switching Back to the Previous Branch
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A super useful shortcut:
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            This toggles between the last two branches, like a back/forward button.
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
            <b className='text-[#F05032]'>{num(4)}</b> Viewing Which Branch You Are On
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="bash" filename="" code={code10} /> <br />
            The active branch will be highlighted with:
            <CodeBlock language="bash" filename="" code={code11} /> <br />
            You are always on the branch marked with <span className='bg-neutral-800 px-2 rounded-lg'>*</span>.
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
            <b className='text-[#F05032]'>{num(5)}</b> Switching to Remote Branches
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To move to a branch that exists on the remote but not locally:
            <CodeBlock language="bash" filename="" code={code12} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code13} /> <br />
            This creates a local copy tracking the remote branch.
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
            <b className='text-[#F05032]'>{num(6)}</b> Detached HEAD State
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            If you switch to a commit instead of a branch:
            <CodeBlock language="bash" filename="" code={code14} /> <br />
            or using older syntax:
            <CodeBlock language="bash" filename="" code={code15} /> <br />
            You enter <b>detached HEAD</b>, meaning: <br />
            <b>•</b> You are not on a branch <br />
            <b>•</b> New commits do not belong to any branch <br />
            <b>•</b> They can be lost if not saved <br />
            <br />
            To save the work:
            <CodeBlock language="bash" filename="" code={code16} />
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
            <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>git switch &lt;branch&gt;</span> for modern switching; <span className='bg-neutral-800 px-2 rounded-lg'>git checkout</span>  still works. <br />
            <b>•</b> Switch safely: stash or commit before changing branches to prevent data loss. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git switch -</span> toggles between the last two branches. <br />
            <b>•</b> Remote branches require <span className='bg-neutral-800 px-2 rounded-lg'>git switch -c &lt;branch&gt; origin/&lt;branch&gt;</span>. <br />
            <b>•</b> Switching to a commit creates a <b>detached HEAD</b>, so create a branch if you want to keep the work.
          </div>
        </motion.div>
      </div>
    </main>
  )
}