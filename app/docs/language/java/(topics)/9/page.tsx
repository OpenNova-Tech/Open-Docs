'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function page() {
  const table1 = [
    { operator: '+', description: 'Addition', example: '5 + 3 = 8' },
    { operator: '-', description: 'Subtraction', example: '5 - 3 = 2' },
    { operator: '*', description: 'Multiplication', example: '5 * 3 = 15' },
    { operator: '/', description: 'Division (quotient)', example: '10 / 3 = 3' },
    { operator: '%', description: 'Modulus (remainder)', example: '10 % 3 = 1' }
  ]

  const table2 = [
    { operator: '+', description: 'Positive', example: '+a' },
    { operator: '-', description: 'Negation', example: '-a' },
    { operator: '++', description: 'Increment by 1', example: '++a a++' },
    { operator: '--', description: 'Decrement by 1', example: '--a a--' },
    { operator: '!', description: 'Logical NOT', example: '!true = false' }
  ]

  const table3 = [
    { operator: '==', description: 'Equal to', example: 'a == b' },
    { operator: '!=', description: 'Not equal to', example: 'a != b' },
    { operator: '>', description: 'Greater than', example: 'a > b' },
    { operator: '<', description: 'Less than', example: 'a < b' },
    { operator: '>=', description: 'Greater or equal', example: 'a >= b' },
    { operator: '<=', description: 'Less or equal', example: 'a <= b' }
  ]

  const table4 = [
    { operator: '&&', description: 'Logical AND', example: 'true && false → false' },
    { operator: '||', description: 'Logical OR', example: 'true || false → true' },
    { operator: '!', description: 'Logical NOT', example: '!true → false' },
  ]

  const table5 = [
    { operator: '=', example: 'x = 5', equivalent: 'Assign 5 to x' },
    { operator: '+=', example: 'x += 5', equivalent: 'x = x + 5' },
    { operator: '-=', example: 'x -= 5', equivalent: 'x = x - 5' },
    { operator: '*=', example: 'x *= 5', equivalent: 'x = x * 5' },
    { operator: '/=', example: 'x /= 5', equivalent: 'x = x / 5' },
    { operator: '%=', example: 'x %= 5', equivalent: 'x = x % 5' },
  ]
  
  const table6 = [
    { operator: '&', description: 'AND', example: 'a & b' },
    { operator: '', description: 'OR', example: '' },
    { operator: '^', description: 'XOR', example: 'a ^ b' },
    { operator: '~', description: 'NOT', example: '~a' },
    { operator: '<<', description: 'Left shift', example: 'a << 2' },
    { operator: '>>', description: 'Right shift', example: 'a >> 2' },
    { operator: '>>>', description: 'Unsigned right shift', example: 'a >>> 2' }
  ]

  const code1 = `int a = 10, b = 3;
System.out.println(a / b); // 3
System.out.println(a % b); // 1`

  const code2 = `int x = 5;
System.out.println(++x); // 6 (pre-increment)
System.out.println(x--); // 6 (post-decrement)`

  const code3 = `int age = 20;
boolean student = true;
System.out.println(age > 18 && student); // true`

  const code4 = `int a = 5;  // 0101
int b = 3;  // 0011
System.out.println(a & b); // 1 (0001)`

  const code5 = `int age = 18;
String result = (age >= 18) ? "Adult" : "Minor";
System.out.println(result); // Adult`

  const code6 = `String s = "Hello";
System.out.println(s instanceof String); // true`

  const code7 = `int result = 10 + 5 * 2; // 20, not 30`

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
            Operators in Java
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
            <b className='text-[#b07219]'>9.1</b> Arithmetic Operators
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used for basic mathematical operations. <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operator</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table1.map((content) => (
                  <TableRow key={content.operator}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.operator}</span></TableCell>
                    <TableCell>{content.description}</TableCell>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.example}</span></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <br />
            <CodeBlock language="java" filename="java" code={code1} />
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
            <b className='text-[#b07219]'>9.2</b> Unary Operators
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Operate on a single operand. <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operator</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table2.map((content) => (
                  <TableRow key={content.operator}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.operator}</span></TableCell>
                    <TableCell>{content.description}</TableCell>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.example}</span></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <br />
            <CodeBlock language="java" filename="java" code={code2} />
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
            <b className='text-[#b07219]'>9.3</b> Relational Operators
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used for comparison (result: boolean). <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operator</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table3.map((content) => (
                  <TableRow key={content.operator}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.operator}</span></TableCell>
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
            <b className='text-[#b07219]'>9.4</b> Logical Operators
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Used with boolean values. <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operator</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table4.map((content) => (
                  <TableRow key={content.operator}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.operator}</span></TableCell>
                    <TableCell>{content.description}</TableCell>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.example}</span></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <br />
            <CodeBlock language="java" filename="java" code={code3} />
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
            <b className='text-[#b07219]'>9.5</b> Assignment Operators
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Assign values with or without modifications. <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operator</TableHead>
                  <TableHead>Example</TableHead>
                  <TableHead>Equivalent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table5.map((content) => (
                  <TableRow key={content.operator}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.operator}</span></TableCell>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.example}</span></TableCell>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.equivalent}</span></TableCell>
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
            <b className='text-[#b07219]'>9.6</b> Bitwise Operators
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Operate at the bit level. <br />
            <br />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operator</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table6.map((content) => (
                  <TableRow key={content.operator}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.operator}</span></TableCell>
                    <TableCell>{content.description}</TableCell>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.example}</span></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <br />
            <CodeBlock language="java" filename="java" code={code4} />
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
            <b className='text-[#b07219]'>9.7</b> Ternary Operator
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A shorthand for if-else. <br />
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
            <b className='text-[#b07219]'>9.8</b> Instanceof Operator
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Checks whether an object is of a particular type. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code6} />
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
            <b className='text-[#b07219]'>9.9</b> Operator Precedence
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Determines the <b>order of evaluation</b>. <br />
            <b>•</b> Highest: <span className='bg-neutral-800 px-2 rounded-lg'>()</span>, <span className='bg-neutral-800 px-2 rounded-lg'>[]</span>, <span className='bg-neutral-800 px-2 rounded-lg'>.</span> <br />
            <b>•</b> Next: <span className='bg-neutral-800 px-2 rounded-lg'>++</span>, <span className='bg-neutral-800 px-2 rounded-lg'>--</span> <br />
            <b>•</b> Multiplicative: <span className='bg-neutral-800 px-2 rounded-lg'>*</span>, <span className='bg-neutral-800 px-2 rounded-lg'>/</span>, <span className='bg-neutral-800 px-2 rounded-lg'>%</span> <br />
            <b>•</b> Additive: <span className='bg-neutral-800 px-2 rounded-lg'>+</span>, <span className='bg-neutral-800 px-2 rounded-lg'>-</span> <br />
            <b>•</b> Lowest: <span className='bg-neutral-800 px-2 rounded-lg'>=</span>, <span className='bg-neutral-800 px-2 rounded-lg'>+=</span>, <span className='bg-neutral-800 px-2 rounded-lg'>-=</span> <br />
            <br />
            <CodeBlock language="java" filename="java" code={code7} />
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
            <b className='text-[#b07219]'>9.10</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Java operators include arithmetic, relational, logical, assignment, bitwise, unary, ternary, and <span className='bg-neutral-800 px-2 rounded-lg'>instanceof</span>. <br />
            <b>•</b> Precedence rules decide the order of execution. <br />
            <b>•</b> Use parentheses <span className='bg-neutral-800 px-2 rounded-lg'>()</span> to make expressions more readable.
          </div>
        </motion.div>

       
      </div>
    </main>
  )
}
