'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git clone <repository-url>`

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
            Cloning
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
            <b className='text-[#F05032]'>{num(1)}</b> What Cloning Does
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When you clone a repository, Git: <br />
            <b>•</b> Downloads the entire commit history <br />
            <b>•</b> Creates a local working directory <br />
            <b>•</b> Automatically sets up the <span className='bg-neutral-800 px-2 rounded-lg'>origin</span> remote <br />
            <b>•</b> Links local branches to remote-tracking branches <br />
            Cloning is <b>one-time setup per machine</b>.
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
            <b className='text-[#F05032]'>{num(2)}</b> Basic Clone Command
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code2} />
            This creates a new folder named after the repository.
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
            <b className='text-[#F05032]'>{num(3)}</b> Cloning with SSH vs HTTPS
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>HTTPS</b> <br />
            <CodeBlock language="bash" filename="" code={code3} />
            <b>•</b> Easy to start <br />
            <b>•</b> Requires authentication on push <br />
            <br />
            <b>SSH</b> <br />
            <CodeBlock language="bash" filename="" code={code4} />
            <b>•</b> Requires SSH key setup <br />
            <b>•</b> No repeated authentication <br />
            <b>•</b> Preferred for long-term work 
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
            <b className='text-[#F05032]'>{num(4)}</b> Cloning into a Custom Directory
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            Example:
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
            <b className='text-[#F05032]'>{num(5)}</b> Shallow Cloning (Partial History)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To download only recent commits:
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            Useful when: <br />
            <b>•</b> Repo is very large <br />
            <b>•</b> You only need the latest state <br />
            <b>•</b> History is not required
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
            <b className='text-[#F05032]'>{num(6)}</b> Cloning a Specific Branch
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            This checks out the specified branch instead of the default one.
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
            <b className='text-[#F05032]'>{num(7)}</b> Fork vs Clone (Quick Clarification)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>Clone</b> → local copy of a repository <br />
            <b>•</b> <b>Fork</b> → server-side copy under your GitHub account <br />
            Typical open-source flow: <br />
            <b>1.</b> Fork repository <br />
            <b>2.</b> Clone your fork <br />
            <b>3.</b> Push changes to your fork <br />
            <b>4.</b> Create a Pull Request
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
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git clone</span> creates a full local copy of a remote repository. <br />
            <b>•</b> Cloning automatically sets up <span className='bg-neutral-800 px-2 rounded-lg'>origin</span> and branch tracking. <br />
            <b>•</b> SSH cloning is preferred for frequent contributors. <br />
            <b>•</b> Shallow clones save time and space for large repositories. <br />
            <b>•</b> Forking and cloning serve different purposes.
          </div>
        </motion.div>
      </div>
    </main>
  )
}