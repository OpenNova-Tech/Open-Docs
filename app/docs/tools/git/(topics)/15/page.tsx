'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `main: A — B
                 \\
                  C — D (feature)`

  const code2 = `git checkout main
git merge feature
# Output: Fast-forward`

  const code3 = `main → A — B — C — D`

  const code4 = `git merge --no-ff feature`

  const code5 = `A — B — C — D — M
       ↖ feature`

  const code6 = `git merge --no-ff feature-branch`

  const code7 = `main:    A — B — C
                   \\
feature:            D — E`

  const code8 = `git merge feature`

  const code9 = `git merge --squash feature
git commit -m "Add login feature"`

  const code10 = `A — B — C — D  (single combined commit)`

  const code11 = `git merge -s recursive feature`

  const code12 = `git merge -s ours feature`

  const code13 = `git merge branch1 branch2 branch3`

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
            Fast-Forward and Other Merge Strategies
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
            <b className='text-[#F05032]'>{num(1)}</b> What Is a Fast-Forward Merge?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>fast-forward merge</b> occurs when the target branch has not diverged from the source branch. <br />
            <br />
            Example history before merge: <br />
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Since <span className='bg-neutral-800 px-2 rounded-lg'>main</span> has no new commits after B, Git simply moves the <span className='bg-neutral-800 px-2 rounded-lg'>main</span> pointer forward:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            Result:
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            <b>No merge commit is created.</b> <br />
            <br />
            <b>When to use fast-forward:</b> <br />
            • Small feature branches <br />
            • Solo development <br />
            • When a simple, linear history is preferred 
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
            <b className='text-[#F05032]'>{num(2)}</b> The --no-ff (No Fast-Forward) Merge
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>non-fast-forward merge</b> forces Git to create a merge commit even if a fast-forward was possible.
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            Result history:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            Why use <span className='bg-neutral-800 px-2 rounded-lg'>--no-ff</span> ? <br />
            • Preserves the idea of a branch in history <br />
            • Makes it clear what work belonged to which feature <br />
            • Helpful in team environments <br />
            <br />
            Many teams use:
            <CodeBlock language="bash" filename="" code={code6} />
            as a standard practice.
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
            <b className='text-[#F05032]'>{num(3)}</b> The 3-Way Merge (Most Common Case)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used when branches have <b>diverged</b>, i.e., both have new commits. <br />
            <br />
            History example:
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            Command:
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            Git finds: <br />
            • Base commit (B) <br />
            • Current branch commit (C) <br />
            • Branch being merged commit (E) <br />
            <br />
            It combines all three → creates a <b>merge commit</b>. <br />
            3-way merges preserve full history and are the standard merge type in shared repos.
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
            <b className='text-[#F05032]'>{num(4)}</b> Squash Merge
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A squash merge <b>compresses all commits</b> of a branch into one. <br />
            <br />
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            Result:
            <CodeBlock language="bash" filename="" code={code10} /> <br />
            <b>Why squash?</b> <br />
            • Simplifies messy or experimental commit history <br />
            • Keeps  <span className='bg-neutral-800 px-2 rounded-lg'>main</span> very clean <br />
            <br />
            It is ideal for: <br />
            • Early stage prototypes <br />
            • Inexperienced contributors <br />
            • Large PRs broken into many small commits 
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
            <b className='text-[#F05032]'>{num(5)}</b> Merge Strategy Options (--strategy)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Git merges can be influenced using strategies. <br />
            <br />
            <b>5.1 Recursive Strategy (default)</b> <br />
            <br />
            The standard for merging two branches.
            <CodeBlock language="bash" filename="" code={code11} /> <br />
            <b>5.2 Ours Strategy</b> <br />
            <br />
            Keeps your branch&apos;s changes, ignores the incoming branch.
            <CodeBlock language="bash" filename="" code={code12} />
            Useful for: <br />
            • Marking a branch as merged <br />
            • Keeping history but discarding code <br />
            <br />
            <b>5.3 Octopus Strategy</b> <br />
            <br />
            For merging multiple branches at once. <br />
            <CodeBlock language="bash" filename="" code={code13} />
            Used mainly in large automated integration flows.
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
            <b className='text-[#F05032]'>{num(6)}</b> Choosing the Right Merge Behavior
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Your decision depends on your team&apos;s workflow: <br />
            <br />
            <b>Fast-Forward (Default)</b> <br />
            • Clean linear history <br />
            • Simple and useful for solo developers <br />
            <br />
            <b>No Fast-Forward</b> <br />
            • Keeps feature branches visible in history <br />
            • Enables better code review tracking <br />
            <br />
            <b>Squash</b> <br />
            • Great for tidying up messy branches <br />
            • Best for feature branches with many commits <br />
            <br />
            <b>3-Way Merge</b> <br />
            • Safe, preserves all contributions <br />
            • Standard in teams with parallel work
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
            <b className='text-[#F05032]'>{num(7)}</b> Best Practices
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Fast-forward for small or personal branches <br />
            • No-ff for major features to preserve branch structure <br />
            • Squash for cleanup <br />
            • Avoid rewriting history on shared branches <br />
            • Keep branches short-lived to avoid complex merges
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
            • <b>Fast-forward moves the branch pointer directly</b>—no merge commit. <br />
            • <b>No-fast-forward creates a merge commit</b>, even if not needed. <br />
            • <b>3-way merge</b> handles diverged branches with a new commit. <br />
            • <b>Squash merge</b> compresses all commits into one. <br />
            • Merge strategies (<span className='bg-neutral-800 px-2 rounded-lg'>recursive</span>, <span className='bg-neutral-800 px-2 rounded-lg'>ours</span>, <span className='bg-neutral-800 px-2 rounded-lg'>octopus</span>) offer additional control. <br />
            • Choose merge type based on whether you want a clean history, explicit feature boundaries, or simplified commits.
          </div>
        </motion.div>
      </div>
    </main>
  )
}