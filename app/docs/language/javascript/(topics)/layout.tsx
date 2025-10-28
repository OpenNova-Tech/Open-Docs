'use client'

import { useState } from 'react'
import NavigationButtons from '@/components/PageChanger'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TopicsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const groupedTopics = [
    {
      header: 'Core Concepts & Setup',
      topics: [
        { id: 1, title: 'Introduction to Javascript' },
        { id: 2, title: 'History of Javascript' },
        { id: 3, title: 'Setup and Environment' },
        { id: 4, title: 'Hello World' },
        { id: 5, title: 'Comments' },
        { id: 6, title: 'Strict Mode' },
      ],
    },
    {
      header: 'Syntax & Building Blocks',
      topics: [
        { id: 7, title: 'Variables' },
        { id: 8, title: 'Data Types' },
        { id: 9, title: 'Type Conversion & Coercion' },
        { id: 10, title: 'Truthy & Falsy Values' },
        { id: 11, title: 'Operators' },
        { id: 12, title: 'Control Statement' },
        { id: 13, title: 'Loops in JavaScript' },
      ],
    },
    {
      header: 'Functions & Scoping',
      topics: [
        { id: 14, title: 'Functions' },
        { id: 15, title: 'Scope & Hoisting' },
        { id: 16, title: 'Closures' },
        { id: 17, title: 'this Keyword' },
        { id: 18, title: 'Call, Apply, Bind' },
        { id: 19, title: 'Default & Rest Parameters' },
      ],
    },
    {
      header: 'Objects, Arrays & DOM',
      topics: [
        { id: 20, title: 'Objects & Prototypes' },
        { id: 21, title: 'Object Methods' },
        { id: 22, title: 'Arrays & Methods' },
        { id: 23, title: 'Destructuring & Spread' },
        { id: 24, title: 'Browser DOM' },
        { id: 25, title: 'Events' },
        { id: 26, title: 'Event Delegation' },
        { id: 27, title: 'JSON' },
        { id: 28, title: 'Fetch API' },
      ],
    },
    {
      header: 'Asynchronous JavaScript',
      topics: [
        
        { id: 29, title: 'Callbacks' },
        { id: 30, title: 'Promises' },
        { id: 31, title: 'Async / Await' },
        { id: 32, title: 'Event Loop' },
        { id: 33, title: 'Microtasks vs Macrotasks' },
        { id: 34, title: 'setTimeout & setInterval' },
      ],
    },
    {
      header: 'Advanced Concepts',
      topics: [
        { id: 35, title: 'ES6+ Features' },
        { id: 36, title: 'Modules' },
        { id: 37, title: 'Error Handling' },
        { id: 38, title: 'OOP in JavaScript' },
        { id: 39, title: 'Symbols & BigInt' },
        { id: 40, title: 'Iterators & Generators' },
        { id: 41, title: 'Regular Expressions' },
        { id: 42, title: 'Debouncing & Throttling' },
        { id: 43, title: 'Memory & Garbage Collection' },
        { id: 44, title: 'Node.JS Intro' },
      ],
    },
    {
      header: 'JavaScript in the Web',
      topics: [
        { id: 45, title: 'LocalStorage' },
        { id: 46, title: 'sessionStorage' },
        { id: 47, title: 'Cookies' },
        { id: 48, title: 'IndexedDB' },
        { id: 49, title: 'Geolocation API' },
        { id: 50, title: 'Clipboard API' },
        { id: 51, title: 'Notification API' },
        { id: 52, title: 'Service Workers' },
        { id: 53, title: 'WebSockets' },
      ],
    },
    {
      header: 'Security Concepts',
      topics: [
        { id: 54, title: 'JS Security Basics' },
        { id: 55, title: 'Performance Optimization' },
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
      <aside className='w-64 hidden md:flex bg-black pt-20 text-white border-r-2 border-[#F1E05A]/50 sticky top-0 h-screen md:flex-col'>
        <div className='p-5'>
          <Link href='/docs/language/java'>
            <h2 className='text-3xl font-bold text-center text-[#F1E05A]'>JavaScript</h2>
          </Link>
        </div>

        <div className='flex-1 overflow-y-auto p-5 sidebar-scroll'>
          {groupedTopics.map(({ header, topics }) => {
            const isOpen = openSections[header]

            return (
              <div key={header} className='mb-4'>
                <button
                  onClick={() => toggleSection(header)}
                  className='flex justify-between items-center w-full text-left text-[#F1E05A] text-lg font-semibold mb-1 border-b border-[#F1E05A]/30 pb-1 hover:text-[#f7e96b] transition'
                >
                  {header}
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronRight className='w-5 h-5 text-[#F1E05A]' />
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
                          const active = pathname === `/docs/language/javascript/${id}`
                          return (
                            <li key={id}>
                              <Link
                                href={`/docs/language/javascript/${id}`}
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
        <NavigationButtons color='#F1E05A' />
      </main>
    </div>
  )
}
