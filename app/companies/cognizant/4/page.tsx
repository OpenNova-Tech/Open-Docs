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
					<h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-indigo-500 bg-black'>
						Quantitative Aptitude
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
						<b className='text-indigo-500'>1.1</b> 
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Tarun, a bank officer, earns $ 5,500 per month and spends 40% of it on house rent and food. Out of the remaining amount, he invests 50% in share market. What amount of salary is he left with at the end of every month? <br />
						<br />
						A. $ 1,800 <br />
						B. $ 1,650 <br />
						C. $ 1,500 <br />
						D. $ 1,350
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>1.2</b> 
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						If m : n = 9 : 7 and m = p + q and n = p - q, then find (p : q) + 1 <br />
						<br />
						A. 11 <br />
						B. 7 <br />
						C. 5 <br />
						D. 9 
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>1.3</b> 
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Which of the following is the greatest prime factor of (2^8 - 9)? <br />
						<br />
						A. 117 <br />
						B. 13 <br />
						C. 19 <br />
						D. 12 
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>1.4</b> 
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Matthew covers a distance of 200 m in a certain time. If he increases his speed to four times his original speed, the time taken reduces by 30 seconds. Find the time taken to cover a distance of 400 m at the original speed. <br />
						<br />
						A. 72 seconds <br />
						B. 88 seconds <br />
						C. 80 seconds <br />
						D. 78 seconds 
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>1.5</b> 
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						After getting two equal successive discount percentage over a marked price of $ 5000, a customer has to pay $ 4232. What is the rate of each successive discounts. <br />
						<br />
						A. 6 % <br />
						B. 12 % <br />
						C. 8 % <br />
						D. 10 % 
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>1.6</b> 
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Allen, Ben and Carl together take 60 hours to complete a certain amount of work, while Allen, Ben and David together take 72 hours. Allen, Carl and David together take 84 hours and Ben, Carl and David together take 48 hours to complete the same amount of work. Who is the second fastest worker? <br />
						<br />
						A. 117 <br />
						B. 13 <br />
						C. 19 <br />
						D. 12 
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>1.7</b> 
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						In a certain month, the total income of Adam, Bruce and Charles is $ 24,000. In that month, Adam spends 75% of his income, Bruce spends 60% of his income, and Charles spends 72% of his income. The sum of expenditures of all three in that month is $ 16,800. If the ratio of the amounts saved by Adam, Bruce and Charles is 5 : 6 : 7, then find the income of Adam in the month. <br />
						<br />
						A. $ 10000 <br />
						B. $ 9000 <br />
						C. $ 6000 <br />
						D. $ 8000 
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>1.8</b> 
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Jacob invests $ 340,000 in a savings bank account at the rate of x % compounded quarterly in January 2020. If the total amount received by Jacob in Marc 2021 is $ 357,343 then find x. <br />
						<br />
						A. 20 % <br />
						B. 12 % <br />
						C. 8 % <br />
						D. 4 %
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>1.9</b> 
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						An amount of $ 7800 is divided among Susan, Pamela and Katie. THe sum of the shares of Pamela and Katie is equal to thrice the share of Susan. The sum of shares of Susan and Katie is equal to two-third the share of Pamela. Find the difference between the share of Susan and Pamela. <br />
						<br />
						A. $ 3880 <br />
						B. $ 2730 <br />
						C. $ 2820 <br />
						D. $ 2360
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-indigo-500 border border-indigo-500/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-indigo-500'>1.10</b> 
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						If any one-digit number is selected and it is multiplied with itself four times, then the probability that the unit digit of the resulting number will be 1 or 6 is ____. <br />
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
