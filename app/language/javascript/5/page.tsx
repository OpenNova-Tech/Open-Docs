'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code7 = `let message = "Hello, World!"`

	const code8 = `let score = 10
score = 20  // allowed`

	const code9 = `const pi = 3.14
pi = 3.14159  // error`

	return (
		<main className='pt-32 dark:bg-black py-12 px-6'>
			<div className='max-w-4xl mx-auto space-y-12'>
				<motion.header
					className='text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#F1E05A] bg-black'>
						JavaScript Variables
					</h1>
				</motion.header>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#F1E05A]'>5.1</b> JavaScript Variables
					</h2>
					<div className="max-w-3xl mx-auto text-gray-300">
						A variable is a container that stores data which you can use and manipulate later. <br />
						It is to be understood as a labelled box. <br />
						<br />
						Example of Variable
						<CodeBlock language="js" filename="variable.js" code={code7} />
						Here Hello, World! is stored in a box labelled message. <br />
						<br />
						Declaration and Scope of Variables <br />
						<br />
						var <br />
						- Reassign: Yes ✅ <br />
						- Scope: Function-scoped <br />
						- Hoisting: Yes ✅ <br />
						- Best Use: Avoid (legacy code) ❌ <br />
						<br />
						let <br />
						- Reassign: Yes ✅ <br />
						- Scope: Block-scoped <br />
						- Hoisting: No ❌ <br />
						- Best Use: Use for changeable variables ✅ <br />
						<br />
						const <br />
						- Reassign: No ❌ <br />
						- Scope: Block-scoped <br />
						- Hoisting: No ❌ <br />
						- Best Use: Use when value should not change ✅ <br />
						<br />
						We generally use let and const in modern JavaScript. <br />
						<br />
						Usage of let
						<CodeBlock language="js" filename="letKeyword.js" code={code8} />  <br />
						Usage of const
						<CodeBlock language="js" filename="constKeyword.js" code={code9} />  <br />
					</div>
				</motion.div>



				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='4'>
						<button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='6'>
						<button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
