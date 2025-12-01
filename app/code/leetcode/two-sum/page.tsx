'use client'

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeVault = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedLang, setSelectedLang] = useState<{ [key: number]: string }>({});

  const highlightCode = (code: string) => {
    const keywords = /\b(function|const|let|var|if|else|for|while|return|new|class|import|export|from|async|await|try|catch)\b/g;
    const strings = /(["'`])(?:(?=(\\?))\2.)*?\1/g;
    const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
    const numbers = /\b(\d+)\b/g;
    const functions = /\b([a-zA-Z_]\w*)\s*\(/g;

    return code
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(comments, '<span style="color: #6272a4; font-style: italic;">$1</span>')
      .replace(strings, '<span style="color: #f1fa8c;">$1</span>')
      .replace(keywords, '<span style="color: #ff79c6;">$1</span>')
      .replace(functions, '<span style="color: #50fa7b;">$1</span>(')
      .replace(numbers, '<span style="color: #bd93f9;">$1</span>');
  };

  const problems = [
    {
      id: 1,
      title: 'Two Sum Algorithm',
      languages: {
        javascript: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
        python: `def twoSum(nums, target):
  map = {}
  for i, num in enumerate(nums):
    complement = target - num
    if complement in map:
      return [map[complement], i]
    map[num] = i
  return []`,
        java: `public int[] twoSum(int[] nums, int target) {
  Map<Integer, Integer> map = new HashMap<>();
  for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
      return new int[]{ map.get(complement), i };
    }
    map.put(nums[i], i);
  }
  return new int[]{};
}`,
        cpp: `vector<int> twoSum(vector<int>& nums, int target) {
  unordered_map<int, int> map;
  for (int i = 0; i < nums.size(); i++) {
    int complement = target - nums[i];
    if (map.count(complement)) {
      return {map[complement], i};
    }
    map[nums[i]] = i;
  }
  return {};
}`
      }
    },
    {
      id: 2,
      title: 'Two Sum Algorithm',
      languages: {
        javascript: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
        python: `def twoSum(nums, target):
  map = {}
  for i, num in enumerate(nums):
    complement = target - num
    if complement in map:
      return [map[complement], i]
    map[num] = i
  return []`,
        java: `public int[] twoSum(int[] nums, int target) {
  Map<Integer, Integer> map = new HashMap<>();
  for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
      return new int[]{ map.get(complement), i };
    }
    map.put(nums[i], i);
  }
  return new int[]{};
}`,
        cpp: `vector<int> twoSum(vector<int>& nums, int target) {
  unordered_map<int, int> map;
  for (int i = 0; i < nums.size(); i++) {
    int complement = target - nums[i];
    if (map.count(complement)) {
      return {map[complement], i};
    }
    map[nums[i]] = i;
  }
  return {};
}`
      }
    }
  ];

  const handleCopy = (code: string, id: number) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="space-y-4">

          {problems.map((problem) => {
            const langKeys = Object.keys(problem.languages);
            const activeLang = selectedLang[problem.id] || langKeys[0];
            const activeCode = problem.languages[activeLang as keyof typeof problem.languages];

            return (
              <div key={problem.id} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-colors">
                
                <div className="p-6 border-b border-gray-800">
                  <h3 className="text-xl font-semibold">{problem.title}</h3>

                  {/* Language Tabs */}
                  <div className="flex gap-2 mt-3">
                    {langKeys.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLang({ ...selectedLang, [problem.id]: lang })}
                        className={`px-3 py-1 rounded-lg text-sm capitalize border transition-colors
                          ${activeLang === lang ? "bg-cyan-600 border-cyan-400" : "bg-gray-800 border-gray-700 hover:bg-gray-700"}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <button
                    onClick={() => handleCopy(activeCode, problem.id)}
                    className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 flex items-center gap-2"
                  >
                    {copiedId === problem.id ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                    <span className="text-xs">{copiedId === problem.id ? "Copied!" : "Copy"}</span>
                  </button>

                  <pre className="bg-gray-950 p-6 overflow-x-auto">
                    <code className="text-sm font-mono" dangerouslySetInnerHTML={{ __html: highlightCode(activeCode) }} />
                  </pre>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default CodeVault;
