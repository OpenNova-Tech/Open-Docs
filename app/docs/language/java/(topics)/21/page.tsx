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

  const table = [
    { method: 'length()', description: 'Returns number of characters', example: '"Hello".length() → 5' },
    { method: 'charAt(i)', description: 'Returns character at index i', example: `"Java".charAt(1) → 'a'` },
    { method: 'substring(i, j)', description: 'Extracts part of string', example: '"Learning".substring(0, 4) → "Lear"' },
    { method: 'equals()', description: 'Compares two strings', example: '"Java".equals("java") → false' },
    { method: 'equalsIgnoreCase()', description: 'Case-insensitive compare', example: '"Java".equalsIgnoreCase("java") → true' },
    { method: 'toUpperCase() / toLowerCase()', description: 'Case conversion', example: '"java".toUpperCase() → "JAVA"' },
    { method: 'trim()', description: 'Removes spaces at ends', example: '" Java ".trim() → "Java"' },
    { method: 'replace(old, new)', description: 'Replace characters', example: `"cat".replace('c','b') → "bat"` },
    { method: 'contains()', description: 'Checks substring presence', example: `"OpenDocs".contains("Docs") → true` },
    { method: 'split(delimiter)', description: 'Splits string', example: `"a,b,c".split(",") → [a, b, c]` },
  ]


  const code1 = `String name = "Java";
String greeting = new String("Hello");`

  const code2 = `String str = "Hello";
str.concat(" World");
System.out.println(str);`

  const code3 = `Hello`

  const code4 = `str = str.concat(" World");`

  const code5 = `String a = "Java";
String b = "Java";
System.out.println(a == b); // true (same reference)`

  const code6 = `String c = new String("Java");
System.out.println(a == c); // false (different memory)`

  const code7 = `String full = "Open" + "Docs"; // OpenDocs`

  const code8 = `String full = "Open".concat("Docs");`

  const code9 = `String name = "Java";
System.out.printf("Welcome to %s!", name);`

  const code10 = `String s1 = "OpenDocs";
String s2 = new String("OpenDocs");

System.out.println(s1 == s2);      // false
System.out.println(s1.equals(s2)); // true`

  const code11 = `String s = new String("Hello");
String t = s.intern();`

  const code12 = `class Main {
    public static void main(String[] args) {
        String s1 = "Java";
        String s2 = "Programming";
        String s3 = s1 + " " + s2;

        System.out.println(s3.toUpperCase());
        System.out.println("Length: " + s3.length());
        System.out.println("Contains 'Java': " + s3.contains("Java"));
    }
}`

  const code13 = `JAVA PROGRAMMING
Length: 15
Contains 'Java': true`

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
            String Class
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
            <b className='text-[#b07219]'>{num(1)}</b> What is a String?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Strings are <b>sequences of characters</b> used to represent text in Java. <br />
            They are one of the most widely used and powerful data types. <br />
            <br />
            Java provides the <span className='bg-neutral-800 px-2 rounded-lg'>String</span> <b>class</b> in the <span className='bg-neutral-800 px-2 rounded-lg'>java.lang</span> package to handle text data efficiently and safely. <br />
            <br />
            A <span className='bg-neutral-800 px-2 rounded-lg'>String</span> is an <b>object</b> that represents a series of characters enclosed in double quotes (<span className='bg-neutral-800 px-2 rounded-lg'>&quot;&quot;</span>). <br />
            <br />
            <b>Example:</b>
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            Both ways are valid, but the first one (using quotes) is preferred since it uses the <b>String Constant Pool</b> for memory efficiency.
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
            <b className='text-[#b07219]'>{num(2)}</b> Immutability of Strings
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Strings in Java are <b>immutable</b>, meaning once created, their value <b>cannot be changed</b>. <br />
            <br />
            Example:
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            Output:
            <CodeBlock language="bash" filename="" code={code3} /> <br />
            ➡️ <span className='bg-neutral-800 px-2 rounded-lg'>str</span> remains <span className='bg-neutral-800 px-2 rounded-lg'>&quot;Hello&quot;</span> because <span className='bg-neutral-800 px-2 rounded-lg'>concat()</span> creates a <b>new object</b>, not modifying the old one. <br />
            <br />
            If we assign it back:
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            Now <span className='bg-neutral-800 px-2 rounded-lg'>str</span>  becomes <span className='bg-neutral-800 px-2 rounded-lg'>&quot; Hello World&quot;</span>.
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
            <b className='text-[#b07219]'>{num(3)}</b> Memory Allocation - String Pool
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When you create a string literal, Java stores it in a <b>special area of memory</b> called the <b>String Constant Pool</b>. <br />
            <br />
            If another string with the same value exists, Java <b>reuses it</b> instead of creating a new one. <br />
            This saves memory and improves performance. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code5} /> <br />
            But when created using <span className='bg-neutral-800 px-2 rounded-lg'>new</span>: <br />
            <br />
            <CodeBlock language="java" filename="java" code={code6} />
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
            <b className='text-[#b07219]'>{num(4)}</b> Common String Methods
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
                {table.map((content) => (
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
            <b className='text-[#b07219]'>{num(5)}</b> String Concatenation
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can join strings using: <br />
            <br />
            <b>1.</b> The <span className='bg-neutral-800 px-2 rounded-lg'>+</span> operator
            <CodeBlock language="java" filename="java" code={code7} /> <br />
            <b>2.</b> The <span className='bg-neutral-800 px-2 rounded-lg'>concat()</span> method
            <CodeBlock language="java" filename="java" code={code8} /> <br />
            <b>3.</b> String interpolation (from Java 15+, with <span className='bg-neutral-800 px-2 rounded-lg'>String.format</span> or text blocks)
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
            <b className='text-[#b07219]'>{num(6)}</b> Comparing Strings
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <span className='bg-neutral-800 px-2 rounded-lg'>==</span> → compares <b>memory reference</b> <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>equals()</span> → compares <b>actual value</b> <br />
            <br />
            Example:
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
            <b className='text-[#b07219]'>{num(7)}</b> String Interning
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The <span className='bg-neutral-800 px-2 rounded-lg'>intern()</span> method adds a string to the <b>String Pool</b> manually. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code11} /> <br />
            Now <span className='bg-neutral-800 px-2 rounded-lg'>t</span> refers to the string from the <b>pool</b>.
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
            <b className='text-[#b07219]'>{num(8)}</b> String and Performance
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Since strings are immutable: <br />
            • Frequent concatenation creates <b>many temporary objects</b>. <br />
            • For high-performance operations, use <b>StringBuilder</b> or <b>StringBuffer instead</b>.
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
            <b className='text-[#b07219]'>{num(9)}</b> Example
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="java" code={code12} /> <br />
            <b>Output</b>:
            <CodeBlock language="bash" filename="" code={code13} /> <br />
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
            • Strings are <b>immutable</b> objects stored in the <b>String Pool</b>. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>equals()</span> for <b>value comparison</b>, not <span className='bg-neutral-800 px-2 rounded-lg'>==</span>. <br />
            • Avoid frequent concatenation — use <b>StringBuilder</b> for better performance. <br />
            • The <span className='bg-neutral-800 px-2 rounded-lg'>String</span> class provides a rich set of methods for manipulation, comparison, and formatting.
          </div>
        </motion.div>
      </div>
    </main>
  )
}