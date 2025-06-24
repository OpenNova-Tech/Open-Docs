'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  title: string
  subtitle: string
  image: string
  className?: string
  readMoreLink?: string
}

export const Card = ({
  title,
  subtitle,
  image,
  className,
  readMoreLink,
}: CardProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Amplified parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ['-60px', '60px'])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      whileHover={{ scale: 1.02, y: -4 }}
      viewport={{ once: false, amount: 0.2 }}
      className={cn(
        'relative overflow-hidden rounded-[1.75rem] h-[24rem] text-white shadow-xl transition-transform backdrop-blur-md',
        className
      )}
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-white/10 z-10 pointer-events-none" />

      <div className="absolute top-5 left-5 z-20 flex flex-col">
        <p className="text-xs font-bold text-white/70">{subtitle}</p>
        <h4 className="text-lg uppercase font-semibold">{title}</h4>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 px-4 py-3 flex items-center justify-between backdrop-blur-md bg-white/10 text-white text-sm">
        <div>
          <p className="text-xs">Explore this technology.</p>
          <p className="text-xs">Learn how it powers innovation.</p>
        </div>
        <Link
          href={readMoreLink || '#'}
          className="text-sm bg-white text-black font-medium py-1 px-3 rounded-full hover:bg-neutral-200 transition"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  )
}
