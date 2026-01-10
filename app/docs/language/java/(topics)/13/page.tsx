'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function Page() {
  const table = [
    { member: 'Fields (Variables)', description: 'Store object data', example: 'String name; int age;' },
    { member: 'Methods', description: 'Define behavior', example: 'void speak() { ... }' },
    { member: 'Constructors', description: 'Initialize objects', example: 'Person(String n) { name = n; }' },
  ]

  const code1 = `class Car {
    String color;
    int speed;

    void drive() {
        System.out.println("The car is driving...");
    }
}`

  const code2 = `public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // Object creation
        myCar.color = "Red";
        myCar.speed = 120;
        
        System.out.println("Car color: " + myCar.color);
        myCar.drive();
    }
}`

  const code3 = `Car color: Red
The car is driving...`

  const code4 = `myCar.color = "Blue";
myCar.drive();`

  const code5 = `Car car1 = new Car();
Car car2 = new Car();

car1.color = "Red";
car2.color = "Black";

System.out.println(car1.color);
System.out.println(car2.color);`

  const code6 = `Red
Black`

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
            Classes and Objects
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>13.1</b> What Are Classes and Objects?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            In Java, everything revolves around <b>classes</b> and <b>objects</b> — they&apos;re the foundation of Object-Oriented Programming (OOP). <br />
            <b>•</b> A <b>class</b> is a <b>blueprint</b> for creating objects. <br />
            <b>•</b> An <b>object</b> is an <b>instance</b> of a class, containing real data and behavior. <br />
            <br />
            <b>Example:</b>
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            Here, <span className='bg-neutral-800 px-2 rounded-lg'>Car</span> is a <b>class</b> with properties (<span className='bg-neutral-800 px-2 rounded-lg'>color</span>, <span className='bg-neutral-800 px-2 rounded-lg'>speed</span>) and a method (<span className='bg-neutral-800 px-2 rounded-lg'>drive()</span>).
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>13.2</b> Creating Objects
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Once a class is defined, you can create <b>objects</b> from it using the <span className='bg-neutral-800 px-2 rounded-lg'>new</span> keyword. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            Output: <br />
            <CodeBlock language="bash" filename="" code={code3} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>13.3</b> Class Members
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.map((content) => (
                  <TableRow key={content.member}>
                    <TableCell><span className='font-bold'>{content.member}</span></TableCell>
                    <TableCell>{content.description}</TableCell>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.example}</span></TableCell>
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
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>13.4</b> Accessing Class Members
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Use the <b>dot</b> (<span className='bg-neutral-800 px-2 rounded-lg'>.</span>) operator with an object reference: <br />
            <br />
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            If members are <span className='bg-neutral-800 px-2 rounded-lg'>private</span>, they can only be accessed inside the same class — this is part of <b>encapsulation</b> (covered later).
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>13.5</b> Multiple Objects of the Same Class
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can create multiple objects from one class blueprint: <br />
            <br />
            <CodeBlock language="java" filename="java" code={code5} /> <br />
            Output:
            <CodeBlock language="bash" filename="" code={code6} /> <br />
            Each object has its <b>own copy</b> of instance variables.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>13.6</b> Memory Allocation for Objects
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When you create an object using <span className='bg-neutral-800 px-2 rounded-lg'>new</span>, Java allocates memory for: <br />
            <b>•</b> <b>Instance variables</b> of that class. <br />
            <b>•</b> The <b>reference</b> stored in the variable (e.g., <span className='bg-neutral-800 px-2 rounded-lg'>myCar</span>). <br />
            Objects are stored in the <b>heap memory</b>, and references are in the <b>stack</b>.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>13.7</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>Class</b> → Blueprint for creating objects. <br />
            <b>•</b> <b>Object</b> → Real instance of a class. <br />
            <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>new</span> to create objects. <br />
            <b>•</b> Each object maintains its own copy of data fields. <br />
            <b>•</b> Objects are stored in heap memory.
          </div>
        </motion.div>
      </div>
    </main>
  )
}