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

  const code1 = `<!DOCTYPE html>`

  const code2 = `<html lang="en">
</html>`

  const code3 = `<html lang="en">`

  const code4 = `<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>`

  const code5 = `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

  const code6 = `<meta name="description" content="Page description">`

  const code7 = `<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>`

  const code8 = `<body>
  <h1>Hello World</h1>
  <p>Welcome to my website.</p>
</body>`

  const code9 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  Content goes here
</body>
</html>`

  const code10 = `<html>
  <head></head>
  <body></body>
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
            Setup & Structure
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
            <b className='text-[#e34c26]'>{num(1)}</b> What is Setup & Structure
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Setup & Structure in HTML</b> refers to the foundational layout
            and required components that form a valid HTML document. It defines
            how a webpage is declared, organized, and interpreted by browsers.{' '}
            <br />
            <br />
            Every HTML document follows a hierarchical structure starting with{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;!DOCTYPE html&gt;
            </span>{' '}
            and containing the root{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;html&gt;</span>{' '}
            element, which is divided into{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span>{' '}
            and{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;body&gt;</span>{' '}
            sections. <br />
            <br />
            This structure ensures: <br />
            <b>•</b> Proper browser rendering <br />
            <b>•</b> Standards compliance <br />
            <b>•</b> SEO compatibility <br />
            <b>•</b> Accessibility readiness <br />
            <br />
            Without correct setup, even valid HTML content may behave
            unpredictably.
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
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;!DOCTYPE html&gt;
            </span>{' '}
            is not an HTML tag. <br />
            <b>•</b> Browsers switch rendering modes based on DOCTYPE (Standards
            Mode vs Quirks Mode). <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span>{' '}
            content is mostly invisible but critically important. <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;body&gt;</span>{' '}
            content is visible but depends on proper{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span>{' '}
            metadata. <br />
            <b>•</b> The{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;html&gt;</span>{' '}
            element defines the document language for accessibility. <br />
            <b>•</b> Incorrect structure can trigger Quirks Mode, emulating
            1990s browser behavior. <br />
            <br />
            Hidden Truth: <br />
            Most beginners ignore structure — professionals obsess over it.
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
            <b className='text-[#e34c26]'>{num(3)}</b> The DOCTYPE Declaration
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language='html' filename='html' code={code1} /> <br />
            <b>What It Does:</b> <br />
            <b>•</b> Declares the document as HTML5. <br />
            <b>•</b> Instructs the browser to use <b>Standards Mode</b>. <br />
            <b>•</b> Prevents Quirks Mode rendering. <br />
            <br />
            <b>Historical Context:</b> <br />
            Older HTML versions required long DOCTYPE declarations referencing
            DTDs. <br />
            HTML5 simplified it to a single line. <br />
            <br />
            Without DOCTYPE: <br />
            <b>•</b> Layout bugs may appear. <br />
            <b>•</b> CSS may behave inconsistently.
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
            <b className='text-[#e34c26]'>{num(4)}</b> The &lt;html&gt; Root
            Element
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language='html' filename='html' code={code2} /> <br />
            <b>Purpose:</b>
            <br />
            <b>•</b> Wraps the entire document. <br />
            <b>•</b> Root of the DOM tree. <br />
            <br />
            <b>Important Attribute:</b> <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>lang</span> →
            Defines language (critical for screen readers & SEO) <br />
            <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code3} /> <br />
            Why <span className='bg-neutral-800 px-2 rounded-lg'>
              lang
            </span>{' '}
            matters: <br />
            <b>•</b> Improves accessibility <br />
            <b>•</b> Helps search engines understand content <br />
            <b>•</b> Enables proper pronunciation by screen readers
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
            <b className='text-[#e34c26]'>{num(5)}</b> The &lt;head&gt; Section
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span>{' '}
            contains metadata — information about the document, not visible
            content. <br />
            <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code4} /> <br />
            Core Components of{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span>
            : <br />
            <br />
            <b>1.</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;meta charset=&quot;UTF-8&quot;&gt;
            </span>{' '}
            <br />
            <b>•</b> Defines character encoding. <br />
            <b>•</b> Prevents text corruption. <br />
            <b>•</b> UTF-8 supports almost all characters worldwide. <br />
            <br />
            <b>2.</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;title&gt;
            </span>{' '}
            <br />
            <b>•</b> Sets browser tab title. <br />
            <b>•</b> Crucial for SEO. <br />
            <b>•</b> Appears in search results. <br />
            <br />
            <b>3. Viewport Meta Tag</b> <br />
            <CodeBlock language='html' filename='html' code={code5} />
            <b>•</b> Enables responsive design. <br />
            <b>•</b> Controls mobile scaling. <br />
            <br />
            <b>4. Meta Description</b>
            <CodeBlock language='html' filename='html' code={code6} />
            <b>•</b> Used by search engines. <br />
            <br />
            <b>5. Linking External Resources</b> <br />
            <CodeBlock language='html' filename='html' code={code7} />
            <br />
            The{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;head&gt;
            </span>{' '}
            controls: <br />
            <b>•</b> SEO <br />
            <b>•</b> Mobile behavior <br />
            <b>•</b> External resources <br />
            <b>•</b> Character encoding <br />
            <b>•</b> Page identity
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
            <b className='text-[#e34c26]'>{num(6)}</b> The &lt;body&gt; Section
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;body&gt;</span>{' '}
            contains all visible content: <br />
            <b>•</b> Text <br />
            <b>•</b> Images <br />
            <b>•</b> Links <br />
            <b>•</b> Forms <br />
            <b>•</b> Videos <br />
            <b>•</b> Layout structure <br />
            <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code8} /> <br />
            The browser renders everything inside{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;body&gt;</span>
            . <br />
            <br />
            <b>Key Rule:</b> <br />
            Only one{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;body&gt;
            </span>{' '}
            element is allowed per document.
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
            <b className='text-[#e34c26]'>{num(7)}</b> The Complete Basic HTML5
            Template
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language='html' filename='html' code={code9} /> <br />
            This is the minimal professional boilerplate.
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
            <b className='text-[#e34c26]'>{num(8)}</b> Rendering Modes (Critical
            Concept)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Browsers operate in three modes: <br />
            <b>1. Standards Mode</b> → Modern rendering <br />
            <b>2. Almost Standards Mode</b> <br />
            <b>3. Quirks Mode</b> → Legacy compatibility <br />
            <br />
            If DOCTYPE is missing or malformed: <br />
            <b>•</b> Browser enters Quirks Mode. <br />
            <b>•</b> CSS layout behaves unpredictably. <br />
            <br />
            This behavior originated from early browser inconsistencies.
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
            <b className='text-[#e34c26]'>{num(9)}</b> DOM Tree Representation
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Given this structure: <br />
            <CodeBlock language='html' filename='html' code={code10} /> <br />
            DOM Tree: <br />
            <b>•</b> Document <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> html <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>•</b> head <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>•</b> body <br />
            Everything is a node. <br />
            <br />
            Structure defines hierarchy. <br />
            Hierarchy defines styling & scripting behavior.
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
            <b className='text-[#e34c26]'>{num(10)}</b> Best Practices for Setup
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            ✔️ Always include{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;!DOCTYPE html&gt;
            </span>{' '}
            <br />
            ✔️ Always define{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>lang</span>{' '}
            attribute <br />
            ✔️ Use UTF-8 encoding <br />
            ✔️ Add viewport meta tag <br />
            ✔️ Keep{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;head&gt;
            </span>{' '}
            clean and structured <br />
            ✔️ Load CSS in{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;head&gt;
            </span>{' '}
            <br />
            ✔️ Place scripts before{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;/body&gt;
            </span>{' '}
            (for performance unless using{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>defer</span>){' '}
            <br />
            ✔️ Validate HTML structure <br />
            <br />
            Professional developers memorize the boilerplate.
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
            <b className='text-[#e34c26]'>{num(11)}</b> Common Structural
            Mistakes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            ❌ Missing DOCTYPE <br />❌ Multiple{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;body&gt;</span>{' '}
            tags <br />❌ Forgetting{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>lang</span> <br />
            ❌ Placing visible content inside{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span>{' '}
            <br />
            ❌ Improper nesting <br />
            ❌ Not closing tags <br />
            <br />
            Browsers may auto-correct — but never rely on it.
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
            <b className='text-[#e34c26]'>{num(12)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> HTML setup defines how browsers interpret the page. <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;!DOCTYPE html&gt;
            </span>{' '}
            ensures standards mode. <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;html&gt;</span>{' '}
            is the root of the DOM. <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span>{' '}
            manages metadata and external resources. <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;body&gt;</span>{' '}
            contains visible content. <br />
            <b>•</b> Proper structure improves SEO, accessibility, and
            performance. <br />
            <b>•</b> Structural mistakes can trigger Quirks Mode. <br />
            <b>•</b> Clean setup is the foundation of professional HTML.
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
            <b className='text-[#e34c26]'>{num(13)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Forgetting DOCTYPE can make your page behave like it&apos;s
            1999. <br />
            <b>•</b> Browsers are so forgiving they sometimes fix broken HTML
            silently. <br />
            <b>•</b> You can build an entire webpage with just 7-8 lines of
            boilerplate. <br />
            <b>•</b> The{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span>{' '}
            is invisible but arguably more important than the{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;body&gt;</span>{' '}
            for SEO. <br />
            <b>•</b> Quirks Mode exists because browsers once competed by
            breaking standards.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
