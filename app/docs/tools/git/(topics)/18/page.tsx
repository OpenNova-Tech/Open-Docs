'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git remote add origin <repository-url>`

  const code2 = `git remote add origin https://github.com/username/project-name.git`

  const code3 = `git remote -v`

  const code4 = `https://github.com/username/repo.git`

  const code5 = `git@github.com:username/repo.git`

  const code6 = `git branch -M main
git push -u origin main`

  const code7 = `git clone <repository-url>`

  const code8 = `git remote remove origin
git remote add origin <new-url>`

  const code9 = `git remote set-url origin <correct-url>`

  const code10 = `ssh -T git@github.com`

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
            Connecting to GitHub
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
            <b className='text-[#F05032]'>{num(1)}</b> What &quot;Connecting to GitHub&quot; Means
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When you connect to GitHub, you: <br />
            <b>•</b> Create a remote repository on GitHub <br />
            <b>•</b> Link it to your local Git repo using a <b>remote URL</b> <br />
            <b>•</b> Push and pull changes between local and remote <br />
            GitHub becomes a <b>remote</b>, not a replacement for Git.
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
            <b className='text-[#F05032]'>{num(2)}</b> Creating a Repository on GitHub
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            On GitHub: <br />
            <b>1.</b> Click <b>New Repository</b> <br />
            <b>2.</b> Choose a name <br />
            <b>3.</b> Do <b>not</b> initialize with README (if repo already exists locally) <br />
            <b>4.</b> Copy the repository URL (HTTPS or SSH) <br />
            This URL is used to connect your local repo.
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
            <b className='text-[#F05032]'>{num(3)}</b> Adding a Remote to a Local Repository
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Inside your local Git repository:
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>origin</span> is the default remote name (convention, not mandatory). <br />
            <br />
            Verify:
            <CodeBlock language="bash" filename="" code={code3} /> 
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
            <b className='text-[#F05032]'>{num(4)}</b> HTTPS vs SSH Authentication
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>HTTPS</b> <br />
            <b>•</b> Easier for beginners <br />
            <b>•</b> Requires GitHub Personal Access Token (not password) <br />
            <br />
            Example:
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            <b>SSH</b> <br />
            <b>•</b> More secure <br />
            <b>•</b> No repeated authentication after setup <br />
            <br />
            Example:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            Most professional setups prefer <b>SSH</b>.
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
            <b className='text-[#F05032]'>{num(5)}</b> Pushing Code for the First Time
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            After adding the remote:
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>-u</span> sets upstream tracking <br />
            <b>•</b> Future pushes can use just <span className='bg-neutral-800 px-2 rounded-lg'>git push</span>
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
            <b className='text-[#F05032]'>{num(6)}</b> Connecting an Existing GitHub Repo to Local
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            If the repo already exists on GitHub:
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            This:
            <b>•</b> Downloads the full history <br />
            <b>•</b> Automatically sets the remote <br />
            <b>•</b> Sets up tracking branches
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
            <b className='text-[#F05032]'>{num(7)}</b> Common Issues & Fixes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Remote Already Exists</b>
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            <b>Wrong Remote URL</b>
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            <b>Permission Denied (SSH)</b> <br />
            <b>•</b> Ensure SSH key is added to GitHub <br />
            <b>•</b> Test with:
            <CodeBlock language="bash" filename="" code={code10} /> <br />
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
            <b>•</b> Connecting to GitHub links your local repo to a remote repository. <br />
            <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>git remote add origin &lt;url&gt;</span> to establish the connection. <br />
            <b>•</b> HTTPS is simpler; SSH is preferred for long-term use. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git push -u origin main</span> sets upstream for easy future pushes. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git clone</span> automatically connects and configures a remote.
          </div>
        </motion.div>
      </div>
    </main>
  )
}