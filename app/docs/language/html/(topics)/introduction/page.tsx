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
            Introduction
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(1)}</b> What is HTML
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>HTML (HyperText Markup Language)</b> is the standard markup language used to create and structure content on the World Wide Web. <br />
            <br />
            It defines the <b>structural foundation</b> of a webpage using elements (tags) that describe the meaning and hierarchy of content. Browsers parse HTML documents and convert them into a visual representation known as the <b>DOM (Document Object Model)</b>. <br />
            <br />
            HTML is: <br />
            <b>•</b> A <b>markup language</b> (not a programming language) <br />
            <b>•</b> Declarative in nature <br />
            <b>•</b> Platform-independent <br />
            <b>•</b> Interpreted by web browsers <br />
            <b>•</b> The structural layer of the web stack <br />
            <br />
            HTML works alongside: <br />
            <b>•</b> CSS — Presentation layer <br />
            <b>•</b> JavaScript — Behavior layer <br />
            <br />
            Without HTML, there is no web content to style or manipulate.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(2)}</b> Subtle Information
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            C++ is <b>not a single opinionated language</b> — it&apos;s a toolbox. <br />
            <br />
            You decide: <br />
            <b>•</b> How much abstraction you want <br />
            <b>•</b> How much safety you trade for speed <br />
            <b>•</b> Whether your code looks low-level or high-level <br />
            <br />
            C++ does not enforce: <br />
            <b>•</b> Memory safety <br />
            <b>•</b> A specific programming paradigm <br />
            <b>•</b> Automatic resource management <br />
            <br />
            This freedom means <b>great power</b>, but also <b>great responsibility</b>. <br />
            C++ trusts the programmer more than most languages.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(3)}</b> Why C++ Was Created
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            C++ was built to answer one question: <br />
            &quot;How do we write fast system-level programs without writing assembly?&quot; <br />
            <br />
            Its goals were: <br />
            <b>•</b> Keep C&apos;s performance <br />
            <b>•</b> Add better code organization <br />
            <b>•</b> Enable large, maintainable systems <br />
            <br />
            That&apos;s why C++ still dominates <b>systems programming</b> decades later.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(4)}</b> Core Characteristics
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Compiled Language</b> <br />
            <b>•</b> Source code is converted directly to machine code <br />
            <b>•</b> No interpreter or virtual machine <br />
            <b>•</b> Extremely fast execution <br />
            <br />
            <b>Fine-Grained Control</b> <br />
            <b>•</b> Manual memory management <br />
            <b>•</b> Direct hardware interaction <br />
            <b>•</b> Predictable performance <br />
            <br />
            <b>Multi-Paradigm</b>
            C++ supports: <br />
            <b>•</b> Procedural programming <br />
            <b>•</b> Object-oriented programming <br />
            <b>•</b> Generic programming <br />
            <b>•</b> Limited functional programming
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(5)}</b> Where C++ Is Commonly Used
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            C++ is used in environments where <b>efficiency matters more than convenience</b>: <br />
            <b>•</b> Game engines (Unreal Engine) <br />
            <b>•</b> Operating systems & kernels <br />
            <b>•</b> Web browsers <br />
            <b>•</b> Databases <br />
            <b>•</b> Embedded systems <br />
            <b>•</b> Financial trading platforms <br />
            If something must be <b>fast, stable, and close to hardware</b>, C++ is usually involved.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(6)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> C++ is a <b>high-performance, compiled language</b> <br />
            <b>•</b> It provides <b>direct control over system resources</b> <br />
            <b>•</b> It does not hide complexity — it exposes it <br />
            <b>•</b> Best suited for <b>performance-critical software</b> <br />
            <b>•</b> Modern C++ is far more expressive than its early versions
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#e34c26]'>{num(7)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> C++ was originally named <b>&quot;C with Classes&quot;</b> <br />
            <b>•</b> The <span className='bg-neutral-800 px-2 rounded-lg'>++</span> in C++ means increment, not upgrade <br />
            <b>•</b> You can write: Clean, elegant C++ | Or unreadable nightmares — both are valid 😅 <br />
            <b>•</b> A missing semicolon can waste 30 minutes <br />
            <b>•</b> C++ bugs don&apos;t always crash — they haunt
          </div>
        </motion.div>
      </div>
    </main>
  )
}
