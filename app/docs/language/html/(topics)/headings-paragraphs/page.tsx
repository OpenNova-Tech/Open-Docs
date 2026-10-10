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

  const code1 = `<h1>Website Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>`

  const code2 = `<p>This is a paragraph explaining HTML basics.</p>`

  const code3 = `<h2>Introduction</h2>
<p>HTML stands for HyperText Markup Language. It structures content for the web.</p>

<h3>History</h3>
<p>HTML was created by Tim Berners-Lee in 1991 at CERN.</p>`

//   const code4 = `<div>Content</div>`

//   const code5 = `<img src="image.jpg" alt="Image">
// <br>
// <hr>`

// const code6 = `<img>`

// const code7 = `<img />
// <img>`

// const code8 = `<tag attribute="value">Content</tag>`

// const code9 = `<a href="https://example.com">Visit</a>`

// const code10 = `<p id="intro" class="highlight">Text</p>`

// const code11 = `<input type="text" required>`

// const code12 = `required="required"`

// const code13 = `<p><strong>Hello</strong></p>`

// const code14 = `<p><strong>Hello</p></strong>`

// const code15 = `data-*`

// const code16 = `<div data-user-id="123"></div>`

// const code17 = `element.dataset.userId`

// const code18 = `<P>Hello</P>`

// const code19 = `<p>Hello</p>`



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
            Headings & Paragraphs
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
            <b className='text-[#e34c26]'>{num(1)}</b> What are Headings & Paragraphs
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Headings and Paragraphs</b> are fundamental HTML elements used to organize and structure text content on a webpage. <br />
            <br />
            <b>•</b> <b>Headings</b> (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt; – &lt;h6&gt;</span>) define hierarchical titles, from the most important (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span>) to the least (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;h6&gt;</span>). <br />
            <b>•</b> <b>Paragraphs</b> (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span>) define blocks of text content, representing standalone ideas or sections of information. <br />
            <br />
            Together, they form the backbone of readable, structured, and accessible content in HTML.
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
            <b>•</b> Headings are <b>semantic</b> elements — they carry meaning beyond visual appearance. <br />
            <b>•</b> Browsers apply default styles (size, weight) to headings and paragraphs, but CSS can override them. <br />
            <b>•</b> Headings create a hierarchy that search engines and screen readers use for content understanding. <br />
            <b>•</b> Skipping heading levels or misusing them can harm accessibility and SEO. <br />
            <b>•</b> Paragraphs automatically create vertical spacing (margins) between blocks. <br />
            <br />
            Hidden Truth: <br />
            A webpage can visually look fine without headings, but search engines and assistive technologies rely heavily on them.
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
            <b className='text-[#e34c26]'>{num(3)}</b> The &lt;h1&gt; to &lt;h6&gt; Tags 
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Purpose</b> <br />
            <b>•</b> Represent headings in a document hierarchy. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> → Main title of the page (used once per page ideally) <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h2&gt;</span> → Subsection titles <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h3&gt;</span> → Sub-subsections <br />
            <b>•</b> And so on down to <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h6&gt;</span> <br />
            <br />
            <b>Example:</b> <br />
            <CodeBlock language='html' filename='html' code={code1} /> <br />
            <b>Key Points:</b> <br />
            <b>•</b> Headings are <b>block-level</b> elements. <br />
            <b>•</b> They automatically add spacing above and below. <br />
            <b>•</b> Assistive technologies use heading hierarchy for navigation.
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
            <b className='text-[#e34c26]'>{num(4)}</b> Paragraphs with &lt;p&gt; Tag
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Purpose</b> <br />
            <b>•</b> Represents a block of text. <br />
            <b>•</b> Groups sentences into meaningful sections. <br />
            <br />
            <b>Example:</b> <br />
            <CodeBlock language='html' filename='html' code={code2} /> <br />
            <b>Behavior:</b> <br />
            <b>•</b> Browsers automatically add vertical spacing. <br />
            <b>•</b> Paragraphs are <b>block-level</b> elements. <br />
            <b>•</b> Nested paragraphs are invalid — use multiple <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span> tags instead.
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
            <b className='text-[#e34c26]'>{num(5)}</b> Combining Headings and Paragraphs
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Headings introduce sections; paragraphs provide content. <br />
            <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code3} /> <br />
            This combination ensures: <br />
            <b>•</b> Readability <br />
            <b>•</b> Semantic meaning <br />
            <b>•</b> Proper hierarchy for SEO and accessibility 
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
            <b className='text-[#e34c26]'>{num(6)}</b> Accessibility Considerations
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> only once per page for the main title. <br />
            <b>•</b> Use headings in order (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> → <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h2&gt;</span> → <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h3&gt;</span>) for proper semantic structure. <br />
            <b>•</b> Screen readers can navigate content by headings. <br />
            <b>•</b> Paragraphs should contain meaningful text, not just filler. <br />
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
            <b className='text-[#e34c26]'>{num(7)}</b> Common Mistakes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            ❌ Skipping heading levels randomly (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> → <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h4&gt;</span>) <br />
            ❌ Using headings for styling instead of meaning <br />
            ❌ Nesting paragraphs incorrectly (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span><span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span><span className='bg-neutral-800 px-2 rounded-lg'>&lt;/p&gt;</span><span className='bg-neutral-800 px-2 rounded-lg'>&lt;/p&gt;</span>) <br />
            ❌ Using <span className='bg-neutral-800 px-2 rounded-lg'>&lt;br&gt;</span> excessively instead of proper paragraph separation <br />
            <br />
            Correct structure = better readability, SEO, and accessibility.
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
            <b className='text-[#e34c26]'>{num(8)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Headings (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span>–<span className='bg-neutral-800 px-2 rounded-lg'>&lt;h6&gt;</span>) define content hierarchy. <br />
            <b>•</b> Paragraphs (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span>) define blocks of text. <br />
            <b>•</b> Proper use ensures accessibility, SEO, and readability. <br />
            <b>•</b> Never use headings purely for visual styling — use CSS for that. <br />
            <b>•</b> Paragraphs cannot be nested; always separate content properly. <br />
            <b>•</b> A well-structured document uses headings to organize paragraphs logically. 
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
            <b className='text-[#e34c26]'>{num(9)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> is like the VIP of your webpage — should appear only once. <br />
            <b>•</b> Some browsers allow <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h7&gt;</span> or higher in invalid HTML, but it won&apos;t work properly. <br />
            <b>•</b> Paragraph spacing differs across browsers — blame the default user-agent stylesheet. <br />
            <b>•</b> You can navigate Wikipedia entirely using just headings with a screen reader. <br />
            <b>•</b> Early web pages often skipped headings entirely — now it&apos;s unthinkable for professional sites.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
