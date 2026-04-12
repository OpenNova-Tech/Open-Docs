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
            SELECT Statement
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
            <b className='text-[#f29111]'>{num(1)}</b> What is SELECT
          </h2>
          <div className='text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>SELECT</span> is used to retrieve data from a database. <br /><br />
            It is the <b>most commonly used SQL command</b>. <br /><br />
            <b>•</b> Fetch specific columns <br />
            <b>•</b> Fetch all data <br />
            <b>•</b> Apply conditions and filters
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
            <b className='text-[#f29111]'>{num(2)}</b> Basic Syntax
          </h2>
          <div className='text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT column_name FROM table_name;
            </span> <br /><br />

            Example: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT name FROM students;
            </span> <br /><br />

            To select all columns: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT * FROM students;
            </span>
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
            <b className='text-[#f29111]'>{num(3)}</b> Filtering Data
          </h2>
          <div className='text-gray-300'>
            Use <span className='bg-neutral-800 px-2 rounded-lg'>WHERE</span> to filter results. <br /><br />

            Example: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT * FROM students WHERE age {'>'} 18;
            </span> <br /><br />

            <b>•</b> = Equal <br />
            <b>•</b> {'>'} Greater than <br />
            <b>•</b> {'<'} Less than <br />
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
            <b className='text-[#f29111]'>{num(4)}</b> Sorting Results
          </h2>
          <div className='text-gray-300'>
            Use <span className='bg-neutral-800 px-2 rounded-lg'>ORDER BY</span> to sort data. <br /><br />

            Example: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT * FROM students ORDER BY age ASC;
            </span> <br /><br />

            <b>•</b> ASC → Ascending <br />
            <b>•</b> DESC → Descending
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
            <b className='text-[#f29111]'>{num(5)}</b> Limiting Results
          </h2>
          <div className='text-gray-300'>
            Use <span className='bg-neutral-800 px-2 rounded-lg'>LIMIT</span> to restrict rows. <br /><br />

            Example: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT * FROM students LIMIT 5;
            </span>
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
            <b>•</b> SELECT retrieves data <br />
            <b>•</b> Use WHERE to filter <br />
            <b>•</b> Use ORDER BY to sort <br />
            <b>•</b> Use LIMIT to restrict results
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
            <b>•</b> SELECT is used in almost every SQL query <br />
            <b>•</b> SELECT * can slow down large databases ⚠️ <br />
            <b>•</b> Complex SELECT queries can join multiple tables <br />
            <b>•</b> Even experts spend most time writing SELECT queries 😅
          </div>
        </motion.div>

      </div>
    </main>
  )
}