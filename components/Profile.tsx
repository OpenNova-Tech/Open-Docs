'use client'

import Image from 'next/image'
import Link from 'next/link'
import { JSX } from 'react'
import { motion } from 'framer-motion'

type SocialLink = {
	icon: JSX.Element
	url: string
}

interface ProfileCardProps {
	name: string
	username: string
	message: string
	image: string
	gradientFrom: string
	gradientTo: string
	socials: SocialLink[]
}


export default function ProfileCard({
	name,
	username,
	message,
	image,
	gradientFrom,
	gradientTo,
	socials
}: ProfileCardProps) {
	return (
		<div className='flex items-center justify-center min-h-screen bg-black'>
			<div
				className='relative w-[370px] h-[470px] rounded-3xl  shadow-xl flex flex-col items-center justify-start pt-6'
				style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
			>
				<Image
					src={image}
					alt={name}
					width={290}
					height={290}
					className='absolute -top-20 left-1/2 -translate-x-1/2 z-0 object-contain'
				/>
				<div className='flex-grow' />
				<div className='w-full bg-[#222] px-6 z-10 py-4 rounded-b-3xl'>
					<h2 className='text-white text-lg font-semibold'>{name}</h2>
					<p className='text-indigo-400 text-sm'>@{username}</p>
					<p className='text-xs mt-2 text-gray-400'>{message}</p>
				</div>
				<div className='absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 flex flex-col gap-4'>
					{socials.map((social, idx) => (
						<Link href={social.url} target='_blank' key={idx}>
							<motion.div
								whileHover={{ x: 6 }}
								transition={{ type: 'spring', stiffness: 300 }}
								className='w-12 h-12 bg-[#222] flex items-center justify-center rounded'
							>
								{social.icon}
							</motion.div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
