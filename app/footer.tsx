'use client'

import React from 'react'
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitch,
  IconBrandReddit,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export function Footer() {
  const socialLinks = [
    { icon: IconBrandGithub, href: 'https://github.com', color: 'text-white' },
    { icon: IconBrandInstagram, href: 'https://instagram.com', color: 'text-pink-400' },
    { icon: IconBrandLinkedin, href: 'https://linkedin.com', color: 'text-blue-500' },
    { icon: IconBrandX, href: 'https://x.com', color: 'text-teal-400' },
    { icon: IconBrandYoutube, href: 'https://youtube.com', color: 'text-red-400' },
    { icon: IconBrandDiscord, href: 'https://discord.com', color: 'text-indigo-400' },
    { icon: IconBrandTwitch, href: 'https://twitch.tv', color: 'text-purple-400' },
    { icon: IconBrandReddit, href: 'https://reddit.com', color: 'text-orange-400' },
  ]

  const sections = [
    {
      title: 'Organization',
      links: [
        { label: 'About', href: '/dev/about' },
        { label: 'Blog', href: '/dev/blog' },
        { label: 'Team', href: '/dev/team' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Community', href: '#' },
        { label: 'Forum', href: '/forum' },
        { label: 'Chat', href: '#' },
      ],
    },
    {
      title: 'Contribute',
      links: [
        { label: 'Write Docs', href: '/github' },
        { label: 'Open an Issue', href: 'https://github.com/OpenNova-Tech/Open-Docs/issues' },
        { label: 'GitHub Repository', href: 'https://github.com/OpenNova-Tech/Open-Docs/' },
      ],
    },
    {
      title: 'More',
      links: [
        // { label: 'Changelog', href: '#' },
        // { label: 'Roadmap', href: '#' },
        // { label: 'License', href: '#' },
        { label: 'Open Quantum', href: 'https://rubys-beta.vercel.app' },
      ],
    },
  ]

  return (
    <footer className='bg-black text-white pt-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 pb-20'>

        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className='text-lg font-semibold mb-2'>{section.title}</h3>
            <ul className='space-y-1 text-sm text-neutral-400'>
              {section.links.map((link) => (
                <motion.li key={link.label}>
                  <motion.a
                    href={link.href}
                    className='hover:text-indigo-400 inline-block'
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>

              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          className='hidden md:flex flex-col items-end justify-center text-xs text-neutral-500'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col items-center'>
            <span className='mb-2'>Made using</span>
            <motion.div
              className='flex gap-2'
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
                <img src='https://cdn.simpleicons.org/next.js/FFFFFF' className='h-4' />
                <img src='https://cdn.simpleicons.org/tailwindcss/06B6D4' className='h-4' />
                <img src='https://cdn.worldvectorlogo.com/logos/framer-motion.svg' className='h-4' />
                <img src='/prisma-2.svg' className='h-4' />
                <img src='/postgresql.svg' className='h-4' />
                {/* <img src='/neondb.svg' className='h-4' /> */}
                <img src='https://cdn.worldvectorlogo.com/logos/gemini-icon-logo.svg' className='h-4' />
                <img src='/razorpay.svg' className='h-4' />
                <img src='https://cdn.simpleicons.org/render/FFFFFF' className='h-4' />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className='flex items-center justify-center'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className='p-4 bg-neutral-900 rounded-3xl'>
          <div className='flex gap-4'>
            {socialLinks.map(({ icon: Icon, href, color }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -5, scale: 1.2, rotate: -5 }} 
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className='lg:w-10 lg:h-10 w-5 h-5 bg-neutral-800 rounded-full flex items-center justify-center'
              >
                <Icon size={20} className={color} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className='text-center text-neutral-500 text-xs py-6 border-t border-neutral-800 mt-8'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} OpenDocs by OpenNova. All rights reserved.
      </motion.div>
    </footer>
  )
}
