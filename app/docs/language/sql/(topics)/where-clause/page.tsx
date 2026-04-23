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
            WHERE Clause
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
            <b className='text-[#f29111]'>{num(1)}</b> What is WHERE Clause
          </h2>
          <div className='text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>WHERE</span> is used to filter records in a query. <br /><br />
            It allows you to retrieve only the data that satisfies a specific condition. <br /><br />
            <b>•</b> Filters rows <br />
            <b>•</b> Works with conditions <br />
            <b>•</b> Makes queries precise
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
              SELECT column_name FROM table_name WHERE condition;
            </span> <br /><br />

            Example: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT * FROM students WHERE age {'>'} 18;
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
            <b className='text-[#f29111]'>{num(3)}</b> Comparison Operators
          </h2>
          <div className='text-gray-300'>
            <b>•</b> = Equal <br />
            <b>•</b> {'>'} Greater than <br />
            <b>•</b> {'<'} Less than <br />
            <b>•</b> {'>='} Greater than or equal <br />
            <b>•</b> {'<='} Less than or equal <br />
            <b>•</b> != Not equal <br /><br />

            Example: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT * FROM students WHERE marks {'>='} 50;
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
            <b className='text-[#f29111]'>{num(4)}</b> Logical Operators
          </h2>
          <div className='text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>AND</span> → both conditions must be true <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>OR</span> → at least one condition true <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>NOT</span> → reverse condition <br /><br />

            Example: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT * FROM students WHERE age {'>'} 18 AND marks {'>='} 60;
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
            <b className='text-[#f29111]'>{num(5)}</b> Special Conditions
          </h2>
          <div className='text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>BETWEEN</span> → range filter <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>IN</span> → match multiple values <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>LIKE</span> → pattern matching <br /><br />

            Example: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              SELECT * FROM students WHERE name LIKE &apos;A%&apos;;
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
            <b>•</b> WHERE filters data <br />
            <b>•</b> Works with conditions and operators <br />
            <b>•</b> Makes queries efficient <br />
            <b>•</b> Essential for real-world queries
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
            <b>•</b> WHERE is used in almost every real query <br />
            <b>•</b> Forgetting WHERE can affect entire tables 💀 <br />
            <b>•</b> Complex WHERE conditions can get very powerful <br />
            <b>•</b> Most bugs in SQL come from wrong conditions 😅
          </div>
        </motion.div>

      </div>
    </main>
  )
}