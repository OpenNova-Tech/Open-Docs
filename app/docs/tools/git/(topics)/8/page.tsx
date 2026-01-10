'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git commit -m "Add login validation feature"`

  const code2 = `git commit -m "update"`

  const code3 = `git commit -m "Fix bug: prevent empty username submission in signup form"`

  const code4 = `git commit`

  const code5 = `Add input validation for login`

  const code6 = `git commit -m "Describe your change"`

  const code7 = `git commit -am "Quick fix for typo"`

  const code8 = `git log`

  const code9 = `git log --oneline`

  const code10 = `git log --oneline --graph --decorate --all`

  const code11 = `commit 4a2b9f1 (HEAD -> main)
Author: John Doe <john@example.com>
Date:   Wed Nov 5 20:13 2025

    Add error handling in payment module`

  const code12 = `git commit --amend`

  const code13 = `git log --graph --oneline`

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
            Making Commits
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
            <b className='text-[#F05032]'>{num(1)}</b> What is a Commit in Git?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A commit represents a saved state of your project&apos;s files. <br />
            <br />
            Each commit stores: <br />
            <b>•</b> The <b>changes</b> (diffs) made to files. <br />
            <b>•</b> <b>Metadata</b>: author, timestamp, commit message. <br />
            <b>•</b> A unique <b>SHA-1 hash</b> to identify it. <br />
            This makes Git&apos;s history traceable and tamper-proof. <br />
            <br />
            Example:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Each commit is like an entry in your project&apos;s timeline — a checkpoint you can always return to.
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
            <b className='text-[#F05032]'>{num(2)}</b> Writing Good Commit Messages
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A well-written commit message explains what and why you did something — not just how. <br />
            <br />
            🔹<b>Example of a Bad Commit:</b> <br />
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            🔹<b>Example of a Good Commit:</b> <br />
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            ✍️ <b>Commit Message Tips:</b> <br />
            <b>•</b> Use <b>present tense</b> (&quot;Add feature&quot; not &quot;Added feature&quot;). <br />
            <b>•</b> Keep the <b>subject line under 50 characters</b>. <br />
            <b>•</b> Use the body (optional) for explanation: <br />
            <br />
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            Then type:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            - Prevents login with empty fields <br />
            - Improves UX by showing proper error message
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
            <b className='text-[#F05032]'>{num(3)}</b> Committing Changes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            After staging changes with <span className='bg-neutral-800 px-2 rounded-lg'>git add</span>, run:
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            To include unstaged files directly (less recommended): <br />
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            The <span className='bg-neutral-800 px-2 rounded-lg'>-a</span> flag stages all tracked modified files automatically before committing — but <b>it doesn&apos;t include new untracked files</b>.
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
            <b className='text-[#F05032]'>{num(4)}</b> Viewing Commit History
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can review past commits to understand how your project evolved. <br />
            <br />
            <b>Basic log view:</b>
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            <b>Compact one-line view:</b>
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            <b>Graph view for branches:</b>
            <CodeBlock language="bash" filename="" code={code10} /> <br />
            <b>Each commit shows:</b>
            <CodeBlock language="bash" filename="" code={code11} />
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
            <b className='text-[#F05032]'>{num(5)}</b> Amending the Last Commit
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can edit your last commit if you forgot to include something or made a typo. <br />
            <br />
            <CodeBlock language="bash" filename="" code={code12} /> <br />
            This opens your editor to change the message or add new staged files. <br />
            💡 Use this only for local commits that haven&apos;t been pushed to a remote repository yet.
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
            <b className='text-[#F05032]'>{num(6)}</b> Understanding HEAD
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            In Git, <b>HEAD</b> is a pointer to your current commit — the &quot;tip&quot; of the branch you&apos;re working on. <br />
            <br />
            When you make a new commit: <br />
            <b>•</b> Git moves HEAD to that new commit. <br />
            <b>•</b> The previous commit becomes its parent. <br />
            <br />
            You can check this relationship with:
            <CodeBlock language="bash" filename="" code={code13} />
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
            <b className='text-[#F05032]'>{num(7)}</b> Commit Best Practices
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            ✅ <b>Make small, focused commits</b> — one logical change per commit. <br />
            ✅ <b>Write meaningful messages</b> — so history is self-explanatory. <br />
            ✅ <b>Commit often</b>, but not for every keystroke — think in milestones. <br />
            ✅ <b>Avoid binary files</b> in commits unless necessary (they bloat history). <br />
            ✅ <b>Don&apos;t commit secrets</b> (like passwords or API keys).
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
            <b>•</b> A <b>commit</b> records staged changes into Git&apos;s permanent history. <br />
            <b>•</b> Use clear, concise <b>commit messages</b> that explain purpose and context. <br />
            <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>git commit --m</span> for simple commits, or <span className='bg-neutral-800 px-2 rounded-lg'>git commit</span> for detailed ones. <br />
            <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>git log</span> to review history and <span className='bg-neutral-800 px-2 rounded-lg'>git commit --amend</span> to fix the latest commit. <br />
            <b>•</b> Every commit should represent one logical step in your project&apos;s journey.
          </div>
        </motion.div>
      </div>
    </main>
  )
}