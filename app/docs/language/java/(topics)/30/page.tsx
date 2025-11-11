'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const code1 = `// Without Generics
List list = new ArrayList();
list.add("Java");
list.add(10); // Allowed, but unsafe
String s = (String) list.get(1); // Runtime error

// With Generics
List<String> list = new ArrayList<>();
list.add("Java");
// list.add(10); // Compile-time error
String s = list.get(0); // Safe`

  const code2 = `class Box<T> {
    private T value;

    public void set(T value) { this.value = value; }
    public T get() { return value; }
}

Box<Integer> intBox = new Box<>();
intBox.set(100);
System.out.println(intBox.get());`

  const code3 = `public <T> void printArray(T[] array) {
    for (T element : array)
        System.out.println(element);
}`

  const code4 = `printArray(new Integer[]{1, 2, 3});
printArray(new String[]{"A", "B", "C"});`

  const code5 = `class Calculator<T extends Number> {
    public double square(T num) {
        return num.doubleValue() * num.doubleValue();
    }
}`

  const code6 = `List<? extends Number> nums = new ArrayList<Integer>();
List<? super Integer> ints = new ArrayList<Number>();`

  const code7 = `List<String> l1 = new ArrayList<>();
List<Integer> l2 = new ArrayList<>();
System.out.println(l1.getClass() == l2.getClass()); // true`


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
            Generics
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
            <b className='text-[#b07219]'>{num(1)}</b> What are Generics?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>Generics</b> allow you to create <b>classes, interfaces, and methods</b> that operate on <b>types specified by the user</b>, ensuring <b>type safety</b> and <b>code reusability</b>. <br />
            Introduced in <b>Java 5</b>, they eliminate the need for type casting and prevent runtime <span className='bg-neutral-800 px-2 rounded-lg'>ClassCastException</span>.
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
            <b className='text-[#b07219]'>{num(2)}</b> Why Generics?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Without generics, Java collections can store any object type, which can cause runtime errors. <br />
            Generics move these errors to <b>compile time</b>. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code1} />
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
            <b className='text-[#b07219]'>{num(3)}</b> Advantages
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>1. Type Safety</b>: Only specified data types can be stored. <br />
            <b>2. Compile-time Checking</b>: Detects invalid type usage early. <br />
            <b>3. Code Reusability</b>: Same class or method works with multiple data types. <br />
            <b>4. Eliminates Casting</b>: Automatic type inference avoids explicit casting.
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
            <b className='text-[#b07219]'>{num(4)}</b> Generic Classes
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can define your own generic class: <br />
            <br />
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            Here, <span className='bg-neutral-800 px-2 rounded-lg'>T</span> is a <b>type parameter</b> that is replaced by a real type (<span className='bg-neutral-800 px-2 rounded-lg'>Integer</span>, <span className='bg-neutral-800 px-2 rounded-lg'>String</span>, etc.) when the object is created.
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
            <b className='text-[#b07219]'>{num(5)}</b> Generic Methods
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can also define methods with type parameters:
            <CodeBlock language="java" filename="java" code={code3} /> <br />
            When called:
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
            <b className='text-[#b07219]'>{num(6)}</b> Bounded Type Parameters
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            You can <b>restrict</b> type parameters to certain classes: <br />
            <br />
            <CodeBlock language="java" filename="java" code={code5} /> <br />
            Here, <span className='bg-neutral-800 px-2 rounded-lg'>T</span> can only be a subclass of <span className='bg-neutral-800 px-2 rounded-lg'>Number</span> (like <span className='bg-neutral-800 px-2 rounded-lg'>Integer</span>, <span className='bg-neutral-800 px-2 rounded-lg'>Float</span>, etc.).
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
            <b className='text-[#b07219]'>{num(7)}</b> Wildcards in Generics
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Wildcards make generics more flexible: <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>?</span> — unknown type <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>? extends T</span> — upper bounded (subtypes of T) <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>? super T</span> — lower bounded (supertypes of T) <br />
            <br />
            Example:
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
            <b className='text-[#b07219]'>{num(8)}</b> Type Erasure
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Generics are <b>compile-time features</b> only — the JVM removes generic type information at runtime for backward compatibility. <br />
            <br />
            Example:
            <CodeBlock language="java" filename="java" code={code7} />
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
            <b className='text-[#b07219]'>{num(9)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • Generics provide <b>type safety</b> and <b>reusability</b>. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>T</span>, <span className='bg-neutral-800 px-2 rounded-lg'>E</span>, <span className='bg-neutral-800 px-2 rounded-lg'>K</span>, <span className='bg-neutral-800 px-2 rounded-lg'>V</span> are common type parameter names. <br />
            • <b>Generic methods</b> use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;T&gt;</span> before the return type. <br />
            • <b>Bounded types</b> restrict allowed type parameters. <br />
            • <b>Wildcards</b> (<span className='bg-neutral-800 px-2 rounded-lg'>?</span>) make generics flexible. <br />
            • <b>Type erasure</b> means generics exist only at compile time.
          </div>
        </motion.div>
      </div>
    </main>
  )
}