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
						Grammar Section
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
						<b className='text-indigo-500'></b> Numbers
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Total 34 questions divided into five categories. 15 mins to complete all questions. <br />
						<br />
						Verb Forms <br />
						Tenses <br />
						Articles <br />
						Prepositions <br />
						Voice Change
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
						<b className='text-indigo-500'>1</b> Fill with correct form of verbs
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						The train _____ (leave/leaves) the station at 9:00 AM. <br />
						<br />
						My friends _____ (enjoy/enjoys) going to the cinema on weekends. <br />
						<br />
						There ______ (are/is) some updates that we would like to share with you. <br />
						<br />
						He ______ (do/does) his homework before dinner. <br />
						<br />
						She ______ (study/studies) hard for her exams every night. <br />
						<br />
						The percentage of employees who got promoted this year ______ (is/are) very encouraging. <br />
						<br />
						The committee ______ (agree/agrees) to the proposed changes. <br />
						<br />
						The team ______ (practice/practices) every evening for the tournament.
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
						<b className='text-indigo-500'>2</b> Fill with appropriate tense
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						By this time tomorrow, we ______ (complete) the project. <br />
						<br />
						She ______ (go) to the gym every morning before work. <br />
						<br />
						They ______ (live) in Paris for the last five years. <br />
						<br />
						When I arrived at the party, everyone ______ (already/leave). <br />
						<br />
						I ______ (not/see) him since we graduated from university. <br />
						<br />
						He ______ (finish) his homework by the time his parents got home. <br />
						<br />
						She ______ (learn) French for three years before moving to France. <br />
						<br />
						Right now, they ______ (discuss) the proposal in the meeting room.
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
						<b className='text-indigo-500'>3</b> Fill with the correct article
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						She bought ______ laptop last week. <br />
						<br />
						They adopted ______ adorable puppy from the shelter. <br />
						<br />
						There is _______ book on the table. Can you pass it to me? <br />
						<br />
						We stayed at _______ hotel near the beach. <br />
						<br />
						______ sun is setting, and it looks beautiful. 
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
						<b className='text-indigo-500'>4</b> Fill with suitable prepositions
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						The cat is hiding ______ (on,in,under,between) the table. <br />
						<br />
						I will meet you ______ (at,in,on,by) the coffee shop at noon. <br />
						<br />
						She arrived ______ (on,in,by,at) time for the meeting. <br />
						<br />
						They have been friends _______ (since,for,at,to) 10 years. <br />
						<br />
						There is a bridge ______ (across,over,above,under) the river. <br />
						<br />
						The teacher walked ______ (through,between,across,at) the students to hand out papers.
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
						<b className='text-indigo-500'>5</b> Change to active/passive voice
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						He completed the project on time. <br />
						<br />
						She wil invite her friends to the party. <br />
						<br />
						The chef is cooking dinner for the guests. <br />
						<br />
						They will announce the results tomorrow. <br />
						<br />
						The company has launched a new product. <br />
						<br />
						They are building a new library downtown.
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
