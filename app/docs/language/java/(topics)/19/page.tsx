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
    { feature: 'Refers to', this: 'Current object', super: 'Parent object' },
    { feature: 'Used for', this: 'Accessing current class members', super: 'Accessing parent class members' },
    { feature: 'Constructor call', this: 'Calls another constructor in the same class', super: 'Calls constructor of parent class' },
    { feature: 'Common use', this: 'Avoid ambiguity, constructor chaining', super: 'Method/variable overriding, inheritance' },
  ]


  const code1 = `class Student {
    String name;
    Student(String name) {
        this.name = name;  // 'this' differentiates between local and instance variable
    }
}`

  const code2 = `class Student {
    String name;
    int age;

    Student() {
        this("Unknown", 18);  // calling another constructor
    }

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}`

  const code3 = `class Demo {
    void show(Student s) {
        System.out.println("Student object received.");
    }
}

class Student {
    void display() {
        new Demo().show(this);  // passing current object
    }
}`

  const code4 = `class Person {
    String name = "Parent";
}

class Student extends Person {
    String name = "Child";
    void printName() {
        System.out.println(super.name);  // refers to parent class name
    }
}`

  const code5 = `class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void sound() {
        super.sound();  // calls parent method
        System.out.println("Dog barks");
    }
}`

  const code6 = `class Person {
    Person(String role) {
        System.out.println("Role: " + role);
    }
}

class Student extends Person {
    Student() {
        super("Student");  // calling parent constructor
    }
}`

  const code7 = `class Person {
    Person(String name) {
        System.out.println("Person: " + name);
    }
}

class Student extends Person {
    Student(String name) {
        super(name);        // parent constructor
        System.out.println("Student: " + this.getClass().getSimpleName());
    }
}

class Main {
    public static void main(String[] args) {
        new Student("Daniel");
    }
}`

  const code8 = `Person: Daniel
Student: Student`

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
            this & super
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
            <b className='text-[#b07219]'>{num(1)}</b> The this Keyword
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>this</span> represents the <b>current instance</b> of the class — the object on which the method or constructor is being called. <br />
            <br />
            <b>Uses of</b> <span className='bg-neutral-800 px-2 rounded-lg'>this</span>: <br />
            <br />
            <b>1. Refer to current object&apos;s variables</b>
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            <b>2. Call another constructor (constructor chaining)</b>
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            <b>3. Pass current object as an argument</b>
            <CodeBlock language="java" filename="java" code={code3} />
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
            <b className='text-[#b07219]'>{num(2)}</b> The super Keyword
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <span className='bg-neutral-800 px-2 rounded-lg'>super</span> refers to the <b>immediate parent class</b> object. <br />
            It is mainly used to <b>access parent properties or methods</b> that are hidden or overridden in the subclass. <br />
            <br />
            <b>Uses of</b> <span className='bg-neutral-800 px-2 rounded-lg'>super</span>: <br />
            <br />
            <b>1. Access parent class variables</b>
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            <b>2. Call parent class methods</b>
            <CodeBlock language="java" filename="java" code={code5} /> <br />
            <b>3. Invoke parent class constructor</b>
            <CodeBlock language="java" filename="java" code={code6} />
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
            <b className='text-[#b07219]'>{num(3)}</b> this vs super
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>this</TableHead>
                  <TableHead>super</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.map((content) => (
                  <TableRow key={content.feature}>
                    <TableCell>{content.feature}</TableCell>
                    <TableCell>{content.this}</TableCell>
                    <TableCell>{content.super}</TableCell>
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
            <b className='text-[#b07219]'>{num(4)}</b> Key Rules
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>this()</span> and <span className='bg-neutral-800 px-2 rounded-lg'>super()</span> must be the first statement in a constructor. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>this</span> and <span className='bg-neutral-800 px-2 rounded-lg'>super</span> cannot be used in static methods, since static methods don&apos;t belong to any instance.
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
            <b className='text-[#b07219]'>{num(5)}</b> Example Combining Both
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="java" code={code7} /> <br />
            Output:
            <CodeBlock language="bash" filename="" code={code8} />
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
            <b className='text-[#b07219]'>{num(6)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>this</span> → refers to <b>current object</b>. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>super</span> → refers to <b>parent object</b>. <br />
            <b>•</b> Both help in <b>constructor chaining</b>, <b>method overriding</b>, and <b>variable access</b>. <br />
            <b>•</b> Strengthens the link between <b>child and parent</b> classes in OOP design.
          </div>
        </motion.div>
      </div>
    </main>
  )
}