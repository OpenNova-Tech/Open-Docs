'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git fetch origin
git rebase origin/main`

  const code2 = `git clone https://github.com/username/project.git`

  const code3 = `git clone https://github.com/username/project.git`

  const code4 = `git clone git@github.com:username/project.git`

  const code5 = `git clone <repo-url> <folder-name>`

  const code6 = `git clone https://github.com/username/project.git my-project`

  const code7 = `git clone --depth 1 <repo-url>`

  const code8 = `git clone -b develop <repo-url>`


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
            Collaboration Workflow
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
            <b className='text-[#F05032]'>{num(1)}</b> Why a Workflow Is Necessary
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Without a defined workflow: <br />
            <b>•</b> Developers overwrite each other&apos;s work <br />
            <b>•</b> Conflicts become frequent and complex <br />
            <b>•</b> Code quality drops <br />
            <b>•</b> Releases become unpredictable <br />
            <br />
            A workflow answers: <br />
            <b>•</b> Where do features go? <br />
            <b>•</b> Who can push to <span className='bg-neutral-800 px-2 rounded-lg'>main</span>? <br />
            <b>•</b> How are changes reviewed? 
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
            <b className='text-[#F05032]'>{num(2)}</b> Common Branching Models
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>2.1 Feature Branch Workflow</b> <br />
            Most common and beginner-friendly. <br />
            Flow: <br />
            main <br />
              └── feature/xyz <br />
            Steps: <br />
            <b>1.</b> Create a feature branch <br />
            <b>2.</b> Commit changes <br />
            <b>3.</b> Push branch <br />
            <b>4.</b> Open Pull Request <br />
            <b>5.</b> Merge after review <br />
            Best for small to medium teams. <br />
            <br />
            <b>2.2 Git Flow</b> <br />
            More structured, used in release-heavy projects. <br />
            Branches: <br />
            <b>•</b> main → production <br />
            <b>•</b> develop → integration <br />
            <b>•</b> feature/* <br />
            <b>•</b> release/* <br />
            <b>•</b> hotfix/* <br />
            Pros: <br />
            <b>•</b> Clear separation of work <br />
            Cons: <br />
            <b>•</b> Heavy for small teams <br />
            <br />
            <b>2.3 Trunk-Based Development</b> <br />
            Advanced, used in high-velocity teams. <br />
            <b>•</b> One main branch (main) <br />
            <b>•</b> Very short-lived branches <br />
            <b>•</b> Frequent merges <br />
            Requires: <br />
            <b>•</b> Strong CI <br />
            <b>•</b> Feature flags <br />
            <b>•</b> Discipline
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
            <b className='text-[#F05032]'>{num(3)}</b> Pull Requests (PRs)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Pull Requests are the <b>core collaboration mechanism</b>. <br />
            <br />
            They provide: <br />
            <b>•</b> Frequent merges <br />
            <b>•</b> Automated testing <br />
            <b>•</b> Discussion <br />
            <b>•</b> Approval gates <br />
            <br />
            Typical PR rules: <br />
            <b>•</b> Small, focused changes <br />
            <b>•</b> Clear description <br />
            <b>•</b> Linked issue/ticket <br />
            <b>•</b> At least one reviewer 
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
            <b className='text-[#F05032]'>{num(4)}</b> Keeping Your Branch Up to Date
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Before pushing or opening a PR:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            This: <br />
            <b>•</b> Reduces conflicts <br />
            <b>•</b> Makes review easier <br />
            <b>•</b> Keeps history clean
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
            <b className='text-[#F05032]'>{num(5)}</b> Handling Merge Conflicts
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Conflicts happen when two people change the same lines. <br />
            <br />
            Best practices: <br />
            <b>•</b> Pull frequently <br />
            <b>•</b> Keep branches short-lived <br />
            <b>•</b> Resolve conflicts locally <br />
            <b>•</b> Test after resolution <br />
            <br />
            Never resolve conflicts directly on GitHub unless trivial.
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
            <b className='text-[#F05032]'>{num(6)}</b> Do&apos;s and Don&apos;ts in Team Workflows
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Do</b> <br />
            <b>•</b> Commit small, logical changes <br />
            <b>•</b> Write meaningful commit messages <br />
            <b>•</b> Pull before starting work <br />
            <b>•</b> Communicate before major changes <br />
            <br />
            <b>Don&apos;t</b> <br />
            <b>•</b> Force push to shared branches <br />
            <b>•</b> Commit directly to <span className='bg-neutral-800 px-2 rounded-lg'>main</span> <br />
            <b>•</b> Keep long-running branches <br />
            <b>•</b> Ignore CI failures
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
            <b>•</b> Collaboration workflows prevent conflicts and chaos. <br />
            <b>•</b> Feature-branch workflow is the most common and beginner-friendly. <br />
            <b>•</b> Pull Requests are central to team collaboration. <br />
            <b>•</b> Keeping branches up to date reduces merge conflicts. <br />
            <b>•</b> Clear rules and communication matter more than Git commands.
          </div>
        </motion.div>
      </div>
    </main>
  )
}