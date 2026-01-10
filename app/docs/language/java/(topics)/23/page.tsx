'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`


  const code1 = `int[][] matrix = {
  {1, 2, 3},
  {4, 5, 6}
};`

  const code2 = `int[][] jagged = {
  {1, 2, 3},
  {4, 5},
  {6}
};`

  const code3 = `int[] a = new int[5];
a[0] = 10;`

  const code4 = `System.out.println(arr.length);`

  const code5 = `for (int num : arr) {
  System.out.println(num);
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
            Arrays in Java
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(1)}</b> What Are Arrays?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Arrays in Java are used to store multiple values of the same data type in a single variable. They provide an efficient way to organize and access large amounts of data.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(2)}</b> One-Dimensional Arrays
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A 1D array stores elements in a single row. <br />
            Example: <span className='bg-neutral-800 px-2 rounded-lg'>int[] arr = &#123; 10, 20, 30, 40 &#125;;</span>  <br />
            <b>•</b> Access elements using the index (starts from 0). <br />
            <b>•</b> Example: <span className='bg-neutral-800 px-2 rounded-lg'>arr[2]</span> gives <span className='bg-neutral-800 px-2 rounded-lg'>30</span>.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(3)}</b> Two-Dimensional Arrays
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A 2D array is like a matrix — an array of arrays. <br />
            <br />
            Example:
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            <b>•</b> Access: <span className='bg-neutral-800 px-2 rounded-lg'>matrix[1][2]</span>  gives <span className='bg-neutral-800 px-2 rounded-lg'>6</span>. <br />
            <b>•</b> Often used for tabular data like game boards or grids.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(4)}</b> Jagged Arrays
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Jagged arrays are 2D arrays where each row can have a different number of columns. <br />
            <br />
            Example:
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            <b>•</b> Each sub-array can vary in size. <br />
            <b>•</b> Useful for representing uneven structures.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(5)}</b> Array Initialization
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can create arrays in different ways: <br />
            <b>•</b> Static initialization: <span className='bg-neutral-800 px-2 rounded-lg'>int[] a = &#123; 1, 2, 3 &#125;;</span> <br />
            <b>•</b> Dynamic initialization:
            <CodeBlock language="java" filename="java" code={code3} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(6)}</b> Array Length
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Use <span className='bg-neutral-800 px-2 rounded-lg'>.length</span> to find array size: <br />
            <br />
            <CodeBlock language="java" filename="java" code={code4} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(7)}</b> Looping Through Arrays
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Using a <b>for loop</b> or <b>enhanced for loop</b>: <br />
            <br />
            <CodeBlock language="java" filename="java" code={code5} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(8)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Arrays store multiple same-type values efficiently. <br />
            <b>•</b> Index starts from 0. <br />
            <b>•</b> 1D, 2D, and jagged arrays are supported. <br />
            <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>.length</span> for size and enhanced for loop for easy traversal. <br />
            <b>•</b> Jagged arrays allow variable-length rows for flexible data storage.
          </div>
        </motion.div>
      </div>
    </main>
  )
}