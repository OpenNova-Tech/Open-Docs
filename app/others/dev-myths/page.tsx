"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { devMyths } from "@/lib/devMyths"
import { IconSearch, IconArrowRight, IconX } from "@tabler/icons-react"

export default function DevMythsPage() {
    const [query, setQuery] = useState("")
    const [activeTag, setActiveTag] = useState<string | null>(null)

    // 🏷 Extract unique tags
    const allTags = Array.from(
        new Set(devMyths.flatMap((item) => item.tags || []))
    )

    // 🔍 Filter logic
    const filtered = devMyths.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.tags?.some((tag: string) =>
                tag.toLowerCase().includes(query.toLowerCase())
            )

        const matchesTag = activeTag
            ? item.tags?.includes(activeTag)
            : true

        return matchesSearch && matchesTag
    })

    return (
        <div className="min-h-screen px-6 py-32 relative overflow-hidden">

  {/* 🌌 GLOBAL BACKGROUND */}
  <div className="absolute inset-0 -z-10">


    {/* 🟠 Secondary glow */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400/10 blur-[150px] rounded-full" />

    {/* 🔴 Ambient glow */}
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-400/10 blur-[130px] rounded-full" />

    {/* 🌫️ Soft overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />

    {/* 🔲 Grid */}
    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:22px_22px]" />
  </div>

            {/* HEADER */}
            <div className="
max-w-5xl mt-10 mx-auto mb-10 text-center
backdrop-blur-xl bg-white/[0.03]
border border-white/10
rounded-3xl p-8
shadow-lg
">
                <h1 className="text-5xl font-bold mb-4">Dev Myths ⚠️</h1>
                <p className="text-zinc-400">
                    Misconceptions that slow developers down.
                </p>
            </div>

            {/* 🔍 SEARCH */}
            <div className="
max-w-3xl mx-auto mb-6 relative
backdrop-blur-xl bg-white/[0.03]
border border-white/10
rounded-2xl
">
                <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                    type="text"
                    placeholder="Search myths, tags..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="
  w-full pl-12 pr-4 py-3 rounded-2xl
  bg-transparent
  text-white
  placeholder:text-zinc-500
  focus:outline-none
  "
                />
            </div>

            {/* 🏷 TAG FILTERS */}
            <div className="max-w-5xl mx-auto mb-10 flex flex-wrap gap-3 justify-center">
                {allTags.map((tag) => {
                    const isActive = activeTag === tag

                    return (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(isActive ? null : tag)}
                            className={`px-3 py-1.5 text-sm rounded-full border transition backdrop-blur-md hover:cursor-pointer
${isActive
  ? "bg-red-500/80 text-white border-red-400"
  : "bg-white/[0.03] text-zinc-400 border-white/10 hover:border-red-400 hover:text-white"
}`}
                        >
                            {tag}
                        </button>
                    )
                })}

                {/* CLEAR FILTER */}
                {activeTag && (
                    <button
                        onClick={() => setActiveTag(null)}
                        className="flex items-center hover:cursor-pointer gap-1 px-3 py-1.5 text-sm rounded-full bg-zinc-800 text-zinc-400 hover:text-red-400"
                    >
                        <IconX size={14} />
                        Clear
                    </button>
                )}
            </div>

            {/* CARDS */}
            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item, index) => (
                    <motion.div
                        key={item.slug}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <Link
                            href={`/others/dev-myths/${item.slug}`}
                            className="
group relative block p-6 rounded-2xl

backdrop-blur-xl bg-white/[0.04]
border border-white/10

hover:bg-white/[0.06]

transition duration-300 overflow-hidden
shadow-[0_0_40px_rgba(255,0,0,0.05)]
"
                        >

                            {/* 🔥 Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-orange-400/10 to-transparent blur-2xl" />
                            </div>
                            {/* ✨ Glass highlight */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-white/20 blur-sm" />
                            </div>
                            {/* TITLE */}
                            <h2 className="text-lg font-semibold mb-3  transition">
                                {item.title}
                            </h2>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags?.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* META */}
                            <div className="flex items-center gap-2 text-xs mb-4">
                                {item.level && (
                                    <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-300">
                                        {item.level}
                                    </span>
                                )}
                                {item.impact && (
                                    <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                                        {item.impact}
                                    </span>
                                )}
                            </div>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-sm text-zinc-500 group-hover:text-red-400 transition">
                                Explore
                                <IconArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition"
                                />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* EMPTY STATE */}
            {filtered.length === 0 && (
                <div className="text-center mt-20 text-zinc-500">
                    No myths found.
                </div>
            )}
        </div>
    )
}