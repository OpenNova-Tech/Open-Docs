'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SQL_TOPICS } from '@/lib/private/sqlTopics'

export default function TopicsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    const groupedTopics = [
        {
            header: 'Fundamentals',
            topics: [
                { slug: 'introduction', title: 'Introduction' },
                { slug: 'history', title: 'History' },
                { slug: 'rdbms', title: 'Relational Databases' },
                { slug: 'dialects', title: 'SQL Dialects' },
                { slug: 'hello-world', title: 'Hello World Query' },
                { slug: 'syntax', title: 'SQL Syntax Basics' },
            ],
        },
        {
            header: 'Query Language (DQL)',
            topics: [
                { slug: 'select', title: 'SELECT Basics' },
                { slug: 'filtering', title: 'Filtering Data' },
                { slug: 'sorting', title: 'Sorting & Limiting' },
                { slug: 'aliases', title: 'Aliases' },
                { slug: 'operators', title: 'Operators' },
                { slug: 'joins-basics', title: 'Joins Basics' },
                { slug: 'aggregates', title: 'Aggregate Functions' },
                { slug: 'grouping', title: 'Grouping Data' },
                { slug: 'set-operations', title: 'Set Operations' },
            ],
        },
        {
            header: 'Data Manipulation (DML)',
            topics: [
                { slug: 'insert', title: 'INSERT' },
                { slug: 'update', title: 'UPDATE' },
                { slug: 'delete', title: 'DELETE' },
                { slug: 'truncate', title: 'TRUNCATE' },
                { slug: 'upsert', title: 'Upserts' },
                { slug: 'returning', title: 'RETURNING Clause' },
                { slug: 'bulk', title: 'Bulk Operations' },
            ],
        },
        {
            header: 'Data Definition (DDL)',
            topics: [
                { slug: 'create', title: 'CREATE' },
                { slug: 'alter', title: 'ALTER' },
                { slug: 'drop', title: 'DROP' },
                { slug: 'data-types', title: 'Data Types' },
                { slug: 'constraints', title: 'Keys & Constraints' },
                { slug: 'advanced-constraints', title: 'Advanced Constraints' },
            ],
        },
        {
            header: 'Database Design',
            topics: [
                { slug: 'schema', title: 'Schema Design' },
                { slug: 'normalization', title: 'Normalization' },
                { slug: 'indexes', title: 'Indexes' },
                { slug: 'views', title: 'Views' },
                { slug: 'temp-tables', title: 'Temporary Tables' },
            ],
        },
        {
            header: 'Functions & Expressions',
            topics: [
                { slug: 'string-functions', title: 'String Functions' },
                { slug: 'date-functions', title: 'Date & Time Functions' },
                { slug: 'numeric-functions', title: 'Numeric Functions' },
                { slug: 'null-functions', title: 'NULL Handling' },
                { slug: 'case', title: 'Conditional Logic' },
                { slug: 'null-behavior', title: 'NULL Behavior' },
            ],
        },
        {
            header: 'Advanced Querying',
            topics: [
                { slug: 'joins', title: 'Joins Mastery' },
                { slug: 'subqueries', title: 'Subqueries' },
                { slug: 'derived-tables', title: 'Derived Tables' },
                { slug: 'cte', title: 'CTEs' },
                { slug: 'window', title: 'Window Functions' },
                { slug: 'recursive', title: 'Recursive Queries' },
            ],
        },
        {
            header: 'Transactions',
            topics: [
                { slug: 'acid', title: 'ACID Properties' },
                { slug: 'transactions', title: 'Transactions' },
                { slug: 'locking', title: 'Locks & Isolation' },
            ],
        },
        {
            header: 'Programmable SQL',
            topics: [
                { slug: 'procedures', title: 'Stored Procedures' },
                { slug: 'functions', title: 'User Functions' },
                { slug: 'triggers', title: 'Triggers' },
            ],
        },
        {
            header: 'Security',
            topics: [
                { slug: 'injection', title: 'SQL Injection' },
                { slug: 'privileges', title: 'User Privileges' },
                { slug: 'encryption', title: 'Encryption' },
                { slug: 'auditing', title: 'Auditing' },
            ],
        },
        {
            header: 'Performance',
            topics: [
                { slug: 'explain', title: 'Query Plans' },
                { slug: 'index-opt', title: 'Index Optimization' },
                { slug: 'partitioning', title: 'Partitioning' },
                { slug: 'replication', title: 'Replication' },
                { slug: 'sharding', title: 'Sharding' },
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
            <aside className='w-64 hidden md:flex bg-black pt-20 text-white border-r-2 border-[#e38c00]/50 sticky top-0 h-screen md:flex-col'>
                <div className='p-5'>
                    <Link href='/docs/language/sql'>
                        <h2 className='text-3xl font-bold text-center text-[#e38c00]'>
                            SQL
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
                                    className='flex justify-between items-center w-full text-left text-[#e38c00] text-lg font-semibold mb-1 border-b border-[#e38c00]/30 pb-1 hover:text-[#d6a452] transition cursor-pointer'
                                >
                                    {header}
                                    <motion.span
                                        animate={{ rotate: isOpen ? 90 : 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <ChevronRight className='w-5 h-5 text-[#e38c00]' />
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
                                                                className={`block px-3 py-2 rounded-lg transition ${active
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

                    const currentIndex = SQL_TOPICS.indexOf(currentSlug)

                    const prevSlug =
                        currentIndex > 0 ? SQL_TOPICS[currentIndex - 1] : null

                    const nextSlug =
                        currentIndex >= 0 && currentIndex < SQL_TOPICS.length - 1
                            ? SQL_TOPICS[currentIndex + 1]
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
                                            border: '1px solid #e38c00',
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
                                            border: '1px solid #e38c00',
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
