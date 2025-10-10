'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function page() {
  const table = [
    { feature: 'byte', git: '1 byte', central: '-128 to 127' },
    { feature: 'short', git: '2 bytes', central: '-32,768 to 32,767' },
    { feature: 'int', git: '4 bytes', central: '-2^31 to 2^31-1' },
    { feature: 'long', git: '8 bytes', central: '-2^63 to 2^63-1' },
    { feature: 'float', git: '4 bytes', central: '3.14f, -0.99f' },
    { feature: 'double', git: '8 bytes', central: '3.14159, -123.456' },
    { feature: 'char', git: '2 bytes', central: `'A', '9', '$'` },
    { feature: 'boolean', git: '1 bit (logical)', central: 'true, false' },
  ]

  const table2 = [
    { type: 'byte, short, int, long', default: '0' },
    { type: 'float, double', default: '0.0' },
    { type: 'char', default: `'\\u0000'` },
    { type: 'boolean', default: 'false' },
    { type: 'object references', default: 'null' }
  ]

  const code1 = `int age = 20;
String name = "Alice";`

  const code2 = `class Student {
    static String school = "GNIT"; // static variable
    String name;                  // instance variable
    
    void setName(String n) {
        String prefix = "Mr.";    // local variable
        name = prefix + n;
    }
}`

  const code3 = `String msg = "Hello";  
int[] arr = {1, 2, 3};  `

  const code4 = `int x;`

  const code5 = `x = 10;`

  const code6 = `int x = 10;`

  const code7 = `int a = 10;
double b = a; // int to double`

  const code8 = `double d = 9.8;
int x = (int) d; // double to int`

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
            Data Types and Variables
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>8.1</b> What is a Variable?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • A <b>variable</b> is a named memory location used to store values. <br />
            • It must be declared with a <b>type</b> before use. <br />
            <br />
            Example:
            <br />
            <CodeBlock language="java" filename="java" code={code1} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>8.2</b> Types of Variables
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Java has three main kinds of variables: <br />
            1. <b>Local Variables</b> - Declared inside methods/blocks, destroyed after use. <br />
            2. <b>Instance Variables</b> - Declared inside a class but outside methods, each object has its own copy. <br />
            3. <b>Static Variables</b> - Declared with <span className='bg-neutral-800 px-2 rounded-lg'>static</span> keyword, shared among all objects of the class. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>8.3</b> Data Types in Java
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Java provides two categories of data types: <br />
            <br />
            <b>A. Primitive Data Types</b> <br />
            • Built-in, simple types (8 total). <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data Type</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Example Values</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.map((content) => (
                  <TableRow key={content.feature}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.feature}</span></TableCell>
                    <TableCell>{content.git}</TableCell>
                    <TableCell>{content.central}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <br />
            <b>B. Non-Primitive Data Types</b> <br />
            • More complex, created from classes. <br />
            <br />
            Examples: <span className='bg-neutral-800 px-2 rounded-lg'>String</span>, arrays, objects, user-defined classes. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code3} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>8.4</b> Variable Declaration and Initialization
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Declaration: <br />
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            • Initialization: <br />
            <CodeBlock language="java" filename="java" code={code5} /> <br />
            • Combined: <br />
            <CodeBlock language="java" filename="java" code={code6} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>8.5</b> Default Values
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Instance and static variables get default values. <br />
            • Local variables <b>do not</b> (must be explicitly initialized). <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data Type</TableHead>
                  <TableHead>Default Values</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table2.map((content) => (
                  <TableRow key={content.type}>
                    <TableCell>{content.type}</TableCell>
                    <TableCell>{content.default}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>8.6</b> Type Casting
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Java supports <b>type conversion</b> between data types: <br />
            <br />
            • <b>Implicit Casting (Widening)</b>: Smaller → Larger type.
            <CodeBlock language="java" filename="java" code={code7} /> <br />
            • <b>Explicit Casting (Narrowing)</b>: Larger → Smaller type.
            <CodeBlock language="java" filename="java" code={code8} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>8.7</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Java variables must have a <b>declared type</b>. <br />
            • Two categories: <b>Primitive</b> (8 types) and <b>Non-Primitive</b> (Strings, arrays, objects). <br />
            • Three variable types: <b>local, instance, static</b>. <br />
            • Default values apply only to instance/static variables, not locals. <br />
            • Type casting allows conversion between compatible data types.
          </div>
        </motion.div>

        <motion.div
          className='flex justify-center gap-6 pt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href='7'>
            <button className='bg-transparent border border-[#b07219] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
              ← View Previous
            </button>
          </Link>
          <Link href='9'>
            <button className='bg-transparent border border-[#b07219] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
              View Next →
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
