'use client'

import { BackgroundPaths } from '@/components/ui/background-paths'
import { OpenSource } from '@/components/open-source'
import { WorldMap } from '@/components/ui/world-map'
import { motion } from 'motion/react'
import { StickyBanner } from '@/components/ui/sticky-banner'

export default function Home() {
	return (
		<main className='bg-black'>

			<StickyBanner className='bg-gradient-to-b from-indigo-500 to-indigo-600'>
				<p className='mx-0 max-w-[90%] text-white drop-shadow-md'>
					Want learn about future of Technology into the Quantum Realm.{' '}
					<a href='https://rubys-beta.vercel.app' className='transition duration-200 hover:underline'>
						Open Quantum in development see beta.
					</a>
				</p>
			</StickyBanner>

			<div className='relative h-[40rem] md:h-screen pt-40 md:pb-40 bg-black w-full'>
				<div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 pointer-events-none'>
					<p className='font-bold text-xl md:text-4xl text-white'>
						Open{' '}
						<span className='text-neutral-200'>
							{'Docs'.split('').map((word, idx) => (
								<motion.span
									key={idx}
									className='inline-block'
									initial={{ x: -10, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: idx * 0.04 }}
								>
									{word}
								</motion.span>
							))}
						</span>
					</p>
					<p className='text-sm md:text-lg text-neutral-300 max-w-2xl py-4'>
						Building the coolest documentation website for programming, languages, frameworks, libraries, tools and systems.
					</p>
				</div>

				<div className='mx-auto max-w-6xl z-0 relative'>
					<WorldMap
						dots={[
							{
								start: { lat: 64.2008, lng: -149.4937 }, // Alaska
								end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
							},
							{
								start: { lat: 64.2008, lng: -149.4937 },
								end: { lat: -15.7975, lng: -47.8919 }, // Brasília
							},
							{
								start: { lat: -15.7975, lng: -47.8919 },
								end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
							},
							{
								start: { lat: 51.5074, lng: -0.1278 }, // London
								end: { lat: 28.6139, lng: 77.209 }, // New Delhi
							},
							{
								start: { lat: 28.6139, lng: 77.209 },
								end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
							},
							{
								start: { lat: 28.6139, lng: 77.209 },
								end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
							},
							{
								start: { lat: 35.6895, lng: 139.6917 }, // Tokyo
								end: { lat: 55.7558, lng: 37.6176 }, // Moscow
							},
							{
								start: { lat: 55.7558, lng: 37.6176 }, // Moscow
								end: { lat: -33.8688, lng: 151.2093 }, // Sydney
							},
							{
								start: { lat: 40.7128, lng: -74.006 }, // New York
								end: { lat: 52.52, lng: 13.405 }, // Berlin
							},
							{
								start: { lat: 52.52, lng: 13.405 }, // Berlin
								end: { lat: 1.3521, lng: 103.8198 }, // Singapore
							},
							{
								start: { lat: -33.8688, lng: 151.2093 }, // Sydney
								end: { lat: -36.8485, lng: 174.7633 }, // Auckland
							},
						]}
					/>

				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				viewport={{ once: true }}
				className="mb-36 px-10 md:mt-56 flex flex-col items-center text-center space-y-6"
			>
				<h2 className="text-xl md:text-4xl font-bold mb-20">
					Thank You for the platform for building <span className="text-indigo-400">Open Docs</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-8">
					<motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-2">
						<img src="https://ui.aceternity.com/logo.png" alt="" className='h-10 w-10 md:h-20 md:w-20' />
						<p className="text-lg mt-5 font-medium">Aceternity UI</p>
					</motion.div>

					<motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-2">
						<img src="/neondb.svg" alt="" className='h-10 w-10 md:h-20 md:w-20' />
						<p className="text-lg mt-5 font-medium">NeonDB</p>
					</motion.div>
				</div>
			</motion.div>

			<OpenSource
				repository='OpenNova-Tech/Open-Docs'
				title='Proudly open-source'
				description='Our source code is available on GitHub - feel free to read, review, or contribute to it however you want!'
				buttonText='Star on GitHub'
				defaultStats={{
					stars: 10,
					contributors: [
						{
							login: 'DarkmodeWorking',
							avatar_url: 'https://avatars.githubusercontent.com/u/12345678?v=4',
						},
					],
				}}
			/>



			<BackgroundPaths title='Want to Discover?' />

			
		</main>
	)
}
