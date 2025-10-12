'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code1 = `<HTML>
  <HEAD>
    <TITLE>My First Page</TITLE>
  </HEAD>
  <BODY>
    <H1>Hello World</H1>
    <P>Welcome to my first website.</P>
  </BODY>
</HTML>
`
  const code2 = `<!DOCTYPE html>
<html>
  <head>
    <title>Modern HTML5 Page</title>
  </head>
  <body>
    <header>
      <h1>Hello World</h1>
    </header>
    <main>
      <p>Welcome to my first website with HTML5.</p>
    </main>
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
						History of HTML
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
						<b className='text-[#e34c26]'>2.1</b> Origins
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <b>1991</b> → HTML was invented by <b>Tim Berners-Lee</b>, a physicist at CERN. <br />
						• It was created to help scientists share documents easily over the internet.
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
						<b className='text-[#e34c26]'>2.2</b> Evolution Timeline
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <b>1991</b> → First proposal of HTML (with just 18 tags). <br />
						• <b>1995</b> → <b>HTML 2.0</b> (official specification, more standard). <br />
						• <b>1997</b> → <b>HTML 3.2</b> (tables, applets, scripting). <br />
						• <b>1999</b> → <b>HTML 4.01</b> (forms, accessibility, CSS support). <br />
						• <b>2008</b> → <b>HTML5 draft</b> released by <b>WHATWG</b>. <br />
						• <b>2014</b> → <b>HTML5 official standard</b> (multimedia, APIs, semantic tags). <br />
						• <b>Today</b> → Living standard maintained by <b>WHATWG</b> (not versioned, continuously updated).
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
						<b className='text-[#e34c26]'>2.3</b> Key Organizations
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <b>W3C (World Wide Web Consortium)</b> → Early standardization body. <br />
						• <b>WHATWG (Web Hypertext Application Technology Working Group)</b> → Now maintains HTML as a “living standard.”
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
						<b className='text-[#e34c26]'>2.4</b> HTML Then Vs Now
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						1991 Original HTML
						<CodeBlock language="html" filename="1991.html" code={code1} /> <br />
						Modern HTML5
						<CodeBlock language="html" filename="2025.html" code={code2} /> <br />
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
						<b className='text-[#e34c26]'>2.5</b> Key Takeaways
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• HTML was invented in <b>1991 by Tim Berners-Lee</b>. <br />
						• It evolved through versions: <b>2.0 → 3.2 → 4.01 → 5.0 → Living Standard</b>. <br />
						• Now maintained by <b>WHATWG</b> instead of W3C. <br />
						• HTML5 introduced <b>semantic elements, multimedia, and APIs</b>.
					</div>
				</motion.div>

				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='1'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='3'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}