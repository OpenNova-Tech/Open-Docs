'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `class Car {
    String color;
    int speed;

    Car() {  // Constructor
        color = "Black";
        speed = 0;
    }
}`

  const code2 = `public class Main {
    public static void main(String[] args) {
        Car c1 = new Car();   // Constructor is called
        System.out.println(c1.color);  // Output: Black
    }
}`

  const code3 = `class Demo {
    int a; String b;
}
public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        System.out.println(d.a + " " + d.b);  // Output: 0 null
    }
}`

  const code4 = `class Student {
    Student() {
        System.out.println("Student object created!");
    }
}`

  const code5 = `class Student {
    String name;
    int age;

    Student(String n, int a) {
        name = n;
        age = a;
    }
}`

  const code6 = `public class Main {
    public static void main(String[] args) {
        Student s = new Student("Ravi", 20);
        System.out.println(s.name + " - " + s.age);
    }
}`

  const code7 = `Ravi - 20`

  const code8 = `class Box {
    int width, height;

    Box() {
        width = height = 10;
    }

    Box(int w, int h) {
        width = w;
        height = h;
    }
}`

  const code9 = `Box b1 = new Box();
Box b2 = new Box(5, 7);`

  const code10 = `class Book {
    String title;
    double price;

    Book() {
        this("Unknown", 0.0);
    }

    Book(String t, double p) {
        title = t;
        price = p;
    }
}`

  const code11 = `class Example {
    {
        System.out.println("Initialization Block");
    }

    Example() {
        System.out.println("Constructor Called");
    }
}`

  const code12 = `Initialization Block
Constructor Called`

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
            Constructors
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
            <b className='text-[#b07219]'>{num(1)}</b> What Is a Constructor?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>constructor</b> in Java is a <b>special method</b> used to <b>initialize objects</b>. <br />
            It has the <b>same name as the class</b> and <b>no return type</b> (not even <span className='bg-neutral-800 px-2 rounded-lg'>void</span>). <br />
            <br />
            When you create an object with <span className='bg-neutral-800 px-2 rounded-lg'>new</span>, the constructor runs automatically. <br />
            <br />
            <b>Example:</b>
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            <CodeBlock language="java" filename="java" code={code2} /> <br />
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
            <b className='text-[#b07219]'>{num(2)}</b> Types of Constructors
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>a. Default Constructor</b> <br />
            <b>•</b> Provided by Java <b>if you don&apos;t define any</b>. <br />
            <b>•</b> Initializes variables with <b>default values</b> (<span className='bg-neutral-800 px-2 rounded-lg'>0</span>, <span className='bg-neutral-800 px-2 rounded-lg'>null</span>, <span className='bg-neutral-800 px-2 rounded-lg'>false</span>). <br />
            <br />
            <CodeBlock language="java" filename="java" code={code3} /> <br />
            <b>b. No-Argument Constructor</b> <br />
            A constructor you define yourself without parameters. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            <b>c. Parameterized Constructor</b> <br />
            Accepts arguments to initialize data at the time of object creation. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code5} /> <br />
            <CodeBlock language="java" filename="java" code={code6} /> <br />
            Output: 
            <CodeBlock language="bash" filename="" code={code7} />
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
            <b className='text-[#b07219]'>{num(3)}</b> Constructor Overloading
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can define <b>multiple constructors</b> with different parameter lists (same name, different signatures). <br />
            <br />
            <CodeBlock language="java" filename="java" code={code8} /> <br />
            <CodeBlock language="java" filename="java" code={code9} />
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
            <b className='text-[#b07219]'>{num(4)}</b> Constructor Chaining using this()
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can call one constructor from another using (<span className='bg-neutral-800 px-2 rounded-lg'>this()</span>). <br />
            <br />
            <CodeBlock language="java" filename="java" code={code10} />
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
            <b className='text-[#b07219]'>{num(5)}</b> Instance Initialization Blocks (IIB)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used for initializing instance variables — runs <b>before constructors</b>. <br />
            <CodeBlock language="java" filename="java" code={code11} /> <br />
            Output:
            <CodeBlock language="bash" filename="" code={code12} />
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
            <b className='text-[#b07219]'>{num(6)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Constructor name = Class name, no return type. <br />
            <b>•</b> Automatically called when using <span className='bg-neutral-800 px-2 rounded-lg'>new</span>. <br />
            <b>•</b> Types: Default, No-arg, Parameterized. <br />
            <b>•</b> Supports <b>overloading</b> and <b>chaining</b> via <span className='bg-neutral-800 px-2 rounded-lg'>this()</span>. <br />
            <b>•</b> Initialization Blocks run before constructors.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
