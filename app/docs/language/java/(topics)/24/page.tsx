'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`


  const code1 = `int[] nums = {4, 2, 8, 1};
Arrays.sort(nums);
System.out.println(Arrays.toString(nums)); // [1, 2, 4, 8]`

  const code2 = `int[] original = {1, 2, 3};
int[] copy = Arrays.copyOf(original, 5);
System.out.println(Arrays.toString(copy)); // [1, 2, 3, 0, 0]`

  const code3 = `int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
System.out.println(Arrays.equals(a, b)); // true`

  const code4 = `int[] arr = new int[5];
Arrays.fill(arr, 10);
System.out.println(Arrays.toString(arr)); // [10, 10, 10, 10, 10]`

  const code5 = `int[] arr = {1, 2, 3};
System.out.println(Arrays.toString(arr)); // [1, 2, 3]`

  const code6 = `int[] arr = {1, 3, 5, 7, 9};
int index = Arrays.binarySearch(arr, 5);
System.out.println(index); // 2`

  const code7 = `int sum = Arrays.stream(arr).sum();`


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
            Array Utilities in Java
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
            <b className='text-[#b07219]'>{num(1)}</b> What Are Array Utilities?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The <span className='bg-neutral-800 px-2 rounded-lg'>java.util.Arrays</span> class provides several built-in methods to simplify working with arrays — from sorting to searching and copying.
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
            <b className='text-[#b07219]'>{num(2)}</b> Arrays.sort()
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used to sort elements of an array in ascending order. <br />
            Example: <br />
            <br />
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            <b>•</b> Works for all primitive types and objects that implement <span className='bg-neutral-800 px-2 rounded-lg'> Comparable</span>.
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
            <b className='text-[#b07219]'>{num(3)}</b> Arrays.copyOf()
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Creates a new copy of an existing array. <br />
            Example: <br />
            <br />
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            <b>•</b> You can specify a new length — shorter or longer than the original.
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
            <b className='text-[#b07219]'>{num(4)}</b> Arrays.equals()
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Checks if two arrays are equal (element by element).
            <CodeBlock language="java" filename="java" code={code3} />
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
            <b className='text-[#b07219]'>{num(5)}</b> Arrays.fill()
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Fills the entire array (or part of it) with a specific value.
            <CodeBlock language="java" filename="java" code={code4} />
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
            <b className='text-[#b07219]'>{num(6)}</b> Arrays.toString()
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Converts an array into a readable string format.
            <CodeBlock language="java" filename="java" code={code5} />
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
            <b className='text-[#b07219]'>{num(7)}</b> Arrays.binarySearch()
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Searches for an element in a <b>sorted array</b> and returns its index.
            <CodeBlock language="java" filename="java" code={code6} />
            <b>•</b> Returns a negative value if the element isn&apos;t found.
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
            <b className='text-[#b07219]'>{num(8)}</b> Arrays.stream()
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used to create a stream from an array for advanced operations.
            <CodeBlock language="java" filename="java" code={code7} />
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
            <b className='text-[#b07219]'>{num(9)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>Arrays.sort()</span> sorts efficiently. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>Arrays.copyOf()</span> duplicates arrays easily. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>Arrays.equals()</span> and <span className='bg-neutral-800 px-2 rounded-lg'>Arrays.fill()</span> simplify comparisons and initialization. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>Arrays.toString()</span> is useful for printing. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>Arrays.binarySearch()</span> requires a sorted array. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>Arrays.stream()</span> enables modern Java Stream API usage.
          </div>
        </motion.div>
      </div>
    </main>
  )
}