'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `feature/<short-description>`

  const code2 = `feature/user-auth
feature/cart-discount
feature/profile-settings`

  const code3 = `bugfix/<short-description>`

  const code4 = `bugfix/login-crash
bugfix/navbar-alignment`

  const code5 = `hotfix/<issue>`

  const code6 = `release/<version>`

  const code7 = `release/1.0.0
release/2.3.1`

  const code8 = `chore/<task>`

  const code9 = `chore/update-dependencies
chore/refactor-auth-service`

  const code10 = `feature/JIRA-123-user-auth
bugfix/ISSUE-45-fix-crash`

  const code11 = `<type>/<ticket-id>-<short-description>`

  const code12 = `feature/JIRA-210-add-payment-gateway
bugfix/JIRA-222-fix-checkout-error`

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
            Branch Naming Conventions
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
            <b className='text-[#F05032]'>{num(1)}</b> Why Branch Naming Matters
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Clear branch names help teams: <br />
            • Instantly understand the purpose of a branch <br />
            • Reduce confusion during code reviews <br />
            • Avoid accidental merges into wrong branches <br />
            • Integrate smoothly with CI/CD and issue trackers <br />
            Poor naming like <span className='bg-neutral-800 px-2 rounded-lg'>test123</span> or <span className='bg-neutral-800 px-2 rounded-lg'>new-branch</span> creates long-term maintenance issues.
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
            <b className='text-[#F05032]'>{num(2)}</b> Common Branch Categories
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Most teams organize branches by <b>purpose</b>. <br />
            <br />
            <b>Main Branches</b> <br />
            <br />
            These represent stable or long-lived code: <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>main</span> / <span className='bg-neutral-800 px-2 rounded-lg'>master</span> → production-ready code <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>develop</span> → integration branch for upcoming releases <br />
            These branches should remain clean and protected.
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
            <b className='text-[#F05032]'>{num(3)}</b> Feature Branches
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used for new features or enhancements. <br />
            <br />
            <b>Format:</b>
            <CodeBlock language="bash" filename="" code={code1} /> <br />
            <b>Examples:</b>
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            Best practices: <br />
            • Use lowercase <br />
            • Use hyphens instead of spaces <br />
            • Keep names short but meaningful
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
            <b className='text-[#F05032]'>{num(4)}</b> Bugfix Branches
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used to fix bugs in existing functionality. <br />
            <br />
            <b>Format:</b>
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            <b>Examples:</b>
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            For urgent production issues, some teams prefer:
            <CodeBlock language="bash" filename="" code={code5} /> 
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
            <b className='text-[#F05032]'>{num(5)}</b> Release Branches
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used when preparing a versioned release. <br />
            <br />
            <b>Format:</b>
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            <b>Examples:</b>
            <CodeBlock language="bash" filename="" code={code7} /> <br />
            Release branches allow: <br />
            • Final bug fixes <br />
            • Version bumps <br />
            • Release-specific testing 
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
            <b className='text-[#F05032]'>{num(6)}</b> Chore / Maintenance Branches
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used for non-feature tasks. <br />
            <br />
            <b>Format:</b>
            <CodeBlock language="bash" filename="" code={code8} /> <br />
            <b>Examples:</b>
            <CodeBlock language="bash" filename="" code={code9} /> <br />
            Useful for: <br />
            • Dependency upgrades <br />
            • Code refactoring <br />
            • Build system changes
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
            <b className='text-[#F05032]'>{num(7)}</b> Including Issue or Ticket IDs
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When using tools like Jira, GitHub Issues, or Linear: <br />
            <br />
            <b>Format:</b>
            <CodeBlock language="bash" filename="" code={code10} /> <br />
            Benefits: <br />
            • Direct traceability <br />
            • Automated linking in PRs <br />
            • Easier auditing
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
            <b className='text-[#F05032]'>{num(8)}</b> Naming Rules to Follow
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            General rules that scale well: <br />
            • Use <b>lowercase</b> <br />
            • Use <b>hyphens (-)</b> instead of underscores <br />
            • Avoid vague names (<span className='bg-neutral-800 px-2 rounded-lg'>test</span>, <span className='bg-neutral-800 px-2 rounded-lg'>temo</span>, <span className='bg-neutral-800 px-2 rounded-lg'>new</span>) <br />
            • Keep it readable and searchable <br />
            • Be consistent across the team
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
            <b className='text-[#F05032]'>{num(9)}</b> Example Team Convention
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A simple and effective standard:
            <CodeBlock language="bash" filename="" code={code11} /> <br />
            Example:
            <CodeBlock language="bash" filename="" code={code12} />
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
            <b className='text-[#F05032]'>{num(10)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Branch naming improves clarity, collaboration, and automation. <br />
            • Use prefixes like <span className='bg-neutral-800 px-2 rounded-lg'>feature/</span>, <span className='bg-neutral-800 px-2 rounded-lg'>bugfix/</span>, <span className='bg-neutral-800 px-2 rounded-lg'>hotfix/</span>, <span className='bg-neutral-800 px-2 rounded-lg'>release/</span>, and <span className='bg-neutral-800 px-2 rounded-lg'>chore/</span>. <br />
            • Keep names lowercase, short, and descriptive. <br />
            • Include issue IDs for traceability when possible. <br />
            • Consistency matters more than perfection—agree on a team standard.
          </div>
        </motion.div>
      </div>
    </main>
  )
}