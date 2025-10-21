'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
  const code1 = `int age = 20;
if (age >= 18) {
    System.out.println("You are eligible to vote.");
}`

  const code2 = `int num = 10;
if (num % 2 == 0) {
    System.out.println("Even number");
} else {
    System.out.println("Odd number");
}`

  const code3 = `int marks = 75;
if (marks >= 90) {
    System.out.println("Grade A");
} else if (marks >= 75) {
    System.out.println("Grade B");
} else if (marks >= 50) {
    System.out.println("Grade C");
} else {
    System.out.println("Fail");
}`

  const code4 = `int age = 25;
boolean hasID = true;

if (age >= 18) {
    if (hasID) {
        System.out.println("Entry allowed");
    }
}`

  const code5 = `int day = 3;
switch (day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break;
    default: System.out.println("Invalid day");
}`

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
            Decision Making
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
            <b className='text-[#b07219]'>10.1</b> if Statement
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Executes a block <b>only if</b> the condition is true. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code1} />
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
            <b className='text-[#b07219]'>10.2</b> if-else Statement 
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Provides an <b>alternative path</b> when the condition is false. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code2} />
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
            <b className='text-[#b07219]'>10.3</b> if-else-if Ladder
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used for <b>multiple conditions</b>. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code3} />
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
            <b className='text-[#b07219]'>10.4</b> Nested if
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            if inside another if. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code4} />
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
            <b className='text-[#b07219]'>10.5</b> switch Statement
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Cleaner than multiple if-else when checking a single variable. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code5} />
            <br />
            Rules for switch: <br />
            • Works with: <span className='bg-neutral-800 px-2 rounded-lg'>int</span>, <span className='bg-neutral-800 px-2 rounded-lg'>char</span>, <span className='bg-neutral-800 px-2 rounded-lg'>String</span>, <span className='bg-neutral-800 px-2 rounded-lg'>enum</span>. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>break</span> to avoid fall-through. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>default</span> executes if no case matches.
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
            <b className='text-[#b07219]'>10.6</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <span className='bg-neutral-800 px-2 rounded-lg'>if</span> → single condition. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>if-else</span> → two-way decision. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>if-else-if</span> ladder → multiple conditions. <br />
            • <b>Nested if</b> → condition inside another. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>switch</span> → cleaner alternative for multiple discrete values.
          </div>
        </motion.div>

       
      </div>
    </main>
  )
}
