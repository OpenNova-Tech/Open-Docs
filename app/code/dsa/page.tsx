'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, ChevronDown, ExternalLink, Search } from "lucide-react"
import { useRouter } from "next/navigation"

const topics = [
  {
    name: "Arrays",
    problems: [
      { title: "Greatest Element", link: "#" },
      { title: "Second Largest Element", link: "#" },
      { title: "Check if Sorted", link: "#" },
      { title: "Reverse Array", link: "dsa/array/reverse-array" },
      { title: "Remove Duplicates", link: "#" },
      { title: "Rotate Array", link: "#" },
      { title: "Move Zeros to End", link: "#" },
      { title: "Missing Number", link: "#" },
      { title: "Pivot of Array", link: "#" },
      { title: "Two Sum", link: "/code/leetcode/two-sum" },
      { title: "Maximum Subarray Sum (Kadane)", link: "#" },
      { title: "Container With Most Water", link: "#" },
      { title: "Trapping Rainwater", link: "#" },
      { title: "Merge Intervals", link: "#" },
      { title: "Product of Array Except Self", link: "#" },
    ]
  },
  {
    name: "Strings",
    problems: [
      { title: "Palindrome Check", link: "#" },
      { title: "Reverse String", link: "#" },
      { title: "Anagram Check", link: "#" },
      { title: "First Non-Repeating Character", link: "#" },
      { title: "Longest Common Prefix", link: "#" },
      { title: "String Rotation Check", link: "#" },
      { title: "Valid Parentheses", link: "#" },
      { title: "Longest Substring Without Repeating Characters", link: "#" },
      { title: "Minimum Window Substring", link: "#" },
      { title: "Group Anagrams", link: "#" },
      { title: "Longest Palindromic Substring", link: "#" },
      { title: "String Compression", link: "#" },
      { title: "Implement strStr()", link: "#" },
    ]
  },
  {
    name: "Linked List",
    problems: [
      { title: "Reverse Linked List", link: "#" },
      { title: "Middle of Linked List", link: "#" },
      { title: "Detect Cycle (Floyd’s Algorithm)", link: "#" },
      { title: "Merge Two Sorted Lists", link: "#" },
      { title: "Remove Nth Node From End", link: "#" },
      { title: "Intersection of Two Linked Lists", link: "#" },
      { title: "Palindrome Linked List", link: "#" },
      { title: "Add Two Numbers", link: "#" },
      { title: "Flatten Linked List", link: "#" },
    ]
  },
  {
    name: "Trees",
    problems: [
      { title: "Inorder Traversal", link: "#" },
      { title: "Preorder Traversal", link: "#" },
      { title: "Postorder Traversal", link: "#" },
      { title: "Level Order Traversal", link: "#" },
      { title: "Height of Tree", link: "#" },
      { title: "Diameter of Tree", link: "#" },
      { title: "Check Balanced Tree", link: "#" },
      { title: "Lowest Common Ancestor", link: "#" },
      { title: "Binary Tree Right View", link: "#" },
      { title: "Validate Binary Search Tree", link: "#" },
      { title: "Kth Smallest in BST", link: "#" },
      { title: "Construct Tree from Traversals", link: "#" },
    ]
  },
  {
    name: "Graphs",
    problems: [
      { title: "DFS Traversal", link: "#" },
      { title: "BFS Traversal", link: "#" },
      { title: "Number of Islands", link: "#" },
      { title: "Cycle Detection (Undirected Graph)", link: "#" },
      { title: "Cycle Detection (Directed Graph)", link: "#" },
      { title: "Topological Sort", link: "#" },
      { title: "Shortest Path (Dijkstra)", link: "#" },
      { title: "Shortest Path (BFS - Unweighted)", link: "#" },
      { title: "Flood Fill Algorithm", link: "#" },
      { title: "Rotting Oranges", link: "#" },
      { title: "Clone Graph", link: "#" },
      { title: "Course Schedule", link: "#" },
    ]
  }
]

export default function DSA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [query, setQuery] = useState("")
  const router = useRouter()

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredTopics = topics.map(topic => ({
    ...topic,
    problems: topic.problems.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
    )
  }))

  return (
    <div className="min-h-screen bg-black text-gray-100">

      {/* Header */}
      <div className="bg-gradient-to-r mt-32 mb-10 from-cyan-600 to-cyan-900 border-b border-cyan-500/20">
        <div className="max-w-5xl mx-auto px-6 py-10">

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/40">
              <Code2 className="w-7 h-7 text-white" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-white">
                DSA Explorer
              </h1>
              <p className="text-cyan-100 text-sm">
                Learn by patterns. Solve smarter, not harder.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Search */}
      <div className="max-w-5xl mx-auto px-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search problems..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-10 pr-4 py-3 text-gray-100 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
          />
        </div>
      </div>

      {/* Topics */}
      <div className="max-w-5xl mx-auto px-6 space-y-4">

        {filteredTopics.map((topic, index) => {
          const isOpen = openIndex === index

          return (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative group border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/5 blur-xl transition pointer-events-none" />

              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                    {topic.name}
                  </span>

                  <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-400 border border-gray-700">
                    {topic.problems.length} problems
                  </span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isOpen ? "rotate-180 text-cyan-400" : "text-gray-500"
                  }`}
                />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 grid sm:grid-cols-2 gap-2">

                      {topic.problems.length === 0 ? (
                        <p className="text-sm text-gray-500 px-2 py-2">
                          No problems found
                        </p>
                      ) : (
                        topic.problems.map((problem, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ x: 6 }}
                            onClick={() => router.push(problem.link)}
                            className="cursor-pointer flex items-center justify-between px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition border border-gray-800 hover:border-cyan-500/40 group"
                          >
                            <span className="text-sm text-gray-300 group-hover:text-white transition">
                              {problem.title}
                            </span>

                            <ExternalLink className="w-4 h-4 text-cyan-400 opacity-60 group-hover:opacity-100" />
                          </motion.div>
                        ))
                      )}

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )
        })}

      </div>
    </div>
  )
}
