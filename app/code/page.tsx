'use client'

import React, { useState } from 'react';
import { Code2, Search, BookOpen, Database, Terminal, Braces } from 'lucide-react';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"

const categories = [
  {
    name: "DSA",
    icon: Code2,
    route: "code/dsa",
    description: "Master data structures & algorithms with curated problems."
  },
  {
    name: "SQL",
    icon: Database,
    route: "/sql",
    description: "Practice queries, joins, and database concepts."
  },
  {
    name: "BASH",
    icon: Terminal,
    route: "/bash",
    description: "Shell scripting, commands, and automation basics."
  },
  {
    name: "JS",
    icon: Braces,
    route: "/js",
    description: "JavaScript coding challenges and core concepts."
  },
]

const problems = [
  {
    id: 1,
    title: "Two Sum (1)",
    platform: "LeetCode",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    link: "code/leetcode/two-sum"
  },
  {
    id: 33,
    title: 'Search in Rotated Sorted Array (33)',
    platform: 'LeetCode',
    difficulty: 'Medium',
    tags: ['Array', 'Binary Search'],
    link: 'code/leetcode/search-in-rotated-sorted-array'
  },
  // {
  //   id: 151,
  //   title: 'Reverse Words in a String (151)',
  //   platform: 'LeetCode',
  //   difficulty: 'Medium',
  //   tags: ['Two Pointers', 'String'],
  //   link: 'code/leetcode/reverse-words-in-a-string'
  // },
  // {
  //   id: 238,
  //   title: 'Product of Array Except Self (238)',
  //   platform: 'LeetCode',
  //   difficulty: 'Medium',
  //   tags: ['Array', 'Prefix Sum'],
  //   link: 'code/leetcode/product-of-array-except-self'
  // },
  // {
  //   id: 345,
  //   title: 'Reverse Vowels of a String (345)',
  //   platform: 'LeetCode',
  //   difficulty: 'Easy',
  //   tags: ['Two Pointers', 'String'],
  //   link: 'code/leetcode/reverse-vowels-of-a-string'
  // },
  // {
  //   id: 605,
  //   title: 'Can Place Flowers (605)',
  //   platform: 'LeetCode',
  //   difficulty: 'Easy',
  //   tags: ['Array', 'Greedy'],
  //   link: 'code/leetcode/can-place-flowers'
  // },
  // {
  //   id: 1071,
  //   title: 'Greatest Common Divisor of Strings (1071)',
  //   platform: 'LeetCode',
  //   difficulty: 'Easy',
  //   tags: ['Math', 'String'],
  //   link: 'code/leetcode/greatest-common-divisor-of-strings'
  // },
  // {
  //   id: 1431,
  //   title: 'Kids With the Greatest Number of Candies (1431)',
  //   platform: 'LeetCode',
  //   difficulty: 'Easy',
  //   tags: ['Array'],
  //   link: 'code/leetcode/kids-with-the-greatest-number-of-candies'
  // },
  // {
  //   id: 1768,
  //   title: 'Merge Strings Alternatively (1768)',
  //   platform: 'LeetCode',
  //   difficulty: 'Easy',
  //   tags: ['Two Pointers', 'String'],
  //   link: 'code/leetcode/merge-strings-alternatively'
  // },
  {
    id: 10001,
    title: 'Welcome to Java!',
    platform: 'HackerRank',
    difficulty: 'Easy',
    tags: [],
    link: 'code/hackerrank/java/welcome-to-java'
  },
  {
    id: 10002,
    title: 'Java Stdin and Stdout I',
    platform: 'HackerRank',
    difficulty: 'Easy',
    tags: [],
    link: 'code/hackerrank/java/java-stdin-and-stdout-1'
  },
  {
    id: 10009,
    title: 'Java Regex',
    platform: 'HackerRank',
    difficulty: 'Medium',
    tags: [],
    link: 'code/hackerrank/java/java-regex'
  },
  {
    id: 10078,
    title: 'Java Priority Queue',
    platform: 'HackerRank',
    difficulty: 'Medium',
    tags: [],
    link: 'code/hackerrank/java/java-priority-queue'
  },
];

const CodeVault = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('')

  const router = useRouter();

  const filteredProblems = problems.filter(problem => {
    const matchesPlatform = selectedPlatform === 'all' || problem.platform === selectedPlatform;
    const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPlatform && matchesDifficulty && matchesSearch;
  });

  interface Stats {
    total: number;
    easy: number;
    medium: number;
    hard: number;
  }

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const stats: Stats = {
    total: problems.length,
    easy: problems.filter(p => p.difficulty === 'Easy').length,
    medium: problems.filter(p => p.difficulty === 'Medium').length,
    hard: problems.filter(p => p.difficulty === 'Hard').length
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r mt-32 mb-20 from-cyan-600 to-cyan-900 border-b border-cyan-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <Code2 className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Code Vault</h1>
              <p className="text-cyan-100 mt-1">Competitive Programming Solutions Archive</p>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
          >
            {[
              { label: "Total", value: stats.total, color: "cyan" },
              { label: "Easy", value: stats.easy, color: "green" },
              { label: "Medium", value: stats.medium, color: "yellow" },
              { label: "Hard", value: stats.hard, color: "red" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                className={`rounded-lg p-4 border bg-${stat.color}-950/30 border-${stat.color}-500/20`}
              >
                <p className={`text-xs text-${stat.color}-300`}>{stat.label}</p>
                <p className={`text-2xl font-bold text-${stat.color}-400`}>
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-10">

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Explore by Category
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            Jump directly into focused problem sets across different domains.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {categories.map((cat) => {
            const Icon = cat.icon

            return (
              <motion.div
                key={cat.name}
                onClick={() => router.push(cat.route)}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer group relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-5 hover:border-cyan-500 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-cyan-500/10 blur-xl" />

                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 border border-gray-700 mb-4 group-hover:bg-cyan-600/20 transition">
                  <Icon className="w-5 h-5 text-cyan-400 group-hover:text-white transition" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">
                  {cat.name} Codes
                </h3>

                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition">
                  {cat.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-xl p-[1px] bg-gradient-to-r from-cyan-500/30 via-transparent to-cyan-500/30"
        >

          {/* Inner Container */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg relative overflow-hidden">

            {/* Glow Overlay */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-cyan-500/5 blur-2xl pointer-events-none" />

            <div className="grid md:grid-cols-3 gap-4 relative z-10">

              {/* Search */}
              <div className="group">
                <label className="text-sm text-gray-400 mb-2 block group-hover:text-cyan-400 transition">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Problem or tag..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-gray-100 
              placeholder-gray-500 
              focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 
              hover:border-cyan-400/50 
              transition-all duration-200"
                  />
                </div>
              </div>

              {/* Platform */}
              <div className="group">
                <label className="text-sm text-gray-400 mb-2 block group-hover:text-cyan-400 transition">
                  Platform
                </label>
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100
            focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
            hover:border-cyan-400/50
            transition-all duration-200"
                >
                  <option value="all">All Platforms</option>
                  <option value="LeetCode">LeetCode</option>
                  <option value="HackerRank">HackerRank</option>
                </select>
              </div>

              {/* Difficulty */}
              <div className="group">
                <label className="text-sm text-gray-400 mb-2 block group-hover:text-cyan-400 transition">
                  Difficulty
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100
            focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
            hover:border-cyan-400/50
            transition-all duration-200"
                >
                  <option value="all">All Levels</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                </select>
              </div>

            </div>
          </div>
        </motion.div>


        {/* Problems */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProblems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-900 rounded-xl p-12 border border-gray-800 text-center"
            >
              <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No problems found</p>
            </motion.div>
          ) : (
            filteredProblems.map((problem) => (
              <motion.div
                key={problem.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = problem.link}
                className="cursor-pointer group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/5 blur-xl transition" />

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                      {problem.platform}
                    </span>

                    <span className={`px-3 py-1 text-xs rounded-full border ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>

                    {problem.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-gray-800 text-gray-400 rounded-full border border-gray-700 group-hover:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

      </div>
    </div>
  )
};

export default CodeVault;