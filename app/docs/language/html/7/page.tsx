'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code1 = `<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>`

	const code2 = `<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Have breakfast</li>
</ol>`

	const code3 = `<dl>
  <dt>HTML</dt>
  <dd>Standard markup language for creating web pages.</dd>

  <dt>CSS</dt>
  <dd>Style sheet language used for designing web pages.</dd>
</dl>`

	const code4 = `<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Mango</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>`

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
						Lists in HTML
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
						<b className='text-[#e34c26]'>7.1</b> Unordered List (&lt;ul&gt;)
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Used when order doesn&apos;t matter. <br />
						• Default bullets: • <br />
						<br />
						<b>Example:</b> <br />
						<br />
						<CodeBlock language="html" filename="html" code={code1} /> <br />
						<br />
						<b>✅ Output: </b> <br />
						<br />
						• Apples <br />
						• Bananas <br />
						• Oranges
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
						<b className='text-[#e34c26]'>7.2</b> Ordered List (&lt;ol&gt;)
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Used when sequence/order matters. <br />
						• Default numbers: 1, 2, 3… <br />
						<br />
						<b>Example:</b> <br />
						<br />
						<CodeBlock language="html" filename="html" code={code2} /> <br />
						<br />
						<b>✅ Output: </b> <br />
						<br />
						1. Wake up <br />
						2. Brush teeth <br />
						3. Have breakfast
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
						<b className='text-[#e34c26]'>7.3</b> Description List (&lt;dl&gt;)
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Used for terms and their descriptions. <br />
						<br />
						<b>Example:</b> <br />
						<br />
						<CodeBlock language="html" filename="html" code={code3} /> <br />
						<br />
						<b>✅ Output: </b> <br />
						<br />
						<b>HTML</b> <br />
						- Standard markup language for creating web pages. <br />
						<br />
						<b>CSS</b> <br />
						- Style sheet language used for designing web pages. <br />
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
						<b className='text-[#e34c26]'>7.4</b> Nested Lists
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						You can put lists inside lists. <br />
						<br />
						<b>Example:</b> <br />
						<br />
						<CodeBlock language="html" filename="html" code={code4} /> <br />
						<b>✅ Output: </b> <br />
						<br />
						• Fruits <br />
						&nbsp;&nbsp;&nbsp;• Apple <br />
						&nbsp;&nbsp;&nbsp;• Mango <br />
						• Vegetables
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
						<b className='text-[#e34c26]'>7.5</b> Key Takeaways
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						•  <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ul&gt;</span> stands for unordered list. <br />
						•  <span className='bg-neutral-800 px-2 rounded-lg'>&lt;li&gt;</span> means list item. <br />
						• Useful for menus, features, or collections. <br />
						•  <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ol&gt;</span> = ordered list. <br />
						• Can customize numbers using <span className='bg-neutral-800 px-2 rounded-lg'>type</span> (<span className='bg-neutral-800 px-2 rounded-lg'>1</span>, <span className='bg-neutral-800 px-2 rounded-lg'>A</span>, <span className='bg-neutral-800 px-2 rounded-lg'>a</span>, <span className='bg-neutral-800 px-2 rounded-lg'>I</span>, <span className='bg-neutral-800 px-2 rounded-lg'>i</span>). <br />
            • Example:  <span className='bg-neutral-800 px-2 rounded-lg'>&lt;ol type=&apos;A&apos;&gt;</span> → A, B, C. <br />
						•	 <span className='bg-neutral-800 px-2 rounded-lg'>&lt;dl&gt;</span> = description list. <br />
						•  <span className='bg-neutral-800 px-2 rounded-lg'>&lt;dt&gt;</span> = description term. <br />
						•  <span className='bg-neutral-800 px-2 rounded-lg'>&lt;dd&gt;</span> = description details. <br />
						•	Nesting helps create menus & hierarchies. <br />
						• Be careful not to nest too deep (bad for readability).
					</div>
				</motion.div>

				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='6'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='8'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
