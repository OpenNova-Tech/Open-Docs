'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { HTML_TOPICS } from '@/lib/private/htmlTopics'

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
        { slug: 'setup-structure', title: 'Setup & Structure' },
        { slug: 'hello-world', title: 'Hello World' },
      ],
    },
    {
      header: 'Elements & Syntax',
      topics: [
        { slug: 'tags', title: 'Tags' },
        { slug: 'headings-paragraphs', title: 'Headings & Paragraphs' },
        { slug: 'lists', title: 'Lists (ul/ol)' },
        { slug: 'links-images', title: 'Links & Images' },
        { slug: 'tables', title: 'Tables' },
        { slug: 'attributes', title: 'Attributes' },
        { slug: 'responsive-images', title: 'Responsive Images' },
      ],
    },
    {
      header: 'Layout & Media',
      topics: [
        { slug: 'div-span', title: 'Divs and Spans' },
        { slug: 'semantic', title: 'Semantic Elements' },
        { slug: 'forms-inputs', title: 'Forms and Inputs' },
        { slug: 'forms-advanced', title: 'Advanced Form Controls' },
        { slug: 'audio-video', title: 'Audio and Video' },
      ]
    },
    {
      header: 'Accessiblity',
      topics: [
        { slug: 'basics', title: 'Basics' },
        { slug: 'aria-roles', title: 'ARIA Roles' },
      ]
    },
    {
      header: 'Advanced Concepts',
      topics: [
        { slug: 'apis', title: 'HTML5 APIs' },
        { slug: 'meta-tags', title: 'Meta Tags & SEO' },
        { slug: 'entities-symbols', title: 'Entities & Symbols' },
        { slug: 'css-integration', title: 'CSS Integration' },
        { slug: 'head-elements', title: 'Head Elements' },
        { slug: 'web-components', title: 'Web Components' },
        { slug: 'javascript', title: 'JavaScript Integration' },
      ]
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
      <aside className='w-64 hidden md:flex bg-black pt-20 text-white border-r-2 border-[#e34c26]/50 sticky top-0 h-screen md:flex-col'>
        <div className='p-5'>
          <Link href='/docs/language/html'>
            <h2 className='text-3xl font-bold text-center text-[#e34c26]'>
              HTML
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
                  className='flex justify-between items-center w-full text-left text-[#e34c26] text-lg font-semibold mb-1 border-b border-[#e34c26]/30 pb-1 hover:text-[#d66f55] transition cursor-pointer'
                >
                  {header}
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronRight className='w-5 h-5 text-[#e34c26]' />
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
                          const href = `/docs/language/html/${slug}`
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

          const currentIndex = HTML_TOPICS.indexOf(currentSlug)

          const prevSlug =
            currentIndex > 0 ? HTML_TOPICS[currentIndex - 1] : null

          const nextSlug =
            currentIndex >= 0 && currentIndex < HTML_TOPICS.length - 1
              ? HTML_TOPICS[currentIndex + 1]
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
                      border: '1px solid #e34c26',
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
                      border: '1px solid #e34c26',
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
