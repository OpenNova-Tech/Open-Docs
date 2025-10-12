'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code1 = `<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>Welcome to my very first webpage.</p>
  </body>
</html>`

	return (
		<main className='pt-32 dark:bg-black py-12 px-6'>
			<div className='max-w-4xl mx-auto space-y-12'>
				<motion.header
					className='text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#e34c26] bg-black'>
						Hello World Page
					</h1>
				</motion.header>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>4.1</b> The First Step
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Just like learning any programming language begins with a Hello World program, creating a webpage with HTML starts the same way.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>4.2</b> The Example Code
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<CodeBlock language="html" filename="example.html" code={code1} /> <br />
						🔍 <b>Breaking It Down</b> <br />
						<br />
						1. <span className='bg-neutral-800 px-2 rounded-lg'>&lt;!DOCTYPE html&gt;</span> → declares this is an HTML5 page. <br />
						2. <span className='bg-neutral-800 px-2 rounded-lg'>&lt;title&gt;</span> → sets the browser tab title (“Hello World”). <br />
						3. <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> → main heading, the biggest text on the page. <br />
						4. <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span> → paragraph, for normal body text. <br />
						<br />
						📸 <b>How It Looks in a Browser</b> <br />
						<br />
						• A <b>big heading</b>: “Hello, World!” <br />
						• A <b>paragraph</b> below it: “Welcome to my very first webpage.”
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>4.3</b> Try It Yourself
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Save the code in a file named <span className='bg-neutral-800 px-2 rounded-lg'>&lt;hello.html&gt;</span>. <br />
						• Open it in your browser by double-clicking it. <br />
						• 🎉 You&apos;ve just built your <b>first webpage</b>!
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>4.4</b> Key Takeaways
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• A “Hello World” page is the <b>simplest valid HTML document</b>. <br />
						• It shows the <b>basic structure</b>: doctype, head, body. <br />
						• <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> is for headings, <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span> is for text. <br />
						• You only need a <b>text editor</b> + <b>browser</b> to start coding HTML.
					</div>
				</motion.div>

				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='3'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='5'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}