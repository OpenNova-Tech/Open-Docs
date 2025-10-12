'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopicsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const topics = [
    { id: 1, title: 'Introduction to Java' },
    { id: 2, title: 'Histor of Java' },
    { id: 7, title: 'Java Syntax Basics' },
    { id: 8, title: 'Variables and Data Types' },
    { id: 9, title: 'Operators' },
    { id: 10, title: 'Decision Making' },
    { id: 11, title: 'Loops' },
    { id: 12, title: 'Exception Basics' },
  ]

  return (
    <div className='flex bg-black min-h-screen'>
      <aside className='w-64 bg-black pt-32 text-white border-r-2 border-[#b07219]/50 sticky top-0 h-screen flex flex-col'>
        <div className='p-5'>
          <Link href='/docs/language/java'>
            <h2 className='text-3xl font-bold text-center text-[#b07219]'>Java</h2>
          </Link>
        </div>
        <div className='flex-1 overflow-y-auto p-5 sidebar-scroll'>
          <ul className='space-y-2'>
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
        </div>
      </aside>
      <main className='flex-1 bg-black text-white p-6 overflow-y-auto'>
        {children}
      </main>
    </div>
  )
}
