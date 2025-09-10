'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
  const code1 = `<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my very first webpage using HTML.</p>
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
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#e34c26] bg-black'>
            What is HTML ?
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>1.1</b> What is HTML ?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>HTML (HyperText Markup Language)</b> is the <b>standard language</b> used to create webpages. It provides the structure of a webpage, telling the browser what each part of the content means (headings, paragraphs, links, images, etc.).
          </div>
        </motion.div>

				<motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>1.2</b> Why It Matters ?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Without HTML, browsers wouldn&apos;t know how to display text, images, or links. <br />
            • It acts as the <b>skeleton</b> of every website — CSS gives it style, JavaScript gives it interactivity.
          </div>
        </motion.div>

				<motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>1.3</b> Real-Life Analogy
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Think of a house: 🔍 <br />
            <br />
            • <b>HTML</b> = the walls, rooms, and layout (structure). <br />
            • <b>CSS</b> = the paint, furniture, and decoration (style). <br />
            • <b>JavaScript</b> = electricity, doors, and appliances (interactivity).
          </div>
        </motion.div>

				<motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>1.4</b> Example Code
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="html" filename="example.html" code={code1} /> <br />
            ✅ Here, <br />
            <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>&lt;!DOCTYPE html&gt;</span> → tells the browser this is an HTML5 document. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>&lt;html&gt;</span> → root element. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span> → contains metadata (title, links, etc.). <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>&lt;body&gt;</span> → visible content of the page. <br />
          </div>
        </motion.div>

				<motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>1.5</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • HTML = HyperText Markup Language. <br />
            • It structures web content using <b>elements</b> (tags). <br />
            • Every website you visit is built with HTML. <br />
            • HTML works with <b>CSS</b> (style) and <b>JavaScript</b> (functionality). 
          </div>
        </motion.div>

        <motion.div
          className='flex justify-center gap-6 pt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href='1'>
            <button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
              ← View Previous
            </button>
          </Link>
          <Link href='2'>
            <button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
              View Next →
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
