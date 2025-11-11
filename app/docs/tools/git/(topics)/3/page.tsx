'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`

  const code2 = `git config --global --list`

  const code3 = `git config user.name "Project Specific Name"
git config user.email "project.email@example.com"`

  const code4 = `git config --global init.defaultBranch main`

  const code5 = `git config --global core.editor "code --wait"   # VS Code
git config --global core.editor "nano"          # Nano
git config --global core.editor "vim"           # Vim`

  const code6 = `git config --global color.ui auto`

  const code7 = `git config --list`

  const code8 = `git config --show-origin user.name`

  const code9 = `git config --global --edit`

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
            Git Configuration
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(1)}</b> Setting Up User Information
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Git records the author&apos;s name and email with every commit. <br />
            Set them globally (recommended for first-time setup): <br />
            <br />
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            To verify:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            If you want to override these details for a specific repository only:
            <CodeBlock language="bash" filename="" code={code3} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(2)}</b> Configuring Default Branch Name
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            By default, Git may use <span className='bg-neutral-800 px-2 rounded-lg'>master</span> as the main branch. You can set a preferred default branch name like <span className='bg-neutral-800 px-2 rounded-lg'>main</span>: <br />
            <br />
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            This ensures all new repositories start with <span className='bg-neutral-800 px-2 rounded-lg'>main</span> as the initial branch.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(3)}</b> Setting Up the Default Editor
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Git uses an editor for commit messages and rebase operations. You can configure your preferred editor:
            <CodeBlock language="bash" filename="" code={code5} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(4)}</b> Enabling Color Output
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Make Git command output easier to read:
            <CodeBlock language="bash" filename="" code={code6} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(5)}</b> Checking All Configurations
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can view all active configuration values with:
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            To see where a specific config is defined:
            <CodeBlock language="bash" filename="" code={code8} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F05032]'>{num(6)}</b> Editing Configuration Files Directly
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Git stores configurations in text files: <br />
            • <b>System level</b>: <span className='bg-neutral-800 px-2 rounded-lg'>/etc/gitconfig</span> <br />
            • <b>Global level</b>: <span className='bg-neutral-800 px-2 rounded-lg'>~/.gitconfig</span> or <span className='bg-neutral-800 px-2 rounded-lg'>C:\Users\&lt;username&gt;\.gitconfig</span> <br />
            • <b>Local level</b>: <span className='bg-neutral-800 px-2 rounded-lg'>.git/config</span> inside the repository <br />
            <br />
            Open <span className='bg-neutral-800 px-2 rounded-lg'>.gitconfig</span> for manual editing:
            <CodeBlock language="bash" filename="" code={code9} />
          </div>
        </motion.div>
      </div>
    </main>
  )
}