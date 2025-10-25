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
    { modifier: 'private', access: 'Within same class only', example: 'Data hiding' },
    { modifier: 'public', access: 'Accessible everywhere', example: 'Getters/setters' },
    { modifier: 'protected', access: 'Accessible in same package & subclasses', example: 'Inheritance' },
    { modifier: '(default)', access: 'Package-level access', example: 'Internal use' },
  ]

  const table2 = [
    { aspect: 'Focus', encapsulation: 'Hiding data', abstraction: 'Hiding implementation' },
    { aspect: 'Means', encapsulation: 'Private variables + public methods', abstraction: 'Abstract classes/interfaces' },
    { aspect: 'Example', encapsulation: 'Getters & Setters', abstraction: 'Interface defining draw() for shapes' },
  ]


  const code1 = `class Student {
    private String name;  // private variable
    private int age;

    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    public void setAge(int age) {
        if (age > 0)
            this.age = age;
    }

    // Getter methods
    public String getName() {
        return name;
    }
    public int getAge() {
        return age;
    }
}

class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Anurag");
        s.setAge(20);
        System.out.println(s.getName() + " is " + s.getAge() + " years old.");
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
            Encapsulation
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
            <b className='text-[#b07219]'>{num(1)}</b> What is Encapsulation?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Encapsulation means <b>hiding the internal details</b> of an object and allowing controlled access through <b>public methods</b>. <br />
            It refers to <b>binding data (variables)</b> and <b>methods (functions)</b> that operate on that data into a <b>single unit</b>, typically a <b>class</b> — and restricting direct access to that data. <br />
            <br />
            In simple terms: <br />
            &quot;Encapsulation = Data Hiding + Controlled Access&quot;
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
            <b className='text-[#b07219]'>{num(2)}</b> How It Works
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Encapsulation in Java is achieved using: <br />
            1. <b>Private variables</b> — data cannot be accessed directly. <br />
            2. <b>Public getter and setter methods</b> — control how data is read or modified. <br />
            <br />
            Example: <br />
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            Here: <br />
            • Variables <span className='bg-neutral-800 px-2 rounded-lg'>name</span> and <span className='bg-neutral-800 px-2 rounded-lg'>age</span> are <b>hidden</b> (private). <br />
            • Access is allowed only through controlled <b>getters</b> and <b>setters</b>.
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
            <b className='text-[#b07219]'>{num(3)}</b> Benefits of Encapsulation
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • ✅ <b>Data protection</b>: Prevents direct modification of sensitive data. <br />
            • ✅ <b>Control</b>: You can validate data before setting it. <br />
            • ✅ <b>Flexibility</b>: Internal changes don&apos;t affect external code. <br />
            • ✅ <b>Modularity</b>: Easier to maintain and debug.
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
            <b className='text-[#b07219]'>{num(4)}</b> Real-world Analogy
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Think of a <b>capsule</b> containing medicine. <br />
            You can take the capsule (use the object), but you can&apos;t directly modify the ingredients (private data inside).
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
            <b className='text-[#b07219]'>{num(5)}</b> Access Modifiers in Encapsulation
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Modifier</TableHead>
                  <TableHead>Access Level</TableHead>
                  <TableHead>Example Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table1.map((content) => (
                  <TableRow key={content.modifier}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.modifier}</span></TableCell>
                    <TableCell>{content.access}</TableCell>
                    <TableCell><span>{content.example}</span></TableCell>
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
            <b className='text-[#b07219]'>{num(6)}</b> Why Use Abstraction?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Aspect</TableHead>
                  <TableHead>Encapsulation</TableHead>
                  <TableHead>Abstraction</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table2.map((content) => (
                  <TableRow key={content.aspect}>
                    <TableCell>{content.aspect}</TableCell>
                    <TableCell>{content.encapsulation}</TableCell>
                    <TableCell><span>{content.abstraction}</span></TableCell>
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
            <b className='text-[#b07219]'>{num(7)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Encapsulation = combining data and methods + restricting access. <br />
            • Achieved using <b>private fields</b> and <b>public getters/setters</b>. <br />
            • Improves data security, modularity, and maintainability. <br />
            • Fundamental for writing <b>clean, robust, and secure</b> Java code.
          </div>
        </motion.div>
      </div>
    </main>
  )
}