'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
  const code1 = `for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}`

  const code2 = `int i = 1;
while (i <= 5) {
    System.out.println("Count: " + i);
    i++;
}`

  const code3 = `int i = 1;
do {
    System.out.println("Count: " + i);
    i++;
} 
while (i <= 5);`

  const code4 = `int[] nums = {10, 20, 30};
for (int n : nums) {
    System.out.println(n);
}
`

  const code5 = `while (true) {
    System.out.println("Runs forever!");
}`

  const code6 = `for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break; // loop ends when i == 3
    }
    System.out.println(i);
}`

  const code7 = `1
2`

  const code8 = `for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue; // skip when i == 3
    }
    System.out.println(i);
}`

  const code9 = `1
2
4
5`

  const code10 = `outer: 
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) break outer; 
        System.out.println(i + " " + j);
    }
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
            Loops in Java
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
            <b className='text-[#b07219]'>11.1</b> What is a Loop
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Loops let you <b>execute a block of code multiple times</b> until a condition is met.
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
            <b className='text-[#b07219]'>11.2</b> for Loop
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used when the <b>number of iterations is known</b>. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code1} />
            <br />
            👉 Initialization → Condition → Update → Repeat
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
            <b className='text-[#b07219]'>11.3</b> while Loop
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used when the <b>number of iterations is unknown</b>, but depends on a condition. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code2} />
            <br />
            👉 Condition is checked <b>before execution</b>.
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
            <b className='text-[#b07219]'>11.4</b> do-while Loop
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Executes the block <b>at least once</b>, even if condition is false. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code3} />
            <br />
            👉 Condition is checked <b>after execution</b>.
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
            <b className='text-[#b07219]'>11.5</b> Enhanced for (For-Each Loop)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Simpler way to iterate over arrays or collections. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code4} />
            <br />
            👉 Automatically iterates through elements.
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
            <b className='text-[#b07219]'>11.6</b> Infinite Loops
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Possible if condition never becomes false. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code5} />
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
            <b className='text-[#b07219]'>11.7</b> break Statement
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used to <b>exit the loop immediately</b>, regardless of condition. <br />
            <br />
            <b>Example: Exit loop when number is 3</b>
            <CodeBlock language="java" filename="java" code={code6} />
            <br />
            <b>Output:</b>
            <CodeBlock language="" filename="" code={code7} />
            <br />
            👉 After <span className='bg-neutral-800 px-2 rounded-lg'>break</span>, control moves <b>outside</b> the loop.
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
            <b className='text-[#b07219]'>11.8</b> continue Statement
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used to <b>skip the current iteration</b> and move to the next one. <br />
            <br />
            <b>Example: Skip number 3</b>
            <CodeBlock language="java" filename="java" code={code8} />
            <br />
            <b>Output:</b>
            <CodeBlock language="" filename="" code={code9} />
            <br />
            👉 <span className='bg-neutral-800 px-2 rounded-lg'>continue</span> does <b>not exit</b> the loop, only skips current iteration.
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
            <b className='text-[#b07219]'>11.9</b> Labeled break & continue
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Useful for <b>nested loops</b>. <br />
            <br />
            <b>Example: Skip number 3</b>
            <CodeBlock language="java" filename="java" code={code10} />
            <br />
            👉 <span className='bg-neutral-800 px-2 rounded-lg'>break outer;</span> exits <b>both loops</b>.
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
            <b className='text-[#b07219]'>11.10</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <span className='bg-neutral-800 px-2 rounded-lg'>for</span> → best for known iterations. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>while</span> → best when condition decides continuation. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>do-while</span> → executes at least once. <br />
            • <b>Enhanced for</b> → used for arrays/collections. <br />
            • Beware of <b>infinite loops</b>. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>break</span> → exits loop completely. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>continue</span> → skips current iteration, loop continues. <br />
            • Labeled versions help with <b>nested loops</b>.
          </div>
        </motion.div>

        
      </div>
    </main>
  )
}
