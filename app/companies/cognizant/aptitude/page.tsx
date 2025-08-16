'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BlockMath } from "react-katex";

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
					<h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-indigo-500 bg-black'>
						Aptitude
					</h1>
				</motion.header>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>1</b> Numbers
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						What is the least number by which 16,800 must be divided to get a number perfect square? <br />
						<br />
						A. 21 <br />
						B. 42 <br />
						C. 24 <br />
						D. 40
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>2</b> Numbers
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						What is the least number by which 16,800 must be subtracted to get a number perfect square? <br />
						<br />
						A. 169 <br />
						B. 219 <br />
						C. 159 <br />
						D. 249
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>3</b> Numbers
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						What is the least perfect square, which is divisible by 24, 30 and 60? <br />
						<br />
						A. 1600 <br />
						B. 3600 <br />
						C. 14400 <br />
						D. 32400
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>4</b> Numbers
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						The value of &nbsp; (<sup>1</sup>&frasl;<sub>512</sub>)<sup>1/9</sup> <br />
						<br />
						A. <sup>1</sup>&frasl;<sub>2</sub> <br />
						B. <sup>1</sup>&frasl;<sub>3</sub> <br />
						C. <sup>1</sup>&frasl;<sub>4</sub> <br />
						D. <sup>1</sup>&frasl;<sub>6</sub>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>5</b> Numbers
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						If 
						<BlockMath math="\frac{2^{228}}{2n} = 512" />
						then find the value of n <br />
						<br />
						A. 219 <br />
						B. 218 <br />
						C. 237 <br />
						D. None of the above
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>6</b> Sequence & Series
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Find the next number in the series <br />
						Series: 3, 7, 13, 21, 31, ? <br />
						<br />
						A. 43 <br />
						B. 33 <br />
						C. 41 <br />
						D. 45
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>7</b> Sequence & Series
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Find the next number in the series <br />
						Series: 10, 14, 23, 39, 64, ? <br />
						<br />
						A. 100 <br />
						B. 125 <br />
						C. 128 <br />
						D. 148
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>8</b> Odd One Out
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Find the odd one out <br />
						<br />
						A. HIKJ <br />
						B. KLNM <br />
						C. STVU <br />
						D. RSTU
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>9</b> Sequence & Series
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Find the next number in the series <br />
						Series: 2, 5, 26, ? <br />
						<br />
						A. 152 <br />
						B. 677 <br />
						C. 50 <br />
						D. 47
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>10</b> Sequence & Series
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Find the next number in the series <br />
						Series: 2, 3, 7, 8, 13, 14, ? <br />
						<br />
						A. 15 <br />
						B. 16 <br />
						C. 20 <br />
						D. 17
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>11</b> Coding & Decoding
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						If COMPUTER is coded as GKQLYPIN, what is the code for SENATE? <br />
						<br />
						A. WARWXQ <br />
						B. WAPWXA <br />
						C. WARWXA <br />
						D. WARWPA
					</div>
				</motion.div>

				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='1'>
						<button className='bg-transparent border border-indigo-500 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='2'>
						<button className='bg-transparent border border-indigo-500 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
