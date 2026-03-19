'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { HTML_TOPICS } from '@/lib/private/htmlTopics'

export default function Page() {
  const pathname = usePathname()
  const slug = pathname.split('/').filter(Boolean).pop()

  const sectionIndex = HTML_TOPICS.indexOf(slug || '')
  const sectionNumber = sectionIndex >= 0 ? sectionIndex + 1 : 1

  const num = (sub: number) => `${sectionNumber}.${sub}`

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
            History of HTML
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
            <b className='text-[#e34c26]'>{num(1)}</b> What is History of HTML
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The <b>History of HTML</b> refers to the chronological evolution of
            HyperText Markup Language from its invention in 1991 to the modern
            living standard used today. It documents how HTML transformed from a
            simple document-linking system into the backbone of the modern web.{' '}
            <br />
            <br />
            HTML was invented by Tim Berners-Lee while working at CERN as part
            of a project that later became the <b>World Wide Web</b>. <br />
            <br />
            The language evolved through multiple versions, shaped by browser
            wars, standardization battles, and the needs of a rapidly growing
            internet.
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
            <b>•</b> HTML did <b>not</b> start as a fully standardized language.{' '}
            <br />
            <b>•</b> Early HTML had no CSS — styling was embedded directly in
            markup. <br />
            <b>•</b> Browser vendors (especially during the 1990s) introduced
            non-standard tags. <br />
            <b>•</b> The &quot;browser wars&quot; heavily influenced HTML&apos;s
            direction. <br />
            <b>•</b> HTML5 was not created by W3C initially — it was revived by
            WHATWG. <br />
            <b>•</b> Today, HTML is a <b>Living Standard</b>, meaning it
            continuously evolves. <br />
            <br />
            Hidden Truth: <br />
            HTML&apos;s history is not just technical — it&apos;s political,
            competitive, and community-driven.
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
            <b className='text-[#e34c26]'>{num(3)}</b> 1991: The Birth of HTML
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            In 1991, Tim Berners-Lee published the first version of HTML. <br />
            <br />
            It included only <b>18</b> tags, such as: <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;html&gt;</span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;title&gt;
            </span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;a&gt;</span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;br&gt;</span>{' '}
            <br />
            <br />
            Purpose: <br />
            <b>•</b> Share research documents between scientists <br />
            <b>•</b> Enable linking between documents (HyperText) <br />
            <br />
            The first website explained what the World Wide Web was and how to
            use it.
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
            <b className='text-[#e34c26]'>{num(4)}</b> 1993-1995: Early Growth &
            HTML 2.0
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            As the web gained popularity, browsers like: <br />
            <b>•</b> Mosaic <br />
            <b>•</b> Netscape Navigator <br />
            started adding features. <br />
            <br />
            In 1995, <b>HTML 2.0</b> became the first official standard. <br />
            <br />
            It introduced: <br />
            <b>•</b> Forms (
            <span className='bg-neutral-800 px-2 rounded-lg'>&lt;form&gt;</span>
            ) <br />
            <b>•</b> Input fields <br />
            <b>•</b> Basic structure standardization <br />
            <br />
            This marked the beginning of formal HTML standardization.
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
            <b className='text-[#e34c26]'>{num(5)}</b> 1996-1999: Browser Wars &
            HTML 3.2 / 4.0
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The &quot;Browser Wars&quot; began between: <br />
            <b>•</b> Netscape <br />
            <b>•</b> Microsoft (Internet Explorer) <br />
            Each company added proprietary (non-standard) tags. <br />
            <br />
            <b>HTML 3.2 (1997)</b> <br />
            <b>•</b> Tables <br />
            <b>•</b> Applets <br />
            <b>•</b> Scripting support <br />
            <br />
            <b>HTML 4.0 (1997)</b> <br />
            Major shift: <br />
            <b>•</b> Separation of structure and presentation <br />
            <b>•</b> Introduction of CSS <br />
            <b>•</b> Better accessibility support <br />
            <b>•</b> Frames <br />
            <br />
            HTML 4.01 (1999) refined the specification. <br />
            This version dominated for nearly a decade.
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
            <b className='text-[#e34c26]'>{num(6)}</b> 2000: XHTML Era
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The World Wide Web Consortium (W3C) introduced <b>XHTML 1.0</b>.{' '}
            <br />
            <br />
            Goal: <br />
            <b>•</b> Make HTML stricter <br />
            <b>•</b> Enforce XML-style syntax rules <br />
            <br />
            Rules included: <br />
            <b>•</b> All tags must close <br />
            <b>•</b> Lowercase elements <br />
            <b>•</b> Proper nesting required <br />
            <br />
            Problem: <br />
            Browsers were too forgiving. Developers preferred flexibility over
            strict XML rules. <br />
            <br />
            XHTML 2.0 was proposed but later abandoned.
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
            <b className='text-[#e34c26]'>{num(7)}</b> 2004: The Birth of HTML5
            (Rebellion Phase)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            In 2004, members from: <br />
            <b>•</b> Apple Inc. <br />
            <b>•</b> Mozilla Corporation <br />
            <b>•</b> Opera Software <br />
            formed the WHATWG. <br />
            <br />
            They believed HTML should evolve practically instead of becoming
            strict XML. <br />
            Thus, HTML5 development began.
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
            <b className='text-[#e34c26]'>{num(8)}</b> 2014: HTML5 Official
            Recommendation
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            In 2014, W3C officially released <b>HTML5</b>. <br />
            <br />
            Major features introduced: <br />
            <b>•</b> Semantic elements (
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;article&gt;
            </span>
            ,{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;section&gt;
            </span>
            ) <br />
            <b>•</b> Native{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;audio&gt;
            </span>{' '}
            and{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;video&gt;
            </span>{' '}
            <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;canvas&gt;
            </span>{' '}
            for graphics <br />
            <b>•</b> Local storage <br />
            <b>•</b> Geolocation API <br />
            <b>•</b> Improved forms <br />
            <b>•</b> Web APIs <br />
            <br />
            HTML5 transformed the web from static pages to application
            platforms.
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
            <b className='text-[#e34c26]'>{num(9)}</b> The Living Standard Era
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Today, HTML is maintained as a <b>Living Standard</b> by WHATWG.{' '}
            <br />
            <br />
            This means: <br />
            <b>•</b> No more version numbers like HTML6 <br />
            <b>•</b> Continuous updates <br />
            <b>•</b> Browser-driven evolution <br />
            <b>•</b> Faster feature adoption <br />
            <br />
            W3C and WHATWG now collaborate instead of competing.
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
            <b className='text-[#e34c26]'>{num(10)}</b> HTML&apos;s Impact on
            the Modern Web
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            HTML evolved from: <br />
            Simple document markup → Full application framework support. <br />
            <br />
            Modern web technologies rely on HTML: <br />
            <b>•</b> Progressive Web Apps <br />
            <b>•</b> Single Page Applications <br />
            <b>•</b> WebAssembly integration <br />
            <b>•</b> Accessibility standards <br />
            <b>•</b> SEO optimization <br />
            <br />
            Without HTML: <br />
            <b>•</b> No browser rendering <br />
            <b>•</b> No hyperlink system <br />
            <b>•</b> No structured web
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
            <b className='text-[#e34c26]'>{num(11)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> HTML was created in 1991 by Tim Berners-Lee. <br />
            <b>•</b> Early HTML had only 18 tags. <br />
            <b>•</b> The browser wars heavily influenced HTML&apos;s evolution.{' '}
            <br />
            <b>•</b> XHTML attempted strictness but failed in adoption. <br />
            <b>•</b> HTML5 revolutionized multimedia and web applications.{' '}
            <br />
            <b>•</b> HTML is now a Living Standard. <br />
            <b>•</b> The evolution of HTML reflects collaboration, competition,
            and community influence.
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
            <b className='text-[#e34c26]'>{num(12)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> The first HTML page had no images. <br />
            <b>•</b>{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;blink&gt;
            </span>{' '}
            and{' '}
            <span className='bg-neutral-800 px-2 rounded-lg'>
              &lt;marquee&gt;
            </span>{' '}
            were real tags (and thankfully obsolete). <br />
            <b>•</b> XHTML 2.0 was abandoned completely. <br />
            <b>•</b> HTML5 took nearly 10 years to standardize. <br />
            <b>•</b> The web might have died if browser wars had gone
            differently.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
