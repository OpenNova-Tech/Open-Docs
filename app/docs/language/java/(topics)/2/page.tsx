'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function page() {
  return (
    <main className='pt-32 dark:bg-black py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#b07219] bg-black'>
            History of Java
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>2.1</b> Origins of Java
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <b>Created by James Gosling</b> and his team at <b>Sun Microsystems</b> in 1991. <br />
            • Originally called <b>&quot;Oak&quot;</b> (named after an oak tree outside Gosling&apos;s office). <br />
            • Later renamed to <b>Java</b> (inspired by Java coffee) due to trademark issues with &quot;Oak&quot;. <br />
            • The initial goal: build a <b>platform-independent language</b> for embedded systems and consumer electronics.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>2.2</b> Timeline of Java Versions
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <b>1995</b>: Java 1.0 released → &quot;Write Once, Run Anywhere&quot; promise. <br />
            • <b>1997 (Java 1.1)</b>: Inner classes, JDBC, RMI. <br />
            • <b>1998 (Java 2 - J2SE)</b>: Swing, Collections Framework, strict API separation. <br />
            • <b>2004 (Java 5)</b>: Generics, Annotations, Enhanced for-loop, Autoboxing. <br />
            • <b>2011 (Java 7)</b>: Try-with-resources, diamond operator, NIO.2. <br />
            • <b>2014 (Java 8)</b>: Major update → Lambdas, Streams API, Date-Time API. <br />
            • <b>2017 (Java 9+)</b>: Modular system (<span className='bg-neutral-800 px-2 rounded-lg'>module-info.java</span>). <br />
            • <b>2021 onwards</b>: Regular <b>6-month release cycle</b> → faster updates.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>2.3</b> Acquisition & Stewardship
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <b>2009</b>: Oracle acquired <b>Sun Microsystems</b> and took over Java development. <br />
            • Oracle continues to maintain Java, with contributions from the <b>OpenJDK community</b>. <br />
            • OpenJDK is the <b>open-source implementation</b> of Java, widely used worldwide.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>2.4</b> Java&apos;s Evolution Philosophy
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <b>Backward Compatibility</b>: Older Java code usually runs on newer versions. <br />
            • <b>Security & Stability</b>: Every version improves runtime security and performance. <br />
            • <b>Ecosystem Growth</b>: Expanding libraries, frameworks, and tools over decades. <br />
            • <b>Community-Driven</b>: Large developer community influences Java&apos;s roadmap.independence.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>2.5</b> Java Today
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Still among the <b>top 3 programming languages</b> worldwide. <br />
            • Powers <b>enterprise systems, Android apps, financial services, big data, and cloud-native microservices</b>. <br />
            • Keeps evolving to remain <b>relevant in modern software development</b>.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>2.6</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Java was created by <b>James Gosling (1991)</b>, released publicly in <b>1995</b>. <br />
            • Originally &quot;Oak,&quot; renamed &quot;Java&quot; (after coffee). <br />
            • Evolved through <b>major versions</b> → from applets to enterprise and cloud. <br />
            • Now managed by <b>Oracle & OpenJDK community</b>. <br />
            • Remains a <b>dominant, evolving, and backward-compatible language</b>.
          </div>
        </motion.div>

        <motion.div
          className='flex justify-center gap-6 pt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href='1'>
            <button className='bg-transparent border border-[#b07219] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
              ← View Previous
            </button>
          </Link>
          <Link href='3'>
            <button className='bg-transparent border border-[#b07219] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
              View Next →
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
