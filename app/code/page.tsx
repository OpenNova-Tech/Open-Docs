'use client'

import React, { useState } from 'react';
import { Code2, Search, Filter, ExternalLink, Trophy, TrendingUp, BookOpen } from 'lucide-react';

const CodeVault = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('')

  const problems = [
    {
      id: 1,
      title: "Two Sum",
      platform: "LeetCode",
      difficulty: "Easy",
      tags: ["Array", "Hash Table"],
      link: "code/leetcode/two-sum"
    },
    {
      id: 33,
      title: 'Search in Rotated Sorted Array',
      platform: 'LeetCode',
      difficulty: 'Medium',
      tags: ['Array', 'Binary Search'],
      link: 'code/leetcode/search-in-rotated-sorted-array'
    },
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
    switch(difficulty) {
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
      <div className="bg-gradient-to-r mt-32 mb-20 from-cyan-600 to-cyan-900 border-b border-cyan-500/20">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-cyan-950/50 rounded-lg p-4 border border-cyan-500/20">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-cyan-300 font-medium">Total</span>
              </div>
              <p className="text-2xl font-bold text-white">{stats.total}</p>
            </div>
            <div className="bg-green-950/30 rounded-lg p-4 border border-green-500/20">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-300 font-medium">Easy</span>
              </div>
              <p className="text-2xl font-bold text-green-400">{stats.easy}</p>
            </div>
            <div className="bg-yellow-950/30 rounded-lg p-4 border border-yellow-500/20">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-yellow-300 font-medium">Medium</span>
              </div>
              <p className="text-2xl font-bold text-yellow-400">{stats.medium}</p>
            </div>
            <div className="bg-red-950/30 rounded-lg p-4 border border-red-500/20">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-red-400" />
                <span className="text-xs text-red-300 font-medium">Hard</span>
              </div>
              <p className="text-2xl font-bold text-red-400">{stats.hard}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Problem or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Platform Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Platform</label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-gray-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 appearance-none"
                >
                  <option value="all">All Platforms</option>
                  <option value="LeetCode">LeetCode</option>
                  <option value="HackerRank">HackerRank</option>
                  <option value="CodeForces">CodeForces</option>
                </select>
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 appearance-none"
              >
                <option value="all">All Levels</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>
        </div>

        {/* Problems List */}
        <div className="space-y-4">
          {filteredProblems.length === 0 ? (
            <div className="bg-gray-900 rounded-xl p-12 border border-gray-800 text-center">
              <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No problems found matching your filters</p>
            </div>
          ) : (
            filteredProblems.map((problem) => (
              <div key={problem.id} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-colors">
                {/* Problem Header */}
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-100 mb-2">{problem.title}</h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20">
                          {problem.platform}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                        {problem.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs border border-gray-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={problem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700"
                    >
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeVault;