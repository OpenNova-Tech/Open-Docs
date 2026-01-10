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
    { aspect: 'Belongs to', instance: 'Object', static: 'Class' },
    { aspect: 'Memory Allocation', instance: 'Created for each object', static: 'Created once per class' },
    { aspect: 'Access', instance: 'Through object', static: 'Through class name' },
    { aspect: 'Lifecycle', instance: 'Exists as long as the object exists', static: 'Exists till program ends' },
    { aspect: 'Example', instance: 'name, age', static: 'count, college' },
  ]

  const table2 = [
    { scenario: 'Data unique to each object', use: 'Instance' },
    { scenario: 'Shared configuration or constants', use: 'Static' },
    { scenario: 'Utility or helper methods', use: 'Static' },
    { scenario: 'Operations dependent on object data', use: 'Instance' },
  ]


  const code1 = `class Student {
    String name; // instance variable
    int roll;    // instance variable

    void display() { // instance method
        System.out.println(name + " - " + roll);
    }
}

class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Anurag";
        s1.roll = 1;

        Student s2 = new Student();
        s2.name = "Verdona";
        s2.roll = 2;

        s1.display(); // Anurag - 1
        s2.display(); // Verdona - 2
    }
}`

  const code2 = `class Student {
    static String college = "GNIT"; // static variable
    String name;

    static void collegeInfo() { // static method
        System.out.println("College: " + college);
    }
}

class Main {
    public static void main(String[] args) {
        Student.collegeInfo(); // access directly using class name

        Student s1 = new Student();
        s1.name = "Anurag";

        Student s2 = new Student();
        s2.name = "Verdona";

        System.out.println(s1.college); // GNIT
        System.out.println(s2.college); // GNIT
    }
}`

  const code3 = `class Counter {
    static int count = 0; // static variable

    Counter() {
        count++;  // increments shared variable
        System.out.println("Count: " + count);
    }
}

class Main {
    public static void main(String[] args) {
        new Counter(); // Count: 1
        new Counter(); // Count: 2
        new Counter(); // Count: 3
    }
}`

  const code4 = `class Example {
    static {
        System.out.println("Static block executed");
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
            Static and Instance
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
            <b className='text-[#b07219]'>{num(1)}</b> Instance Members
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Instance members belong to a <b>specific object</b> of the class. <br />
            Each object gets <b>its own copy</b> of these members. <br />
            <br />
            <b>Example</b>
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            ➡️ Each student has their <b>own data</b> — instance members are <b>unique</b> for each object.
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
            <b className='text-[#b07219]'>{num(2)}</b> Static Members
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Static members belong to the <b>class itself</b>, not to individual objects. <br />
            They are <b>shared</b> among all instances of the class. <br />
            <br />
            <b>Example</b>
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            ➡️ The <span className='bg-neutral-800 px-2 rounded-lg'>college</span> variable is <b>shared</b> by all objects of <span className='bg-neutral-800 px-2 rounded-lg'>Student</span>. <br />
            If one object changes it, the change reflects in all others.
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
            <b className='text-[#b07219]'>{num(3)}</b> Key Differences
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Aspect</TableHead>
                  <TableHead>Instance Members</TableHead>
                  <TableHead>Static Members</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table1.map((content) => (
                  <TableRow key={content.aspect}>
                    <TableCell>{content.aspect}</TableCell>
                    <TableCell>{content.instance}</TableCell>
                    <TableCell>{content.static}</TableCell>
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
            <b className='text-[#b07219]'>{num(4)}</b> Practical Example
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="java" code={code3} /> <br />
            Even though three different objects are created, <br />
            <span className='bg-neutral-800 px-2 rounded-lg'>count</span> is shared — so it increases <b>collectively</b>.
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
            <b className='text-[#b07219]'>{num(5)}</b> Static Blocks
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Static blocks are executed <b>once when the class is loaded</b>, before any object is created. <br />
            <br />
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
            <b className='text-[#b07219]'>{num(6)}</b> Rules & Restrictions
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Static methods <b>cannot access instance variables</b> directly.
            <b>•</b> You <b>can&apos;t use</b>  <span className='bg-neutral-800 px-2 rounded-lg'>this</span> <b>or</b> <span className='bg-neutral-800 px-2 rounded-lg'>super</span> inside static methods.
            <b>•</b> Static variables and methods are <b>initialized once</b>, not per object.
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
            <b className='text-[#b07219]'>{num(7)}</b> When to Use What
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Scenario</TableHead>
                  <TableHead>Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table2.map((content) => (
                  <TableRow key={content.scenario}>
                    <TableCell>{content.scenario}</TableCell>
                    <TableCell>{content.use}</TableCell>
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
            <b className='text-[#b07219]'>{num(8)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>Static</b> → shared by all, class-level, single copy. <br />
            <b>•</b> <b>Instance</b> → unique to each object. <br />
            <b>•</b> Static members save memory and define global behaviors. <br />
            <b>•</b> Use static wisely — overuse can break object-oriented principles.
          </div>
        </motion.div>
      </div>
    </main>
  )
}