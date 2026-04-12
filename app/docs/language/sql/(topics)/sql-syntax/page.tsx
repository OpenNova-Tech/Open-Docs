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
            SQL Syntax
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
            <b className='text-[#f29111]'>{num(1)}</b> What is SQL Syntax
          </h2>
          <div className='text-gray-300'>
            <b>SQL Syntax</b> refers to the rules and structure used to write SQL queries. <br /><br />
            It defines how commands, keywords, and clauses are arranged to interact with a database. <br /><br />
            <b>•</b> Uses simple English-like keywords <br />
            <b>•</b> Follows a fixed structure <br />
            <b>•</b> Must be written correctly to execute successfully
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
            <b className='text-[#f29111]'>{num(2)}</b> Basic Query Structure
          </h2>
          <div className='text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT column_name FROM table_name;
            </span> <br /><br />

            🔍 Breakdown: <br /><br />

            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>SELECT</span> → what data to fetch <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>FROM</span> → from which table <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>;</span> → ends the query <br /><br />

            Example: <br />
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
            <b className='text-[#f29111]'>{num(3)}</b> Important Rules
          </h2>
          <div className='text-gray-300'>
            <b>•</b> SQL keywords are not case-sensitive <br />
            <b>•</b> Queries usually end with <span className='bg-neutral-800 px-2 rounded-lg'>;</span> <br />
            <b>•</b> Keywords should be written in uppercase for readability <br />
            <b>•</b> Table and column names depend on the database <br />
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
            <b className='text-[#f29111]'>{num(4)}</b> Common Clauses
          </h2>
          <div className='text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>WHERE</span> → filter data <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>ORDER BY</span> → sort results <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>GROUP BY</span> → group data <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>LIMIT</span> → restrict number of rows <br /><br />

            Example: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT name FROM students WHERE age {'>'} 18;
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
            <b className='text-[#f29111]'>{num(5)}</b> Where SQL Syntax is Used
          </h2>
          <div className='text-gray-300'>
            SQL syntax is used whenever you interact with a database: <br />
            <b>•</b> Fetching data from tables <br />
            <b>•</b> Updating records <br />
            <b>•</b> Deleting entries <br />
            <b>•</b> Creating new tables <br /><br />
            Every database operation depends on correct syntax.
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
            <b>•</b> SQL syntax defines how queries are written <br />
            <b>•</b> Queries follow a structured format <br />
            <b>•</b> Keywords are simple and readable <br />
            <b>•</b> Correct syntax is essential for execution
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
            <b>•</b> SQL reads almost like English <br />
            <b>•</b> Missing <span className='bg-neutral-800 px-2 rounded-lg'>;</span> can break queries <br />
            <b>•</b> One wrong clause can return wrong data 😅 <br />
            <b>•</b> SQL syntax has remained similar for decades
          </div>
        </motion.div>

      </div>
    </main>
  )
}