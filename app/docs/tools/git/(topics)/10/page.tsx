'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `touch .gitignore`

  const code2 = `node_modules/
.env
*.log
dist/`

  const code3 = `secret.txt`

  const code4 = `*.log
*.tmp`

  const code5 = `node_modules/
build/
cache/`

  const code6 = `logs/*.log`

  const code7 = `*.config
!important.config`

  const code8 = `*
!/src/`

  const code9 = `git rm --cached <file>`

  const code10 = `git rm --cached .env`

  const code11 = `git config --global core.excludesfile ~/.gitignore_global`

  const code12 = `.DS_Store
Thumbs.db
*.swp`

  const code13 = `npx gitignore node`

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
            Ignoring Files
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
            <b className='text-[#F05032]'>{num(1)}</b> What is .gitignore?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Often, there are files in your project that you <b>do not want Git to track</b> — logs, build outputs, temporary configs, environment variables, system files, etc. <br />
            <br />
            Git provides the <span className='bg-neutral-800 px-2 rounded-lg'>.gitignore</span> file to help you control exactly what gets tracked and what doesn&apos;t. <br />
            <br />
            A <span className='bg-neutral-800 px-2 rounded-lg'>.gitignore</span> file tells Git <b>which files or directories should be completely ignored</b>. <br />
            <br />
            Git will: <br />
            • Not track them <br />
            • Not show them in <span className='bg-neutral-800 px-2 rounded-lg'>git status</span> <br />
            • Not include them in commits <br />
            <br />
            Examples of files usually ignored: <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>node_modules/</span> <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>*.log</span> <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>.env</span> <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>dist/</span> <br />
            • Temporary IDE files like <span className='bg-neutral-800 px-2 rounded-lg'>.vscode/</span>, <span className='bg-neutral-800 px-2 rounded-lg'>.idea/</span>
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
            <b className='text-[#F05032]'>{num(2)}</b> Creating a .gitignore File
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Simply create a file named <span className='bg-neutral-800 px-2 rounded-lg'>.gitignore</span> in the root of your repo:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Then add ignore patterns inside it, for example: <br />
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            Each entry tells Git what to ignore.
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
            <b className='text-[#F05032]'>{num(3)}</b> Pattern Rules in .gitignore
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Ignore files by name</b>
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            <b>Ignore by extension</b>
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            <b>Ignore directories</b>
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            <b>Ignore files in specific folder</b>
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            <b>Ignore everything except specific files</b>
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            <b>Ignore all except one folder</b>
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            Git&apos;s pattern system is powerful and flexible.
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
            <b className='text-[#F05032]'>{num(4)}</b> Ignoring Files That Are Already Tracked
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>.gitignore</span> only prevents <b>new files</b> from being tracked. <br />
            If a file is already committed, Git continues tracking it. <br />
            <br />
            To stop tracking a file you&apos;ve already committed:
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code10} /> <br />
            Then add it to <span className='bg-neutral-800 px-2 rounded-lg'>.gitignore</span>.
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
            <b className='text-[#F05032]'>{num(5)}</b> Global .gitignore (User-Wide Ignore Rules)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can create a global ignore file for patterns you want to avoid in <b>all</b> repositories on your machine. <br />
            <br />
            <b>Set a global ignore file:</b>
            <CodeBlock language="bash" filename="" code={code11} /> <br />
            Then edit that file:
            <CodeBlock language="bash" filename="" code={code12} /> <br />
            This keeps OS-specific or editor-specific junk out of every project.
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
            <b className='text-[#F05032]'>{num(6)}</b> Useful .gitignore Templates
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            GitHub maintains ready-made templates for various environments and languages (Node.js, Python, Java, Flutter, Go, Unity, etc.). <br />
            <br />
            You can browse them by searching for: <span className='bg-neutral-800 px-2 rounded-lg'>GitHub gitignore templates</span> <br />
            <br />
            Or use this command (if repo already has <span className='bg-neutral-800 px-2 rounded-lg'>.gitignore</span>):
            <CodeBlock language="bash" filename="" code={code13} /> <br />
            Templates save time and reduce mistakes.
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
            • <span className='bg-neutral-800 px-2 rounded-lg'>.gitignore</span> tells Git which files or folders to ignore, preventing them from being tracked. <br />
            • It supports powerful patterns: extensions, names, directories, wildcard rules, and exceptions. <br />
            • To stop tracking an already-committed file, use <span className='bg-neutral-800 px-2 rounded-lg'>git rm --cached</span>. <br />
            • You can set up a <b>global</b> ignore file for system-wide patterns. <br />
            • Using standard ignore templates helps maintain clean repos and avoid accidental commits of sensitive or unnecessary files.
          </div>
        </motion.div>
      </div>
    </main>
  )
}