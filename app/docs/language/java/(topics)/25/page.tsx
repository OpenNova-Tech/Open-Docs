'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const table1 = [
    { property: 'Order', description: 'Maintains insertion order.' },
    { property: 'Duplicates', description: 'Allowed.' },
    { property: 'Index-based Access', description: 'Supports get(index) and set(index, element).' },
    { property: 'Null Elements', description: 'Permitted (depending on implementation).' },
    { property: 'Random Access', description: 'Fast in ArrayList, slow in LinkedList.' },
  ]

  const table2 = [
    { method: 'add(E e)', description: 'Adds an element.' },
    { method: 'add(int index, E e)', description: 'Inserts element at specified position.' },
    { method: 'get(int index)', description: 'Returns element at index.' },
    { method: 'set(int index, E e)', description: 'Replaces element at index.' },
    { method: 'remove(int index)', description: 'Removes element at index.' },
    { method: 'indexOf(Object o)', description: 'Returns first index of element.' },
    { method: 'lastIndexOf(Object o)', description: 'Returns last index.' },
    { method: 'size()', description: 'Returns total elements.' },
    { method: 'isEmpty()', description: 'Checks if list is empty.' },
    { method: 'contains(Object o)', description: 'Checks for element presence.' },
    { method: 'clear()', description: 'Removes all elements.' },
  ]

  const table3 = [
    { feature: 'Insertion (end)', arraylist: 'O(1)', linkedlist: 'O(1)', vector: 'O(1)', stack: 'O(1)' },
    { feature: 'Insertion (middle)', arraylist: 'O(n)', linkedlist: 'O(n)', vector: 'O(n)', stack: 'O(n)' },
    { feature: 'Deletion (middle)', arraylist: 'O(n)', linkedlist: 'O(1) if node known', vector: 'O(n)', stack: 'O(n)' },
    { feature: 'Random Access', arraylist: 'O(1)', linkedlist: 'O(n)', vector: 'O(1)', stack: 'O(1)' },
    { feature: 'Thread Safety', arraylist: 'No', linkedlist: 'No', vector: 'Yes', stack: 'Yes' },
  ]

  const table4 = [
    { scenario: 'Frequent random access', recommend: 'ArrayList' },
    { scenario: 'Frequent insert/remove', recommend: 'LinkedList' },
    { scenario: 'Multi-threaded environment', recommend: 'Vector' },
    { scenario: 'Need LIFO behavior', recommend: 'Stack.' }
  ]


  const code1 = `Iterable
   ↑
Collection
   ↑
  List
   ↑
 ┌─────────────┬────────────┬───────────┐
 │  ArrayList  │ LinkedList │  Vector   │
 │             │            │    ↑      │
 │             │            │  Stack    │
 └─────────────┴────────────┴───────────┘`

  const code2 = `List<String> names = new ArrayList<>();
names.add("Java");
names.add("Python");
names.add(1, "C++");
System.out.println(names); // [Java, C++, Python]`

  const code3 = `LinkedList<Integer> nums = new LinkedList<>();
nums.add(10);
nums.add(20);
nums.addFirst(5);
nums.addLast(30);
System.out.println(nums); // [5, 10, 20, 30]`

  const code4 = `Vector<Integer> vec = new Vector<>();
vec.add(1);
vec.add(2);
vec.addElement(3);
System.out.println(vec.capacity()); // default: 10`

  const code5 = `Stack<String> stack = new Stack<>();
stack.push("A");
stack.push("B");
System.out.println(stack.peek()); // B
System.out.println(stack.pop());  // B`

  const code6 = `for (int i = 0; i < list.size(); i++) { ... }       // Index-based
for (String s : list) { ... }                       // Enhanced for-loop
list.forEach(System.out::println);                  // Lambda
Iterator<String> it = list.iterator(); while(it.hasNext()) { ... } // Iterator`


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
            List in Java
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
            <b className='text-[#b07219]'>{num(1)}</b> What Are Lists?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The <b>List interface</b> in Java represents an <b>ordered collection</b> (also known as a <b>sequence</b>) that allows <b>duplicate elements</b> and provides <b>positional access</b> (index-based operations). <br />
            It extends the <span className='bg-neutral-800 px-2 rounded-lg'>Collection</span> interface and is implemented by several classes such as <b>ArrayList</b>, <b>LinkedList</b>, <b>Vector</b>, and <b>Stack</b>.
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
            <b className='text-[#b07219]'>{num(2)}</b> Hierarchy Overview
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="" code={code1} />
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
            <b className='text-[#b07219]'>{num(3)}</b> Core Characteristics
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table1.map((content) => (
                  <TableRow key={content.property}>
                    <TableCell className='font-bold'>{content.property}</TableCell>
                    <TableCell>{content.description}</TableCell>
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
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(4)}</b> Commonly Used Methods
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Method</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table2.map((content) => (
                  <TableRow key={content.method}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.method}</span></TableCell>
                    <TableCell>{content.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
            <b className='text-[#b07219]'>{num(5)}</b> Implementations
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>ArrayList</b> <br />
            • Backed by a <b>dynamic array</b>. <br />
            • Default initial capacity: <b>10</b> (doubles automatically when exceeded). <br />
            • Provides <b>O(1)</b> access, <b>O(n)</b> insertion/removal in the middle. <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            <b>LinkedList</b> <br />
            • Based on <b>doubly linked list</b>. <br />
            • Provides <b>O(1)</b> insertion/deletion at head or tail. <br />
            • Slightly higher memory due to node references. <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code3} /> <br />
            <b>Vector</b> <br />
            • <b>Synchronized</b>, making it thread-safe but slower. <br />
            • Capacity doubles by <b>100%</b> (unlike ArrayList&apos;s 50%). <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            <b>Stack</b> <br />
            • Subclass of Vector following <b>LIFO</b> (Last In, First Out). <br />
            • Used for <b>backtracking</b>, <b>parsing</b>, and <b>undo</b> operations. <br />
            <br />
            <b>Example</b>:
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
            <b className='text-[#b07219]'>{num(6)}</b> Iterating Through a List
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="java" code={code6} />
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
            <b className='text-[#b07219]'>{num(7)}</b> Performance Comparison
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>ArrayList</TableHead>
                  <TableHead>LinkedList</TableHead>
                  <TableHead>Vector</TableHead>
                  <TableHead>Stack</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table3.map((content) => (
                  <TableRow key={content.feature}>
                    <TableCell>{content.feature}</TableCell>
                    <TableCell>{content.arraylist}</TableCell>
                    <TableCell>{content.linkedlist}</TableCell>
                    <TableCell>{content.vector}</TableCell>
                    <TableCell>{content.stack}</TableCell>
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
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(8)}</b> When to Use Which?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Scenario</TableHead>
                  <TableHead>Recommended</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table4.map((content) => (
                  <TableRow key={content.scenario}>
                    <TableCell>{content.scenario}</TableCell>
                    <TableCell>{content.recommend}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
            • <span className='bg-neutral-800 px-2 rounded-lg'>List</span> maintains insertion order and supports duplicates. <br />
            • Choose <span className='bg-neutral-800 px-2 rounded-lg'>ArrayList</span> for most general purposes. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>LinkedList</span> for efficient insertions/deletions. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>Vector</span> and <span className='bg-neutral-800 px-2 rounded-lg'>Stack</span> are legacy but still usable when synchronization is needed. <br />
            • Prefer <b>interface references</b> (<span className='bg-neutral-800 px-2 rounded-lg'>List&lt;String&gt; list = new ArrayList&lt;&gt;();</span>) for flexibility.
          </div>
        </motion.div>
      </div>
    </main>
  )
}