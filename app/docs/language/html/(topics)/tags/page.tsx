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

  const code1 = `<p>Hello World</p>`

  const code2 = `<p>
</p>`

  const code3 = `<p>Hello</p>`

  const code4 = `<div>Content</div>`

  const code5 = `<img src="image.jpg" alt="Image">
<br>
<hr>`

const code6 = `<img>`

const code7 = `<img />
<img>`

const code8 = `<tag attribute="value">Content</tag>`

const code9 = `<a href="https://example.com">Visit</a>`

const code10 = `<p id="intro" class="highlight">Text</p>`

const code11 = `<input type="text" required>`

const code12 = `required="required"`

const code13 = `<p><strong>Hello</strong></p>`

const code14 = `<p><strong>Hello</p></strong>`

const code15 = `data-*`

const code16 = `<div data-user-id="123"></div>`

const code17 = `element.dataset.userId`

const code18 = `<P>Hello</P>`

const code19 = `<p>Hello</p>`



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
            Tags
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
            <b className='text-[#e34c26]'>{num(1)}</b> What are HTML Tags
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>HTML Tags</b> are special keywords enclosed in angle brackets (<span className='bg-neutral-800 px-2 rounded-lg'>&lt; &gt;</span>) used to define elements within an HTML document. They tell the browser how content should be structured and interpreted. <br />
            <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code1} /> <br />
            Here: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span> is the opening tag <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;/p&gt;</span> is the closing tag <br />
            <b>•</b> Together, they form an <b>HTML element</b> <br />
            <br />
            Tags define: <br />
            <b>•</b> Headings <br />
            <b>•</b> Paragraphs <br />
            <b>•</b> Links <br />
            <b>•</b> Images <br />
            <b>•</b> Forms <br />
            <b>•</b> Layout sections <br />
            <b>•</b> And more <br />
            <br />
            HTML tags are the building blocks of every webpage.
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
            <b>•</b> A <b>tag</b> is not the same as an element. <br />
            <b>•</b> Some tags do not require closing tags (void elements). <br />
            <b>•</b> Browsers auto-correct improperly closed tags — but this is unreliable. <br />
            <b>•</b> Tags are case-insensitive, but lowercase is the professional standard. <br />
            <b>•</b> Attributes modify elements but do not replace structure. <br />
            <b>•</b> Improper nesting breaks the DOM hierarchy. <br />
            <br />
            Hidden Truth: <br />
            Most layout bugs originate from incorrect tag nesting — not CSS.
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
            <b className='text-[#e34c26]'>{num(3)}</b> Tag vs Element (Critical Distinction)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Tag</b> <br />
            A tag is just the markup inside angle brackets: <br />
            <CodeBlock language='html' filename='html' code={code2} /> <br />
            <b>Element</b> <br />
            An element includes: <br />
            <b>•</b> Opening tag <br />
            <b>•</b> Content <br />
            <b>•</b> Closing tag <br />
            <CodeBlock language='html' filename='html' code={code3} /> <br />
            Element = Tag + Content + Tag <br />
            <br />
            Understanding this distinction prevents confusion when learning DOM manipulation later.
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
            <b className='text-[#e34c26]'>{num(4)}</b> Types of HTML Tags
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>1️⃣ Container Tags (Paired Tags)</b> <br />
            <br />
            These require both opening and closing tags. <br />
            <br />
            Example:
            <CodeBlock language='html' filename='html' code={code4} /> <br />
            Common container tags: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;div&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt; – &lt;h6&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;section&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;article&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;span&gt;</span> <br />
            <br />
            <b>2️⃣ Void Tags (Self-Closing / Empty Tags)</b> <br />
            <br />
            These do <b>not</b> have closing tags. <br />
            <br />
            Example:
            <CodeBlock language='html' filename='html' code={code5} /> <br />
            Common container tags: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;img&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;br&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;hr&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;input&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;meta&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;link&gt;</span> <br />
            <br />
            In HTML5, you do not need a trailing slash: <br />
            <CodeBlock language='html' filename='html' code={code6} /> <br />
            Both are valid:
            <CodeBlock language='html' filename='html' code={code7} /> 
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
            <b className='text-[#e34c26]'>{num(5)}</b> Block-Level vs Inline Tags
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Block-Level Elements</b> <br />
            <b>•</b> Start on a new line <br />
            <b>•</b> Take full available width <br />
            <br />
            Examples: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;div&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;section&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;article&gt;</span> <br />
            <br />
            <b>Inline Elements</b> <br />
            <b>•</b> Do not start on a new line <br />
            <b>•</b> Only take necessary width <br />
            <br />
            Examples: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;span&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;a&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;strong&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;em&gt;</span> <br />
            <br />
            Understanding this is crucial for layout behavior.
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
            <b className='text-[#e34c26]'>{num(6)}</b> HTML Attributes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Attributes provide additional information about elements. <br />
            <br />
            Syntax:
            <CodeBlock language='html' filename='html' code={code8} /> <br />
            Example:
            <CodeBlock language='html' filename='html' code={code9} /> <br />
            Here: <br />
            <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>href</span> is an attribute <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&quot;https://example.com&quot;</span> is its value <br />
            <br />
            <b>Global Attributes</b> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>id</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>class</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>style</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>title</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>data-*</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>hidden</span> <br />
            <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code10} /> <br />
            <b>Common Element-Specific Attributes</b> <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;img&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>src</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>alt</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>width</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>height</span> <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;a&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>href</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>target</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>rel</span> <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;input&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>type</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>name</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>value</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>placeholder</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>required</span> <br />
            <br />
            Attributes define behavior, configuration, and metadata.
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
            <b className='text-[#e34c26]'>{num(7)}</b> Boolean Attributes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Some attributes do not require values. <br />
            <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code11} /> <br />
            Here: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>required</span> is a boolean attribute. <br />
            <br />
            Equivalent to: <br />
            <CodeBlock language='html' filename='html' code={code12} /> <br />
            Common boolean attributes: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>disabled</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>checked</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>readonly</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>required</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>autofocus</span> 
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
            <b className='text-[#e34c26]'>{num(8)}</b> Proper Nesting of Tags
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Correct: <br />
            <CodeBlock language='html' filename='html' code={code13} /> <br />
            Incorrect: <br />
            <CodeBlock language='html' filename='html' code={code14} /> <br />
            Rules: <br />
            <b>•</b> Inner tag must close before outer tag closes. <br />
            <b>•</b> Follow a tree hierarchy structure. <br />
            <br />
            Improper nesting breaks: <br />
            <b>•</b> Layout <br />
            <b>•</b> CSS selectors <br />
            <b>•</b> JavaScript behavior 
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
            <b className='text-[#e34c26]'>{num(9)}</b> Semantic vs Non-Semantic Tags
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Non-Semantic:</b> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;div&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;span&gt;</span> <br />
            <br />
            These provide structure without meaning. <br />
            <br />
            <b>Semantic:</b> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;header&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;nav&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;main&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;article&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;section&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;footer&gt;</span> <br />
            <br />
            Semantic tags: <br />
            <b>•</b> Improve SEO <br />
            <b>•</b> Improve accessibility <br />
            <b>•</b> Provide meaningful structure <br />
            <br />
            Search engines prefer semantic structure.
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
            <b className='text-[#e34c26]'>{num(10)}</b> Custom Data Attributes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            HTML5 introduced: <br />
            <CodeBlock language='html' filename='html' code={code15} /> <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code16} /> <br />
            Used for: <br />
            <b>•</b> Storing custom metadata <br />
            <b>•</b> JavaScript interaction <br />
            <b>•</b> State management <br />
            <br />
            Accessible via JavaScript: <br />
            <CodeBlock language='js' filename='js' code={code17} /> 
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
            <b className='text-[#e34c26]'>{num(11)}</b> Tag Case Sensitivity & Best Practices
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Technically valid: <br />
            <CodeBlock language='html' filename='html' code={code18} /> <br />
            Professional standard: <br />
            <CodeBlock language='html' filename='html' code={code19} /> <br />
            Best Practices: <br />
            ✔️ Use lowercase <br />
            ✔️ Close all tags <br />
            ✔️ Use semantic elements <br />
            ✔️ Avoid excessive <span className='bg-neutral-800 px-2 rounded-lg'>&lt;div&gt;</span> usage <br />
            ✔️ Use meaningful <span className='bg-neutral-800 px-2 rounded-lg'>id</span> and <span className='bg-neutral-800 px-2 rounded-lg'>class</span> names
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
            <b className='text-[#e34c26]'>{num(12)}</b> Deprecated Tags
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Some tags are obsolete: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;font&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;center&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;big&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;strike&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;marquee&gt;</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;blink&gt;</span> <br />
            <br />
            These were replaced by CSS and modern standards. <br />
            <br />
            Avoid using them.
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
            <b className='text-[#e34c26]'>{num(13)}</b> How Browsers Interpret Tags
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When parsing: <br />
            <b>1.</b> Browser reads tag. <br />
            <b>2.</b> Creates DOM node. <br />
            <b>3.</b> Applies default styles. <br />
            <b>4.</b> Processes attributes. <br />
            <b>5.</b> Continues parsing. <br />
            <br />
            Malformed HTML: <br />
            <b>•</b> Browser attempts recovery. <br />
            <b>•</b> May produce unexpected DOM structure. <br />
            <br />
            Never rely on browser auto-correction.
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
            <b className='text-[#e34c26]'>{num(14)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Tags define structure; elements include content. <br />
            <b>•</b> Container tags require closing tags. <br />
            <b>•</b> Void tags do not. <br />
            <b>•</b> Attributes modify elements. <br />
            <b>•</b> Proper nesting is critical. <br />
            <b>•</b> Semantic tags improve SEO and accessibility. <br />
            <b>•</b> Boolean attributes do not require values. <br />
            <b>•</b> Deprecated tags should be avoided. <br />
            <b>•</b> Clean tagging leads to maintainable code.
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
            <b className='text-[#e34c26]'>{num(15)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;blink&gt;</span> once made text flash aggressively. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;marquee&gt;</span> made text scroll like a news ticker. <br />
            <b>•</b> You can build entire layouts using only <span className='bg-neutral-800 px-2 rounded-lg'>&lt;div&gt;</span> — but you should&apos;t. <br />
            <b>•</b> Browsers are surprisingly tolerant of terrible HTML. <br />
            <b>•</b> Every modern web app is still built on these simple angle brackets.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
