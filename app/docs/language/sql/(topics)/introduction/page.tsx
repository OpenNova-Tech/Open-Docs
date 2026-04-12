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
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#e38c00] bg-black'>
            Introduction
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e38c00] border border-[#e38c00]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e38c00]'>{num(1)}</b> What is SQL
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>SQL (Structured Query Language)</b> is the standard language used to manage and manipulate relational databases. <br />
            <br />
            It allows users to <b>store, retrieve, update, and delete data</b> efficiently using structured queries. Database systems interpret SQL commands and execute operations on stored data. <br />
            <br />
            SQL is: <br />
            <b>•</b> A <b>query language</b> (not a general-purpose programming language) <br />
            <b>•</b> Declarative in nature <br />
            <b>•</b> Platform-independent (with vendor variations) <br />
            <b>•</b> Used in relational database management systems (RDBMS) <br />
            <b>•</b> The core language for data handling <br />
            <br />
            SQL works alongside: <br />
            <b>•</b> Backend languages (Java, Python, Node.js) — Application logic <br />
            <b>•</b> Database systems (MySQL, PostgreSQL, Oracle) — Data storage <br />
            <br />
            Without SQL, managing structured data in modern applications would be extremely difficult.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e38c00] border border-[#e38c00]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e38c00]'>{num(2)}</b> Subtle Information
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            SQL is <b>not a single uniform implementation</b>— it&apos;s a standard with variations. <br />
            <br />
            You decide: <br />
            <b>•</b> Which database system to use (MySQL, PostgreSQL, Oracle, etc.) <br />
            <b>•</b> How to design your data (tables, relationships, normalization) <br />
            <b>•</b> How complex or optimized your queries should be <br />
            <br />
            SQL does not enforce: <br />
            <b>•</b> A single syntax across all systems <br />
            <b>•</b> One way to structure databases <br />
            <b>•</b> Automatic optimization of poorly written queries <br />
            <br />
            This flexibility makes SQL <b>powerful and adaptable</b>, but also requires <b>good design and understanding</b>from the developer. <br />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e38c00] border border-[#e38c00]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e38c00]'>{num(3)}</b> Why SQL Was Created
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            SQL was built to answer one question: <br />
            &quot;How do we efficiently store and retrieve structured data without writing complex procedural code?&quot; <br />
            <br />
            Its goals were: <br />
            <b>•</b> Provide a simple, human-readable way to query data <br />
            <b>•</b> Work with relational databases based on tables  <br />
            <b>•</b> Reduce the need for low-level data handling <br />
            <br />
            That&apos;s why SQL became the foundation of <b>database management systems</b> and remains essential even today.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e38c00] border border-[#e38c00]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e38c00]'>{num(4)}</b> Core Characteristics
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Declarative Language</b> <br />
            <b>•</b> You specify <b>what</b> data you want, not how to get it<br />
            <b>•</b> Database engine decides execution strategy <br />
            <b>•</b> Simplifies complex data operations <br />
            <br />
            <b>Data-Centric</b> <br />
            <b>•</b> Works with structured data in table <br />
            <b>•</b> Supports relationships between data (keys, joins) <br />
            <b>•</b> Ensures data integrity and consistency <br />
            <br />
            <b>Standardized yet Extensible</b>
            SQL supports: <br />
            <b>•</b> Data Query Language (DQL -
            <span className='bg-neutral-800 px-2 rounded-lg'>SELECT</span>
            ) 
            <br />
            <b>•</b> Data Manipulation Language (DML - 
            <span className='bg-neutral-800 px-2 rounded-lg'>INSERT</span>,
            <span className='bg-neutral-800 px-2 rounded-lg'>UPDATE</span>,
            <span className='bg-neutral-800 px-2 rounded-lg'>DELETE</span>
            ) <br />
            <b>•</b> Data Definition Language (DDL - 
            <span className='bg-neutral-800 px-2 rounded-lg'>CREATE</span>,
            <span className='bg-neutral-800 px-2 rounded-lg'>ALTER</span>,
            <span className='bg-neutral-800 px-2 rounded-lg'>DROP</span>
            ) <br />
            <b>•</b> Transaction Control Language (TCL - 
            <span className='bg-neutral-800 px-2 rounded-lg'>COMMIT</span>, 
            <span className='bg-neutral-800 px-2 rounded-lg'>ROLLBACK</span>
            )
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e38c00] border border-[#e38c00]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e38c00]'>{num(5)}</b> Where SQL Is Commonly Used
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            SQL is used in environments where <b>data management and retrieval are critical</b>: <br />
            <b>•</b> Web applications (user data, authentication, content) <br />
            <b>•</b> Banking and financial systems <br />
            <b>•</b> E-commerce platforms <br />
            <b>•</b> Data analytics & Business Intelligence <br />
            <b>•</b> Data warehouses and big data systems <br />
            <b>•</b> Backend systems for mobile apps <br />
            If something involves <b>storing, querying, or analyzing structured data</b>, SQL is almost always involved.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e38c00] border border-[#e38c00]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e38c00]'>{num(6)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> SQL is a <b>declarative query language</b> for managing data <br />
            <b>•</b> It focuses on <b>what to retrieve</b>, not how to retrieve it <br />
            <b>•</b> It ensures <b>data integrity and consistency</b> in databases <br />
            <b>•</b> Best suited for <b>data-driven applications and analytics</b> <br />
            <b>•</b> Modern SQL supports advanced features like JSON, analytics, and transactions
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e38c00] border border-[#e38c00]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e38c00]'>{num(7)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> SQL was originally called <b>&quot;SEQUEL&quot;</b> <br />
            <b>•</b> Most people say “S-Q-L” but officially it was meant to be pronounced “sequel” <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>SELECT * FROM table</span> is probably the most overused query ever 😅 <br />
            <b>•</b> SQL is case-insensitive (but your database might not be) <br />
            <b>•</b> A missing <span className='bg-neutral-800 px-2 rounded-lg'>WHERE</span> can update/delete your entire database 💀 <br />
            <b>•</b> SQL errors do not always crash — sometimes they silently return wrong data (scariest bug 😭)
          </div>
        </motion.div>
      </div>
    </main>
  )
}
