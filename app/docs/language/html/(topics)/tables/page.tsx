'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { HTML_TOPICS } from '@/lib/private/htmlTopics'
import { CodeBlock } from '@/components/ui/code-block'

export default function Page() {
	const pathname = usePathname()
	const slug = pathname.split('/').filter(Boolean).pop()

	const sectionIndex = HTML_TOPICS.indexOf(slug || '')
	const sectionNumber = sectionIndex >= 0 ? sectionIndex + 1 : 1

	const num = (sub: number) => `${sectionNumber}.${sub}`

	const code1 = `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>`

	const code2 = `<table>
  <thead>
    <tr><th>Name</th></tr>
  </thead>
  <tbody>
    <tr><td>John</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td></tr>
  </tfoot>
</table>`

	const code3 = `<table border="1">`

	const code4 = `table {
  border-collapse: collapse;
}
td, th {
  border: 1px solid black;
}`

	const code5 = `<td colspan="2">Merged Columns</td>`

	const code6 = `<td rowspan="2">Merged Rows</td>`

	const code7 = `<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Details</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>USA</td>
  </tr>
</table>`

	const code8 = `<table>
  <caption>User Data</caption>
</table>`

// 	const code9 = `.table-container {
//   overflow-x: auto;
// }`

// 	const code10 = `<a href="mailto:example@email.com">Send Email</a>`

// 	const code11 = `<a href="tel:+1234567890">Call Now</a>`

// 	const code12 = `<a href="#section1">Go to Section 1</a>

// <h2 id="section1">Section 1</h2>`

// 	const code13 = `<img src="image.jpg" alt="Description">`

// 	const code14 = `<img src="images/photo.jpg" alt="Photo">`

// 	const code15 = `<img src="https://example.com/photo.jpg" alt="Photo">`

// 	const code16 = `<img src="/assets/photo.jpg" alt="Photo">`

// 	const code17 = `<img src="logo.png" alt="Company Logo">`

// 	const code18 = `<img src="photo.jpg" alt="Photo" width="300" height="200">`

// 	const code19 = `<a href="index.html">
//   <img src="logo.png" alt="Home">
// </a>`

// 	const code20 = `<img src="photo.jpg" alt="Photo" loading="lazy">`



	return (
		<main className='pt-32 bg-black py-12 px-6'>
			<div className='max-w-4xl mx-auto space-y-12'>
				<motion.header
					className='text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#e34c26] bg-black'>
						Tables
					</h1>
				</motion.header>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(1)}</b> What are Tables
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>HTML Tables</b> are used to represent structured data in a grid format consisting of rows and columns. <br />
						<br />
						They are designed for <b>tabular data</b>, such as: <br />
						<b>•</b> Schedules <br />
						<b>•</b> Financial reports <br />
						<b>•</b> Scoreboards <br />
						<b>•</b> Data comparisons <br />
						<br />
						Tables organize information logically, making it easier to read and analyze relationships between data points.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(2)}</b> Subtle Information
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>•</b> Tables are meant for <b>data</b>, not layout (older websites misused them). <br />
						<b>•</b> Browsers render tables differently compared to normal block elements. <br />
						<b>•</b> Tables have their own internal layout algorithm. <br />
						<b>•</b> Accessibility depends heavily on proper table structure. <br />
						<b>•</b> Tables can become complex very quickly with nesting and spanning. <br />
						<b>•</b> Screen readers rely on headers (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;th&gt;</span>) for context. <br />
						<br />
						Hidden Truth: <br />
						Tables look simple — but complex tables are one of the hardest HTML structures to master.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(3)}</b> Basic Table Structure
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						A simple table: <br />
						<CodeBlock language='html' filename='html' code={code1} /> <br />
						<b>Components:</b> <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;table&gt;</span> → Container <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;tr&gt;</span> → Table Row <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;th&gt;</span> → Header Cell <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;td&gt;</span> → Data Cell
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(4)}</b> Table Elements Explained
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<span className='bg-neutral-800 px-2 rounded-lg'>&lt;table&gt;</span> <br />
						<b>•</b> Root container for the table. <br />
						<br />
						<span className='bg-neutral-800 px-2 rounded-lg'>&lt;tr&gt;</span> <b>(Table Row)</b> <br />
						<b>•</b> Defines a row in the table. <br />
						<br />
						<span className='bg-neutral-800 px-2 rounded-lg'>&lt;th&gt;</span> <b>(Table Header)</b> <br />
						<b>•</b> Represents header cells. <br />
						<b>•</b> Bold and centered by default. <br />
						<b>•</b> Provides semantic meaning. <br />
						<br />
						<span className='bg-neutral-800 px-2 rounded-lg'>&lt;td&gt;</span> <b>(Table Data)</b> <br />
						<b>•</b> Represents standard data cells.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(5)}</b> Table Sections
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						HTML provides semantic grouping for tables: <br />
						<CodeBlock language='html' filename='html' code={code2} /> <br />
						<b>Elements:</b> <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;thead&gt;</span> → Header section <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;tbody&gt;</span> → Main data <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&lt;tfoot&gt;</span> → Footer (totals, summaries) <br />
						<br />
						Benefits: <br />
						<b>•</b> Improves readability <br />
						<b>•</b> Helps screen readers <br />
						<b>•</b> Enables better styling and scripting
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(6)}</b> Table Attributes (Legacy vs Modern)
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Older HTML used attributes like: <br />
						<CodeBlock language='html' filename='html' code={code3} /> <br />
						These are <b>deprecated</b>. <br />
						<br />
						Modern approach: <br />
						Use CSS for styling. <br />
						<br />
						Example: <br />
						<CodeBlock language='css' filename='css' code={code4} />
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(7)}</b> Merging Cells (colspan & rowspan)
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<span className='bg-neutral-800 px-2 rounded-lg'>colspan</span>
						<CodeBlock language='html' filename='html' code={code5} /> <br />
						Merges columns horizontally. <br />
						<br />
						<span className='bg-neutral-800 px-2 rounded-lg'>rowspan</span>
						<CodeBlock language='html' filename='html' code={code6} /> <br />
						Merges rows vertically. <br />
						<br />
						<b>Example:</b> <br />
						<CodeBlock language='html' filename='html' code={code7} /> <br />
						Cell spanning increases complexity significantly.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(8)}</b> Table Caption
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<CodeBlock language='html' filename='html' code={code8} /> <br />
						<b>Purpose:</b> <br />
						<b>•</b> Provides a title for the table. <br />
						<b>•</b> Improves accessibility. <br />
						<b>•</b> Helps users understand table context.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(9)}</b> Accessibility in Tables
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Best practices: <br />
						✔️ Use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;th&gt;</span> for headers <br />
						✔️ Use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;caption&gt;</span> <br />
						✔️ Use proper grouping (<span className='bg-neutral-800 px-2 rounded-lg'>&lt;thead&gt;</span>, <span className='bg-neutral-800 px-2 rounded-lg'>&lt;tbody&gt;</span>) <br />
						✔️ Maintain logical structure <br />
						<br />
						Screen readers: <br />
						<b>•</b> Use headers to interpret data relationships. <br />
						<b>•</b> Navigate row-by-row or column-by-column.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(10)}</b> Common Mistakes
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						❌ Using tables for page layout <br />
						❌ Missing <span className='bg-neutral-800 px-2 rounded-lg'>&lt;th&gt;</span> elements <br />
						❌ Overusing <span className='bg-neutral-800 px-2 rounded-lg'>rowspan</span> and <span className='bg-neutral-800 px-2 rounded-lg'>colspan</span> <br />
						❌ Not using <span className='bg-neutral-800 px-2 rounded-lg'>&lt;thead&gt;</span> / <span className='bg-neutral-800 px-2 rounded-lg'>&lt;tbody&gt;</span> <br />
						❌ Poor readability due to lack of styling <br />
						<br />
						Tables should be: <br />
						<b>•</b> Clear <br />
						<b>•</b> Logical <br />
						<b>•</b> Accessible
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(11)}</b> When to Use Tables vs Not
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>Use Tables For:</b> <br />
						✔️ Structured data <br />
						✔️ Comparisons <br />
						✔️ Reports <br />
						✔️ Data-heavy content <br />
						<br />
						<b>Avoid Tables For:</b> <br />
						❌ Layout design <br />
						❌ Navigation <br />
						❌ Styling hacks <br />
						<br />
						Use modern CSS layouts instead.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(12)}</b> Key Takeaways
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>•</b> Tables represent structured data in rows and columns. <br />
						<b>•</b> Core elements: <span className='bg-neutral-800 px-2 rounded-lg'>&lt;table&gt;</span>, <span className='bg-neutral-800 px-2 rounded-lg'>&lt;tr&gt;</span>, <span className='bg-neutral-800 px-2 rounded-lg'>&lt;th&gt;</span>, <span className='bg-neutral-800 px-2 rounded-lg'>&lt;td&gt;</span>. <br />
						<b>•</b> Use <span className='bg-neutral-800 px-2 rounded-lg'>&lt;thead&gt;</span>, <span className='bg-neutral-800 px-2 rounded-lg'>&lt;tbody&gt;</span>, <span className='bg-neutral-800 px-2 rounded-lg'>&lt;tfoot&gt;</span> for structure. <br />
						<b>•</b> Avoid deprecated attributes — use CSS. <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>colspan</span> and <span className='bg-neutral-800 px-2 rounded-lg'>rowspan</span> merge cells. <br />
						<b>•</b> Accessibility depends on proper headers. <br />
						<b>•</b> Tables are not for layout design. <br />
						<b>•</b> Responsive design requires extra handling.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#e34c26] border border-[#e34c26]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#e34c26]'>{num(13)}</b> Fun Facts 😄
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>•</b> Early websites used tables to build entire layouts. <br />
						<b>•</b> Complex tables can become harder than CSS layouts. <br />
						<b>•</b> Excel-like grids on websites are basically advanced HTML tables. <br />
						<b>•</b> Screen readers &quot;read&quot; tables like a spreadsheet. <br />
						<b>•</b> One wrong <span className='bg-neutral-800 px-2 rounded-lg'>rowspan</span> can break your entire table
					</div>
				</motion.div>
			</div>
		</main>
	)
}
