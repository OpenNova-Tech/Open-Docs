'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code1 = `echo "Hello, World!"`

	const code2 = `#!/bin/bash
# This is a comment
echo "Hello from Shell!"`

	const code3 = `bash hello.sh`

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
						What is Shell ?
					</h1>
				</motion.header>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>1.1</b> What is Shell
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>Shell</b> is the <b>command-line interpreter</b> and scripting language for operating systems like Linux, Unix, and macOS. It allows users to communicate with the computer by typing commands, running programs, and automating tasks through scripts. <br />
						<br />
						Think of it this way: <br />
						<b>•</b> <b>Kernel (OS)</b> → The brain of your computer. <br />
						<b>•</b> <b>Shell</b> → The messenger that takes your commands to the brain and brings back results.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>1.2</b> Why learn Shell ?
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>•</b> Directly interact with your system without a GUI. <br />
						<b>•</b> Automate repetitive tasks using scripts. <br />
						<b>•</b> Manage files, processes, and system resources efficiently. <br />
						<b>•</b> Useful for system administration, DevOps, and development environments. <br />
						<b>•</b> Works across almost all Unix/Linux systems.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>1.3</b>  What can Shell do ?
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>•</b> Navigate the file system (<span className='bg-neutral-800 px-2 rounded-lg'>cd</span>, <span className='bg-neutral-800 px-2 rounded-lg'>ls</span>, <span className='bg-neutral-800 px-2 rounded-lg'>pwd</span>). <br />
						<b>•</b> Create, copy, move, and delete files (<span className='bg-neutral-800 px-2 rounded-lg'>mkdir</span>, <span className='bg-neutral-800 px-2 rounded-lg'>cp</span>, <span className='bg-neutral-800 px-2 rounded-lg'>mv</span>, <span className='bg-neutral-800 px-2 rounded-lg'>rm</span>). <br />
						<b>•</b> Run scripts to automate tasks. <br />
						<b>•</b> Monitor processes (<span className='bg-neutral-800 px-2 rounded-lg'>ps</span>, <span className='bg-neutral-800 px-2 rounded-lg'>top</span>) and system performance. <br />
						<b>•</b> Handle text and data processing (<span className='bg-neutral-800 px-2 rounded-lg'>grep</span>, <span className='bg-neutral-800 px-2 rounded-lg'>awk</span>, <span className='bg-neutral-800 px-2 rounded-lg'>sed</span>, <span className='bg-neutral-800 px-2 rounded-lg'>sort</span>). <br />
						<b>•</b> Schedule recurring tasks using cron jobs.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>1.4</b> First Shell Command
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Open your terminal and try a simple command: <br />
						<CodeBlock language="shell" filename="bash" code={code1} />
						<br />
						👉 This prints <span className='bg-neutral-800 px-2 rounded-lg'>Hello, World!</span> on your terminal. <br />
						<br />
						Shell scripts are just a series of such commands saved in a file. Example of a simple script (<span className='bg-neutral-800 px-2 rounded-lg'>hello.sh</span>):
						<br />
						<CodeBlock language="shell" filename="hello.sh" code={code2} />
						<br />
						Run it using: 
						<CodeBlock language="shell" filename="bash" code={code3} />
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>1.5</b> How Shell Fits in System Interaction
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>•</b> <b>User</b> → Types commands in terminal. <br />
						<b>•</b> <b>Shell</b> → Interprets commands and communicates with the OS. <br />
						<b>•</b> <b>OS Kernel</b> → Executes the commands and returns results. <br />
						<br />
						Without the shell, interacting with the system would be much slower and less flexible.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>1.6</b> Fun Facts
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>•</b> The <b>first Unix shell</b> was the <b>Thompson shell</b> (1971). <br />
						<b>•</b> <b>Bash</b> (Bourne Again Shell) is the most widely used shell today. <br />
						<b>•</b> Shell scripting is older than most modern programming languages!
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03,  }}
					className='shadow-[#89e051] border border-[#89e051]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#89e051]'>1.7</b> Key Takeaways
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<b>•</b> Shell is a <b>command-line interface and scripting tool</b>. <br />
						<b>•</b> It acts as a <b>bridge between the user and the OS</b>. <br />
						<b>•</b> You can <b>execute commands, automate tasks, and manage the system</b> efficiently. <br />
						<b>•</b> <b>Bash</b> is the most popular shell; others include sh, zsh, csh, ksh. <br />
						<b>•</b> Learning Shell is essential for <b>system administration, automation, and programming workflows</b>.
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
					<Link href='2'>
						<button className='bg-transparent border border-[#89e051] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
