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
    { type: 'Single Inheritance', description: 'One class inherits another.', example: 'Dog extends Animal' },
    { type: 'Multilevel Inheritance', description: 'A chain of inheritance.', example: 'BabyDog → Dog → Animal' },
    { type: 'Hierarchical Inheritance', description: 'Multiple classes inherit one parent.', example: 'Dog, Cat, Cow → Animal' },
  ]

  const code1 = `class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();   // Inherited method
        d.bark();  // Child method
    }
}`

  const code2 = `This animal eats food.
The dog barks.`

  const code3 = `class Subclass extends Superclass {
    // additional fields and methods
}`

  const code4 = `class Animal {
    Animal() {
        System.out.println("Animal created");
    }
    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {
    Dog() {
        super(); // calls Animal()
        System.out.println("Dog created");
    }

    void display() {
        super.eat(); // calls parent method
    }
}`

  const code5 = `Animal created
Dog created
Eating...`

  const code6 = `class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}`

  const code7 = `Dog d = new Dog();
d.sound(); // Output: Dog barks`

  const code8 = `final class Animal {}   // cannot be extended
class Dog extends Animal {}  // ❌ Error`

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
            Inheritance
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
            <b className='text-[#b07219]'>{num(1)}</b> What Is Inheritance?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Inheritance allows one class to <b>acquire properties and methods</b> of another. <br />
            It promotes <b>code reusability</b> and forms the basis of <b>polymorphism</b> and <b>hierarchical design</b> in Java. <br />
            • The class that is inherited from is called the <b>parent (superclass)</b>. <br />
            • The class that inherits is called the <b>child (subclass)</b>. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            Output:
            <CodeBlock language="bash" filename="" code={code2} /> <br />
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
            <b className='text-[#b07219]'>{num(2)}</b> Syntax
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="java" code={code3} /> <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>extends</span> keyword establishes the inheritance relationship. <br />
            • The subclass gets <b>all accessible members</b> (fields and methods) of the superclass.
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
            <b className='text-[#b07219]'>{num(3)}</b> Types of Inheritance in Java
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.map((content) => (
                  <TableRow key={content.type}>
                    <TableCell><span>{content.type}</span></TableCell>
                    <TableCell>{content.description}</TableCell>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.example}</span></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <br />
            🟥 <b>Note</b>: Java <b>does not support multiple inheritance</b> (a class cannot extend more than one class) to avoid ambiguity. <br />
            However, it can be <b>achieved using interfaces</b> (covered in Abstraction).
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
            <b className='text-[#b07219]'>{num(4)}</b> super Keyword
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used to <b>refer to the parent class</b> — either to access its members or call its constructor. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            Output:
            <CodeBlock language="bash" filename="" code={code5} />
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
            <b className='text-[#b07219]'>{num(5)}</b> Method Overriding
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            When a subclass <b>redefines</b> a method of its parent class with the <b>same name and parameters</b>, it <b>overrides</b> it. <br />
            <CodeBlock language="java" filename="java" code={code6} /> <br />
            Now:
            <CodeBlock language="java" filename="java" code={code7} /> <br />
            ✅ Overriding lets subclasses provide <b>specific behavior</b> for inherited methods.
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
            <b className='text-[#b07219]'>{num(6)}</b> The final Keyword in Inheritance
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <span className='bg-neutral-800 px-2 rounded-lg'>final</span> class → cannot be inherited. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>final</span> method → cannot be overridden. <br />
            <br />
            Example: 
            <CodeBlock language="java" filename="java" code={code8} />
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
            <b className='text-[#b07219]'>{num(7)}</b> Constructors and Inheritance
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • A subclass constructor <b>automatically calls</b> its parent&apos;s constructor first. <br />
            • If the parent has no no-arg constructor, you must explicitly call one using <span className='bg-neutral-800 px-2 rounded-lg'>super(args)</span>.
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
            <b className='text-[#b07219]'>{num(8)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Inheritance enables <b>reusability</b> and <b>method overriding</b>. <br />
            • Use <span className='bg-neutral-800 px-2 rounded-lg'>extends</span> keyword to inherit a class. <br />
            • Types: <b>Single, Multilevel, Hierarchical</b>. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>super</span> accesses parent methods or constructors. <br />
            • Java doesn&apos;t support multiple inheritance (except via interfaces).
          </div>
        </motion.div>
      </div>
    </main>
  )
}
