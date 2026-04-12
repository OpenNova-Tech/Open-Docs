'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
    const code1 = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a basic HTML structure.</p>
  </body>
</html>`

    return (
        <main className='pt-32 bg-black py-12 px-6'>
            <div className='max-w-4xl mx-auto space-y-12'>
                <motion.header
                    className='text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#e34c26] bg-black'>
                        Setup and Structure
                    </h1>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
                >
                    <h2 className='text-2xl font-bold mb-4 text-gray-100'>
                        <b className='text-[#f29111]'>3.1</b> Getting Started
                    </h2>
                    <div className='max-w-3xl mx-auto text-gray-300'>
                        To write SQL, you need: <br />
                        <br />
                        <b>•</b> A <b>database system</b> (e.g., MySQL, PostgreSQL, SQLite). <br />
                        <b>•</b> A <b>query tool</b> (e.g., MySQL Workbench, pgAdmin, or terminal). <br />
                        <br />
                        SQL is not run like normal programs — it is executed inside a database. <br />
                        <br />
                        You write queries and run them to interact with stored data.
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
                >
                    <h2 className='text-2xl font-bold mb-4 text-gray-100'>
                        <b className='text-[#f29111]'>3.2</b> Basic SQL Query Structure
                    </h2>
                    <div className='max-w-3xl mx-auto text-gray-300'>
                        <span className='bg-neutral-800 px-2 rounded-lg'>
                            SELECT column_name FROM table_name;
                        </span> <br />
                        <br />
                        🔍 Breaking It Down <br />
                        <br />
                        1. <span className='bg-neutral-800 px-2 rounded-lg'>SELECT</span> → specifies what data to retrieve <br />
                        2. <span className='bg-neutral-800 px-2 rounded-lg'>FROM</span> → specifies the table <br />
                        3. <span className='bg-neutral-800 px-2 rounded-lg'>;</span> → ends the query <br />
                        <br />
                        Example: <br />
                        <span className='bg-neutral-800 px-2 rounded-lg'>
                            SELECT * FROM users;
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
                >
                    <h2 className='text-2xl font-bold mb-4 text-gray-100'>
                        <b className='text-[#f29111]'>3.3</b> Pro Tips
                    </h2>
                    <div className='max-w-3xl mx-auto text-gray-300'>
                        <b>•</b> Always end queries with <span className='bg-neutral-800 px-2 rounded-lg'>;</span> <br />
                        <b>•</b> Use uppercase for keywords (<span className='bg-neutral-800 px-2 rounded-lg'>SELECT</span>, <span className='bg-neutral-800 px-2 rounded-lg'>FROM</span>) for readability <br />
                        <b>•</b> Avoid using <span className='bg-neutral-800 px-2 rounded-lg'>SELECT *</span> in large databases (performance issue) <br />
                        <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>WHERE</span> to filter data instead of retrieving everything <br />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className='shadow-[#f29111] border border-[#f29111]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
                >
                    <h2 className='text-2xl font-bold mb-4 text-gray-100'>
                        <b className='text-[#f29111]'>3.4</b> Key Takeaways
                    </h2>
                    <div className='max-w-3xl mx-auto text-gray-300'>
                        <b>•</b> SQL runs inside a database system <br />
                        <b>•</b> Queries follow a structured format (SELECT → FROM → WHERE) <br />
                        <b>•</b> It is used to retrieve and manipulate data <br />
                        <b>•</b> Even simple queries can handle large datasets efficiently
                    </div>
                </motion.div>

                <motion.div
                    className='flex justify-center gap-6 pt-20'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link href='2'>
                        <button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
                            ← View Previous
                        </button>
                    </Link>
                    <Link href='4'>
                        <button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
                            View Next →
                        </button>
                    </Link>
                </motion.div>
            </div>
        </main>
    )
}