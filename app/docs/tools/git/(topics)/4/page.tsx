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

  const table = [
    { folder: 'HEAD', purpose: 'Points to the current branch you’re on. (e.g., ref: refs/heads/main)' },
    { folder: 'config', purpose: 'Stores repository-specific configuration (user name, email, remotes, etc.)' },
    { folder: 'description', purpose: 'Used by Git web interfaces; mostly unused in local repos.' },
    { folder: 'hooks/', purpose: 'Contains scripts that run on specific Git events (e.g., before commit).' },
    { folder: 'info/', purpose: 'Includes additional info like the global exclude file (untracked ignores).' },
    { folder: 'objects/', purpose: 'Stores all commits, trees, and blobs — the actual data of your project.' },
    { folder: 'refs/', purpose: 'Contains references (pointers) to commits: branches, tags, and remotes.' },
    { folder: 'logs/', purpose: 'Records every update made to refs (useful for recovering lost commits).' },
    { folder: 'index', purpose: 'Tracks what’s currently in the staging area.' },
  ]

  const code1 = `git init`

  const code2 = `my-project/
│
├── .git/
├── index.html
├── style.css
└── script.js`

  const code3 = `ls -a`

  const code4 = `ref: refs/heads/main`

  const code5 = `cat .git/refs/heads/main`

  const code6 = `chmod +x .git/hooks/pre-commit`

  const code7 = `git fsck`

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
            Understanding .git Folder
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
            <b className='text-[#F05032]'>{num(1)}</b> Overview
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Every Git repository has a <b>hidden</b> <span className='bg-neutral-800 px-2 rounded-lg'>.git</span> <b>folder</b> at its root. <br />
            This folder is the <b>heart of Git</b> — it stores all metadata, commit history, branches, and configuration details. Deleting it will <b>erase the entire version history</b>, effectively turning your project into a regular, non-Git folder.
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
            <b className='text-[#F05032]'>{num(2)}</b> Where It Appears
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When you initialize a repository using:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Git creates a <span className='bg-neutral-800 px-2 rounded-lg'>.git</span> folder automatically:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            You can reveal it with:
            <CodeBlock language="bash" filename="" code={code3} />
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
            <b className='text-[#F05032]'>{num(3)}</b> Internal Structure
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Let&apos;s explore what&apos;s inside <span className='bg-neutral-800 px-2 rounded-lg'>.git/</span> and what each component does: <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Folder/File</TableHead>
                  <TableHead>Purpose</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.map((content) => (
                  <TableRow key={content.folder}>
                    <TableCell>{content.folder}</TableCell>
                    <TableCell>{content.purpose}</TableCell>
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
            <b className='text-[#F05032]'>{num(4)}</b> Example: The HEAD File
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The HEAD file tells Git where you are in the project&apos;s history. <br />
            <br />
            Example content:
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            This means you&apos;re currently working on the branch named <span className='bg-neutral-800 px-2 rounded-lg'>main</span>. <br />
            <br />
            When you check out another branch, Git updates the <span className='bg-neutral-800 px-2 rounded-lg'>HEAD</span> file accordingly.
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
            <b className='text-[#F05032]'>{num(5)}</b> The &quot;objects&quot; Folder - Git&apos;s Database
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Inside <span className='bg-neutral-800 px-2 rounded-lg'>objects/</span>, Git stores everything as <b>compressed snapshots</b>: <br />
            • <b>Blobs</b> → file content <br />
            • <b>Trees</b> → directory structure <br />
            • <b>Commits</b> → references to trees and parent commits <br />
            <br />
            Each object is identified by a <b>SHA-1 hash</b> (a unique ID). <br />
            Example object name: <span className='bg-neutral-800 px-2 rounded-lg'>b1/3f9c4d1e2a8d...</span> <br />
            <br />
            This structure allows Git to store massive histories efficiently without duplicating data.
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
            <b className='text-[#F05032]'>{num(6)}</b> The &quot;refs&quot; Folder - Pointers to Commits
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            References (or <b>refs</b>) act like bookmarks to specific commits: <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>refs/heads/main</span> → current branch&apos;s latest commit <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>refs/tags/v1.0</span> → commit tagged as version 1.0 <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>refs/remotes/origin/main</span> → last fetched commit from the remote repo <br />
            <br />
            You can inspect them manually: <br />
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            This outputs a commit hash.
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
            <b className='text-[#F05032]'>{num(7)}</b> Hooks Folder (Automation Scripts)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>hooks/</span> contains example scripts for automation. <br />
            <br />
            For instance: <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>pre-commit</span> → Runs before a commit <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>post-merge</span> → Runs after merging branches <br />
            <br />
            To activate one, remove the <span className='bg-neutral-800 px-2 rounded-lg'>.sample</span> extension and make it executable:
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
            <b className='text-[#F05032]'>{num(8)}</b> Common Troubleshooting Tip
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            If your repository behaves oddly or shows missing history, <b>never delete</b> <span className='bg-neutral-800 px-2 rounded-lg'>.git/</span>. <br />
            Instead, inspect it safely:
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            This command checks for any integrity issues in Git&apos;s internal data.
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
            <b className='text-[#F05032]'>{num(9)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <span className='bg-neutral-800 px-2 rounded-lg'>.git/</span> is <b>the repository&apos;s brain</b> — it holds all history, metadata, and configuration. <br />
            • Deleting or moving it disconnects your project from version control. <br />
            • The <span className='bg-neutral-800 px-2 rounded-lg'>objects/</span> and <span className='bg-neutral-800 px-2 rounded-lg'>refs/</span> directories power Git&apos;s entire commit and branch system. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>HEAD</span> shows which branch you&apos;re on; <span className='bg-neutral-800 px-2 rounded-lg'>index</span> tracks what&apos;s staged. <br />
            • Understanding <span className='bg-neutral-800 px-2 rounded-lg'>.git</span> helps you debug, recover commits, and use advanced Git commands confidently.
          </div>
        </motion.div>
      </div>
    </main>
  )
}