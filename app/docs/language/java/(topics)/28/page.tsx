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

  const table2 = [
    { method: 'add(E e)', description: 'Inserts element; throws exception if full.' },
    { method: 'offer(E e)', description: 'Inserts element; returns false if full (no exception).' },
    { method: 'remove()', description: 'Removes and returns the head; throws exception if empty.' },
    { method: 'poll()', description: 'Removes and returns the head; returns null if empty.' },
    { method: 'element()', description: 'Retrieves (but doesn’t remove) the head; throws exception if empty.' },
    { method: 'peek()', description: 'Retrieves (but doesn’t remove) the head; returns null if empty.' },
  ]

  const table4 = [
    { scenario: 'Task queue / job scheduling', recommend: 'PriorityQueue' },
    { scenario: 'Double-ended access', recommend: 'Deque / ArrayDeque' },
    { scenario: 'FIFO operations', recommend: 'LinkedList or ArrayDeque' },
  ]


  const code1 = `public class PriorityQueueExample {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(30);
        pq.add(10);
        pq.add(20);
        while (!pq.isEmpty()) {
            System.out.println(pq.poll());
        }
    }
}`

  const code2 = `10
20
30`

  const code3 = `public class DequeExample {
    public static void main(String[] args) {
        Deque<String> dq = new ArrayDeque<>();
        dq.addFirst("A");
        dq.addLast("B");
        dq.addLast("C");
        System.out.println(dq.removeFirst()); // A
        System.out.println(dq.removeLast());  // C
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
            Queue in Java
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
            <b className='text-[#b07219]'>{num(1)}</b> What is Queue?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>Queue</b> in Java is a <b>collection that stores elements in a specific order</b> — typically <b>FIFO (First In, First Out)</b>. <br />
            It is part of the <span className='bg-neutral-800 px-2 rounded-lg'>java.util</span> package and extends the <span className='bg-neutral-800 px-2 rounded-lg'>Collection</span> interface.
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
            <b className='text-[#b07219]'>{num(2)}</b> Key Features of Queue
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Elements are <b>inserted at the rear</b> and <b>removed from the front</b>. <br />
            <b>•</b> Maintains <b>order of insertion</b>. <br />
            <b>•</b> Useful for <b>task scheduling</b>, <b>buffering</b>, <b>thread management</b>, etc. <br />
            <b>•</b> Offers <b>specialized methods</b> beyond standard collection operations.
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
            <b className='text-[#b07219]'>{num(3)}</b> Core Methods in Queue Interface
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
            <b>PriorityQueue</b> <br />
            <b>•</b> Orders elements according to <b>natural ordering</b> or a <b>custom comparator</b>. <br />
            <b>•</b> <b>Does not guarantee FIFO order</b>. <br />
            <b>•</b> Commonly used in <b>task scheduling</b> where priorities matter. <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            <b>Output</b>:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            <b>Deque (Double-Ended Queue)</b> <br />
            <b>•</b> Extends <span className='bg-neutral-800 px-2 rounded-lg'>Queue</span> interface. <br />
            <b>•</b> Supports <b>insertion and removal from both ends</b>. <br />
            <b>•</b> Can function as both <b>Queue (FIFO)</b> and <b>Stack (LIFO)</b>. <br />
            <b>Common Classes</b>: <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>ArrayDeque</span> <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>LinkedList</span> (implements both <span className='bg-neutral-800 px-2 rounded-lg'>List</span> and <span className='bg-neutral-800 px-2 rounded-lg'>Deque</span>) <br />
            <br />
            <b>Example</b>:
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
            <b className='text-[#b07219]'>{num(6)}</b> When to Use
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
      </div>
    </main>
  )
}