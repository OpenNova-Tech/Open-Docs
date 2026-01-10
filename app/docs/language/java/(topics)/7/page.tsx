'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
  const code1 = `public class Example {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`

  const code2 = `int x = 10;
System.out.println(x);`

  const code3 = `if (true) {
    System.out.println("Inside block");
}`

  const code4 = `int age = 20;      // valid
String $name = "A"; // valid
int 2value = 5;    // invalid`

  const code5 = `// This is a single-line comment
/*
   Multi-line comment
*/`

  const code6 = `int a=10;int b=20; // valid but hard to read
int a = 10;        // preferred
int b = 20;`

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
            Java Syntax Basics
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
            <b className='text-[#b07219]'>7.1</b> Structure of a Java Program
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Every Java program is made up of classes, and the entry point of execution is the <span className='bg-neutral-800 px-2 rounded-lg'>main()</span> method. <br />
            <br />
            <CodeBlock language="java" filename="hello.java" code={code1} />
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
            <b className='text-[#b07219]'>7.2</b> Case Sensitivity
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Java is <b>case-sensitive</b>. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>Main</span> ≠ <span className='bg-neutral-800 px-2 rounded-lg'>main</span> and <span className='bg-neutral-800 px-2 rounded-lg'>System</span> ≠ <span className='bg-neutral-800 px-2 rounded-lg'>system</span>. <br />
            <b>•</b> Incorrect casing leads to compilation errors.
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
            <b className='text-[#b07219]'>7.3</b> Statements & Semicolons
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Each statement in Java ends with a <span className='bg-neutral-800 px-2 rounded-lg'>;</span>. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code2} />
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
            <b className='text-[#b07219]'>7.4</b> Code Blocks with Braces { }
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Blocks group multiple statements. <br />
            <b>•</b> Used in classes, methods, loops, and conditionals. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code3} />
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
            <b className='text-[#b07219]'>7.5</b> Identifiers & Naming Rules
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>Identifiers</b>: Names given to variables, classes, methods, etc. <br />
            <b>•</b> Rules: <br />
            &nbsp;&nbsp; <b>•</b> Must start with a letter, <span className='bg-neutral-800 px-2 rounded-lg'>$</span>, or <span className='bg-neutral-800 px-2 rounded-lg'>_</span>. <br />
            &nbsp;&nbsp; <b>•</b> Cannot start with a digit. <br />
            &nbsp;&nbsp; <b>•</b> Cannot use reserved keywords. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code4} />
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
            <b className='text-[#b07219]'>7.6</b> Keywords in Java
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Reserved words that cannot be used as identifiers. <br />
            <br />
            Examples: <span className='bg-neutral-800 px-2 rounded-lg'>class</span>, <span className='bg-neutral-800 px-2 rounded-lg'>public</span>, <span className='bg-neutral-800 px-2 rounded-lg'>static</span>, <span className='bg-neutral-800 px-2 rounded-lg'>void</span>, <span className='bg-neutral-800 px-2 rounded-lg'>if</span>, <span className='bg-neutral-800 px-2 rounded-lg'>while</span>, <span className='bg-neutral-800 px-2 rounded-lg'>return</span>.
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
            <b className='text-[#b07219]'>7.7</b> Comments
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Single-line: <span className='bg-neutral-800 px-2 rounded-lg'>{'// comment'}</span> <br />
            <b>•</b> Multi-line: <span className='bg-neutral-800 px-2 rounded-lg'>{'/* comment */'}</span>  <br />
            <b>•</b> Documentation: <span className='bg-neutral-800 px-2 rounded-lg'>{'/** comment */'}</span>  <br />
            <br />
            <CodeBlock language="java" filename="java" code={code5} />
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
            <b className='text-[#b07219]'>7.8</b> Whitespace
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Java ignores extra spaces, tabs, and newlines. <br />
            <b>•</b> Improves readability but not mandatory for functionality. <br />
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
            <b className='text-[#b07219]'>7.9</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Java code <b>must</b> be inside a class. <br />
            <b>•</b> The <span className='bg-neutral-800 px-2 rounded-lg'>main()</span> method is the <b>entry point</b>. <br />
            <b>•</b> <b>Case-sensitive</b>, <b>semicolon-terminated</b>, and <b>block-structured</b>. <br />
            <b>•</b> Follow naming conventions for identifiers. <br />
            <b>•</b> Use comments and whitespace to make code clean.
          </div>
        </motion.div>

       
      </div>
    </main>
  )
}
