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
    { feature: 'Commit Location', central: 'Central Server', git: 'Local Machine' },
    { feature: 'Offline Work', central: '❌ Not possible', git: '✅ Fully possible' },
    { feature: 'Backup', central: 'Single copy (risk of loss)', git: 'Every clone is a full backup' },
    { feature: 'Speed', central: 'Dependent on network', git: 'Extremely fast' },
    { feature: 'Security', central: 'Limited', git: 'Strong (cryptographic integrity)' },
  ]

  const table2 = [
    { feature: 'Type', git: 'Distributed', svn: 'Centralized', merc: 'Distributed', cvs: 'Centralized' },
    { feature: 'Offline Work', git: '✅', svn: '❌', merc: '✅', cvs: '❌' },
    { feature: 'Branching', git: 'Fast & Lightweight', svn: 'Slow', merc: 'Moderate', cvs: 'Slow' },
    { feature: 'Performance', git: 'Excellent', svn: 'Average', merc: 'Good', cvs: 'Poor' },
    { feature: 'Data Integrity', git: 'Cryptographic (SHA-1)', svn: 'Weak', merc: 'Hash-based', cvs: 'Weak' },
    { feature: 'Ecosystem', git: 'Huge (GitHub, CI/CD)', svn: 'Limited', merc: 'Small', cvs: 'Obsolete' },
  ]

  const code1 = `git branch feature/auth
git checkout feature/auth`

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
            Why Git Over Other VCS
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
            <b className='text-[#F05032]'>{num(1)}</b> Centralized vs Distributed
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Older systems like <b>SVN</b> and <b>CVS</b> are <b>centralized</b> — there&apos;s one main server, and all developers depend on it. Git is <b>distributed</b>, meaning: <br />
            • Every developer has a <b>full copy</b> of the repository (including history). <br />
            • You can <b>commit, branch, and revert</b> locally — even without internet. <br />
            • The system is more resilient to network or server failures. <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Centralized VCS (SVN, CVS)</TableHead>
                  <TableHead>Git (Distributed VCS)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table1.map((content) => (
                  <TableRow key={content.feature}>
                    <TableCell>{content.feature}</TableCell>
                    <TableCell>{content.central}</TableCell>
                    <TableCell>{content.git}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
            <b className='text-[#F05032]'>{num(2)}</b> Performance and Efficiency
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Git was designed with <b>speed</b> in mind. <br />
            • Operations like <span className='bg-neutral-800 px-2 rounded-lg'>commit</span>, <span className='bg-neutral-800 px-2 rounded-lg'>diff</span>, and <span className='bg-neutral-800 px-2 rounded-lg'>log</span> run locally. <br />
            • Data is stored in compressed <b>snapshots</b> instead of file diffs. <br />
            • Only the changed data is transferred during push/pull operations. <br />
            <br />
            Result → Faster, lightweight version control, even for large codebases.
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
            <b className='text-[#F05032]'>{num(3)}</b> Branching Made Easy
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Branching in older VCS tools was slow and resource-heavy. Git makes branching <b>cheap and instant</b>, which enables modern workflows like: <br />
            • <b>Feature branches</b> <br />
            • <b>Hotfix branches</b> <br />
            • <b>Pull requests and code reviews</b> <br />
            <br />
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            Merging and switching are seamless — encouraging experimentation without risk.
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
            <b className='text-[#F05032]'>{num(4)}</b> Data Integrity and Security
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Git uses <b>SHA-1 hashing</b> for every commit and file object. This ensures: <br />
            • No file or commit can be silently altered. <br />
            • Each change is verifiable and traceable. <br />
            This cryptographic approach gives Git strong <b>data integrity</b>, unlike many older VCS systems.
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
            <b className='text-[#F05032]'>{num(5)}</b> Collaboration and Flexibility
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Git is highly adaptable for <b>team collaboration</b>: <br />
            • Multiple developers can push to and pull from shared repositories (like GitHub or GitLab). <br />
            • You can maintain <b>private branches</b> and merge only when ready. <br />
            • Different teams can use <b>custom workflows</b> (e.g., Git Flow, Trunk-based development).
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
            <b className='text-[#F05032]'>{num(6)}</b> Ecosystem and Integration
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Git&apos;s ecosystem is vast and modern: <br />
            • Integrated with platforms like <b>GitHub</b>, <b>GitLab</b>, <b>Bitbucket</b>. <br />
            • Supported by tools like <b>VS Code</b>, <b>JetBrains IDEs</b>, and <b>CI/CD pipelines</b>. <br />
            • Compatible with popular deployment and automation workflows. <br />
            This community and tooling support make Git a <b>standard</b> in modern software development.
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
            <b className='text-[#F05032]'>{num(7)}</b> Comparison Summary
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Git</TableHead>
                  <TableHead>Subversion (SVN)</TableHead>
                  <TableHead>Mercurial</TableHead>
                  <TableHead>CVS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table2.map((content) => (
                  <TableRow key={content.feature}>
                    <TableCell>{content.feature}</TableCell>
                    <TableCell>{content.git}</TableCell>
                    <TableCell>{content.svn}</TableCell>
                    <TableCell>{content.merc}</TableCell>
                    <TableCell>{content.cvs}</TableCell>
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
            <b className='text-[#F05032]'>{num(8)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Git is <b>distributed</b>, allowing full offline control and faster performance. <br />
            • It offers <b>strong data integrity</b> using cryptographic hashes. <br />
            • <b>Branching and merging</b> are instant and integral to modern workflows. <br />
            • Git&apos;s <b>ecosystem and community</b> make it the default VCS for most organizations today. <br />
            • In short: Git isn&apos;t just a tool — it&apos;s a <b>workflow standard</b> for collaborative, efficient development.
          </div>
        </motion.div>
      </div>
    </main>
  )
}