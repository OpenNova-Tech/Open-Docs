'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
  const code1 = `git --version`

  const code2 = `git version 2.xx.x.windows.x`

  const code3 = `brew install git`

  const code4 = `xcode-select --install`

  const code5 = `sudo apt update
sudo apt install git`

  const code6 = `sudo dnf install git`

  const code7 = `sudo pacman -S git`

  return (
    // <main className='min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-slate-900 py-12 px-6'>
    <main className='pt-32  dark:bg-black  py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#F05032] bg-black'>
            Installation of Git
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100'>
            <b className='text-[#F05032]'>2.1</b> Windows Installation
          </h2>
          <div className='max-w-3xl mx-auto'>
            1. Go to <a className='text-indigo-500 underline' href='https://git-scm.com'>https://git-scm.com</a>. <br />
            2. Click Download for Windows. <br />
            3. Run the downloaded <span className='bg-neutral-800 px-2 rounded-lg'>.exe</span> file. <br />
            4. During Installation: <br />
            &nbsp;&nbsp; • Select &quot;Use Git from the command line and also from 3rd-party software&quot;. <br />
            &nbsp;&nbsp; • Use default options unless you have specific preferences. <br />
            <br />
            Once done, open Git Bash from the Start Menu <br />
            <CodeBlock language='bash' filename='bash' code={code1} /> <br />
            Expected output <br />
            <CodeBlock language='bash' filename='bash' code={code2} /> <br />
            🪟 Windows Installation is complete.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100'>
            <b className='text-[#F05032]'>2.2</b> MacOS Installation
          </h2>
          <div className='max-w-3xl mx-auto'>
            OPTION 1: Using Homebrew (Recommended)
            <CodeBlock language='bash' filename='bash' code={code3} /> <br />
            OPTION 2: Using Xcode Command Line Tools <br />
            <CodeBlock language='bash' filename='bash' code={code4} /> <br />
            Now Verify using <br />
            <CodeBlock language='bash' filename='bash' code={code1} /> <br />
            🍎 MacOS Installation is complete.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100'>
            <b className='text-[#F05032]'>2.3</b> Linux Installation
          </h2>
          <div className='max-w-3xl mx-auto'>
            For Ubuntu / Debian:
            <CodeBlock language='bash' filename='bash' code={code5} /> <br />
            For Fedora:
            <CodeBlock language='bash' filename='bash' code={code6} /> <br />
            For Arch:
            <CodeBlock language='bash' filename='bash' code={code7} /> <br />
            Now Verify using <br />
            <CodeBlock language='bash' filename='bash' code={code1} /> <br />
            🐧 Linux Installation is complete.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100'>
            <b className='text-[#F05032]'>2.4</b> Confirm Git Installation
          </h2>
          <div className='max-w-3xl mx-auto'>
            Once installed, run:
            <CodeBlock language='bash' filename='bash' code={code1} /> <br />
            If Git responds with a version number, you are all set to move forward!
          </div>
        </motion.div>
        <motion.div
          className='flex justify-center gap-6 pt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href='1'>
            <button
              className='bg-transparent border border-[#F05032] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'
            >
              ← View Previous
            </button>
          </Link>
          <Link href='3'>
            <button
              className='bg-transparent border border-[#F05032] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'
            >
              View Next →
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}