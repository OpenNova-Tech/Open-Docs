'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CPLUSPLUS_TOPICS } from '@/lib/private/cplusplusTopics'

export default function TopicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const groupedTopics = [
    {
      header: 'Core Concepts',
      topics: [
        { slug: 'introduction', title: 'Introduction' },
        { slug: 'history', title: 'History' },
        { slug: 'setup-environment', title: 'Setup and Environment' },
        { slug: 'hello-world', title: 'Hello World' },
        { slug: 'comments', title: 'Comments' },
        { slug: 'compilation-process', title: 'Compilation Process' },
      ],
    },
    {
      header: 'Fundamental Syntax',
      topics: [
        { slug: 'input-and-output', title: 'Input and Output' },
        { slug: 'data-types-and-variables', title: 'Data Types and Variables' },
        { slug: 'constants-and-literals', title: 'Constants and Literals' },
        { slug: 'type-casting', title: 'Type Casting' },
        { slug: 'operators', title: 'Operators' },
        { slug: 'control-flow', title: 'Control Flow' },
        { slug: 'loops', title: 'Loops' },
        { slug: 'exception-handling', title: 'Exception Handling' },
      ],
    },
    {
      header: 'Functions',
      topics: [
        { slug: 'functions', title: 'Functions' },
        { slug: 'function-overloading', title: 'Function Overloading' },
        { slug: 'inline-functions', title: 'Inline Functions' },
        { slug: 'recursion', title: 'Recursion' },
      ],
    },
    {
      header: 'Memory Management',
      topics: [
        { slug: 'functions', title: 'Functions' },
        { slug: 'function-overloading', title: 'Function Overloading' },
        { slug: 'inline-functions', title: 'Inline Functions' },
        { slug: 'recursion', title: 'Recursion' },
      ],
    },
    {
      header: 'Object Oriented Programming (OOP)',
      topics: [
        { slug: 'functions', title: 'Functions' },
        { slug: 'function-overloading', title: 'Function Overloading' },
        { slug: 'inline-functions', title: 'Inline Functions' },
        { slug: 'recursion', title: 'Recursion' },
      ],
    },
  ]

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  )

  const toggleSection = (header: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [header]: !prev[header],
    }))
  }

  return (
    <div className='flex bg-black min-h-screen'>
      <aside className='w-64 hidden md:flex bg-black pt-20 text-white border-r-2 border-[#F34B7D]/50 sticky top-0 h-screen md:flex-col'>
        <div className='p-5'>
          <Link href='/docs/language/cplusplus'>
            <h2 className='text-3xl font-bold text-center text-[#F34B7D]'>
              C++
            </h2>
          </Link>
        </div>

        <div className='flex-1 overflow-y-auto p-5 sidebar-scroll'>
          {groupedTopics.map(({ header, topics }) => {
            const isOpen = openSections[header]

            return (
              <div key={header} className='mb-4'>
                <button
                  onClick={() => toggleSection(header)}
                  className='flex justify-between items-center w-full text-left text-[#F34B7D] text-lg font-semibold mb-1 border-b border-[#F34B7D]/30 pb-1 hover:text-[#f27b9f] transition cursor-pointer'
                >
                  {header}
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronRight className='w-5 h-5 text-[#F34B7D]' />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key='content'
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className='overflow-hidden'
                    >
                      <ul className='space-y-1 mt-2'>
                        {topics.map(({ slug, title }) => {
                          const href = `/docs/language/cplusplus/${slug}`
                          const active = pathname === href

                          return (
                            <li key={slug}>
                              <Link
                                href={href}
                                className={`block px-3 py-2 rounded-lg transition ${
                                  active
                                    ? 'bg-neutral-800'
                                    : 'hover:bg-neutral-700'
                                }`}
                              >
                                {title}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </aside>

      <main className='flex-1 bg-black text-white p-0 overflow-y-auto'>
        {children}

        {(() => {
          const segments = pathname.split('/').filter(Boolean)
          const currentSlug = segments[segments.length - 1]
          const basePath = '/' + segments.slice(0, -1).join('/')

          const currentIndex = CPLUSPLUS_TOPICS.indexOf(currentSlug)

          const prevSlug =
            currentIndex > 0 ? CPLUSPLUS_TOPICS[currentIndex - 1] : null

          const nextSlug =
            currentIndex >= 0 && currentIndex < CPLUSPLUS_TOPICS.length - 1
              ? CPLUSPLUS_TOPICS[currentIndex + 1]
              : null

          return (
            <motion.div
              className='flex justify-center gap-6 pt-20'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {prevSlug && (
                <Link href={`${basePath}/${prevSlug}`}>
                  <button
                    className='cursor-pointer font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid #F34B7D',
                    }}
                  >
                    ← View Previous
                  </button>
                </Link>
              )}

              {nextSlug && (
                <Link href={`${basePath}/${nextSlug}`}>
                  <button
                    className='cursor-pointer font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid #F34B7D',
                    }}
                  >
                    View Next →
                  </button>
                </Link>
              )}
            </motion.div>
          )
        })()}
      </main>
    </div>
  )
}
