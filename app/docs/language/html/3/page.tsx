'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code1 = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a basic HTML structure.</p>
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
						Setup and Structure
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
						<b className='text-[#e34c26]'>3.1</b> Getting Started
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						To write HTML, you only need: <br />
						<br />
						• A <b>text editor</b> (e.g., VS Code, Sublime, Notepad). <br />
						• A <b>web browser</b> (e.g., Chrome, Firefox, Safari). <br />
						Save your file with the <span className='bg-neutral-800 px-2 rounded-lg'>.html</span> extension (like <span className='bg-neutral-800 px-2 rounded-lg'>index.html</span>), then open it in a browser. 
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
						<b className='text-[#e34c26]'>3.2</b> Basic HTML Document Structure
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<CodeBlock language="html" filename="example.html" code={code1} /> <br />
						🔍 Breaking It Down <br />
						<br />
						1. <span className='bg-neutral-800 px-2 rounded-lg'>&lt;!DOCTYPE html&gt;</span> → tells the browser we&apos;re using HTML5. <br />
						2. <span className='bg-neutral-800 px-2 rounded-lg'>&lt;html&gt;</span> → the root element, everything goes inside. <br />
						3. <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span> → contains metadata (title, encoding, links, scripts, styles). <br />
						4. <span className='bg-neutral-800 px-2 rounded-lg'>&lt;title&gt;</span> → shows the page title in the browser tab. <br />
						5. <span className='bg-neutral-800 px-2 rounded-lg'>&lt;body&gt;</span> → contains everything visible to users (text, images, links, etc.).
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
						<b className='text-[#e34c26]'>3.3</b> Pro Tips
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Always include <span className='bg-neutral-800 px-2 rounded-lg'>&lt;!DOCTYPE html&gt;</span> at the top for modern standards. <br />
						• Use <b>UTF-8 encoding</b> (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;meta charset=&quot;UTF-8&quot;&gt;</span>) to support all languages. <br />
						• Keep only one <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> per page for SEO and accessibility.
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
						<b className='text-[#e34c26]'>3.4</b> Key Takeaways
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Every HTML page follows a <b>head + body structure</b>. <br />
						• <span className='bg-neutral-800 px-2 rounded-lg'>&lt;!DOCTYPE html&gt;</span> = tells the browser it&apos;s HTML5. <br />
						• <span className='bg-neutral-800 px-2 rounded-lg'>&lt;head&gt;</span>= information about the page, <span className='bg-neutral-800 px-2 rounded-lg'>&lt;body&gt;</span> = visible content. <br />
						• Save files with .html and open in a browser to run them.
					</div>
				</motion.div>

				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='2'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='4'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}