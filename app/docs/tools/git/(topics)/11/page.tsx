'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

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
            What is a Branch
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
            <b className='text-[#F05032]'>{num(1)}</b> Why Branches Exist
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Branches are designed to solve a key software development challenge: <br />
            <br />
            <i>How do you develop new features without breaking the stable version of the project?</i>
            <br />
            <br />
            By isolating work, branches allow: <br />
            • Safe experimentation <br />
            • Independent feature development <br />
            • Collaboration without stepping on each other&apos;s changes <br />
            • Testing ideas without affecting main code
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
            <b className='text-[#F05032]'>{num(2)}</b> How Branches Work Internally
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A branch is essentially: <br />
            • A <b>lightweight pointer</b> to a commit. <br />
            • Stored as a simple file under <span className='bg-neutral-800 px-2 rounded-lg'>.git/refs/heads/</span>. <br />
            <br />
            When you create a branch: <br />
            • Git doesn&apos;t copy your project. <br />
            • It just creates a new label pointing to the current commit. <br />
            <br />
            When you make a commit on that branch: <br />
            • The branch pointer moves forward. <br />
            • Other branches remain unchanged. <br />
            <br />
            This makes branching extremely fast and cheap compared to older VCS tools.
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
            <b className='text-[#F05032]'>{num(3)}</b> Common Branches in Real Projects
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>main / master</b> <br />
            The primary, stable branch. <br />
            <br />
            <b>feature branches</b> <br />
            Used for building new features: <br />
            feature/login-auth <br />
            feature/user-profile-ui <br />
            <br />
            <b>bugfix branches</b> <br />
            For isolated fixes: <br />
            bugfix/password-reset <br />
            <br />
            <b>release branches</b> <br />
            Preparing versions: <br />
            release/v2.3.0 <br />
            <br />
            <b>hotfix branches</b> <br />
            Emergency fixes on production code: <br />
            hotfix/critical-payment-failure <br />
            <br />
            Branches keep your project structured and organized.
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
            <b className='text-[#F05032]'>{num(4)}</b> HEAD and Branch Relationship
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>HEAD</span> is Git&apos;s pointer to your current branch (or commit). <br />
            <br />
            When on a branch: <br />
            HEAD -&gt; main <br />
            <br />
            When you create a branch: <br />
            HEAD -&gt; new-feature <br />
            <br />
            When you commit: <br />
            new-feature moves forward <br />
            main stays where it was <br />
            <br />
            Understanding HEAD is key to understanding branches.
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
            <b className='text-[#F05032]'>{num(5)}</b> Branches Enable Parallel Development
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Branches make collaboration smooth because: <br />
            • Each developer can work in their own isolated branch. <br />
            • No conflicts until merging. <br />
            • Teams can run CI/CD pipelines for individual branches. <br />
            • Risky experiments do not affect production code. <br />
            This is one reason Git is dominant in modern workflows.
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
            <b className='text-[#F05032]'>{num(6)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • A <b>branch</b> is a lightweight pointer to a commit, enabling isolated work. <br />
            • Branches allow teams to work in parallel without interfering with each other. <br />
            • Common types include feature, bugfix, release, and hotfix branches. <br />
            • Git branches are extremely fast and flexible because they are just references, not copies. <br />
            • HEAD determines which branch you&apos;re currently on and moves as you commit.
          </div>
        </motion.div>

      </div>
    </main>
  )
}