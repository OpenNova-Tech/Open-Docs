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
    { feature: 'Introduced in', builder: 'Java 5',  buffer: 'Java 1.0' },
    { feature: 'Thread-Safe', builder: '❌ No',  buffer: '✅ Yes (synchronized)' },
    { feature: 'Performance', builder: 'Faster',  buffer: 'Slower (due to synchronization)' },
    { feature: 'Usage', builder: 'Single-threaded applications',  buffer: 'Multi-threaded applications' },
  ]

  const table2 = [
    { method: 'append()', description: 'Adds string at end', example: 'sb.append("Docs")' },
    { method: 'insert(int i, String s)', description: 'Inserts text at position', example: 'sb.insert(4, "Open")' },
    { method: 'replace(int start, int end, String s)', description: 'Replaces part of text', example: 'sb.replace(0, 4, "Learn")' },
    { method: 'delete(int start, int end)', description: 'Deletes substring', example: 'sb.delete(0, 5)' },
    { method: 'reverse()', description: 'Reverses string', example: 'sb.reverse()' },
    { method: 'capacity()', description: 'Returns current capacity', example: 'sb.capacity()' },
    { method: 'length()', description: 'Current length of string', example: 'sb.length()' },
    { method: 'toString()', description: 'Converts to String', example: 'sb.toString()' },
  ]

  const table3 = [
    { use: 'Frequent modifications in single-threaded code', recommend: 'StringBuilder' },
    { use: 'Multi-threaded string operations', recommend: 'StringBuffer' },
    { use: 'Simple static text', recommend: 'String' },
  ]


  const code1 = `String s = "Hello";
s = s + " World";  // creates new object`

  const code2 = `StringBuilder sb = new StringBuilder("Hello");
sb.append(" World"); // modifies same object`

  const code3 = `StringBuilder sb1 = new StringBuilder();              // empty
StringBuilder sb2 = new StringBuilder("Java");        // with initial text
StringBuilder sb3 = new StringBuilder(50);            // with capacity`

  const code4 = `class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");
        sb.insert(6, "Java ");
        sb.replace(0, 5, "Hi");
        sb.reverse();

        System.out.println(sb.toString());
    }
}`

  const code5 = `dlroW avaJ iH`

  const code6 = `class Main {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Thread");
        sb.append(" Safe");
        System.out.println(sb);
    }
}`

  const code7 = `Thread Safe`

  const code8 = `newCapacity = (oldCapacity * 2) + 2`

  const code9 = `StringBuilder sb = new StringBuilder();
System.out.println(sb.capacity()); // 16
sb.append("This is a long string beyond capacity");
System.out.println(sb.capacity()); // increases automatically`

  const code10 = `StringBuilder sb = new StringBuilder("Java");
String str = sb.toString();          // Builder → String
StringBuilder sb2 = new StringBuilder(str); // String → Builder`

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
            StringBuilder & StringBuffer
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
            <b className='text-[#b07219]'>{num(1)}</b> What Are Mutable Strings?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Since <span className='bg-neutral-800 px-2 rounded-lg'>String</span> objects are immutable, any change creates a <b>new object</b> in memory. <br />
            This becomes inefficient when performing <b>repeated modifications</b> like concatenation or appending text in loops. <br />
            <br />
            To solve this, Java provides <span className='bg-neutral-800 px-2 rounded-lg'>StringBuilder</span> and <span className='bg-neutral-800 px-2 rounded-lg'>StringBuffer</span> — both represent <b>mutable strings</b>. <br />
            <br />
            Mutable strings are strings whose content <b>can be changed</b> after creation without creating new objects. <br />
            <br />
            Example with <span className='bg-neutral-800 px-2 rounded-lg'>String</span>:
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            Example with <span className='bg-neutral-800 px-2 rounded-lg'>StringBuilder</span>:
            <CodeBlock language="java" filename="java" code={code2} />
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
            <b className='text-[#b07219]'>{num(2)}</b> StringBuilder vs StringBuffer
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Both classes serve a similar purpose — <b>mutable strings</b> — but differ in <b>thread safety</b>. <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>StringBuilder</TableHead>
                  <TableHead>StringBuffer</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table1.map((content) => (
                  <TableRow key={content.feature}>
                    <TableCell>{content.feature}</TableCell>
                    <TableCell>{content.builder}</TableCell>
                    <TableCell>{content.buffer}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
            <b className='text-[#b07219]'>{num(3)}</b> Common Constructors
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
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
            <b className='text-[#b07219]'>{num(4)}</b> Important Methods
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Method</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table2.map((content) => (
                  <TableRow key={content.method}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.method}</span></TableCell>
                    <TableCell>{content.description}</TableCell>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.example}</span></TableCell>
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
            <b className='text-[#b07219]'>{num(5)}</b> Example - StringBuilder
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            <b>Output</b>:
            <CodeBlock language="bash" filename="" code={code5} />
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
            <b className='text-[#b07219]'>{num(6)}</b> Example - StringBuffer
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="java" code={code6} /> <br />
            <b>Output</b>:
            <CodeBlock language="bash" filename="" code={code7} />
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
            <b className='text-[#b07219]'>{num(7)}</b> Capacity and Expansion
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Every <span className='bg-neutral-800 px-2 rounded-lg'>StringBuilder</span> or <span className='bg-neutral-800 px-2 rounded-lg'>StringBuffer</span> has an internal <b>capacity</b> (default 16). <br />
            When exceeded, capacity grows as: <br />
            <br />
            <CodeBlock language="java" filename="java" code={code8} /> <br />
            Example:
            <CodeBlock language="java" filename="java" code={code9} />
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
            <b className='text-[#b07219]'>{num(8)}</b> Conversion Between String and Builder
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="java" code={code10} />
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
            <b className='text-[#b07219]'>{num(9)}</b> When to Use Which
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Use Case</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table3.map((content) => (
                  <TableRow key={content.use}>
                    <TableCell>{content.use}</TableCell>
                    <TableCell className='font-bold'>{content.recommend}</TableCell>
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
            <b className='text-[#b07219]'>{num(10)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <span className='bg-neutral-800 px-2 rounded-lg'>StringBuilder</span> and <span className='bg-neutral-800 px-2 rounded-lg'>StringBuffer</span> are <b>mutable</b>, faster for modifications. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>StringBuilder</span> → faster but <b>not thread-safe</b>. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>StringBuffer</span> → thread-safe but <b>slower</b>. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>toString()</span> to convert back to a regular <span className='bg-neutral-800 px-2 rounded-lg'>String</span>.
          </div>
        </motion.div>
      </div>
    </main>
  )
}