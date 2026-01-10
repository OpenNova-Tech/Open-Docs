'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
  const code1 = `<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <button onclick="sayHello()">Click Me</button>

  <script>
    function sayHello() {
      alert("Hello from JavaScript!");
    }
  </script>
</body>
</html>`

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
            What is JavaScript ?
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
            <b className='text-[#F1E05A]'>1.1</b> What is JavaScript
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            JavaScript (JS) is the programming language of the web. It makes websites come alive with interactivity, animations, and logic. <br />
            <br />
            If HTML is the skeleton, and CSS is the skin/clothes, then JavaScript is the brain and muscles that give life to the page.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F1E05A]'>1.2</b> Why learn JavaScript ?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Runs directly in your browser — no setup needed. <br />
            <b>•</b> Used by all major websites (YouTube, Facebook, Amazon). <br />
            <b>•</b> Works on both frontend (browser) and backend (with Node.js). <br />
            <b>•</b> Beginner-friendly and one of the most in-demand languages.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F1E05A]'>1.3</b>  What can JavaScript do ?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Show alerts and pop-ups. <br />
            <b>•</b> Validate user input in forms. <br />
            <b>•</b> Change content dynamically without reloading the page. <br />
            <b>•</b> Add animations and effects. <br />
            <b>•</b> Build games, mobile apps, and full web applications.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F1E05A]'>1.4</b> First JavaScript Program
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="html" filename="learningJavaScript.html" code={code1} /> 
            <br />
            👉 When you click the button, JavaScript runs the function and shows an alert.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F1E05A]'>1.5</b> How JavaScript fits in Web Development
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> HTML → Structure (headings, paragraphs, buttons). <br />
            <b>•</b> CSS → Style (colors, fonts, layouts). <br />
            <b>•</b> JavaScript → Logic & Interactivity (clicks, animations, dynamic updates). <br />
            <br />
            Without JavaScript, web pages would just be static posters. With JavaScript, they become interactive apps. 🚀
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F1E05A]'>1.6</b> Fun Facts
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> JavaScript was created in just 10 days in 1995 by Brendan Eich. <br />
            <b>•</b> It was originally called LiveScript, but renamed to JavaScript. <br />
            <b>•</b> Despite the name, it has nothing to do with Java!
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
          <Link href='2'>
            <button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
              View Next →
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
