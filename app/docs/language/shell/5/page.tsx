'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
  const code1 = `pwd`

  const code2 = `ls
ls -l     # Detailed view (permissions, size, date)
ls -a     # Show hidden files (start with .)
ls -lh    # Human-readable file sizes`

  const code3 = `cd /path/to/folder   # Move into a folder
cd ..                # Go up one level
cd ~                 # Go to home directory
cd -                 # Switch back to last directory`

  const code4 = `mkdir myfolder       # Create a new directory
mkdir -p dir1/dir2   # Create nested directories
touch file.txt       # Create an empty file`

  const code5 = `cp file.txt backup.txt      # Copy file
cp -r folder newfolder      # Copy directory recursively
mv file.txt docs/           # Move file into docs folder
mv oldname.txt newname.txt  # Rename file`

  const code6 = `rm file.txt         # Remove a file
rm -r folder        # Remove a directory and its contents
rm -rf folder       # Force delete (no prompt)`

  const code7 = `mkdir projects
cd projects
touch notes.txt
ls -l`

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
            File & Directory Commands
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>5.1</b> Viewing Your Location
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="shell" filename="bash" code={code1} /> <br />
            • Prints the current working directory (where you are in the filesystem).
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>5.2</b> Listing Files & Directories
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="shell" filename="bash" code={code2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>5.3</b> Navigating Between Directories
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="shell" filename="bash" code={code3} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>5.4</b> Creating Files & Folders
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="shell" filename="bash" code={code4} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>5.5</b> Copying & Moving Files
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="shell" filename="bash" code={code5} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>5.6</b> Deleting Files & Folders
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            ⚠️ Use carefully — deleted files usually don&apos;t go to &quot;Recycle Bin.&quot;
            <CodeBlock language="shell" filename="bash" code={code6} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>5.7</b> Examples
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="shell" filename="bash" code={code7} /> <br />
            👉 Creates a folder <span className='bg-neutral-800 px-2 rounded-lg'>projects</span>, enters it, makes a file <span className='bg-neutral-800 px-2 rounded-lg'>notes.txt</span>, and lists it.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
          className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#89e051]'>5.8</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <span className='bg-neutral-800 px-2 rounded-lg'>pwd</span> shows your <b>current directory</b>. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>ls</span> lists files; add <span className='bg-neutral-800 px-2 rounded-lg'>-l</span> or <span className='bg-neutral-800 px-2 rounded-lg'>-a</span> for more details. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>cd</span> is used to <b>move around</b> the filesystem. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>mkdir</span> creates directories, <span className='bg-neutral-800 px-2 rounded-lg'>touch</span> creates files. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>cp</span> and <span className='bg-neutral-800 px-2 rounded-lg'>mv</span> are for <b>copying/moving</b>, while <span className='bg-neutral-800 px-2 rounded-lg'>rm</span> deletes. <br />
            • Be <b>careful with</b> <span className='bg-neutral-800 px-2 rounded-lg'>rm -rf</span>, as it permanently deletes files/folders.
          </div>
        </motion.div>

        <motion.div
          className='flex justify-center gap-6 pt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href='4'>
            <button className='bg-transparent border border-[#89e051] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
              ← View Previous
            </button>
          </Link>
          <Link href='6'>
            <button className='bg-transparent border border-[#89e051] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
              View Next →
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
