'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `git push`

  const code2 = `git push -u origin main`

  const code3 = `git push`

  const code4 = `git pull`

  const code5 = `git pull = git fetch + git merge`

  const code6 = `git fetch`

  const code7 = `git pull`

  const code8 = `git pull --rebase`

  const code9 = `git push origin feature/login`

  const code10 = `git pull origin develop`

  const code11 = `! [rejected] main -> main (fetch first)`

  const code12 = `git pull --rebase
git push`

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
            Syncing with Remote (Push & Pull)
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
            <b className='text-[#F05032]'>{num(1)}</b> What Syncing Really Means
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Syncing involves three locations: <br />
            <b>•</b> <b>Working Directory</b> - your current files <br />
            <b>•</b> <b>Local Repository</b> - your committed history <br />
            <b>•</b> <b>Remote Repository</b> - GitHub (or other remote) <br />
            Push and pull move commits <b>between local and remote</b>, not raw files.
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
            <b className='text-[#F05032]'>{num(2)}</b> Pushing Changes to Remote
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Push sends your local commits to the remote branch.
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            First-time push (if upstream not set):
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            After that, simple pushes work:
            <CodeBlock language="bash" filename="" code={code3} /> 
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
            <b className='text-[#F05032]'>{num(3)}</b> Pulling Changes from Remote
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Pull fetches commits from the remote and merges them into your current branch.
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            Under the hood:
            <CodeBlock language="bash" filename="" code={code5} /> <br />
            This means it can create merge commits if histories diverge.
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
            <b className='text-[#F05032]'>{num(4)}</b> Fetch vs Pull (Important Distinction)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Fetch</b> <br />
            <CodeBlock language="bash" filename="" code={code6} />
            <b>•</b> Downloads remote changes <br />
            <b>•</b> Does not modify your working directory <br />
            <b>•</b> Safe for inspection <br />
            <br />
            <b>Pull</b> <br />
            <CodeBlock language="bash" filename="" code={code7} />
            <b>•</b> Fetches and merges immediately <br />
            <b>•</b> Can cause conflicts <br />
            <br />
            Best practice in teams: <br />
            <b>Fetch first, then merge manually</b>
            <br />
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
            <b className='text-[#F05032]'>{num(5)}</b> Pull with Rebase
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            To keep a clean history:
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            This: <br />
            <b>•</b> Replays your commits on top of remote commits <br />
            <b>•</b> Avoids merge commits <br />
            <b>•</b> Produces a linear history <br />
            Common team standard.
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
            <b className='text-[#F05032]'>{num(6)}</b> Syncing a Specific Branch
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Push a specific branch:
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            Pull a specific branch:
            <CodeBlock language="bash" filename="" code={code10} />
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
            <b className='text-[#F05032]'>{num(7)}</b> Handling Push Rejections
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            If your push is rejected:
            <CodeBlock language="bash" filename="" code={code11} /> <br />
            Fix:
            <CodeBlock language="bash" filename="" code={code12} /> <br />
            This updates your local branch before pushing.
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
            <b className='text-[#F05032]'>{num(8)}</b> Best Practices
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Pull before starting new work <br />
            <b>•</b> Push small, meaningful commits <br />
            <b>•</b> Avoid pushing broken code to shared branches <br />
            <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>pull --rebase</span> for clean history <br />
            <b>•</b> Never force push to shared branches
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
            <b className='text-[#F05032]'>{num(9)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>Push</b> sends commits to the remote; <b>pull</b> brings commits from it. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>git pull</span> = fetch + merge; <span className='bg-neutral-800 px-2 rounded-lg'>git fetch</span> is safer for inspection. <br />
            <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>git pull --rebase</span> to avoid unnecessary merge commits. <br />
            <b>•</b> Push rejections mean the remote has newer commits—pull first. <br />
            <b>•</b> Sync often to reduce conflicts and improve collaboration.
          </div>
        </motion.div>
      </div>
    </main>
  )
}