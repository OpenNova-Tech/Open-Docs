'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
  const code1 = `nano hello.sh`

  const code2 = `#!/bin/bash
# This is my first shell script
echo "Hello, World!"`

  const code3 = `chmod +x hello.sh`

  const code4 = `./hello.sh`

  const code5 = `Hello, World!`

  return (
    <main className='pt-32 dark:bg-black py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#89e051] bg-black'>
            First Script
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>3.1</b> Writing Your First Shell Script
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>shell script</b> is simply a text file containing a sequence of shell commands. Instead of typing commands one by one in the terminal, you can put them inside a file and execute the file. <br />
            <br />
            This makes automation possible — from printing a simple message to running complex system tasks.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>3.2</b> Creating a Script File
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            1. Open a terminal and create a file:
            <CodeBlock language="shell" filename="bash" code={code1} />
            <br />
            2. Add the following content:
            <CodeBlock language="shell" filename="hello.sh" code={code2} />
            <br />
            3. Save and exit
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>3.3</b> Making the Script Executable
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Before running, you need to give the script <b>execute permission</b>:
            <CodeBlock language="shell" filename="bash" code={code3} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>3.4</b> Running the Script
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Now, run the script with:
            <CodeBlock language="shell" filename="bash" code={code4} />
            <br />
            👉 Output will be:
            <CodeBlock language="shell" filename="bash" code={code5} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>3.5</b> Understanding the Script
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>#!/bin/bash</span> → Called a <b>shebang</b>, tells the system which interpreter to use (in this case, Bash). <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>#</span> → Anything after <span className='bg-neutral-800 px-2 rounded-lg'>#</span> is a <b>comment</b>, ignored by the shell. <br />
            <b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>echo &apos;Hello, World!&apos;</span> → Prints text to the terminal.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03,  }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>3.6</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> A shell script is just a <b>file with commands</b> executed in sequence. <br />
            <b>•</b> Always start scripts with a <b>shebang</b> (<span className='bg-neutral-800 px-2 rounded-lg'>#!/bin/bash</span>). <br />
            <b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>chmod +x</span> to make scripts executable. <br />
            <b>•</b> Run scripts with <span className='bg-neutral-800 px-2 rounded-lg'>./filename.sh</span>. <br />
            <b>•</b> Even a simple &apos;Hello World&apos; teaches the basics of <b>comments, shebangs, and echo</b>.
          </div>
        </motion.div>

        <motion.div
          className='flex justify-center gap-6 pt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href='2'>
            <button className='bg-transparent border border-[#89e051] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
              ← View Previous
            </button>
          </Link>
          <Link href='4'>
            <button className='bg-transparent border border-[#89e051] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
              View Next →
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
