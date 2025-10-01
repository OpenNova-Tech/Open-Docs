'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function page() {
	return (
		<main className='pt-32 dark:bg-black py-12 px-6'>
			<div className='max-w-4xl mx-auto space-y-12'>
				<motion.header
					className='text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#89e051] bg-black'>
						History of Shell
					</h1>
				</motion.header>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>2.1</b> History of Shell
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						The concept of the <b>shell</b> dates back to the early days of <b>Unix</b> in the 1970s. The shell was designed as a <b>command-line interface</b> for users to interact with the operating system, providing a way to run commands, manage files, and write scripts. <br />
						<br />
						It has since evolved into multiple variants, each improving usability, performance, and scripting capabilities.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>2.2</b> Early Shells
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <b>Thompson Shell (sh)</b> – Introduced in <b>1971</b>, the very first Unix shell, created by Ken Thompson. <br />
						• <b>Mashey Shell</b> – Focused on adding features for programming-like constructs. <br />
						• <b>Bourne Shell (sh)</b> – Released in <b>1979</b> by Stephen Bourne at Bell Labs. It became the standard shell for Unix systems and introduced powerful scripting features.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>2.3</b> Evolution of Shells
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <b>C Shell (csh)</b> – Introduced in the late 1970s by Bill Joy; syntax similar to the C programming language, popular among programmers. <br />
						• <b>Korn Shell (ksh)</b> – Developed in the early 1980s by David Korn at AT&T; combined features of Bourne and C shells. <br />
						• <b>Bash (Bourne Again Shell) </b> – Released in 1989 as part of the GNU Project. It is now the <b>default shell</b> on most Linux systems and macOS. <br />
						• <b>Z Shell (zsh)</b> – Known for advanced features like auto-completion, themes, and plugins, widely used by developers today.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>2.4</b> Why Bash became popular
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Fully compatible with Bourne Shell (sh). <br />
						• Added powerful scripting improvements. <br />
						• Became the default on Linux and macOS. <br />
						• Huge community support and documentation.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>2.5</b> Key Takeaways
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• The <b>first shell</b> was the <b>Thompson Shell</b> in 1971. <br />
						• <b>Bourne Shell</b> set the standard for scripting and became widely adopted. <br />
						• <b>C Shell, Korn Shell, and Bash</b> further expanded functionality. <br />
						• <b>Bash</b> is the most widely used today, with <b>Zsh</b> being popular for developers. <br />
						• Shell history reflects the evolution of <b>Unix and Linux systems</b>.
					</div>
				</motion.div>

				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='1'>
						<button className='bg-transparent border border-[#89e051] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='3'>
						<button className='bg-transparent border border-[#89e051] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
