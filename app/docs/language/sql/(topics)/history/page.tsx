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
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#e34c26] bg-black'>
            History of SQL
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(1)}</b> What is History of SQL
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The <b>History of SQL</b> refers to the chronological evolution of Structured Query Language from its origin in the 1970s to the modern standardized query language used today. It documents how SQL transformed from a simple method for querying relational databases into a powerful and widely adopted language that supports complex data operations, analytics, and large-scale applications across industries.{' '}
            <br />
            <br />
            SQL was developed by Donald D. Chamberlin and Raymond F. Boyce at IBM as part of the System R project, which was based on Edgar F. Codd’s relational database model. <br />
            <br />
            The language evolved through multiple versions, shaped by standardization efforts, advancements in database technology, and the growing need to manage large volumes of structured data efficiently.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(2)}</b> Subtle Information
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> SQL did <b>not</b> start as a fully standardized language.{' '}
            <br />
            <b>•</b> Early SQL implementations (like IBM System R and Oracle) had many differences. <br />
            <b>•</b> Vendors introduced proprietary extensions (e.g., PL/SQL, T-SQL). <br />
            <b>•</b> ANSI and ISO played a major role in standardizing SQL over time. <br />
            <b>•</b> SQL evolved to support advanced features like joins, transactions, and stored procedures. <br />
            <b>•</b> Today, SQL is a <b>standardized yet extensible language</b>, with variations across different database systems. <br />
            <br />
            Hidden Truth: <br />
            SQL is history is not just technical — it is shaped by vendor competition, standardization efforts, and real-world data demands.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(3)}</b> 1974: The Birth of SQL
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            In 1974, IBM researchers Donald D. Chamberlin and Raymond F. Boyce introduced SQL (originally called SEQUEL). <br />
            <br />
            It was designed to interact with relational databases using simple, English-like commands such as:  <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>SELECT</span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>INSERT</span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              UPDATE
            </span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>DELETE</span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>CREATE</span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>DROP</span>{' '}
            <br />
            <br />
            Purpose: <br />
            <b>•</b> Manage and retrieve data from relational databases <br />
            <b>•</b> Provide a simple, human-readable way to interact with data <br />
            <br />
            SQL was based on Edgar F. Codd is relational model and became the foundation of modern database systems.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(4)}</b> 1979-1986: Early Growth & First Standard
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            As database technology gained popularity, systems like: <br />
            <b>•</b> IBM System R <br />
            <b>•</b> Oracle Database <br />
            started adopting SQL. <br />
            <br />
            In 1986, <b>SQL-86</b> became the first official standard by ANSI. <br />
            <br />
            It introduced: <br />
            <b>•</b> Basic query operations (
            <span className='bg-neutral-800 px-2 rounded-lg'>SELECT</span>
            ) <br />
            <b>•</b> INSERT <br />
            <b>•</b> UPDATE <br />
            <br />
            DELETE
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(5)}</b> 1989-1999: Expansion & SQL-89 / SQL-92 / SQL:1999
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            As SQL gained widespread adoption, database vendors like: <br />
            <b>•</b> Oracle <br />
            <b>•</b> IBM <br />
            <b>•</b> Microsoft <br />
            began adding proprietary extensions to differentiate their systems. <br />
            <br />
            <b>SQL-89 (1989)</b> <br />
            <b>•</b> Minor improvements over SQL-86 <br />
            <b>•</b> Better standardization <br />
            <br />
            <b>SQL-92 (1992)</b> <br />
            Major shift: <br />
            <b>•</b> Advanced joins <br />
            <b>•</b> Subqueries <br />
            <b>•</b> Constraints (
                <span className='bg-neutral-800 px-2 rounded-lg'>PRIMARY KEY</span>,
                <span className='bg-neutral-800 px-2 rounded-lg'>FOREIGN KEY</span>
            ) <br />
            <b>•</b> Improved data integrity <br />
            <br />
            <b>SQL:1999</b> <br />
            <b>•</b> Introduction of object-relational features <br />
            <b>•</b> Stored procedures and triggers <br />
            <b>•</b> Recursive queries (
                <span className='bg-neutral-800 px-2 rounded-lg'>WITH RECURSIVE</span>
            ) <br />
            <br />
            This period established SQL as a powerful and industry-standard database language.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(6)}</b> 2003: SQL:2003 Era
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The SQL standard evolved with <b>SQL:2003</b>, introducing more advanced capabilities.{' '}
            <br />
            <br />
            Goal: <br />
            <b>•</b> Support complex data analysis <br />
            <b>•</b> Improve querying power for modern applications <br />
            <br />
            Features included: <br />
            <b>•</b> Window functions (
                <span className='bg-neutral-800 px-2 rounded-lg'>OVER()</span>
            ) <br />
            <b>•</b> Enhanced OLAP operations <br />
            <b>•</b> Better data manipulation capabilities <br />
            <br />
            Problem: <br />
            Different database vendors implemented features differently, leading to inconsistencies across systems. <br />
            <br />
            Despite standardization, SQL remained flexible and vendor-driven.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(7)}</b> 2000s: Vendor Expansion Era
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            In the 2000s, major database companies like: <br />
            <b>•</b> Oracle <br />
            <b>•</b> Microsoft <br />
            <b>•</b> IBM <br />
            began heavily extending SQL with their own features. <br />
            <br />
            Each system introduced unique capabilities such as: <br />
            <b>•</b> Stored procedures (
                <span className='bg-neutral-800 px-2 rounded-lg'>PL/SQL</span>,
                <span className='bg-neutral-800 px-2 rounded-lg'>T-SQL</span>
            ) <br />
            <b>•</b> Advanced indexing and optimization <br />
            <b>•</b> Enhanced transaction control <br />
            <br />
            This phase showed that SQL was evolving based on real-world needs rather than strict standard rules. <br />
            <br />
            As a result, SQL became more powerful—but also more fragmented across different database systems.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(8)}</b> 2011–2016: Modern SQL Evolution
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            During this period, SQL standards like <b>SQL:2011</b>and <b>SQL:2016</b> were introduced. <br />
            <br />
            Major features introduced: <br />
            <b>•</b> Temporal data support (handling time-based data) <br />
            <b>•</b> Advanced analytics and window functions <br />
            <b>•</b> JSON support for semi-structured data <br />
            <b>•</b> Enhanced security and transaction control <br />
            <b>•</b> Better integration with big data systems <br />
            <br />
            SQL evolved from just a database query language into a powerful tool for analytics, real-time processing, and modern applications.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(9)}</b> The Modern SQL Ecosystem
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Today, SQL exists as a <b>continuously evolving standard</b> maintained by ANSI and ISO.{' '}
            <br />
            <br />
            This means: <br />
            <b>•</b> Periodic updates (SQL:2011, SQL:2016, SQL:2023) <br />
            <b>•</b> Strong vendor influence (Oracle, MySQL, PostgreSQL, SQL Server) <br />
            <b>•</b> Extensions for cloud and big data systems <br />
            <b>•</b> Integration with AI, analytics, and distributed databases <br />
            <br />
            Unlike HTML, SQL is not a single “living standard” but evolves through formal updates and real-world implementations. <br />
            <br />
            Today, SQL powers everything from small applications to massive data-driven platforms.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(10)}</b> SQL&apos;s Impact on Modern Systems
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            SQL evolved from: <br />
            Simple data querying → Full-scale data management and analytics engine. <br />
            <br />
            Modern technologies rely on SQL: <br />
            <b>•</b> Data-driven applications <br />
            <b>•</b> Business Intelligence & Analytics <br />
            <b>•</b> Cloud databases (AWS RDS, Azure SQL, Google Cloud SQL) <br />
            <b>•</b> Data warehousing systems <br />
            <b>•</b> Backend systems for web and mobile apps <br />
            <br />
            Without SQL: <br />
            <b>•</b> No structured data management <br />
            <b>•</b> No efficient querying of large datasets <br />
            <b>•</b> No reliable transactional systems (banking, e-commerce)
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(11)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> SQL was developed in the 1970s at IBM by Donald D. Chamberlin and Raymond F. Boyce. <br />
            <b>•</b> It was based on Edgar F. Codd’s relational model. <br />
            <b>•</b> Early SQL implementations varied across systems.
            <br />
            <b>•</b> ANSI and ISO standardized SQL starting in 1986. <br />
            <b>•</b> Vendors introduced powerful extensions (PL/SQL, T-SQL).
            <br />
            <b>•</b> Modern SQL supports analytics, JSON, and big data integration. <br />
            <b>•</b> SQL’s evolution reflects standardization, vendor competition, and real-world data needs.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(12)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> SQL was originally called <b>SEQUEL</b> (Structured English Query Language). <br />
            <b>•</b> The name was shortened to SQL due to trademark issues. <br />
            <b>•</b> Different databases use slightly different SQL syntax (no universal implementation). <br />
            <b>•</b> Some SQL queries can run without modification even after decades. <br />
            <b>•</b> SQL is still one of the most in-demand skills in tech today. <br />
            <b>•</b> Despite NoSQL databases, SQL has never lost its dominance.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
