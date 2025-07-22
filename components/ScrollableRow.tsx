'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import { Feature } from '@/components/feature-section-with-hover-effects'

export function ScrollableFeatureRow({
  features,
}: {
  features: {
    title: string
    description: string
    icon: React.ReactNode
    link: string
  }[]
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-900 border border-neutral-700 hover:border-indigo-500 rounded-full p-2 shadow"
      >
        <IconArrowLeft size={18} className="text-white" />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-900 border border-neutral-700 hover:border-indigo-500 rounded-full p-2 shadow"
      >
        <IconArrowRight size={18} className="text-white" />
      </motion.button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 px-10 py-10 no-scrollbar scroll-smooth"
      >
        {features.map((feature) => (
          <Link href={feature.link} key={feature.title} className="contents">
            <Feature {...feature} />
          </Link>
        ))}
      </div>
    </div>
  )
}
