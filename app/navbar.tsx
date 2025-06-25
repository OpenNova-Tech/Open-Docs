'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/moving-border'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

export function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        'fixed inset-x-0 max-w-lg mx-auto z-50 bg-[#1f1f1f57] backdrop-blur-sm border border-white/20 rounded-full shadow-input flex items-center justify-center space-x-8 px-8 py-2',
        className
      )}
    >
      <MotionLink
        href='/'
        whileHover={{ y: -4, color: '#c27aff' }}
        transition={{ type: 'spring', stiffness: 300 }}
        className='text-white cursor-pointer'
      >
        Home
      </MotionLink>
      <MotionLink
        href='/docs'
        whileHover={{ y: -4, color: '#c27aff' }}
        transition={{ type: 'spring', stiffness: 300 }}
        className='text-white cursor-pointer'
      >
        Docs
      </MotionLink>
      <MotionLink
        href='/support'
        whileHover={{ y: -4, color: '#c27aff' }}
        transition={{ type: 'spring', stiffness: 300 }}
        className='text-white cursor-pointer'
      >
        Support
      </MotionLink>

      <Button
        borderRadius='1.75rem'
        className='bg-white dark:bg-zinc-900 text-black dark:text-white border-neutral-200 dark:border-purple-950'
      >
        Login
      </Button>
    </nav>
  )
}
