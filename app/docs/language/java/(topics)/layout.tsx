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
      header: 'Core Concepts & Setup',
      topics: [
        { id: 1, title: 'Introduction to Java' },
        { id: 2, title: 'History of Java' },
        { id: 3, title: 'Setup and Environment' },
        { id: 4, title: 'Hello World' },
        { id: 5, title: 'Comments' },
      ],
    },
    {
      header: 'Syntax & Building Blocks',
      topics: [
        { id: 7, title: 'Java Syntax Basics' },
        { id: 8, title: 'Variables and Data Types' },
        { id: 9, title: 'Operators' },
        { id: 10, title: 'Decision Making' },
        { id: 11, title: 'Loops' },
        { id: 12, title: 'Exception Basics' },
      ],
    },
    {
      header: 'Object Oriented Programming',
      topics: [
        { id: 13, title: 'Classes & Objects' },
        { id: 14, title: 'Constructors' },
        { id: 15, title: 'Inheritance' },
        { id: 16, title: 'Polymorphism' },
        { id: 17, title: 'Abstraction' },
        { id: 18, title: 'Encapsulation' },
        { id: 19, title: 'this & super' },
        { id: 20, title: 'Static & Instance' },
      ],
    },
    {
      header: 'Strings & Arrays',
      topics: [
        { id: 21, title: 'String Class' },
        { id: 22, title: 'StringBuilder & StringBuffer' },
        { id: 23, title: 'Arrays in Java' },
        { id: 24, title: 'Array Utilities' },
      ],
    },
    {
      header: 'Collection Framework',
      topics: [
        { id: 25, title: 'List' },
        { id: 26, title: 'Set' },
        { id: 27, title: 'Map' },
        { id: 28, title: 'Queue' },
        { id: 29, title: 'Iterators' },
        { id: 30, title: 'Generics' },
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
      <aside className='w-64 hidden md:flex bg-black pt-20 text-white border-r-2 border-[#b07219]/50 sticky top-0 h-screen md:flex-col'>
        <div className='p-5'>
          <Link href='/docs/language/java'>
            <h2 className='text-3xl font-bold text-center text-[#b07219]'>Java</h2>
          </Link>
        </div>

        <div className='flex-1 overflow-y-auto p-5 sidebar-scroll'>
          {groupedTopics.map(({ header, topics }) => {
            const isOpen = openSections[header]

            return (
              <div key={header} className='mb-4'>
                <button
                  onClick={() => toggleSection(header)}
                  className='cursor-pointer flex justify-between items-center w-full text-left text-[#b07219] text-lg font-semibold mb-1 border-b border-[#b07219]/30 pb-1 transition'
                >
                  {header}
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronRight className='w-5 h-5 text-[#b07219]' />
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
                          const active = pathname === `/docs/language/java/${id}`
                          return (
                            <li key={id}>
                              <Link
                                href={`/docs/language/java/${id}`}
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
        <NavigationButtons color='#b07219' />
      </main>
    </div>
  )
}
