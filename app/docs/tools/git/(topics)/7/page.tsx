'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const table1 = [
    { action: 'Add a file to staging', command: 'git add <file>' },
    { action: 'Add all changes', command: 'git add .' },
    { action: 'See staged files', command: 'git status' },
    { action: 'See staged diff', command: 'git diff --staged' },
    { action: 'Unstage a file', command: 'git restore --staged <file>' },
  ]


  const code1 = `Working Directory  →  Staging Area  →  Repository
(untracked files)      (selected changes)    (committed history)`

  const code2 = `git add index.html`

  const code3 = `git add .`

  const code4 = `git add *.js`

  const code5 = `git status`

  const code6 = `git diff --staged`

  const code7 = `git restore --staged <filename>`

  const code8 = `git restore --staged main.py`

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
            Staging Area
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
            <b className='text-[#F05032]'>{num(1)}</b> What is the Staging Area?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When you modify files in your project: <br />
            <b>1.</b> They start in the <b>working directory</b> (untracked or modified). <br />
            <b>2.</b> You add specific files to the <b>staging area</b> using <span className='bg-neutral-800 px-2 rounded-lg'>git add</span>. <br />
            <b>3.</b> You finalize them into the repository with <span className='bg-neutral-800 px-2 rounded-lg'>git commit</span>. <br />
            This gives you <b>granular control</b> over what goes into each commit. <br />
            <br />
            Visualized:
            <CodeBlock language="bash" filename="" code={code1} />
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
            <b className='text-[#F05032]'>{num(2)}</b> Adding Files to the Staging Area
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can stage individual files or all changes at once. <br />
            <br />
            <b>Stage a single file:</b> <br />
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            <b>Stage all modified files:</b> <br />
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            <b>Stage specific file patterns:</b> <br />
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            This makes only selected files part of the next commit — useful when you&apos;re working on multiple things at once but want clean, focused commits.
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
            <b className='text-[#F05032]'>{num(3)}</b> Checking the Staging Area Status
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Use:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            You&apos;ll see three categories: <br />
            • <b>Untracked files</b>: new files not staged yet <br />
            • <b>Changes not staged for commit</b>: modified but unstaged <br />
            • <b>Changes to be committed</b>: staged and ready for commit <br />
            You can also preview exact staged changes: <br />
            <br />
            You can also preview exact staged changes:
            <CodeBlock language="bash" filename="" code={code6} />
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
            <b className='text-[#F05032]'>{num(4)}</b> Removing Files from the Staging Area
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To unstage a file (move it back to the working directory):
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            This keeps your file changes in the working directory but removes them from the next commit — perfect if you added something by mistake.
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
            <b className='text-[#F05032]'>{num(5)}</b> Why the Staging Area Matters
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <b>Selective Commits</b>: You can commit only specific changes rather than everything modified. <br />
            • <b>Review Before Commit</b>: Ensures you don&apos;t accidentally save debug code or temporary edits. <br />
            • <b>Organized History</b>: Enables clean commit messages tied to logical feature units. <br />
            Without the staging area, every change would go directly into commits — making history messy and harder to manage.
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
            <b className='text-[#F05032]'>{num(6)}</b> Useful Commands Recap
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Action</TableHead>
                  <TableHead>Command</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table1.map((content) => (
                  <TableRow key={content.action}>
                    <TableCell>{content.action}</TableCell>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.command}</span></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
            <b className='text-[#F05032]'>{num(7)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • The <b>staging area</b> is Git&apos;s &quot;review zone&quot; — where you prepare what goes into your next commit. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>git add</span> to stage and <span className='bg-neutral-800 px-2 rounded-lg'>git restore --staged</span> to unstage changes. <br />
            • Always run <span className='bg-neutral-800 px-2 rounded-lg'>git status</span> before committing to confirm what&apos;s being saved. <br />
            • A clean, deliberate staging process keeps your Git history readable and professional.
          </div>
        </motion.div>
      </div>
    </main>
  )
}