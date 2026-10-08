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

	const code1 = `<tag attribute="value">Content</tag>`

	const code2 = `<p class="intro">Hello World</p>`

	const code3 = `<div id="header"></div>`

	const code4 = `<p class="text highlight"></p>`

	const code5 = `<p style="color: red;">Text</p>`

	const code6 = `<p title="Tooltip text">Hover me</p>`

	const code7 = `<div hidden></div>`

	const code8 = `<h1 id="main-title">Welcome</h1>`

	const code9 = `#main-title {
  color: blue;
}`

	const code10 = `document.getElementById("main-title")`

	const code11 = `<a href="#main-title">Go to Title</a>`

	const code12 = `<p class="card">Text</p>
<p class="card">Another</p>`

	const code13 = `.card {
  border: 1px solid black;
}`

	const code14 = `<div class="card active large"></div>`

	const code15 = `<div data-user-id="42" data-role="admin"></div>`

	const code16 = `element.dataset.userId
element.dataset.role`

	const code17 = `<input type="text" required>`

	const code18 = `<input type="text" required="required">`

	const code19 = `<p title="Hello"></p>`

	const code20 = `<a href="https://example.com"></a>`

	const code21 = `<img width="300">`

	const code22 = `<input required>`

	const code23 = `class="box"`

	const code24 = `class=box`

	const code25 = `<img src="image.jpg" alt="Photo" width="300">`

	const code26 = `<div user="123"></div>`

	const code27 = `<div data-user="123"></div>`

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
						Attributes
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
						<b className='text-[#e34c26]'>{num(1)}</b> What are HTML Attributes
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>HTML Attributes</b> are additional properties added to HTML elements to provide extra information, configuration, or behavior. <br />
						<br />
						They are always written inside the opening tag and follow this structure: <br />
						<CodeBlock language='html' filename='html' code={code1} /> <br />
						Example: <br />
						<CodeBlock language='html' filename='html' code={code2} /> <br />
						Here: <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>class</span> is the attribute <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>&quot;intro&quot;</span> is its value <br />
						<br />
						Attributes enhance elements by: <br />
						<b>•</b> Adding identification <br />
						<b>•</b> Enabling styling (CSS) <br />
						<b>•</b> Enabling scripting (JavaScript) <br />
						<b>•</b> Providing metadata
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
						<b>•</b> Attributes do not change structure — they modify behavior. <br />
						<b>•</b> Some attributes are <b>global</b> (usable everywhere). <br />
						<b>•</b> Some are <b>element-specific</b>. <br />
						<b>•</b> Attribute values are usually strings, even for numbers. <br />
						<b>•</b> Order of attributes does not matter. <br />
						<b>•</b> Duplicate attributes on the same element are invalid. <br />
						<b>•</b> Boolean attributes don&apos;t require values. <br />
						<br />
						Hidden Truth: <br />
						HTML without attributes is structure — attributes make it usable.
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
						<b className='text-[#e34c26]'>{num(3)}</b> Global Attributes
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Global attributes can be used on almost all HTML elements. <br />
						<br />
						<b>Common Global Attributes:</b> <br />
						<br />
						<span className='bg-neutral-800 px-2 rounded-lg'>id</span> <br />
						<CodeBlock language='html' filename='html' code={code3} /> 
						<b>•</b> Unique identifier <br />
						<b>•</b> Used for: <br />
						&nbsp;&nbsp;&nbsp; <b>•</b> CSS styling <br />
						&nbsp;&nbsp;&nbsp; <b>•</b> JavaScript targeting <br />
						&nbsp;&nbsp;&nbsp; <b>•</b> Anchor links <br />
						<b>Rule</b>: Must be unique in the entire document. <br />
						<br />
						<span className='bg-neutral-800 px-2 rounded-lg'>class</span> <br />
						<CodeBlock language='html' filename='html' code={code4} /> 
						<b>•</b> Reusable identifier <br />
						<b>•</b> Multiple elements can share the same class <br />
						<b>•</b> Used primarily for CSS and JS <br />
						Difference: <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>id</span> → unique <br />
						<b>•</b> <span className='bg-neutral-800 px-2 rounded-lg'>class</span> → reusable <br />
						<br />
						<span className='bg-neutral-800 px-2 rounded-lg'>style</span> <br />
						<CodeBlock language='html' filename='html' code={code5} /> 
						<b>•</b> Inline CSS <br />
						<b>•</b> Not recommended for large projects <br />
						<br />
						<span className='bg-neutral-800 px-2 rounded-lg'>title</span> <br />
						<CodeBlock language='html' filename='html' code={code6} /> 
						<b>•</b> Displays tooltip on hover <br />
						<br />
						<span className='bg-neutral-800 px-2 rounded-lg'>hidden</span> <br />
						<CodeBlock language='html' filename='html' code={code7} /> 
						<b>•</b> Hides element from rendering <br />
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
						<b className='text-[#e34c26]'>{num(4)}</b> The id Attribute (Deep Dive)
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>Purpose:</b> <br />
						<b>•</b> Uniquely identify an element <br />
						<br />
						Example: <br />
						<CodeBlock language='html' filename='html' code={code8} /> <br />
						<b>Use Cases:</b> <br />
						<br />
						<b>•</b> CSS: <br />
						<CodeBlock language='css' filename='css' code={code9} /> <br />
						<b>•</b> JavaScript: <br />
						<CodeBlock language='js' filename='js' code={code10} /> <br />
						<b>•</b> Anchor Linking: <br />
						<CodeBlock language='html' filename='html' code={code11} /> <br />
						<b>Rules:</b> <br />
						✔️ Must be unique <br />
						❌ Cannot start with a number (best practice) <br />
						✔️ Should be meaningful
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
						<b className='text-[#e34c26]'>{num(5)}</b> The class Attribute (Deep Dive)
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>Purpose:</b> <br />
						<b>•</b> Uniquely identify an element <br />
						<br />
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
