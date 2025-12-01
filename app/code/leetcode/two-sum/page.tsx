'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Prism as SyntaxHighlighterPrism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeVault = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [selectedLang, setSelectedLang] = useState<{ [key: number]: string }>({})

  const problems = [
    {
      id: 1,
      title: 'Brute Force Approach - O(n^2)',
      languages: {
        cpp: `vector<int> twoSum(vector<int>& nums, int target) {
  for (int i = 0; i < nums.size(); i++) {
    for (int j = i + 1; j < nums.size(); j++) {
      if (nums[i] + nums[j] == target)
        return {i, j};
      }
  }
  return {};
}`,
        java: `public int[] twoSum(int[] nums, int target) {
  for (int i = 0; i < nums.length; i++) {
    for (int j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return new int[]{i, j};
      }
    }
  }
  return new int[]{};
}`,
        python: `def twoSum(self, nums: List[int], target: int) -> List[int]:
  for i in range(len(nums)):
    for j in range(i + 1, len(nums)):
      if nums[i] + nums[j] == target:
        return [i, j]
  return []`
      }
    },
    {
      id: 2,
      title: 'Hash Map Approach - O(n)',
      languages: {
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
}`,
        java: `public int[] twoSum(int[] nums, int target) {
  Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int diff = target - nums[i];
      if (map.containsKey(diff)) {
        return new int[]{map.get(diff), i};
      }
    map.put(nums[i], i);
  }
  return new int[]{};
}`,
        python: `def twoSum(self, nums: List[int], target: int) -> List[int]:
  mp = {}
  for i, val in enumerate(nums):
    diff = target - val
    if diff in mp:
      return [mp[diff], i]
    mp[val] = i
  return []`
      }
    },
  ]

  const handleCopy = (code: string, id: number) => {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className='min-h-screen py-20 bg-black text-gray-100'>
      <div className='mx-auto px-12 py-12 flex gap-6'>

        <div className='w-1/2 bg-gray-900 border border-gray-800 p-6 rounded-xl h-fit sticky top-6'>
          <h1 className='text-2xl font-bold'>Two Sum</h1>
          <p className='text-sm text-emerald-400 mt-1'>Easy</p>

          <div className='mt-4 space-y-3 text-sm'>
            <p>Given an array of integers <b>nums</b> and an integer <b>target</b>, return indices of the two numbers such that they add up to target.</p>
            <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
            <p>You can return the answer in any order.</p>

            <h3 className='text-lg font-semibold mt-4'>Example 1:</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0,1].`}
            </pre>

            <h3 className='text-lg font-semibold mt-4'>Example 2:</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`Input: nums = [3,2,4], target = 6
Output: [1,2]`}
            </pre>

            <h3 className='text-lg font-semibold mt-4'>Example 3:</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`Input: nums = [3,3], target = 6
Output: [0,1]`}
            </pre>

            <h3 className='text-lg font-semibold mt-4'>Constraints:</h3>
            <ul className='list-disc ml-5 space-y-2'>
              <li><pre className='bg-gray-800 py-1 px-3 rounded-lg'>2 &lt;= nums.length &lt;= 10⁴</pre></li>
              <li><pre className='bg-gray-800 py-1 px-3 rounded-lg'>-10⁹ &lt;= nums[i] &lt;= 10⁹</pre></li>
              <li><pre className='bg-gray-800 py-1 px-3 rounded-lg'>-10⁹ &lt;= target &lt;= 10⁹</pre></li>
              <li><pre className='bg-gray-800 py-1 px-3 rounded-lg'>Only one valid answer exists.</pre></li>
            </ul>
            <p className='mt-4'><b>Follow-up:</b> Can you solve using less than O(n²)?</p>
          </div>
        </div>

        <div className='w-1/2 space-y-4'>
          {problems.map((problem) => {
            const langKeys = Object.keys(problem.languages);
            const activeLang = selectedLang[problem.id] || langKeys[0];
            const activeCode = problem.languages[activeLang as keyof typeof problem.languages];

            return (
              <div key={problem.id} className='bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition'>
                <div className='p-6 border-b border-gray-800'>
                  <h3 className='text-xl font-semibold'>{problem.title}</h3>
                  <div className='flex gap-2 mt-3'>
                    {langKeys.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLang({ ...selectedLang, [problem.id]: lang })}
                        className={`px-3 py-1 rounded-lg text-sm capitalize border transition
                       ${activeLang === lang ? 'bg-cyan-600 border-cyan-400' : 'bg-gray-800 border-gray-700 hover:bg-gray-700'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <div className='relative'>
                  <button
                    onClick={() => handleCopy(activeCode, problem.id)}
                    className='absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 flex items-center gap-2'
                  >
                    {copiedId === problem.id ? <Check className='w-4 h-4 text-green-400' /> : <Copy className='w-4 h-4 text-cyan-400' />}
                    <span className='text-xs'>{copiedId === problem.id ? 'Copied!' : 'Copy'}</span>
                  </button>

                  <SyntaxHighlighterPrism
                    language={activeLang}
                    style={dracula}
                    showLineNumbers
                    wrapLongLines
                    customStyle={{
                      padding: '24px',
                      backgroundColor: '#0a0a0f',
                      fontSize: '14px',
                      borderRadius: '8px',
                    }}
                  >
                    {activeCode}
                  </SyntaxHighlighterPrism>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

}

export default CodeVault
