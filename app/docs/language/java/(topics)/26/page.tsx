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
    { property: 'Duplicates', description: 'Not allowed' },
    { property: 'Order', description: 'Unordered (except LinkedHashSet)' },
    { property: 'Null Elements', description: 'Allowed (only one)' },
    { property: 'Performance', description: 'Very fast for search, insert, delete (O(1) avg for HashSet)' },
    { property: 'Indexing', description: 'Not supported (no get(index))' },
  ]

  const table2 = [
    { method: 'add(E e)', description: 'Adds element if not already present' },
    { method: 'remove(Object o)', description: 'Removes specified element' },
    { method: 'contains(Object o)', description: 'Checks if element exists' },
    { method: 'size()', description: 'Returns number of elements' },
    { method: 'isEmpty()', description: 'Checks if empty' },
    { method: 'clear()', description: 'Removes all elements' },
    { method: 'iterator()', description: 'Returns iterator for traversal' },
  ]

  const table3 = [
    { implementation: 'HashSet', order: 'Unordered', duplicates: '❌', null: '✅ (1)', structure: 'Hash Table', time: 'O(1)' },
    { implementation: 'LinkedHashSet', order: 'Insertion Order', duplicates: '❌', null: '✅ (1)', structure: 'Hash Table + Linked List', time: 'O(1)' },
    { implementation: 'TreeSet', order: 'Sorted Order', duplicates: '❌', null: '❌', structure: 'Red-Black Tree', time: 'O(log n)' },
  ]

  const table4 = [
    { scenario: 'Need fastest lookup', recommend: 'HashSet' },
    { scenario: 'Need predictable insertion order', recommend: 'LinkedHashSet' },
    { scenario: 'Need sorted elements', recommend: 'TreeSet' },
  ]


  const code1 = `Iterable
   ↑
Collection
   ↑
  Set
   ↑
 ┌────────────────────┬────────────────────┐
 │      HashSet       │    SortedSet       │
 │                    │        ↑           │
 │                    │     TreeSet        │
 │                    │                    │
 │   LinkedHashSet    │                    │
 └────────────────────┴────────────────────┘`

  const code2 = `HashSet<String> set = new HashSet<>();
set.add("Java");
set.add("Python");
set.add("Java"); // duplicate ignored
System.out.println(set); // [Java, Python] (order not guaranteed)`

  const code3 = `LinkedHashSet<Integer> lhs = new LinkedHashSet<>();
lhs.add(3);
lhs.add(1);
lhs.add(2);
System.out.println(lhs); // [3, 1, 2]`

  const code4 = `TreeSet<String> ts = new TreeSet<>();
ts.add("Banana");
ts.add("Apple");
ts.add("Mango");
System.out.println(ts); // [Apple, Banana, Mango]`

  const code5 = `TreeSet<Integer> desc = new TreeSet<>(Comparator.reverseOrder());
desc.add(10);
desc.add(5);
desc.add(20);
System.out.println(desc); // [20, 10, 5]`

  const code6 = `for (String s : set) { System.out.println(s); }          // Enhanced for loop
set.forEach(System.out::println);                        // Lambda expression
Iterator<String> it = set.iterator(); while (it.hasNext()) System.out.println(it.next());`

  const code7 = `Set<String> languages = new HashSet<>();
languages.add("Java");
languages.add("Python");
languages.add("C++");
languages.add("Java"); // Ignored

System.out.println("Languages: " + languages);
System.out.println("Contains Python? " + languages.contains("Python"));
languages.remove("C++");
System.out.println("After removal: " + languages);`


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
            Set in Java
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
            <b className='text-[#b07219]'>{num(1)}</b> What Are Sets?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>Set</b> in Java is a <b>collection that does not allow duplicate elements</b>. It models the mathematical set abstraction and is part of the <span className='bg-neutral-800 px-2 rounded-lg'>java.util</span> package. <br />
            Unlike <span className='bg-neutral-800 px-2 rounded-lg'>List</span>, it <b>does not maintain insertion order</b> (except for specific implementations) and offers <b> efficient lookup and uniqueness checking</b>.
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
            <b>HashSet</b> <br />
            <b>•</b> Based on <b>HashMap</b> internally — elements are stored as keys with a dummy value. <br />
            <b>•</b> <b>No order is maintained</b>. <br />
            <b>•</b> <b>Allows one</b> <span className='bg-neutral-800 px-2 rounded-lg'>null</span> <b>element</b>. <br />
            <b>•</b> <b>Constant-time performance (O(1))</b> for add, remove, and contains (on average). <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            <b>LinkedHashSet</b> <br />
            <b>•</b> Subclass of <span className='bg-neutral-800 px-2 rounded-lg'>HashSet</span> that <b>maintains insertion order</b>. <br />
            <b>•</b> Slightly slower than <span className='bg-neutral-800 px-2 rounded-lg'>HashSet</span> due to the linked list used internally. <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code3} /> <br />
            <b>TreeSet</b> <br />
            <b>•</b> Implements the <b>SortedSet</b> interface. <br />
            <b>•</b> Stores elements in <b>ascending order</b> by default using <b>Red-Black Tree</b> internally. <br />
            <b>•</b> Does <b>not allow</b> <span className='bg-neutral-800 px-2 rounded-lg'>null</span> <b>elements</b> (throws <span className='bg-neutral-800 px-2 rounded-lg'>NullPointerException</span>). <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            <b>Note</b>: Custom sorting can be applied using a <b>Comparator</b>:
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
            <b className='text-[#b07219]'>{num(6)}</b> Iterating Through a Set
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
                  <TableHead>Implementation</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead>Duplicates</TableHead>
                  <TableHead>Null</TableHead>
                  <TableHead>Structure</TableHead>
                  <TableHead>Time Complexity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table3.map((content) => (
                  <TableRow key={content.implementation}>
                    <TableCell className='font-bold'>{content.implementation}</TableCell>
                    <TableCell>{content.order}</TableCell>
                    <TableCell>{content.duplicates}</TableCell>
                    <TableCell>{content.null}</TableCell>
                    <TableCell>{content.structure}</TableCell>
                    <TableCell>{content.time}</TableCell>
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
            <b className='text-[#b07219]'>{num(9)}</b> Practical Example
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="java" code={code7} />
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
            <b className='text-[#b07219]'>{num(10)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> A <span className='bg-neutral-800 px-2 rounded-lg'>Set</span> enforces <b>uniqueness</b> — duplicates are automatically removed. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>HashSet</span> is the most common implementation for speed. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>LinkedHashSet</span> preserves insertion order. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>TreeSet</span> keeps elements sorted and supports range views (<span className='bg-neutral-800 px-2 rounded-lg'>headSet()</span>, <span className='bg-neutral-800 px-2 rounded-lg'>tailSet()</span>). <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>Set</span> is best for <b>mathematical set operations</b> — union, intersection, and difference.
          </div>
        </motion.div>
      </div>
    </main>
  )
}