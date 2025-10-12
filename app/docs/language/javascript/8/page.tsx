'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {

	const code16 = `if (condition) {
  // runs if condition is true
} else if (anotherCondition) {
  // runs if anotherCondition is true
} else {
  // runs if nothing else is true
}`

	const code17 = `let age = 20
if (age < 13) {
  console.log("Child")
} else if (age < 18) {
  console.log("Teenager")
} else {
  console.log("Adult")
}`

	const code18 = `let marks = 75
if (marks >= 90 && marks <= 100) {
  console.log("Grade: A+")
} else if (marks >= 75 && marks < 90) {
  console.log("Grade: A")
} else if (marks >= 60 && marks < 75) {
  console.log("Grade: B")
} else {
  console.log("Grade: C or below")
}`

	const code19 = `let day = 3
switch (day) {
  case 1: console.log("Monday") break
  case 2: console.log("Tuesday") break
  case 3: console.log("Wednesday") break
  case 4: console.log("Thursday") break
  case 5: console.log("Friday") break
  case 6: console.log("Saturday") break
  case 7: console.log("Sunday") break
  default: console.log("Invalid day")
}`

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
						Conditionals in JavaScript
					</h1>
				</motion.header>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#F1E05A] border border-[#F1E05A]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#F1E05A]'>7.1</b> Conditionals in JavaScript
					</h2>
					<div className="max-w-3xl mx-auto text-gray-300">
						JavaScript lets our code respond differently based on user inputs, values or situations <br />
						<br />
						Suppose we get to vote at 18 <br />
						So if our age is 18 or above we are eligible else we are not <br />
						<br />
						Basic Syntax system of Conditionals
						<CodeBlock language="js" filename="conditionals.js" code={code16} /> <br />
						For example we want to build an Age Checker
						<CodeBlock language="js" filename="age.js" code={code17} /> <br />
						Conditionals Statements can also be combined with Logical Operators <br />
						<br />
						For example we want to build a Grade Assigner from obtained marks
						<CodeBlock language="js" filename="marks.js" code={code18} /> <br />
						Switch Statement - It is used when we have many exact matches to check <br />
						<br />
						For example we want to build a day in the week finder
						<CodeBlock language="js" filename="dayOfWeek.js" code={code19} />
						<br />
					</div>
				</motion.div>



				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='7'>
						<button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='9'>
						<button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
