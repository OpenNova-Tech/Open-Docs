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

  const code1 = `<a href="https://example.com">Visit Website</a>`

  const code2 = `<a href="https://example.com/page.html">External Page</a>`

  const code3 = `<a href="about.html">About</a>`

  const code4 = `<a href="docs/tutorial.html">Tutorial</a>`

  const code5 = `<a href="../index.html">Home</a>`

	const code6 = `<a href="https://example.com" target="_blank">Open</a>`

	const code7 = `<a href="https://example.com" target="_blank" rel="noopener noreferrer">`

	const code8 = `<a href="file.pdf" download>Download PDF</a>`

	const code9 = `<a href="#" title="More info">Hover me</a>`

	const code10 = `<a href="mailto:example@email.com">Send Email</a>`

	const code11 = `<a href="tel:+1234567890">Call Now</a>`

	const code12 = `<a href="#section1">Go to Section 1</a>

<h2 id="section1">Section 1</h2>`

	const code13 = `<img src="image.jpg" alt="Description">`

	const code14 = `<img src="images/photo.jpg" alt="Photo">`

	const code15 = `<img src="https://example.com/photo.jpg" alt="Photo">`

	const code16 = `<img src="/assets/photo.jpg" alt="Photo">`

	const code17 = `<img src="logo.png" alt="Company Logo">`

	const code18 = `<img src="photo.jpg" alt="Photo" width="300" height="200">`

	const code19 = `<a href="index.html">
  <img src="logo.png" alt="Home">
</a>`

	const code20 = `<img src="photo.jpg" alt="Photo" loading="lazy">`



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
            Links & Images
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
            <b className='text-[#e34c26]'>{num(1)}</b> What are Links & Images
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Links and Images</b> are fundamental HTML elements that enable navigation and visual content on the web. <br />
            <b>•</b> <b>Links</b> (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;a&gt;</span>) connect one resource to another using hyperlinks. <br />
            <b>•</b> <b>Images</b> (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;img&gt;</span>) embed visual media into a webpage. <br />
            <b>•</b> <b>Paths</b> define how browsers locate those resources. <br />
            <br />
            Without links: <br />
            <b>•</b> The web would not be interconnected. <br />
						<br />
						Without images: <br />
            <b>•</b> The web would be mostly text-based. <br />
            <br />
            Together, they form the backbone of web navigation and presentation.
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
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;a&gt;</span> is useless without the <span className='bg-neutral-800 px-2 rounded-lg'>href</span> attribute. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;img&gt;</span> is a <b>void element</b> — it has no closing tag. <br />
            <b>•</b> Paths can be <b>absolute</b> or <b>relative</b>. <br />
            <b>•</b> Images must include <span className='bg-neutral-800 px-2 rounded-lg'>alt</span> text for accessibility. <br />
            <b>•</b> Links affect SEO significantly. <br />
            <b>•</b> Images impact performance more than most developers realize. <br />
            <b>•</b> A link can wrap almost any HTML element — not just text. <br />
            <br />
            Hidden Truth: <br />
            The web exists because of hyperlinks — images just make it beautiful.
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
            <b className='text-[#e34c26]'>{num(3)}</b> The Anchor (&lt;a&gt;) Element
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The <span className='bg-neutral-800 px-2 rounded-lg'>&lt;a&gt;</span> tag creates hyperlinks. <br />
            <br />
            <b>Basic Syntax:</b> <br />
            <CodeBlock language='html' filename='html' code={code1} /> <br />
            Components: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;a&gt;</span> → Anchor tag <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>href</span> → Hyperlink reference <br />
            <b>•</b> Text → Clickable content <br />
            <br />
            Clicking the link sends the browser to the specified URL.
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
            <b className='text-[#e34c26]'>{num(4)}</b> Absolute vs Relative Paths
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>1️⃣ Absolute Path</b> <br />
            <br />
            Full URL including protocol: <br />
            <CodeBlock language='html' filename='html' code={code2} /> <br />
            Used for: <br />
            <b>•</b> External websites <br />
            <b>•</b> Fully qualified addresses <br />
            <br />
            <b>2️⃣ Relative Path</b> <br />
            <br />
            Relative to current file location: <br />
            <CodeBlock language='html' filename='html' code={code3} /> <br />
            Folder example: <br />
            <CodeBlock language='html' filename='html' code={code4} /> <br />
            Go up one directory: <br />
            <CodeBlock language='html' filename='html' code={code5} /> <br />
            Relative paths are essential for project structure.
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
            <b className='text-[#e34c26]'>{num(5)}</b> Anchor Attributes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>target</span> <br />
            <br />
            <CodeBlock language='html' filename='html' code={code6} /> 
            Common values: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>_self</span> (default) <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>_blank</span> (new tab) <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>_parent</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>_top</span> (default) <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>rel</span> <br />
            <br />
            Used with <span className='bg-neutral-800 px-2 rounded-lg'>_blank</span> for security:
            <CodeBlock language='html' filename='html' code={code7} /> 
            Prevents security vulnerabilities. <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>download</span> <br />
            <br />
            <CodeBlock language='html' filename='html' code={code8} />
            Forces file download. <br />
            <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>title</span> <br />
            <br />
            <CodeBlock language='html' filename='html' code={code9} />
            Displays tooltip.
            <br />
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
            <b className='text-[#e34c26]'>{num(6)}</b> Email and Telephone Links
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Email Link</b> <br />
            <CodeBlock language='html' filename='html' code={code10} /> <br />
            <b>Telephone Link</b> <br />
            <CodeBlock language='html' filename='html' code={code11} /> <br />
            Common in business websites.
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
            <b className='text-[#e34c26]'>{num(7)}</b> Internal Page Anchors (Fragment Identifiers)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used to jump to sections within a page. <br />
            <CodeBlock language='html' filename='html' code={code12} /> <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>#section1</span> refers to the element with matching <span className='bg-neutral-800 px-2 rounded-lg'>id</span>. <br />
            <br />
            Used in: <br />
            <b>•</b> Table of contents <br />
            <b>•</b> Single-page documentation <br />
            <b>•</b> Navigation menus
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
            <b className='text-[#e34c26]'>{num(8)}</b> The &lt;img&gt; Element
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The <span className='bg-neutral-800 px-2 rounded-lg'>&lt;img&gt;</span> tag embeds images. <br />
            <br />
            <b>Basic Syntax:</b>
            <CodeBlock language='html' filename='html' code={code13} /> <br />
            Attributes: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>src</span> → Image source <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>alt</span> → Alternative text <br />
            <br />
            Important: <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;img&gt;</span> is a void element — no closing tag.
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
            <b className='text-[#e34c26]'>{num(9)}</b> Image Paths
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Relative Path</b> <br />
            <CodeBlock language='html' filename='html' code={code14} /> <br />
            <b>Absolute Path</b> <br />
            <CodeBlock language='html' filename='html' code={code15} /> <br />
            <b>Root-Relative Path</b> <br />
            <CodeBlock language='html' filename='html' code={code16} /> <br />
            Understanding paths prevents broken images.
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
            <b className='text-[#e34c26]'>{num(10)}</b> The Importance of alt Attribute
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language='html' filename='html' code={code17} /> <br />
            Why <span className='bg-neutral-800 px-2 rounded-lg'>alt</span> matters: <br />
            <b>•</b> Screen readers read it aloud. <br />
            <b>•</b> Displays if image fails to load. <br />
            <b>•</b> Improves SEO. <br />
            <b>•</b> Required for accessibility compliance. <br />
            <br />
            Never leave <span className='bg-neutral-800 px-2 rounded-lg'>alt</span> empty unless decorative.
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
            <b className='text-[#e34c26]'>{num(11)}</b> Image Dimensions
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language='html' filename='html' code={code18} /> <br />
            Benefits: <br />
            <b>•</b> Prevents layout shifts. <br />
            <b>•</b> Improves performance perception. <br />
            <b>•</b> Helps browser reserve space. <br />
            <br />
            Better practice: <br />
            Set dimensions in CSS when appropriate.
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
            <b className='text-[#e34c26]'>{num(12)}</b> Image Formats
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Common formats: <br />
            <b>•</b> JPEG (.jpg) <br />
            <b>•</b> PNG (.png) <br />
            <b>•</b> GIF (.gif) <br />
            <b>•</b> SVG (.svg) <br />
            <b>•</b> WebP (.webp) <br />
            <br />
            General Use: <br />
            <b>•</b> JPEG → Photographs <br />
            <b>•</b> PNG → Transparency <br />
            <b>•</b> SVG → Logos & icons <br />
            <b>•</b> WebP → Modern optimized format <br />
            <br />
            Choosing the correct format affects performance.
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
            <b className='text-[#e34c26]'>{num(13)}</b> Linking Images
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Images can be clickable. <br />
            <CodeBlock language='html' filename='html' code={code19} /> <br />
            Used for: <br />
            <b>•</b> Logos <br />
            <b>•</b> Banners <br />
            <b>•</b> Product cards
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
            <b className='text-[#e34c26]'>{num(14)}</b> Performance Considerations
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Images often account for the largest portion of page size. <br />
            <br />
            Best practices: <br />
            ✔️ Compress images <br />
            ✔️ Use modern formats (WebP) <br />
            ✔️ Specify width & height <br />
            ✔️ Use lazy loading <br />
            <br />
            Example: <br />
            <CodeBlock language='html' filename='html' code={code20} /> <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>loading=&quot;lazy&quot;</span> delays loading until needed.
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
            <b className='text-[#e34c26]'>{num(15)}</b> Common Mistakes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            ❌ Missing <span className='bg-neutral-800 px-2 rounded-lg'>alt</span> attribute <br />
            ❌ Broken relative paths <br />
            ❌ Using <span className='bg-neutral-800 px-2 rounded-lg'>_blank</span> without <span className='bg-neutral-800 px-2 rounded-lg'>rel=&quot;noopener&quot;</span> <br />
            ❌ Using large uncompressed images <br />
            ❌ Using images for text instead of actual text <br />
            <br />
            Proper linking and image usage affect: <br />
            <b>•</b> SEO <br />
            <b>•</b> Accessibility <br />
            <b>•</b> Performance <br />
            <b>•</b> Security
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
            <b className='text-[#e34c26]'>{num(16)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;a&gt;</span> creates hyperlinks. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;img&gt;</span> embeds images. <br />
            <b>•</b> Paths can be absolute or relative. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>alt</span> is critical for accessibility. <br />
            <b>•</b> Links support attributes like <span className='bg-neutral-800 px-2 rounded-lg'>target</span>, <span className='bg-neutral-800 px-2 rounded-lg'>rel</span>, and <span className='bg-neutral-800 px-2 rounded-lg'>download</span>. <br />
            <b>•</b> Images require correct format and optimization. <br />
            <b>•</b> Images can be wrapped inside links. <br />
            <b>•</b> Performance heavily depends on proper image handling.
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
            <b className='text-[#e34c26]'>{num(17)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> The entire internet is basically a giant network of <span className='bg-neutral-800 px-2 rounded-lg'>&lt;a&gt;</span> tags. <br />
            <b>•</b> Broken images show that infamous tiny icon — every developer has seen it. <br />
            <b>•</b> The first web pages had no images. <br />
            <b>•</b> Clicking a link triggers a full navigation cycle unless using advanced JS frameworks. <br />
            <b>•</b> A missing slash in a path can break an entire website.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
