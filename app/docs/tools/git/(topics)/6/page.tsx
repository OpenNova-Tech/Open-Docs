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
    { mistake: 'Running git init inside an already initialized repo', matters: 'Creates nested repositories (confusing and error-prone)' },
    { mistake: 'Forgetting .gitignore before first commit', matters: 'Leads to tracking unnecessary files' },
    { mistake: 'Not checking remote before pushing', matters: 'May overwrite or diverge from the actual project history' },
  ]

  const table2 = [
    { action: 'Initialize a new repo', command: 'git init' },
    { action: 'Clone an existing repo', command: 'git clone <url>' },
    { action: 'Check repository status', command: 'git status' },
    { action: 'Add a remote', command: 'git remote add origin <url>' },
    { action: 'Push to remote', command: 'git push -u origin main' },
  ]


  const code1 = `git init`

  const code2 = `mkdir my-project
cd my-project
git init`

  const code3 = `Initialized empty Git repository in /my-project/.git/`

  const code4 = `git clone <repository-url>`

  const code5 = `git clone https://github.com/user/project.git`

  const code6 = `git status`

  const code7 = `git remote -v`

  const code8 = `git remote add origin <repository-url>`

  const code9 = `git push -u origin main`

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
            Creating a Repository
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
            <b className='text-[#F05032]'>{num(1)}</b> What is a Git Repository?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>repository (repo)</b> is a workspace where Git keeps track of your project&apos;s entire history. <br />
            There are two main types: <br />
            • <b>Local Repository</b>: Exists on your system and contains your project files along with the .git directory. <br />
            • <b>Remote Repository</b>: Hosted on a platform like GitHub, GitLab, or Bitbucket for collaboration and backup. <br />
            <br />
            You can think of it like this: <br />
            &quot;The folder you work in&quot; = Working Directory <br />
            &quot;The folder Git tracks&quot; = Repository
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
            <b className='text-[#F05032]'>{num(2)}</b> Creating a Repository
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can create a Git repository in <b>two main ways</b>: <br />
            <br />
            <b>a. Initialize a New Repository</b> <br />
            <br />
            If you have an existing project folder:
            <CodeBlock language="bash" filename="" code={code1} />
            This command: <br />
            • Creates a new <span className='bg-neutral-800 px-2 rounded-lg'>.git</span> folder (where all Git data lives) <br />
            • Starts tracking the directory as a new repository <br />
            <br />
            Example:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            Output:
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            <b>b. Clone an Existing Repository</b> <br />
            <br />
            If you want to work on a remote project:
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            This will: <br />
            • Download the entire history of the repository <br />
            • Create a new folder with the project files <br />
            • Automatically link it to the remote origin
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
            <b className='text-[#F05032]'>{num(3)}</b> Verifying Your Repository
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            After initialization or cloning:
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            This shows: <br />
            • Whether the current folder is under Git control <br />
            • Which branch you&apos;re on <br />
            • Which files are tracked or untracked <br />
            <br />
            You can also check the repository details:
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            (Useful to confirm if a remote is linked.)
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
            <b className='text-[#F05032]'>{num(4)}</b> Adding a Remote (Optional)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            If you initialized locally and later want to link to a remote:
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            Then push your code:
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            This allows you to sync your local work with a GitHub or GitLab repository.
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
            <b className='text-[#F05032]'>{num(5)}</b> Common Mistakes to Avoid
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mistake</TableHead>
                  <TableHead>Why It Matters</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table1.map((content) => (
                  <TableRow key={content.mistake}>
                    <TableCell>{content.mistake}</TableCell>
                    <TableCell>{content.matters}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
                {table2.map((content) => (
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
            • A <b>Git repository</b> is the foundation of version control — it tracks all your project changes. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>git init</span> to start fresh or <span className='bg-neutral-800 px-2 rounded-lg'>git clone</span> to copy an existing project. <br />
            • Avoid re-initializing repositories or committing unwanted files. <br />
            • Always confirm your remote and branch setup before pushing code. <br />
            • Once a repository is set up, you can move on to <b>staging changes</b> — the next step in Git&apos;s workflow.
          </div>
        </motion.div>
      </div>
    </main>
  )
}