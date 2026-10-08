'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { HTML_TOPICS } from '@/lib/private/htmlTopics'
import { CodeBlock } from '@/components/ui/code-block'

export default function Page() {
  const pathname = usePathname()
  const slug = pathname.split('/').filter(Boolean).pop()

  const sectionIndex = HTML_TOPICS.indexOf(slug || '')
  const sectionNumber = sectionIndex >= 0 ? sectionIndex + 1 : 1

  const num = (sub: number) => `${sectionNumber}.${sub}`

  const code1 = `<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    Content goes here
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
            Introduction
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
            <b className='text-[#e34c26]'>{num(1)}</b> What is HTML
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>HTML (HyperText Markup Language)</b> is the standard markup
            language used to create and structure content on the web. It defines
            the structure of webpages using elements (tags) that tell the
            browser how content should be displayed. <br />
            <br />
            HTML is <b>not a programming language</b>. It does not perform logic
            or computations. Instead, it structures text, images, links, forms,
            and other content so browsers can render them properly. <br />
            <br />
            HTML works together with: <br />
            <b>•</b> <b>CSS</b> for styling <br />
            <b>•</b> <b>JavaScript</b> for interactivity <br />
            <br />
            The current official standard is maintained by the World Wide Web
            Consortium (W3C) and the WHATWG.
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
            <b>•</b> HTML defines <b>structure, not appearance</b> (appearance
            is CSS&apos;s job). <br />
            <b>•</b> Browsers are extremely forgiving — they will try to render
            even badly written HTML. <br />
            <b>•</b> HTML is parsed sequentially from top to bottom. <br />
            <b>•</b> Modern HTML (HTML5) includes semantic meaning, not just
            layout structure. <br />
            <b>•</b> HTML documents follow a strict tree-like structure called
            the <b>DOM (Document Object Model)</b>. <br />
            <b>•</b> HTML is platform-independent — any browser on any OS can
            render it. <br />
            <b>•</b> Invalid nesting can break structure even if it &quot;looks
            fine.&quot; <br />
            <b>•</b> SEO heavily depends on correct HTML structure. <br />
            <br />
            Hidden Truth: <br />
            Bad HTML may still &quot;work&quot; visually but can destroy
            accessibility, SEO, and maintainability.
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
            <b className='text-[#e34c26]'>{num(3)}</b> How HTML Works
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When you open a webpage: <br />
            <b>1.</b> Browser sends HTTP request. <br />
            <b>2.</b> Server returns an HTML document. <br />
            <b>3.</b> Browser parses HTML. <br />
            <b>4.</b> DOM tree is created. <br />
            <b>5.</b> CSS is applied. <br />
            <b>6.</b> JavaScript executes. <br />
            <b>7.</b> Final page renders. <br />
            <br />
            HTML is the <b>foundation layer</b> of the web stack. <br />
            <br />
            Without HTML: <br />
            <b>•</b> No structure <br />
            <b>•</b> No content organization <br />
            <b>•</b> No hyperlinks <br />
            <b>•</b> No web as we know it
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
            <b className='text-[#e34c26]'>{num(4)}</b> Structure of an HTML
            Document
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Every HTML document follows this skeleton:
            <CodeBlock language='html' filename='html' code={code1} />
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
            <b className='text-[#e34c26]'>{num(5)}</b> HTML and SEO
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Search engines rely heavily on HTML structure. <br />
            <br />
            Important factors: <br />
            <b>•</b> Proper{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;title&gt;
            </span>{' '}
            <br />
            <b>•</b> Meta description <br />
            <b>•</b> Heading hierarchy <br />
            <b>•</b> Semantic structure <br />
            <b>•</b> Clean markup <br />
            Search engines crawl HTML before executing JavaScript. <br />
            <br />
            HTML quality directly impacts ranking.
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
            <b className='text-[#e34c26]'>{num(6)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> HTML is the structural backbone of the web. <br />
            <b>•</b> It is a markup language, not a programming language. <br />
            <b>•</b> HTML5 introduced modern semantic and multimedia
            capabilities. <br />
            <b>•</b> Clean structure improves SEO, accessibility, and
            maintainability. <br />
            <b>•</b> Browsers parse HTML into a DOM tree. <br />
            <b>•</b> Good HTML is invisible when done right — but critical
            underneath. <br />
            <b>•</b> HTML works alongside CSS and JavaScript in the web stack.
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
            <b className='text-[#e34c26]'>{num(7)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> The first website ever created is still online. <br />
            <b>•</b> HTML originally had only 18 tags. <br />
            <b>•</b> Browsers can auto-correct terrible HTML — sometimes better
            than humans. <br />
            <b>•</b> You can view the source of almost any website by
            right-clicking → &quot;View Page Source.&quot; <br />
            <b>•</b> Even billion-dollar websites start with{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;html&gt;</span>
            .
          </div>
        </motion.div>
      </div>
    </main>
  )
}
