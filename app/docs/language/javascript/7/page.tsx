'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
	Table,
	TableBody,
	// TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	// TableFooter
} from "@/components/ui/table"
import { CodeBlock } from '@/components/ui/code-block'

const arithmatic = [
	{ operator: "+", description: "Addition", example: "10 + 5", result: "15" },
	{ operator: "-", description: "Subtraction", example: "10 - 5", result: "5" },
	{ operator: "*", description: "Multiplication", example: "10 * 5", result: "50" },
	{ operator: "/", description: "Division", example: "10 / 5", result: "2" },
	{ operator: "%", description: "Modulus (Remainder)", example: "10 % 3", result: "1" },
	{ operator: "**", description: "Exponentiation", example: "2 ** 3", result: "8" },
]
const assignment = [
	{ operator: "=", description: "Assignment", example: "x = 10", result: "x = 10" },
	{ operator: "+=", description: "Add and Assign", example: "x += 2", result: "x = x + 2" },
	{ operator: "-=", description: "Subtract and Assign", example: "x -= 3", result: "x = x - 3" },
	{ operator: "*=", description: "Multiply and Assign", example: "x *= 2", result: "x = x * 2" },
	{ operator: "/=", description: "Divide and Assign", example: "x /= 2", result: "x = x / 2" },
]

const comparision = [
	{ operator: "==", description: "Equal (lose)", example: "5 == '5'", result: "true" },
	{ operator: "===", description: "Equal (strict)", example: "5 === '5'", result: "false" },
	{ operator: "!=", description: "Not Equal (loose)", example: "5 != '5'", result: "false" },
	{ operator: "!==", description: "Not Equal (strict)", example: "5 !== '5'", result: "true" },
	{ operator: ">", description: "Greater than", example: "5 > 3", result: "true" },
	{ operator: "<", description: "Less than", example: "3 < 5", result: "true" },
	{ operator: ">=", description: "Greater than or equal to", example: "5 >= 5", result: "true" },
	{ operator: "<=", description: "Less than or equal to", example: "4 <= 5", result: "true" },
]

const logical = [
	{ operator: "&&", description: "AND", example: "true && false", result: "false" },
	{ operator: "||", description: "OR", example: "true || false", result: "true" },
	{ operator: "!", description: "NOT", example: "!true", result: "false" },
]

export default function page() {
	const code12 = `let a = 10
let b = 3
console.log("Addition:", a + b)
console.log("Modulo:", a % b)
console.log("Power:", a ** b)`

	const code13 = `let score = 20
score += 5
console.log("Score after bonus:", score)`

	const code14 = `console.log(10 > 5)       // true
console.log(10 === "10")  // false
console.log(10 == "10")   // true`

	const code15 = `let isLoggedIn = true
let hasPremium = false
console.log(isLoggedIn && hasPremium)  // false
console.log(isLoggedIn || hasPremium)  // true
console.log(!isLoggedIn)               // false`

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
						Operators in JavaScript
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
						<b className='text-[#F1E05A]'>7.1</b> Operators and Expressions in JavaScript
					</h2>
					<div className="max-w-3xl mx-auto text-gray-300">
						Expression is any valid unit of code that evaluates to a value <br />
						<br />
						3 + 5 = 8 <br />
						&quot;Hello&quot; + &quot;World&quot; = &quot;HelloWorld&quot; <br />
						true && false = false <br />
						<br />
						We write expressions using operators and values <br />
						<br />
						Arithmatic Operators - Used for mathematical operations <br />
						<br />
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Operator</TableHead>
									<TableHead>Description</TableHead>
									<TableHead>Example</TableHead>
									<TableHead>Result</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{arithmatic.map((content) => (
									<TableRow key={content.operator}>
										<TableCell>{content.operator}</TableCell>
										<TableCell>{content.description}</TableCell>
										<TableCell>{content.example}</TableCell>
										<TableCell>{content.result}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<br />
						Arithmatic Operators in code
						<CodeBlock language="js" filename="arithmatic.js" code={code12} />
						<br />
						Assignment Operators - Used to assign values to variables <br />
						<br />
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Operator</TableHead>
									<TableHead>Description</TableHead>
									<TableHead>Example</TableHead>
									<TableHead>Result</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{assignment.map((content) => (
									<TableRow key={content.operator}>
										<TableCell>{content.operator}</TableCell>
										<TableCell>{content.description}</TableCell>
										<TableCell>{content.example}</TableCell>
										<TableCell>{content.result}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<br />
						Assignment Operators in code
						<CodeBlock language="js" filename="assignment.js" code={code13} /> <br />
						<br />
						Comparision Operators - Used to compare values then return true or false <br />
						<br />
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Operator</TableHead>
									<TableHead>Description</TableHead>
									<TableHead>Example</TableHead>
									<TableHead>Result</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{comparision.map((content) => (
									<TableRow key={content.operator}>
										<TableCell>{content.operator}</TableCell>
										<TableCell>{content.description}</TableCell>
										<TableCell>{content.example}</TableCell>
										<TableCell>{content.result}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<br />
						Comparision Operators in code
						<CodeBlock language="js" filename="comparision.js" code={code14} /> <br />
						<br />
						Logical Operators - Used to combine conditions
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Operator</TableHead>
									<TableHead>Description</TableHead>
									<TableHead>Example</TableHead>
									<TableHead>Result</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{logical.map((content) => (
									<TableRow key={content.operator}>
										<TableCell>{content.operator}</TableCell>
										<TableCell>{content.description}</TableCell>
										<TableCell>{content.example}</TableCell>
										<TableCell>{content.result}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<br />
						Logical Operators in code
						<CodeBlock language="js" filename="logical.js" code={code15} /> <br />
						<br />
					</div>
				</motion.div>



				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='6'>
						<button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='8'>
						<button className='bg-transparent border border-[#F1E05A] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
