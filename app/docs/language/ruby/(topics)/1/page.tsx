'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#701516] bg-black'>
            Introduction to Ruby
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#701516] border border-[#701516]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#701516]'>1.1</b> What is Ruby?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Ruby is a <b>high-level, interpreted programming language</b> known for its <b>simplicity and elegance</b>. It was created with the goal of making programming both <b>productive</b> and <b>enjoyable</b>.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#701516] border border-[#701516]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#701516]'>1.2</b> Creator
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Ruby was created by <b>Yukihiro Matsumoto</b>, also known as Matz, in 1995 in Japan. He wanted a language that balanced <b>functional programming</b> and <b>imperative programming</b> in a natural way.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#701516] border border-[#701516]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#701516]'>1.3</b> Philosophy
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Ruby follows the principle of <b>&quot;developer happiness&quot;</b>. It focuses on writing code that looks close to natural language, reducing unnecessary complexity and making it intuitive to read and maintain.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#701516] border border-[#701516]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#701516]'>1.4</b> Characteristics
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <b>Interpreted</b>: No need for compilation before running. <br />
            • <b>Object-Oriented</b>: Everything in Ruby is treated as an object. <br />
            • <b>Dynamic Typing</b>: You don&apos;t need to declare data types explicitly. <br />
            • <b>Portable</b>: Works across platforms like Windows, macOS, and Linux. <br />
            • <b>Open Source</b>: Freely available with a strong global community.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#701516] border border-[#701516]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#701516]'>1.5</b> Why Use Ruby?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Ruby is loved for <b>quick development</b>, <b>clean syntax</b>, and <b>community-driven tools</b> like Ruby on Rails. It&apos;s used in web apps, automation scripts, and startups due to its speed of development.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#701516] border border-[#701516]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#701516]'>1.6</b> Where Ruby is Used
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <b>Web development</b> (especially with Ruby on Rails) <br />
            • <b>Data processing scripts</b> <br />
            • <b>Automation and DevOps tools</b> <br />
            • <b>Prototyping applications</b>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#701516] border border-[#701516]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#701516]'>1.7</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Ruby emphasizes <b>simplicity and productivity</b>. <br />
            • Designed for <b>developer happiness</b>, not machine efficiency. <br />
            • Ideal for <b>web development</b>, scripting, and automation. <br />
            • Created by <b>Yukihiro &quot;Matz&quot; Matsumoto</b> in <b>1995</b>.
          </div>
        </motion.div>

     
      </div>
    </main>
  )
}
