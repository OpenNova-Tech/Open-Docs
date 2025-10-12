'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
  const code1 = `int a = 10;
int b = 0;
System.out.println(a / b); // ArithmeticException`

  const code2 = `Exception in thread "main" java.lang.ArithmeticException: / by zero`

  const code3 = `Object
 └── Throwable
      ├── Exception
      │     ├── IOException
      │     ├── SQLException
      │     └── RuntimeException
      └── Error`

  const code4 = `try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
}`

  const code5 = `Cannot divide by zero!`

  const code6 = `try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[5]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index out of bounds!");
} finally {
    System.out.println("Execution complete.");
}`

  const code7 = `void checkAge(int age) throws Exception {
    if (age < 18) throw new Exception("Not eligible!");
    System.out.println("Eligible!");
}`

  const code8 = `try {
    int[] arr = new int[3];
    arr[5] = 10;
} catch (ArithmeticException e) {
    System.out.println("Math error");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index issue");
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
            Exception Basics
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
            <b className='text-[#b07219]'>12.1</b> What is an Exception?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            An <b>exception</b> is an event that occurs during program execution which disrupts the normal flow. <br />
            <br />
            <b>Example:</b>
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            🧠 Output:
            <CodeBlock language="bash" filename="" code={code2} />
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
            <b className='text-[#b07219]'>12.2</b> Exception Hierarchy
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="bash" filename="" code={code3} />
            <br />
            • <b>Error</b>: Serious issues (like memory overflow). <br />
            • <b>Exception</b>: Conditions your program should handle.
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
            <b className='text-[#b07219]'>12.3</b> Try-Catch Block
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used to <b>handle exceptions gracefully</b>. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            ✅ Output: <br />
            <CodeBlock language="bash" filename="" code={code5} />
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
            <b className='text-[#b07219]'>12.4</b> Finally Block
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Executes <b>always</b>, whether exception occurs or not. <br />
            Used for cleanup like closing files or connections. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code6} /> 
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
            <b className='text-[#b07219]'>12.5</b> Throw and Throws
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <b>throw</b>: Used to manually throw an exception. <br />
            • <b>throws</b>: Declares exceptions a method can throw. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code7} />
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
            <b className='text-[#b07219]'>12.6</b> Multiple Catch Blocks
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can handle <b>different exception types separately</b>. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code8} />
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
            <b className='text-[#b07219]'>12.7</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Exceptions prevent program crashes. <br />
            • Use <b>try-catch</b> to handle runtime errors safely. <br />
            • <b>finally</b> runs no matter what. <br />
            • <b>throw</b> and <b>throws</b> help manage custom and declared exceptions. <br />
            • Hierarchy ensures clear classification and recovery.
          </div>
        </motion.div>

        <motion.div
          className='flex justify-center gap-6 pt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href='11'>
            <button className='bg-transparent border border-[#b07219] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
              ← View Previous
            </button>
          </Link>
          <Link href='13'>
            <button className='bg-transparent border border-[#b07219] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
              View Next →
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
