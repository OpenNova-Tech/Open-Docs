'use client'

import React, { useState, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'
import {
	IconChevronDown,
	IconChevronUp,
} from '@tabler/icons-react'
import Link from 'next/link'

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const [openMenu, setOpenMenu] = useState<string | null>(null)
	const closeTimer = useRef<NodeJS.Timeout | null>(null)
	const pathname = usePathname()
	const router = useRouter()

	const { data: session, status } = useSession()
	const user = session?.user
	const mounted = status !== 'loading'

	if (!mounted) return null

	const toggleMenu = () => setIsOpen((prev) => !prev)
	const handleLogout = async () => await signOut({ callbackUrl: '/' })
	const topClass = pathname === '/' ? 'top-10' : 'top-5'

	const navLinksData = [
		{
			label: 'Documentations',
			children: [
				{
					title: 'Languages',
					desc: 'HTML, Python, Rust, Java',
					href: '/docs/language',
				},
				{
					title: 'Development',
					desc: 'Next.JS, Prisma, PostgreSQL',
					href: '/docs/development',
				},
				{
					title: 'Tools',
					desc: 'Git, Vite, Docker',
					href: '/docs/tools',
				},
				{
					title: 'Machine Learning',
					desc: 'Numpy, Pandas, Tensorflow',
					href: '/docs/aiml',
				},
			],
		},
		{
			label: 'Knowledge',
			children: [
				{
					title: 'Theory',
					desc: 'Computer science fundamentals',
					href: '/theory',
				},
				{
					title: 'Mathematics',
					desc: 'Mathematical foundations of computer science',
					href: '/mathematics',
				},
			],
		},
		{
			label: 'Tech Hub',
			children: [
				{
					title: 'Code-Vault',
					desc: 'DSA practice, LeetCode, and competitive programming',
					href: '/code',
				},
				{
					title: 'Agentus',
					desc: 'Agentic AI systems and autonomous workflows',
					href: '/agent',
				},
				{
					title: 'Cyberspace',
					desc: 'Cybersecurity, ethical hacking, and defense',
					href: '/cyber',
				},
				{
					title: 'La Galerie',
					desc: 'A curated space for elegant UI, UX, and visual design',
					href: '/ui',
				}
			],
		},
		{
			label: 'Contribute',
			href: '/github',
		},
	]

	return (
		<motion.header
			animate={{
				height: isOpen ? 'auto' : 'fit-content',
			}}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			className={`fixed ${topClass} left-1/2 -translate-x-1/2 z-100 text-center px-6 py-3 border border-[#333] bg-black w-[calc(100%-7rem)] rounded-2xl`}
		>
			<div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
				<Link href='/'>
					<div className="flex items-center">
						<div className="relative w-5 h-5 flex items-center justify-center">
							<span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 top-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
							<span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 left-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
							<span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 right-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
							<span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 bottom-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
						</div>
						<b className="pl-4 text-lg">OPEN DOCS</b>
					</div>
				</Link>

				<nav className="hidden sm:flex items-center space-x-6 sm:space-x-10 text-sm relative">
					{navLinksData.map((item) => {
						const isOpen = openMenu === item.label
						return (
							<div
								key={item.label}
								className="relative"
								onMouseEnter={() => {
									if (closeTimer.current) {
										clearTimeout(closeTimer.current)
									}

									// eslint-disable-next-line @typescript-eslint/no-unused-expressions
									item.children && setOpenMenu(item.label)
								}}
								onMouseLeave={() => {
									closeTimer.current = setTimeout(() => {
										setOpenMenu(null)
									}, 250) // delay in ms
								}}
							>
								{item.href ? (
									<a
										href={item.href}
										className="text-gray-300 hover:text-white transition"
									>
										{item.label}
									</a>
								) : (
									<button className="flex items-center gap-1 text-gray-300 hover:text-white transition">
										{item.label}
										{item.children &&
											(isOpen ? (
												<IconChevronUp size={16} />
											) : (
												<IconChevronDown size={16} />
											))}
									</button>
								)}
								{item.children && isOpen && (
									<div className="absolute top-full left-0 mt-3 w-[420px] rounded-xl border border-[#333] bg-black shadow-xl p-5 grid grid-cols-2 gap-4 z-50">
										{item.children.map((child) => (
											<a
												key={child.title}
												href={child.href}
												className="group block rounded-lg p-3 hover:bg-white/5 transition"
											>
												<p className="text-white font-medium">
													{child.title}
												</p>

												{child.desc && (
													<p className="text-xs text-gray-400 mt-1">
														{child.desc}
													</p>
												)}
											</a>
										))}
									</div>
								)}
							</div>
						)
					})}
				</nav>
				<div className="hidden sm:flex items-center gap-3">
					{!user ? (
						<>
							<button
								onClick={() => router.push('/login')}
								className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200"
							>
								Log In
							</button>
							<button
								onClick={() => router.push('/register')}
								className="px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200"
							>
								Sign Up
							</button>
						</>
					) : (
						<>
							<img
								src={
									user.image ||
									'https://wallpapers.com/images/hd/cartoon-developer-profile-picture-j23xefhmfofeiayv.png'
								}
								alt="Profile"
								className="w-8 h-8 rounded-full border border-gray-400"
							/>
							<button
								onClick={handleLogout}
								className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#470e0e] bg-[rgba(33,9,9,0.62)] text-red-300 rounded-full hover:border-red-100/50 hover:text-red-50 transition-colors duration-200"
							>
								Log Out
							</button>
						</>
					)}
				</div>
				<button
					className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
					onClick={toggleMenu}
					aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
				>
					{isOpen ? (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						</svg>
					) : (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					)}
				</button>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						key="mobile-nav"
						initial={{ opacity: 0, height: 0, y: -10 }}
						animate={{ opacity: 1, height: 'auto', y: 0 }}
						exit={{ opacity: 0, height: 0, y: -10 }}
						transition={{ duration: 0.25, ease: 'easeInOut' }}
						className="sm:hidden mt-4 flex flex-col w-full items-center space-y-3 text-sm border-t border-[#333] pt-3 overflow-hidden"
					>
						{navLinksData.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-gray-300 hover:text-white transition-colors duration-150"
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</a>
						))}

						{!user ? (
							<>
								<button
									onClick={() => {
										router.push('/login')
										setIsOpen(false)
									}}
									className="w-full py-2 border border-[#333] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200"
								>
									Log In
								</button>
								<button
									onClick={() => {
										router.push('/register')
										setIsOpen(false)
									}}
									className="w-full py-2 font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200"
								>
									Sign Up
								</button>
							</>
						) : (
							<button
								onClick={() => {
									handleLogout()
									setIsOpen(false)
								}}
								className="w-full py-2 border border-[#470e0e] bg-[rgba(33,9,9,0.62)] text-red-300 rounded-full hover:border-red-100/50 hover:text-red-50 transition-colors duration-200"
							>
								Log Out
							</button>
						)}
					</motion.nav>
				)}
			</AnimatePresence>
		</motion.header>
	)
}
