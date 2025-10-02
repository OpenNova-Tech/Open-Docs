'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
  const code1 = `pwd        # Print current working directory
ls         # List files and directories
cd /path   # Change directory
cd ..      # Go one level up`

  const code2 = `mkdir myfolder`

  const code3 = `touch file.txt`

  const code4 = `cp file.txt backup.txt
mv file.txt docs/
rm file.txt`

  const code5 = `echo "Hello from terminal!"`

  const code6 = `./hello.sh`

  return (
    <main className='pt-32 dark:bg-black py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#89e051] bg-black'>
            Terminal Basics
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>4.1</b> What is a Terminal
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>terminal</b> (or console) is a text-based interface that allows users to interact with the operating system. It takes commands typed by the user and passes them to the shell for execution.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>4.2</b> Starting the Terminal
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • On <b>Linux/macOS</b>: Search for Terminal in applications or use <span className='bg-neutral-800 px-2 rounded-lg'>Ctrl+Alt+T</span> (Linux). <br />
            • On <b>Windows</b>: Use  a terminal emulator like Git Bash / WSL.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>4.3</b> Navigating the Filesystem
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Some of the most common commands:
            <CodeBlock language="shell" filename="bash" code={code1} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>4.4</b> Working with Files & Directories
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Creating a directory:
            <CodeBlock language="shell" filename="bash" code={code2} />
            <br />
            • Creating a file:
            <CodeBlock language="shell" filename="bash" code={code3} />
            <br />
            • Copy, move, or delete:
            <CodeBlock language="shell" filename="bash" code={code4} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>4.5</b> Running Programs & Scripts
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Run a command (example):
            <CodeBlock language="shell" filename="bash" code={code5} />
            <br />
            • Run a shell script:
            <CodeBlock language="shell" filename="bash" code={code6} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>4.6</b> Stopping Commands
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Sometimes a command keeps running (like <span className='bg-neutral-800 px-2 rounded-lg'>ping</span> or <span className='bg-neutral-800 px-2 rounded-lg'>top</span>). To stop it: <br />
            <br />
            • Press <span className='bg-neutral-800 px-2 rounded-lg'>Ctrl + C</span> → Interrupts the running process. <br />
            • Press <span className='bg-neutral-800 px-2 rounded-lg'>Ctrl + Z</span> → Suspends the process.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>4.7</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • The <b>terminal</b> is your main gateway to interact with the shell. <br />
            • Use commands like <span className='bg-neutral-800 px-2 rounded-lg'>pwd</span>, <span className='bg-neutral-800 px-2 rounded-lg'>ls</span>, and <span className='bg-neutral-800 px-2 rounded-lg'>cd</span> to <b>navigate</b>. <br />
            • Manage files with <span className='bg-neutral-800 px-2 rounded-lg'>mkdir</span>, <span className='bg-neutral-800 px-2 rounded-lg'>touch</span>, <span className='bg-neutral-800 px-2 rounded-lg'>cp</span>, <span className='bg-neutral-800 px-2 rounded-lg'>mv</span>, <span className='bg-neutral-800 px-2 rounded-lg'>rm</span>. <br />
            • <b>Execute scripts</b> directly from the terminal. <br />
            • Learn <b>keyboard shortcuts</b> like <span className='bg-neutral-800 px-2 rounded-lg'>Ctrl + C</span> and <span className='bg-neutral-800 px-2 rounded-lg'>Ctrl + Z</span> to control running processes.
          </div>
        </motion.div>

        <motion.div
          className='flex justify-center gap-6 pt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href='3'>
            <button className='bg-transparent border border-[#89e051] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
              ← View Previous
            </button>
          </Link>
          <Link href='5'>
            <button className='bg-transparent border border-[#89e051] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
              View Next →
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
