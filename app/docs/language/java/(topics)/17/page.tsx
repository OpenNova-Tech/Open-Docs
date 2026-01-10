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
    { feature: 'Methods', abstract: 'Can have abstract + concrete methods', interface: 'Only abstract methods (till Java 7), default & static (from Java 8)' },
    { feature: 'Variables', abstract: 'Instance & static variables allowed', interface: 'Only public static final constants' },
    { feature: 'Constructors', abstract: 'Can have constructors', interface: 'Cannot have constructors' },
    { feature: 'Multiple Inheritance', abstract: 'Not supported', interface: 'Supported' },
    { feature: 'Use Case', abstract: 'When classes share a base with common code', interface: 'When only behavior contract is needed' },
  ]


  const code1 = `abstract class Animal {
    abstract void sound(); // abstract method

    void sleep() {
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
        a.sleep();
    }
}`

  const code2 = `Dog barks
Sleeping...`

  const code3 = `interface Animal {
    void sound();
}

class Cat implements Animal {
    public void sound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Cat();
        a.sound();
    }
}`

  const code4 = `Cat meows`

  const code5 = `interface Shape {
    default void info() {
        System.out.println("This is a shape");
    }
    static void type() {
        System.out.println("2D or 3D shape");
    }
}

class Circle implements Shape {}

public class Main {
    public static void main(String[] args) {
        Shape s = new Circle();
        s.info();          // default method
        Shape.type();      // static method
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
            Abstraction
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
            <b className='text-[#b07219]'>{num(1)}</b> What Is Abstraction?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Abstraction</b> is the process of <b>hiding implementation details</b> and <b>exposing only the necessary functionality</b> to the user. <br />
            It focuses on what an object does, rather than how it does it. <br />
            <br />
            Example from real life: <br />
            When you drive a car, you use the steering and pedals — you don&apos;t worry about how the engine works internally. <br />
            <br />
            In Java, abstraction is achieved through: <br />
            1. <b>Abstract Classes</b> <br />
            2. <b>Interfaces</b>
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
            <b className='text-[#b07219]'>{num(2)}</b> Abstract Classes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            An <b>abstract class</b> is a class declared with the <span className='bg-neutral-800 px-2 rounded-lg'>abstract</span> keyword. <br />
            It <b>can have both abstract and concrete methods</b> (with or without implementation). <br />
            <br />
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            Output:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
            ✅ Key points: <br />
            <b>•</b> You <b>cannot instantiate</b> an abstract class. <br />
            <b>•</b> Subclasses must <b>implement all abstract methods</b>. <br />
            <b>•</b> Can have constructors, variables, and non-abstract methods.
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
            <b className='text-[#b07219]'>{num(3)}</b> Interfaces
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            An <b>interface</b> is a fully abstract blueprint** of a class. <br />
            It contains <b>only method declarations</b> (until Java 7) — no implementation. <br />
            Classes that implement an interface must provide the behavior for its methods.  <br />
            <br />
            <CodeBlock language="java" filename="java" code={code3} /> <br />
            Output:
            <CodeBlock language="bash" filename="" code={code4} /> <br />
            ✅ Key points: <br />
            <b>•</b> All methods in an interface are <b>public and abstract</b> by default. <br />
            <b>•</b> Supports <b>multiple inheritance</b> (a class can implement multiple interfaces). <br />
            <b>•</b> Variables inside interfaces are <b>public</b>, <b>static</b>, and <b>final</b> by default.
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
            <b className='text-[#b07219]'>{num(4)}</b> Abstract Class vs Interface
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Abstract Class</TableHead>
                  <TableHead>Interface</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.map((content) => (
                  <TableRow key={content.feature}>
                    <TableCell><span className='font-bold'>{content.feature}</span></TableCell>
                    <TableCell>{content.abstract}</TableCell>
                    <TableCell><span>{content.interface}</span></TableCell>
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
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(5)}</b> Interface Enhancements in Java 8+
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Interfaces can now include: <br />
            <b>•</b> <b>Default methods</b> - have a body. <br />
            <b>•</b> <b>Static methods</b> - called via interface name. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code5} /> 
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
            <b className='text-[#b07219]'>{num(6)}</b> Why Use Abstraction?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Simplifies complex systems by <b>focusing on essentials</b>. <br />
            <b>•</b> Increases <b>security</b> by hiding internal logic. <br />
            <b>•</b> Enhances <b>maintainability</b> and <b>scalability</b>. <br />
            <b>•</b> Enables <b>loose coupling</b> between components.
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
            <b className='text-[#b07219]'>{num(7)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Abstraction = &quot;Hide the how, show only the what.&quot; <br />
            <b>•</b> Achieved using <b>abstract classes</b> and <b>interfaces</b>. <br />
            <b>•</b> Abstract class → partial abstraction. <br />
            <b>•</b> Interface → complete abstraction. <br />
            <b>•</b> Encourages clean, modular, and maintainable design.
          </div>
        </motion.div>
      </div>
    </main>
  )
}