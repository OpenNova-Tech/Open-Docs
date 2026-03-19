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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`

  const code2 = `Hello World`

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
            Hello World Page
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
            <b className='text-[#e34c26]'>{num(1)}</b> What is a Hello World
            Page
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>Hello World Page</b> in HTML is the simplest possible webpage
            created to demonstrate the basic structure of an HTML document and
            verify that a browser can render content correctly. <br />
            <br />
            It traditionally displays the text: <br />
            <b>Hello, World!</b> <br />
            <br />
            This concept became popular in programming culture as the first
            program developers write when learning a new language. In the
            context of HTML, it represents: <br />
            <b>•</b> Your first valid webpage <br />
            <b>•</b> Your first interaction with a browser rendering engine{' '}
            <br />
            <b>•</b> The foundation of all future web development
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
            <b>•</b> HTML does not &quot;run&quot; like a programming language —
            it is parsed by the browser. <br />
            <b>•</b> Even a single line of text can be rendered without a full
            structure, but that is not professional HTML. <br />
            <b>•</b> Browsers auto-correct missing structure — but relying on
            that is bad practice. <br />
            <b>•</b> A proper Hello World page includes metadata and encoding,
            not just visible text. <br />
            <b>•</b> Saving the file with the correct{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>.html</span>{' '}
            extension is critical. <br />
            <b>•</b> The browser does not care about file name — but the
            operating system does. <br />
            <br />
            Hidden Truth: <br />
            Your first HTML page is not about &quot;Hello World.&quot; It&apos;s
            about understanding document structure.
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
            <b className='text-[#e34c26]'>{num(3)}</b> Writing Your First HTML
            Document
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Step 1: Create a File</b> <br />
            Create a new file and name it: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              index.html
            </span>{' '}
            <br />
            <br />
            Why{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              index.html
            </span>? <br />
            <b>•</b> Web servers automatically look for{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>index.html</span>{' '}
            as the default page. <br />
            <b>•</b> It is a long-standing web convention. <br />
            <br />
            <b>Step 2: Add the Basic HTML5 Boilerplate</b> <br />
            <CodeBlock language='html' filename='html' code={code1} />
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
            <b className='text-[#e34c26]'>{num(4)}</b> Breaking Down the Code
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;!DOCTYPE html&gt;
            </span>{' '}
            <br />
            Declares HTML5. <br />
            Enables Standards Mode. <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;html lang=&quot;en&quot;&gt;
            </span>{' '}
            <br />
            Root element. <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              lang=&quot;en&quot;
            </span>{' '}
            improves accessibility. <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;head&gt;
            </span>{' '}
            <br />
            Contains metadata. <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;meta charset=&quot;UTF-8&quot;&gt;
            </span>{' '}
            <br />
            Prevents character corruption. <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;meta name=&quot;viewport&quot;&gt;
            </span>{' '}
            <br />
            Ensures mobile responsiveness. <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;title&gt;
            </span>{' '}
            <br />
            Appears in browser tab and search results. <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;body&gt;
            </span>{' '}
            <br />
            Contains visible content. <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;h1&gt;
            </span>{' '}
            <br />
            Heading level 1 — most important heading on the page.
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
            <b className='text-[#e34c26]'>{num(5)}</b> Running the Hello World
            Page
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Method 1: Direct File Open</b> <br />
            <b>1.</b> Save file. <br />
            <b>2.</b> Double-click it. <br />
            <b>3.</b> It opens in your default browser. <br />
            <br />
            <b>Method 2: Live Server (Recommended)</b> <br />
            Using tools like: <br />
            <b>•</b> Visual Studio Code with Live Server extension <br />
            <b>•</b> Local development servers <br />
            <br />
            Why use a server? <br />
            <b>•</b> Mimics real-world deployment <br />
            <b>•</b> Avoids certain browser security restrictions <br />
            <b>•</b> Enables advanced features later
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
            <b className='text-[#e34c26]'>{num(6)}</b> Understanding Browser
            Rendering
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When you open the file: <br />
            <b>1.</b> Browser reads the HTML file. <br />
            <b>2.</b> Parses markup top to bottom. <br />
            <b>3.</b> Builds the DOM tree. <br />
            <b>4.</b> Renders content visually. <br />
            <br />
            The{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;h1&gt;
            </span>{' '}
            element becomes a large bold heading by default because browsers
            apply built-in CSS (User Agent Stylesheet). <br />
            <br />
            Important: <br />
            You did not style it — the browser did.
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
            <b className='text-[#e34c26]'>{num(7)}</b> Minimal vs Professional
            Hello World
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Minimal Version (Technically Works)</b>
            <CodeBlock language='html' filename='html' code={code2} /> <br />
            Browser will render it. <br />
            <br />
            But this: <br />
            <b>•</b> Lacks structure <br />
            <b>•</b> Has no metadata <br />
            <b>•</b> Is not standards-compliant <br />
            <b>•</b> Has no accessibility configuration <br />
            <br />
            <b>Professional Version</b> <br />
            Always use full structure. <br />
            <br />
            Professional developers never skip boilerplate. <br />
            <br />
            Remember: <br />
            HTML structures content. It does not execute algorithms.
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
            <b className='text-[#e34c26]'>{num(8)}</b> File Extensions and MIME
            Types
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Your file must end with: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>.html</span> <br />
            <br />
            Why? <br />
            <br />
            Browsers rely on: <br />
            <b>•</b> File extension <br />
            <b>•</b> Server MIME type (
            <span className='bg-neutral-800 px-2 rounded-lg'>text/html</span>){' '}
            <br />
            <br />
            If saved as{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>.txt</span>, the
            browser will display raw text instead of parsing HTML.
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
            <b className='text-[#e34c26]'>{num(9)}</b> Viewing Page Source
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Right-click → <b>View Page Source</b> <br />
            You will see your HTML exactly as written. <br />
            <br />
            Important distinction: <br />
            <b>•</b> Page Source → Original HTML <br />
            <b>•</b> Inspect Element → Live DOM (may differ due to browser
            corrections)
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
            <b className='text-[#e34c26]'>{num(10)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> A Hello World page is your first valid HTML document.{' '}
            <br />
            <b>•</b> Proper structure is more important than the text itself.{' '}
            <br />
            <b>•</b> Always include DOCTYPE, head, and body. <br />
            <b>•</b> Browsers parse HTML into a DOM tree. <br />
            <b>•</b> Use{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>.html</span>{' '}
            extension. <br />
            <b>•</b> Use a development server for professional workflow. <br />
            <b>•</b> Even the simplest page follows the same structure as
            massive websites.
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
            <b className='text-[#e34c26]'>{num(11)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> The first website in history was basically a giant
            &quot;Hello World.&quot; <br />
            <b>•</b> You can build billion-dollar platforms starting from this
            exact template. <br />
            <b>•</b> Most developers write Hello World hundreds of times in
            their career. <br />
            <b>•</b> If Hello World doesn&apos;t work, something is seriously
            wrong 😄 <br />
            <b>•</b> The browser does more work than your HTML in this example.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
