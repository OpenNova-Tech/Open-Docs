'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
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
	const table = [
		{ feature: '<b>', git: 'Bold (non-semantic)', central: '<b>Bold text</b>' },
		{ feature: '<strong>', git: 'Important (semantic)', central: '<strong>Important!</strong>' },
		{ feature: '<i>', git: 'Italic (non-semantic)', central: '<i>Italic text</i>' },
		{ feature: '<em>', git: 'Emphasized text (semantic)', central: '<em>Emphasized!</em>' },
		{ feature: '<u>', git: 'Underline', central: '<u>Underlined</u>' },
		{ feature: '<mark>', git: 'Highlight text', central: '<mark>Highlighted</mark>' },
		{ feature: '<small>', git: 'Smaller text', central: '<small>Fine print</small>' },
		{ feature: '<del>', git: 'Deleted text', central: '<del>Old price</del>' },
		{ feature: '<ins>', git: 'Inserted text', central: '<ins>New price</ins>' },
		{ feature: '<sub>', git: 'Subscript', central: 'H<sub>2</sub>O' },
		{ feature: '<sup>', git: 'Superscript', central: 'X<sup>2</sup>' },
	]

	const code1 = `<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Smaller Sub Heading</h3>`

	const code2 = `<p>This is a paragraph of text.</p>
<p>This is another paragraph.</p>
<br>
<hr>
<p>New section starts here.</p>`

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
						HTML Text Formatting and Elements
					</h1>
				</motion.header>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>6.1</b> Headings in HTML
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Headings are used to define titles and subtitles on a webpage. They range from <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> (most important) to <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h6&gt;</span> (least important). <br />
						<br />
						<b>Example:</b> <br />
						<br />
						<CodeBlock language="html" filename="html" code={code1} /> <br />
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>6.2</b> Paragraphs and Line Breaks
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span>: Defines a paragraph. <br />
						• <span className='bg-neutral-800 px-2 rounded-lg'>&lt;br&gt;</span>: Creates a line break. <br />
						• <span className='bg-neutral-800 px-2 rounded-lg'>&lt;hr&gt;</span>: Inserts a horizontal line (thematic break). <br />
						<br />
						<b>Example:</b> <br />
						<br />
						<CodeBlock language="html" filename="html" code={code2} /> <br />
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>6.3</b> Text Formatting Tags
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						HTML provides inline elements to style text. <br />
						<br />
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Tag</TableHead>
									<TableHead>Meaning</TableHead>
									<TableHead>Example</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{table.map((content) => (
									<TableRow key={content.feature}>
										<TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.feature}</span></TableCell>
										<TableCell>{content.git}</TableCell>
										<TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.central}</span></TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>6.4</b> Key Takeaways
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> should usually be used once per page for SEO and clarity. <br />
						• Use headings to create a logical structure, not just for styling. <br />
						• Search engines give higher importance to <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h1&gt;</span> compared to <span className='bg-neutral-800 px-2 rounded-lg'>&lt;h6&gt;</span>. <br />
						•	Use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;p&gt;</span> for blocks of text, not just <span className='bg-neutral-800 px-2 rounded-lg'>&lt;br&gt;</span>. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>&lt;br&gt;</span> is useful for poetry, addresses, or cases where spacing matters. <br />
            • <span className='bg-neutral-800 px-2 rounded-lg'>&lt;hr&gt;</span> represents a thematic break or section change. <br />
						• Prefer <b>semantic tags</b> (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;strong&gt;</span>, <span className='bg-neutral-800 px-2 rounded-lg'>&lt;em&gt;</span>) for better SEO and accessibility. <br />
						• Use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;mark&gt;</span> for highlighting search results or key terms. <br />
						• <span className='bg-neutral-800 px-2 rounded-lg'>&lt;sub&gt;</span> and <span className='bg-neutral-800 px-2 rounded-lg'>&lt;sup&gt;</span> are mainly used in formulas, footnotes, or chemical notations.
					</div>
				</motion.div>

				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='5'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='7'>
						<button className='bg-transparent border border-[#e34c26] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
