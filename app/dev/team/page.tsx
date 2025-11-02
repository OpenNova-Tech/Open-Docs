'use client'

import ProfileCard from '@/components/Profile'
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'

export default function Page() {
  return (
    <div className='bg-black'>
      <div className='max-w-3xl mx-auto pt-40 text-center space-y-4'>
        <h2 className='text-3xl font-bold text-indigo-400'>Meet the Team Behind OpenDocs</h2>
        <p className='text-gray-300 text-lg'>
          The OpenDocs project is powered by a small but passionate team of developers, writers, and open-source enthusiasts from <strong>OpenNova Tech</strong>.
        </p>
        <p className='text-sm text-gray-500 italic'>
          From frontend frameworks to backend stacks — if it&apos;s worth learning, it&apos;s worth documenting right.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 bg-black p-10 '>
        <ProfileCard
          name='Anurag Bhattacharjee'
          username='Founder'
          message='Yea I made this. To thank me follow on Tinder.'
          image='/private/pichar-removebg.png'
          gradientFrom='black'
          gradientTo='#6633ff'
          socials={[
            {
              icon: <IconBrandGithub className='text-white w-6 h-6' />,
              url: 'https://github.com/DarkmodeWorking'
            },
            {
              icon: <IconBrandInstagram className='text-pink-400 w-6 h-6' />,
              url: 'https://www.instagram.com/_.hamsen._/'
            },
            {
              icon: <IconBrandLinkedin className='text-blue-400 w-6 h-6' />,
              url: 'https://www.linkedin.com/in/anurag-bhattacharjee-65a487275/'
            },
            {
              icon: <IconBrandX className='text-teal-400 w-6 h-6' />,
              url: 'https://x.com/hammydoestweet8'
            }
          ]}
        />
      </div>
    </div>
  )
}