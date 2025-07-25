'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

export default function page() {
	const table = [
		{ feature: "Type", git: "Distributed", central: "Centralized" },
		{ feature: "Offline Support", git: "✅ Yes", central: "❌ No" },
		{ feature: "Speed", git: "⚡ Fast", central: "🐢 Slower" },
		{ feature: "Collaboration", git: "Decentralized", central: "Central server bottleneck" },
		{ feature: "Merging", git: "Advanced algorithms", central: "Often manual/conflict-prone" },
	]

	const sections = [
		{
			title: "1.1 What is Git",
			content: `Git is a distributed version control system (DVCS) that lets you track changes in your codebase, collaborate with others, and manage project history efficiently.\n\nIt was created by Linus Torvalds in 2005 to support the development of the Linux kernel.`
		},
		{
			title: "1.2 Why use Git ?",
			content: `• Track every change: See what was changed, when, and by whom.\n• Work collaboratively: Multiple developers can contribute without overwriting each other's work.\n• Undo mistakes: Roll back to previous versions easily.\n• Branch with ease: Work on features in isolation, then merge them in.`
		},
		{
			title: "1.3 Git vs Traditional Version Control",
			isTable: true
		},
		{
			title: "1.4 Git in real world",
			content: `Imagine you're writing a novel with a friend:\n\n• Git keeps a record of each edit.\n• It allows both of you to write in parallel, then merge.\n• If your friend deletes a paragraph accidentally, you can recover it.`
		}
	]

	return (
		<main className='pt-32 from-white to-gray-100 dark:bg-black py-12 px-6'>
			<div className='max-w-4xl mx-auto space-y-12'>
				<motion.header
					className='text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-orange-400 bg-black'>
						What is Git ?
					</h1>
				</motion.header>

				{sections.map((section, i) => {
					const isEven = i % 2 === 0
					const slideVariant = {
						initial: { opacity: 0, x: isEven ? -50 : 50 },
						animate: { opacity: 1, x: 0 },
						transition: { duration: 0.6, delay: i * 0.1 }
					}

					return (
						<motion.section
							key={i}
							className='shadow-orange-400 rounded-2xl shadow-lg p-8 transition-transform hover:scale-[1.03] bg-black border border-orange-400/15'
							initial="initial"
							animate="animate"
							variants={slideVariant}
						>
							<h2 className='text-2xl font-bold mb-4 text-gray-100'>
								<b className='text-orange-400'>{section.title.split(" ")[0]}</b> {section.title.slice(4)}
							</h2>

							<div className='max-w-3xl mx-auto whitespace-pre-line text-gray-200'>
								{section.isTable ? (
									<Table>
										<TableHeader>
											<TableRow className="text-white">
												<TableHead>Feature</TableHead>
												<TableHead>Git</TableHead>
												<TableHead>Centralized VCS (e.g. SVN)</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{table.map((row) => (
												<TableRow key={row.feature}>
													<TableCell>{row.feature}</TableCell>
													<TableCell>{row.git}</TableCell>
													<TableCell>{row.central}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								) : (
									section.content
								)}
							</div>
						</motion.section>
					)
				})}
				<motion.div
					className="flex justify-center gap-6 pt-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href="1">
						<button
							className="bg-transparent border border-orange-400 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2"
						>
							← View Previous
						</button>
					</Link>
					<Link href="2">
						<button
							className="bg-transparent border border-orange-400 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2"
						>
							View Next →
						</button>
					</Link>
				</motion.div>

			</div>
		</main>
	)
}
