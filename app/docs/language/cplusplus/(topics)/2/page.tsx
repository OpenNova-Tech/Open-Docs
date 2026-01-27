'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  return (
    <main className='pt-32 dark:bg-black py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#F34B7D] bg-black'>
            History
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F34B7D] border border-[#F34B7D]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F34B7D]'>{num(1)}</b> What is the History of C++
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The history of C++ traces the <b>evolution of the C++ programming language</b>, originally created by <b>Bjarne Stroustrup</b> as an extension of the C language to support better abstraction, structure, and large-scale software development. <br />
            <br />
            It explains <b>why C++ looks the way it does today</b> — powerful, complex, and performance-focused.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F34B7D] border border-[#F34B7D]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F34B7D]'>{num(2)}</b> Subtle Information
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            C++ did not evolve by replacing old ideas — it evolved by <b>layering new ones on top</b>. <br />
            <br />
            Almost every feature in C++ exists because: <br />
            <b>•</b> Someone needed performance <br />
            <b>•</b> Someone needed backward compatibility <br />
            <b>•</b> Someone refused to break existing code <br />
            <br />
            This is why: <br />
            <b>•</b> C++ feels &quot;heavy&quot; <br />
            <b>•</b> Old C-style code still compiles <br />
            <b>•</b> The language grows but rarely removes features <br />
            <br />
            C++ values not breaking the past more than being minimal.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F34B7D] border border-[#F34B7D]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F34B7D]'>{num(3)}</b> The Birth of C++ (1979 – 1985)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Created by <b>Bjarne Stroustrup</b> at Bell Labs <br />
            <b>•</b> Originally called <b>&quot;C with Classes&quot;</b> <br />
            <b>•</b> Goal: add <b>object-oriented concepts</b> without losing C&apos;s speed <br />
            <br />
            Early features included: <br />
            <b>•</b> Classes <br />
            <b>•</b> Basic encapsulation <br />
            <b>•</b> Constructors and destructors <br />
            <br />
            The name C++ symbolized &quot;incrementing&quot; C.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F34B7D] border border-[#F34B7D]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F34B7D]'>{num(4)}</b> Standardization Era
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            As C++ adoption grew, standardization became necessary. <br />
            <br />
            Major milestones: <br />
            <b>•</b> <b>1998 — C++98</b>: First ISO standard <br />
            <b>•</b> <b>2003 — C++03</b>: Minor fixes <br />
            <b>•</b> <b>2011 — C++11</b>: Massive modernization <br />
            <b>•</b> <b>2014 – 2023</b>: Regular updates (C++14, 17, 20, 23) <br />
            <br />
            C++ shifted from a slow-evolving language to a <b>modern, regularly updated standard</b>.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F34B7D] border border-[#F34B7D]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F34B7D]'>{num(5)}</b> Modern C++ Evolution
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Modern C++ focuses on: <br />
            <b>•</b> Safer memory handling <br />
            <b>•</b> Better abstractions <br />
            <b>•</b> Cleaner syntax <br />
            <b>•</b> Performance without compromise <br />
            <br />
            Key additions: <br />
            <b>•</b> Smart pointers <br />
            <b>•</b> Lambdas <br />
            <b>•</b> Move semantics <br />
            <b>•</b> Concurrency support <br />
            Despite this, <b>older C++ code still works</b>, reinforcing its long-term stability.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F34B7D] border border-[#F34B7D]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F34B7D]'>{num(6)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> C++ began as <b>&quot;C with Classes&quot;</b> <br />
            <b>•</b> Designed to keep <b>C&apos;s speed</b> while adding abstraction <br />
            <b>•</b> Backward compatibility heavily influenced its design <br />
            <b>•</b> Major modernization happened in <b>C++ 11</b> <br />
            <b>•</b> C++ evolves by <b>addition, not replacement</b>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#F34B7D] border border-[#F34B7D]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#F34B7D]'>{num(7)}</b> Fun / Funny Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> C++ is older than Python, Java, and JavaScript <br />
            <b>•</b> Some C++ code written in the 90s still runs today <br />
            <b>•</b> Bjarne Stroustrup never intended C++ to be &quot;easy&quot; <br />
            <b>•</b> C++ standards are so big they&apos;re nicknamed phone books <br />
            <b>•</b> Every new C++ feature somehow still supports C from the 70s
          </div>
        </motion.div>
      </div>
    </main>
  )
}