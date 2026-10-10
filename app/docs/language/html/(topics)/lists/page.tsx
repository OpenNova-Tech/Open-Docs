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

  const code1 = `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`

  const code2 = `<ol>
  <li>Open file</li>
  <li>Write code</li>
  <li>Save file</li>
</ol>`

  const code3 = `<ul>
  <li>
    <h3>Frontend</h3>
    <p>HTML, CSS, JS</p>
  </li>
</ul>`

  const code4 = `<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>`

  const code5 = `<ol type="A">`

const code6 = `<ol start="5">`

const code7 = `<ol reversed>`

const code8 = `<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/docs">Docs</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>`

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
            Lists (ul / ol)
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
            <b className='text-[#e34c26]'>{num(1)}</b> What are Lists (ul / ol)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>HTML Lists</b> are structural elements used to group related items in a meaningful and organized format. <br />
            <br />
            There are three primary list types in HTML: <br />
            <b>•</b> <b>Unordered List</b> (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span>) → Bulleted list <br />
            <b>•</b> <b>Ordered List</b> (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;ol&gt;</span>) → Numbered list <br />
            <b>•</b> <b>List Item</b> (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;li&gt;</span>) → Individual item inside a list <br />
            <br />
            Lists are used for: <br />
            <b>•</b> Navigation menus <br />
            <b>•</b> Feature lists <br />
            <b>•</b> Step-by-step instructions <br />
            <b>•</b> Data grouping <br />
            <b>•</b> Content hierarchy <br />
            <br />
            Lists are semantic — they describe relationships between grouped items.
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
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;li&gt;</span> must always exist inside <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> or <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ol&gt;</span>. <br />
            <b>•</b> Lists are block-level elements. <br />
            <b>•</b> Browsers apply default indentation and bullet/number styling. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> and <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ol&gt;</span> differ semantically — not just visually. <br />
            <b>•</b> CSS can remove bullets, but semantics remain. <br />
            <b>•</b> Nested lists create hierarchical structures. <br />
            <b>•</b> Improper list usage harms accessibility. <br />
            <br />
            Hidden Truth: <br />
            Most navigation menus on the internet are just styled <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> lists.
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
            <b className='text-[#e34c26]'>{num(3)}</b> Unordered Lists (&lt;ul&gt;)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            An <b>unordered list</b> displays items without implying sequence or order. <br />
            <br />
            <b>Syntax:</b> <br />
            <CodeBlock language='html' filename='html' code={code1} /> <br />
            <b>Default Appearance:</b> <br />
            <b>•</b> Bullet points <br />
            <b>•</b> Indented structure <br />
            <br />
            <b>When to Use:</b> <br />
            <b>•</b> Feature lists <br />
            <b>•</b> Categories <br />
            <b>•</b> Grouped items without ranking <br />
            <b>•</b> Navigation menus <br />
            <br />
            Use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> when order does <b>not</b> matter.
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
            <b className='text-[#e34c26]'>{num(4)}</b> Ordered Lists (&lt;ol&gt;)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            An <b>ordered list</b> displays items in a specific sequence. <br />
            <br />
            <b>Syntax:</b> <br />
            <CodeBlock language='html' filename='html' code={code2} /> <br />
            <b>Default Appearance:</b> <br />
            <b>•</b> Numbered items (1, 2, 3…) <br />
            <br />
            <b>When to Use:</b> <br />
            <b>•</b> Step-by-step guides <br />
            <b>•</b> Ranking lists <br />
            <b>•</b> Instructions <br />
            <b>•</b> Procedures <br />
            <br />
            Use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ol&gt;</span> when order <b>matters</b>.
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
            <b className='text-[#e34c26]'>{num(5)}</b> The &lt;li&gt; (List Item) Element
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The <span className='bg-neutral-800 px-2 rounded-lg'>&lt;li&gt;</span> tag defines an individual list item. <br />
            <br />
            Rules:: <br />
            <b>•</b> Must be a direct child of <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> or <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ol&gt;</span>. <br />
            <b>•</b> Can contain: <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Text <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Images <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Links <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Headings <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Even other lists <br />
            <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code3} /> <br />
            Lists can contain complex structured content.
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
            <b className='text-[#e34c26]'>{num(6)}</b> Nested Lists (Multi-Level Lists)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Lists can be nested inside other list items. <br />
            <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code4} /> <br />
            <b>Behavior:</b> <br />
            <b>•</b> Indentation increases per level. <br />
            <b>•</b> Useful for hierarchical data. <br />
            <b>•</b> Common in: <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Documentation <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> File structures <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Menus <br />
            <br />
            Deep nesting should remain readable and meaningful.
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
            <b className='text-[#e34c26]'>{num(7)}</b> Ordered List Attributes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ol&gt;</span> supports attributes that modify numbering. <br />
            <br />
            1️⃣ type <br />
            Changes numbering style: <br />
            <CodeBlock language='html' filename='html' code={code5} /> 
            Values: <br />
            <b>•</b> 1 → Numbers (default) <br />
            <b>•</b> A → Uppercase letters <br />
            <b>•</b> a → Lowercase letters <br />
            <b>•</b> I → Roman numerals (uppercase) <br />
            <b>•</b> i → Roman numerals (lowercase) <br />
            <br />
            2️⃣ start <br />
            Changes starting number: <br />
            <CodeBlock language='html' filename='html' code={code6} /> 
            Starts from 5 instead of 1. <br />
            <br />
            3️⃣ reversed <br />
            <CodeBlock language='html' filename='html' code={code7} /> 
            Numbers items in descending order.
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
            <b className='text-[#e34c26]'>{num(8)}</b> Accessibility and Semantic Importance
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Screen readers: <br />
            <b>•</b> Announce list type. <br />
            <b>•</b> Indicate number of items. <br />
            <b>•</b> Help users navigate structured content. <br />
            <br />
            Example: <br />
            A screen reader may say: <br />
            *** &quot;List with 3 items&quot; <br />
            <br />
            Using <span className='bg-neutral-800 px-2 rounded-lg'>&lt;div&gt;</span> instead of <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> removes this semantic benefit. <br />
            <br />
            Lists improve: <br />
            <b>•</b> Accessibility <br />
            <b>•</b> SEO <br />
            <b>•</b> Structured navigation
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
            <b className='text-[#e34c26]'>{num(9)}</b> Lists in Navigation Menus
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Example: <br />
            <CodeBlock language='html' filename='html' code={code8} /> <br />
            Almost all professional navigation bars use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> internally. <br />
            <br />
            Why? <br />
            Because navigation links are semantically grouped items.
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
            <b className='text-[#e34c26]'>{num(10)}</b> Common Mistakes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            ❌ Placing <span className='bg-neutral-800 px-2 rounded-lg'>&lt;li&gt;</span> outside <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> or <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ol&gt;</span> <br />
            ❌ Using <span className='bg-neutral-800 px-2 rounded-lg'>&lt;br&gt;</span> instead of lists <br />
            ❌ Using <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> when order matters <br />
            ❌ Over-nesting lists excessively <br />
            ❌ Removing bullets visually but forgetting semantic purpose <br />
            <br />
            Correct structure matters more than appearance. <br />
            <br />
            Do not use lists: <br />
            <b>•</b> For layout positioning <br />
            <b>•</b> To fake spacing <br />
            <b>•</b> For unrelated content grouping
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
            <b className='text-[#e34c26]'>{num(11)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> is for unordered content. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ol&gt;</span> is for ordered sequences. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;li&gt;</span> defines list items. <br />
            <b>•</b> Lists can be nested. <br />
            <b>•</b> Ordered lists support <span className='bg-neutral-800 px-2 rounded-lg'>type</span>, <span className='bg-neutral-800 px-2 rounded-lg'>start</span>, and <span className='bg-neutral-800 px-2 rounded-lg'>reversed</span>. <br />
            <b>•</b> Lists are semantic and improve accessibility. <br />
            <b>•</b> Most navigation menus use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span>. <br />
            <b>•</b> Proper list usage enhances structure and clarity.
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
            <b className='text-[#e34c26]'>{num(12)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Early websites used lists to build entire layouts before CSS matured. <br />
            <b>•</b> Removing bullets doesn&apos;t remove list semantics. <br />
            <b>•</b> Roman numeral lists are rarely used — but fully supported. <br />
            <b>•</b> Many modern UI frameworks still rely heavily on <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> internally. <br />
            <b>•</b> A massive documentation site is basically nested lists styled beautifully.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
