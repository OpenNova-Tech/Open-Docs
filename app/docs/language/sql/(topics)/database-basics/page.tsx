'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { SQL_TOPICS } from '@/lib/private/sqlTopics'

export default function Page() {
  const pathname = usePathname()
  const slug = pathname.split('/').filter(Boolean).pop()

  const sectionIndex = SQL_TOPICS.indexOf(slug || '')
  const sectionNumber = sectionIndex >= 0 ? sectionIndex + 1 : 1

  const num = (sub: number) => `${sectionNumber}.${sub}`

   return (
    <main className='pt-32 bg-black py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>

        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#f29111] bg-black'>
            Database Basics
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#f29111]'>{num(1)}</b> What is a Database
          </h2>
          <div className='text-gray-300'>
            <b>Database</b> is an organized collection of data stored electronically so it can be easily accessed, managed, and updated. <br /><br />
            Instead of random storage, data is kept in a <b>structured format</b>. <br /><br />
            <b>•</b> Stores large amounts of data <br />
            <b>•</b> Allows fast retrieval <br />
            <b>•</b> Maintains consistency <br />
            <b>•</b> Supports multiple users <br /><br />
            Examples: <br />
            <b>•</b> Student systems <br />
            <b>•</b> Banking apps <br />
            <b>•</b> E-commerce platforms
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#f29111]'>{num(2)}</b> Subtle Information
          </h2>
          <div className='text-gray-300'>
            A database is <b>not just storage</b> — it’s a system. <br /><br />
            <b>•</b> You design structure <br />
            <b>•</b> Define relationships <br />
            <b>•</b> Optimize queries <br /><br />
            Poor design leads to: <br />
            <b>•</b> Slow performance <br />
            <b>•</b> Data duplication <br />
            <b>•</b> Inconsistency
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#f29111]'>{num(3)}</b> Why Databases Were Created
          </h2>
          <div className='text-gray-300'>
            Databases solve: <br />
            &quot;How to manage large data efficiently?&quot; <br /><br />
            Before databases: <br />
            <b>•</b> Data stored in files <br />
            <b>•</b> Hard to manage <br /><br />
            Databases introduced: <br />
            <b>•</b> Structured tables <br />
            <b>•</b> Relationships <br />
            <b>•</b> Fast queries
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#f29111]'>{num(4)}</b> Core Components
          </h2>
          <div className='text-gray-300'>
            <b>Tables</b> <br />
            <b>•</b> Store data in rows & columns <br /><br />

            <b>Rows</b> <br />
            <b>•</b> Single record <br /><br />

            <b>Columns</b> <br />
            <b>•</b> Data fields <br /><br />

            <b>Keys</b> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>PRIMARY KEY</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>FOREIGN KEY</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#f29111]'>{num(5)}</b> Types of Databases
          </h2>
          <div className='text-gray-300'>
            <b>Relational</b> <br />
            <b>•</b> Table-based (SQL) <br /><br />

            <b>NoSQL</b> <br />
            <b>•</b> Flexible structure <br /><br />

            <b>Cloud</b> <br />
            <b>•</b> Online & scalable
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#f29111]'>{num(6)}</b> Key Takeaways
          </h2>
          <div className='text-gray-300'>
            <b>•</b> Databases store structured data <br />
            <b>•</b> Tables = rows + columns <br />
            <b>•</b> Relationships are important <br />
            <b>•</b> Good design improves performance
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#f29111]'>{num(7)}</b> Fun Facts 😄
          </h2>
          <div className='text-gray-300'>
            <b>•</b> Big apps run on massive databases <br />
            <b>•</b> Can store billions of records <br />
            <b>•</b> Queries run in milliseconds ⚡ <br />
            <b>•</b> Without databases, apps forget everything 💀
          </div>
        </motion.div>

        </div>
    </main>
  )
}