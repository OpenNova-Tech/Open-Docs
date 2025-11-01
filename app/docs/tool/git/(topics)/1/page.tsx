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
} from '@/components/ui/table'

export default function page() {
	const table = [
		{ feature: 'Type', git: 'Distributed', central: 'Centralized' },
		{ feature: 'Offline Support', git: '✅ Yes', central: '❌ No' },
		{ feature: 'Speed', git: '⚡ Fast', central: '🐢 Slower' },
		{ feature: 'Collaboration', git: 'Decentralized', central: 'Central server bottleneck' },
		{ feature: 'Merging', git: 'Advanced algorithms', central: 'Often manual/conflict-prone' },
	]

	return (
		<main className='pt-32 dark:bg-black py-12 px-6'>
			<div className='max-w-4xl mx-auto space-y-12'>
				<motion.header
					className='text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#F05032] bg-black'>
						What is Git ?
					</h1>
				</motion.header>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#F05032]'>1.1</b> What is Git
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Git is a distributed version control system (DVCS) that lets you track changes in your codebase, collaborate with others, and manage project history efficiently. <br /><br />
						It was created by Linus Torvalds in 2005 to support the development of the Linux kernel.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#F05032]'>1.2</b> Why use Git ?
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Track every change: See what was changed, when, and by whom. <br />
						• Work collaboratively: Multiple developers can contribute without overwriting each other&apos;s work. <br />
						• Undo mistakes: Roll back to previous versions easily. <br />
						• Branch with ease: Work on features in isolation, then merge them in.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#F05032]'>1.3</b> Git vs Traditional Version Control
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Feature</TableHead>
									<TableHead>Git</TableHead>
									<TableHead>Centralized VCS</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{table.map((content) => (
									<TableRow key={content.feature}>
										<TableCell>{content.feature}</TableCell>
										<TableCell>{content.git}</TableCell>
										<TableCell>{content.central}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#F05032] border border-[#F05032]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#F05032]'>1.4</b> Git in real world
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Imagine you are writing a novel with a friend: <br /><br />
						• Git keeps a record of each edit. <br />
						• It allows both of you to write in parallel, then merge. <br />
						• If your friend deletes a paragraph accidentally, you can recover it.
					</div>
				</motion.div>
			</div>
		</main>
	)
}
