'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
// import { Button } from '@/components/ui/moving-border'
import { motion } from 'framer-motion'
// import { useRouter } from 'next/navigation'


const MotionLink = motion(Link)


export function Navbar({ className }: { className?: string }) {
  // const router = useRouter()
  return (
    <nav
      className={cn(
        'fixed inset-x-0 max-w-lg mx-auto z-50 bg-[#1f1f1f57] backdrop-blur-sm border border-white/20 rounded-full shadow-input flex items-center justify-center space-x-8 px-8 py-2',
        className
      )}
    >
      <MotionLink
        href='/'
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className='text-white cursor-pointer'
      >
        Home
      </MotionLink>
      <MotionLink
        href='/docs'
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className='text-white cursor-pointer'
      >
        Docs
      </MotionLink>
      <MotionLink
        href='/support'
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className='text-white cursor-pointer'
      >
        Support
      </MotionLink>

      
    </nav>
  )
}
