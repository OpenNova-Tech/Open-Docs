'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code10 = `let str = "Oliver"      // String
let num = 42            // Number
let isStudent = true    // Boolean
let x                   // Undefined
let y = null            // Null`
	const code11 = `console.log(typeof "Oliver")    // string
console.log(typeof 10)          // number
console.log(typeof true)        // boolean
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object (weird quirk!)`

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
						Data Types in JavaScript
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
						<b className='text-[#F1E05A]'>6.1</b> Data Types in JavaScript
					</h2>
					<div className="max-w-3xl mx-auto text-gray-300">
						Primitive Data Types - These hold only single values <br />
						<br />
						- String - ( &quot;Hello&quot; , &apos;JavaScript&apos; )  <br />
						- Number - ( 10 , 3.14 , -5 )  <br />
						- Boolean - ( true , false )  <br />
						- Undefined - ( A declared variable with no value )  <br />
						- Null - ( An intentional empty value )  <br />
						- BigInt - ( Very large number )  <br />
						- Symbol - ( Unique and Immutable value )  <br />
						<br />
						Example of different Data Types
						<CodeBlock language="js" filename="dataTypes.js" code={code10} />
						<br />
						Non-Primitive (Reference) Data Types - These hold primitive values <br />
						<br />
						- Object <br />
						- Array <br />
						- Function <br />
						<br />
						To be discussed later <br />
						<br />
						The typeof Operator - to check the type of any variable <br />
						<br />
						Usage of typeof Operator:
						<CodeBlock language="js" filename="typeof.js" code={code11} />
						<br />
						Caution: null is intentional, undefined is not
					</div>
				</motion.div>



				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='5'>
						<button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='7'>
						<button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
