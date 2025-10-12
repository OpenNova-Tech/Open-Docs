'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code1 = `<tagname>Content goes here</tagname>`

	const code2 = `<h1>This is a heading</h1>
<p>This is a paragraph.</p>`

	const code3 = `<a href="https://example.com">Visit Example</a>
<img src="logo.png" alt="Website Logo" />`

	const code4 = `<p id="intro" class="highlight" title="Intro text" lang="en">
  This paragraph has attributes.
</p>`

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
						HTML Tags and Attributes
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
						<b className='text-[#e34c26]'>5.1</b> What are Tags?
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <b>Tags</b> are the building blocks of HTML. <br />
						• They tell the browser how to interpret and display content. <br />
						• Most tags come in <b>pairs</b>: <br />
						&nbsp;&nbsp;&nbsp;• <b>Opening tag</b> → <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span> <br />
						&nbsp;&nbsp;&nbsp;• <b>Closing tag</b> → <span className='bg-neutral-800 px-2 rounded-lg'>&lt;/p&gt;</span> <br />
						&nbsp;&nbsp;&nbsp;• <b>Content in between</b> → <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;Hello World&lt;/p&gt;</span>
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
						<b className='text-[#e34c26]'>5.2</b> Basic Syntax
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<CodeBlock language="html" filename="html" code={code1} /> <br />
						<b>Example:</b> <br />
						<br />
						<CodeBlock language="html" filename="html" code={code2} /> <br />
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
						<b className='text-[#e34c26]'>5.3</b> Types of Tags
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>1. Container (Paired) Tags</b> <br />
						&nbsp;&nbsp;&nbsp;• Have an opening <span className='bg-neutral-800 px-2 rounded-lg'>&lt;tag&gt;</span> and a closing <span className='bg-neutral-800 px-2 rounded-lg'>&lt;/tag&gt;</span>. <br />
						&nbsp;&nbsp;&nbsp;• Example: <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;Some text&lt;/p&gt;</span>. <br />
						<br />
						<b>2. Empty (Self-Closing) Tags</b> <br />
						&nbsp;&nbsp;&nbsp;• Do not wrap content. <br />
						&nbsp;&nbsp;&nbsp;• Example: <span className='bg-neutral-800 px-2 rounded-lg'>&lt;br /&gt;</span> (line break), <span className='bg-neutral-800 px-2 rounded-lg'>&lt;img /&gt;</span> (image). <br />
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
						<b className='text-[#e34c26]'>5.4</b> What are Attributes ?
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Attributes give <b>extra information</b> about elements. <br />
						• Written inside the opening tag. <br />
						• Always in the <span className='bg-neutral-800 px-2 rounded-lg'>form → name=&quot;value&quot;</span>. <br />
						<br />
						<CodeBlock language="html" filename="html" code={code3} /> <br />
						Here: <br />
						<span className='bg-neutral-800 px-2 rounded-lg'>href</span> → attribute of <span className='bg-neutral-800 px-2 rounded-lg'>&lt;a&gt;</span> (link destination). <br />
						<span className='bg-neutral-800 px-2 rounded-lg'>src</span> and <span className='bg-neutral-800 px-2 rounded-lg'>alt</span> → attributes of <span className='bg-neutral-800 px-2 rounded-lg'>&lt;img&gt;</span> (image path + description).
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
						<b className='text-[#e34c26]'>5.5</b> Common Global Attributes
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <span className='bg-neutral-800 px-2 rounded-lg'>id</span> → unique identifier. <br />
						• <span className='bg-neutral-800 px-2 rounded-lg'>class</span> → groups elements for styling. <br />
						• <span className='bg-neutral-800 px-2 rounded-lg'>title</span> → tooltip text. <br />
						• <span className='bg-neutral-800 px-2 rounded-lg'>lang</span> → language of content. <br />
						• <span className='bg-neutral-800 px-2 rounded-lg'>style</span> → inline CSS styling. <br />
						<br />
						Example:
						<CodeBlock language="html" filename="html" code={code4} /> <br />
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
						<b className='text-[#e34c26]'>5.6</b> Pro Tips
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Tag names are <b>not case-sensitive</b> (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;P&gt;</span> = <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span>), but convention is lowercase. <br />
						• Always quote attribute values (<span className='bg-neutral-800 px-2 rounded-lg'>alt=&quot;Logo&quot;</span>, not <span className='bg-neutral-800 px-2 rounded-lg'>alt=Logo</span>). <br />
						• Avoid mixing content with inline <span className='bg-neutral-800 px-2 rounded-lg'>style</span> — better handled in CSS.
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
						<b className='text-[#e34c26]'>5.7</b> Key Takeaways
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• HTML is built from <b>tags</b>, usually in opening/closing pairs. <br />
						• <b>Empty tags</b> exist for things like images and line breaks. <br />
						• <b>Attributes</b> provide extra details (like links, IDs, or alt text). <br />
						• Global attributes (<span className='bg-neutral-800 px-2 rounded-lg'>id</span>, <span className='bg-neutral-800 px-2 rounded-lg'>class</span>, <span className='bg-neutral-800 px-2 rounded-lg'>title</span>, <span className='bg-neutral-800 px-2 rounded-lg'>lang</span>, <span className='bg-neutral-800 px-2 rounded-lg'>style</span>) can be used on almost any tag.
					</div>
				</motion.div>

				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='4'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='6'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}