'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationButtons({
  color = '#fff',
}: {
  color?: string
}) {
  const pathname = usePathname()
  const current = parseInt(pathname.split('/').pop() || '1', 10)

  const prev = current > 1 ? current - 1 : null
  const next = current + 1

  return (
    <motion.div
      className='flex justify-center gap-6 pt-20'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {prev && (
        <Link href={`${prev}`}>
          <button
            className={`cursor-pointer font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2`}
            style={{
              backgroundColor: 'transparent',
              border: `1px solid ${color}`,
            }}
          >
            ← View Previous
          </button>
        </Link>
      )}
      <Link href={`${next}`}>
        <button
          className={`cursor-pointer font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2`}
          style={{
            backgroundColor: 'transparent',
            border: `1px solid ${color}`,
          }}
        >
          View Next →
        </button>
      </Link>
    </motion.div>
  )
}
