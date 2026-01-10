'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function page() {

  return (
    <main className='pt-32 dark:bg-black py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#F1E05A] bg-black'>
            History of JavaScript
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F1E05A]'>2.1</b> The Birth of JavaScript (1995)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Created by Brendan Eich in just 10 days while working at Netscape. <br />
						<b>•</b> Originally called Mocha, later renamed LiveScript, and finally JavaScript. <br />
						<b>•</b> Purpose: make websites interactive (e.g., form validation, simple animations).
          </div>
        </motion.div>

				<motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F1E05A]'>2.2</b> Early Days
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Netscape Navigator first shipped JavaScript. <br />
						<b>•</b> Microsoft created a competitor called JScript in Internet Explorer. <br />
						<b>•</b> Resulted in browser wars (1990s) → inconsistent behavior across browsers.
          </div>
        </motion.div>

				<motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F1E05A]'>2.3</b> Standardization (1997 onwards)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> To avoid chaos, JavaScript was standardized by ECMA International as ECMAScript (ES). <br />
						<b>•</b> ECMAScript 1 (ES1) was released in 1997. <br />
						<b>•</b> Each version added new features and improvements.
          </div>
        </motion.div>

				<motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F1E05A]'>2.4</b> Key Versions of JavaScript
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> ES3 (1999): Regular expressions, try/catch, better string handling. <br />
						<b>•</b> ES5 (2009): JSON support, strict mode, array methods like <span className='bg-neutral-800 px-2 rounded-lg'>forEach</span>, <span className='bg-neutral-800 px-2 rounded-lg'>map</span>. <br />
						<b>•</b> ES6 / ES2015: Biggest update! Introduced <span className='bg-neutral-800 px-2 rounded-lg'>let</span>, <span className='bg-neutral-800 px-2 rounded-lg'>const</span>, arrow functions, classes, promises, modules. <br />
						<b>•</b> Later versions (ES2016+): Async/await, optional chaining, modules, modern features every year.
          </div>
        </motion.div>

				<motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F1E05A]'>2.5</b> Modern JavaScript
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Runs not only in browsers but also on servers (via Node.js). <br />
						<b>•</b> Powers front-end frameworks (React, Angular, Vue). <br />
						<b>•</b> Used in mobile apps, desktop apps, IoT, AI tools. <br />
						<b>•</b> Today, JavaScript is the most popular language on the web.
          </div>
        </motion.div>

        <motion.div
          className='flex justify-center gap-6 pt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href='1'>
            <button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
              ← View Previous
            </button>
          </Link>
          <Link href='3'>
            <button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
              View Next →
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
