'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
            Introduction to Java
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
            <b className='text-[#b07219]'>1.1</b> What is Java ?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Java is a <b>class-based, object-oriented programming language</b>. <br />
            <b>•</b> It is designed to be <b>platform-independent</b>: &quot;Write Once, Run Anywhere&quot; (WORA). <br />
            <b>•</b> Java programs compile into <b>bytecode</b>, which runs on the <b>Java Virtual Machine (JVM)</b>. <br />
            <b>•</b> Developed by <b>James Gosling at Sun Microsystems in 1995</b> (later acquired by Oracle).
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
            <b className='text-[#b07219]'>1.2</b> Why Java ?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>Cross-platform</b> → Runs on Windows, macOS, Linux, Android, etc. <br />
            <b>•</b> <b>Object-Oriented</b> → Follows principles like encapsulation, inheritance, polymorphism. <br />
            <b>•</b> <b>Secure</b> → Strong memory management, runtime checks, and a security manager. <br />
            <b>•</b> <b>Scalable & Robust</b> → Used for small apps to enterprise-level systems. <br />
            <b>•</b> <b>Huge Ecosystem</b> → Rich libraries, frameworks, and strong community support.
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
            <b className='text-[#b07219]'>1.3</b> Where is Java used?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>Desktop Applications</b> → Swing, JavaFX <br />
            <b>•</b> <b>Web Applications</b> → JSP, Servlets, Spring <br />
            <b>•</b> <b>Enterprise Applications</b> → Banking, ERP systems, enterprise-level backends <br />
            <b>•</b> <b>Mobile Applications</b> → Android (Java was the primary language before Kotlin) <br />
            <b>•</b> <b>Big Data & Cloud</b> → Hadoop, Spark, microservices <br />
            <b>•</b> <b>Game Development</b> → Popular engines and libraries
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
            <b className='text-[#b07219]'>1.4</b> Java Architecture (Quick Overview)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>JDK (Java Development Kit)</b>: Tools for developing Java apps. <br />
            <b>•</b> <b>JRE (Java Runtime Environment)</b>: Libraries + JVM to run Java apps. <br />
            <b>•</b> <b>JVM (Java Virtual Machine)</b>: Executes bytecode, provides platform independence.
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
            <b className='text-[#b07219]'>1.5</b> Real-World Examples
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>Banking Systems</b> → Secure, large-scale applications (ICICI, SBI use Java stacks). <br />
            <b>•</b> <b>E-commerce Platforms</b> → Amazon, Flipkart backend services. <br />
            <b>•</b> <b>Android Apps</b> → A majority of legacy apps are built in Java. <br />
            <b>•</b> <b>Enterprise Software</b> → ERP, HRMS, CRM solutions.
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
            <b className='text-[#b07219]'>1.6</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Java is <b>object-oriented, platform-independent, and secure</b>. <br />
            <b>•</b> Runs on JVM, enabling <b>&quot;Write Once, Run Anywhere&quot;</b>. <br />
            <b>•</b> Has <b>wide applications</b> — desktop, web, mobile, enterprise, big data. <br />
            <b>•</b> Strong <b>ecosystem and community</b> support makes it one of the most reliable programming languages.
          </div>
        </motion.div>

     
      </div>
    </main>
  )
}
