'use client'

import { useState } from 'react'
import NavigationButtons from '@/components/PageChanger'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TopicsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const groupedTopics = [
    {
      header: 'Core Concepts',
      topics: [
        { id: 1, title: 'Introduction' },
        { id: 2, title: 'History' },
        { id: 3, title: 'Setup and Environment' },
        { id: 4, title: 'Hello World' },
        { id: 5, title: 'Compilation Process' },
        { id: 6, title: 'Comments' },
      ],
    },
  ]

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

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
            <h2 className='text-3xl font-bold text-center text-[#F34B7D]'>C++</h2>
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
                        {topics.map(({ id, title }) => {
                          const active = pathname === `/docs/language/cplusplus/${id}`
                          return (
                            <li key={id}>
                              <Link
                                href={`/docs/language/cplusplus/${id}`}
                                className={`block px-3 py-2 rounded-lg transition ${
                                  active ? 'bg-neutral-800' : 'hover:bg-neutral-700'
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
        <NavigationButtons color='#F34B7D' />
      </main>
    </div>
  )
}
