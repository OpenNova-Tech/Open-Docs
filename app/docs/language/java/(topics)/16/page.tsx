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
  { type: 'Compile-time (Static)', whenItHappens: 'At compile time', mechanism: 'Method overloading' },
  { type: 'Runtime (Dynamic)', whenItHappens: 'At runtime', mechanism: 'Method overriding' }
];


  const code1 = `class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(5, 10));       // 15
        System.out.println(c.add(5.5, 2.5));    // 8.0
        System.out.println(c.add(1, 2, 3));     // 6
    }
}`

  const code2 = `class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog(); // Upcasting
        a.sound();  // Calls Dog's sound() → "Dog barks"
    }
}`

  const code3 = `Animal a = new Dog();`

  const code4 = `interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

class Square implements Shape {
    public void draw() {
        System.out.println("Drawing Square");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape s1 = new Circle();
        Shape s2 = new Square();
        s1.draw();
        s2.draw();
    }
}`

  const code5 = `Drawing Circle
Drawing Square`

  const code6 = `int add(int a, int b);
double add(int a, int b);  // ❌ Error`

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
            Polymorphism
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
            <b className='text-[#b07219]'>{num(1)}</b> What Is Polymorphism?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Polymorphism</b> means many forms. <br />
            In Java, it allows <b>one interface (method name)</b> to be used for <b>different behaviors</b>, depending on the object calling it. <br />
            <br />
            It enhances <b>code flexibility</b>, <b>reusability</b>, and forms the foundation of <b>runtime method dispatch</b>.
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
            <b className='text-[#b07219]'>{num(2)}</b> Types of Polymorphism
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>When It Happens</TableHead>
                  <TableHead>Mechanism</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.map((content) => (
                  <TableRow key={content.type}>
                    <TableCell><span className='font-bold'>{content.type}</span></TableCell>
                    <TableCell>{content.whenItHappens}</TableCell>
                    <TableCell><span>{content.mechanism}</span></TableCell>
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
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(3)}</b> Compile-time Polymorphism (Method Overloading)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Occurs when <b>multiple methods have the same name</b> but <b>different parameters</b> (number or type). <br />
            <br />
            <CodeBlock language="java" filename="java" code={code1} /> <br />
            ✅ The compiler decides <b>which method to call</b> based on argument types — hence <b>compile-time</b>.
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
            <b className='text-[#b07219]'>{num(4)}</b> Runtime Polymorphism (Method Overriding)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Happens when a <b>subclass provides its own version</b> of a method defined in its superclass. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            ✅ The decision of which method to run happens at <b>runtime</b>, based on the <b>object type</b>, not reference type.
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
            <b className='text-[#b07219]'>{num(5)}</b> Upcasting and Dynamic Method Dispatch
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <b>Upcasting</b>: Reference of parent class refers to a child object. <br />
            <CodeBlock language="java" filename="java" code={code3} /> <br />
            <b>•</b> <b>Dynamic Method Dispatch</b>: JVM determines which overridden method to invoke at runtime. <br />
            <br />
            This mechanism allows Java to call the <b>most specific method implementation</b> dynamically.
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
            <b className='text-[#b07219]'>{num(6)}</b> Polymorphism with Interfaces
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can also achieve polymorphism via <b>interfaces</b> — a class can implement multiple interfaces, each defining common behaviors. <br />
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
            <b className='text-[#b07219]'>{num(7)}</b> Cannot Overload by Return Type Alone
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You <b>cannot</b> have two methods with the same name and parameters but only different return types. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code6} />
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
            <b>•</b> <b>Polymorphism</b> = <b>One name, many forms</b>. <br />
            <b>•</b> <b>Compile-time</b>: Method overloading (decided by compiler). <br />
            <b>•</b> <b>Runtime</b>: Method overriding (decided by JVM). <br />
            <b>•</b> Achieved via <b>inheritance</b> or <b>interfaces</b>. <br />
            <b>•</b> Enables <b>dynamic behavior</b> and <b>flexible code design</b>.
          </div>
        </motion.div>
      </div>
    </main>
  )
}