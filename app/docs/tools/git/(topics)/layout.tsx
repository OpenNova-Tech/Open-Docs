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
        { id: 1, title: 'What is Git' },
        { id: 2, title: 'Installation of Git' },
        { id: 3, title: 'Git Configuration' },
        { id: 4, title: 'Understanding .git Folder' },
        { id: 5, title: 'Why Git Over Other VCS' },
      ],
    },
    {
      header: 'Repository and Commits',
      topics: [
        { id: 6, title: 'Creating Repository' },
        { id: 7, title: 'Staging Area' },
        { id: 8, title: 'Making Commits' },
        { id: 9, title: 'Viewing History' },
        { id: 10, title: 'Ignoring Files' },
      ],
    },
    {
      header: 'Branching and Merging',
      topics: [
        { id: 12, title: 'What is Branch' },
        { id: 13, title: 'Creating Branches' },
        { id: 14, title: 'Switching Branches' },
        { id: 15, title: 'Merging' },
        { id: 16, title: 'Fast Forward and others' },
        { id: 17, title: 'Naming Conventions' },
        { id: 18, title: 'Deleting Branches' },
      ],
    },
    {
      header: 'Remote',
      topics: [
        { id: 19, title: 'Connecting to Github' },
        { id: 20, title: 'Syncing with Remote' },
        { id: 21, title: 'Cloning' },
        { id: 22, title: 'Collaboration Workflow' },
      ],
    },
    {
      header: 'Undo',
      topics: [
        { id: 23, title: 'Discarding Changes' },
        { id: 24, title: 'Resetting Commits' },
        { id: 25, title: 'Reverting Commits' },
        { id: 26, title: 'Amending Commits' },
        { id: 27, title: 'Stashing' },
      ],
    },
    {
      header: 'Advanced Concepts',
      topics: [
        { id: 28, title: 'Rebase' },
        { id: 29, title: 'Tags' },
        { id: 30, title: 'Cherry Picking' },
        { id: 31, title: 'Submodules' },
        { id: 32, title: 'Hooks' },
        { id: 33, title: 'Git Worktrees' },
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
      <aside className='w-64 hidden md:flex bg-black pt-20 text-white border-r-2 border-[#F05032]/50 sticky top-0 h-screen md:flex-col'>
        <div className='p-5'>
          <Link href='/docs/tools/git'>
            <h2 className='text-3xl font-bold text-center text-[#F05032]'>Git</h2>
          </Link>
        </div>

        <div className='flex-1 overflow-y-auto p-5 sidebar-scroll'>
          {groupedTopics.map(({ header, topics }) => {
            const isOpen = openSections[header]

            return (
              <div key={header} className='mb-4'>
                <button
                  onClick={() => toggleSection(header)}
                  className='flex justify-between items-center w-full text-left text-[#F05032] text-lg font-semibold mb-1 border-b cursor-pointer border-[#F05032]/30 pb-1 transition'
                >
                  {header}
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronRight className='w-5 h-5 text-[#F05032]' />
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
                          const active = pathname === `/docs/tools/git/${id}`
                          return (
                            <li key={id}>
                              <Link
                                href={`/docs/tools/git/${id}`}
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
        <NavigationButtons color='#F05032' />
      </main>
    </div>
  )
}