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
      title: 'Binary Search Approach - O(log n)',
      languages: {
        cpp: `int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) 
            return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) 
                right = mid - 1;
            else 
                left = mid + 1;
        }
        else {
            if (nums[mid] < target && target <= nums[right]) 
                left = mid + 1;
            else 
                right = mid - 1;
        }
    }
    return -1;
}`,
        java: `public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target)
            return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid])
                right = mid - 1;
            else
                left = mid + 1;
        }
        else {
            if (nums[mid] < target && target <= nums[right])
                left = mid + 1;
            else
                right = mid - 1;
        }
    }
    return -1;
}`,
        python: `def search(self, nums: List[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target and target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target and target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1`
      }
    },
    {
      id: 2,
      title: 'Pivot + Binary Search Approach - O(log n)',
      languages: {
        cpp: `int search(vector<int>& nums, int target) {
    int n = nums.size();
    int left = 0, right = n - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[right])
            left = mid + 1;
        else
            right = mid;
    }
    int pivot = left;
    left = 0; 
    right = n - 1;
    if (target >= nums[pivot] && target <= nums[right]) {
        left = pivot;
    } else {
        right = pivot - 1;
    }
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}`,
        java: `public int search(int[] nums, int target) {
    int n = nums.length;
    int left = 0, right = n - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[right])
            left = mid + 1;
        else
            right = mid;
    }
    int pivot = left;
    left = 0;
    right = n - 1;
    if (target >= nums[pivot] && target <= nums[right]) {
        left = pivot;
    } else {
        right = pivot - 1;
    }
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}`,
        python: `def search(self, nums: List[int], target: int) -> int:
    n = len(nums)
    left, right = 0, n - 1
    while left < right:
        mid = left + (right - left) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    pivot = left
    left, right = 0, n - 1
    if nums[pivot] <= target <= nums[right]:
        left = pivot
    else:
        right = pivot - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            right = mid - 1
        else:
            left = mid + 1
    return -1`
      }
    }
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
          <h1 className='text-2xl font-bold'>Search in Rotated Sorted Array</h1>
          <p className='text-sm text-amber-400 mt-1'>Medium</p>

          <div className='mt-4 space-y-3 text-sm'>
            <p>There is an integer array nums sorted in ascending order (with distinct values).</p>
            <p>Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 &lt;= k &lt; nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].</p>
            <p>Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.</p>
            <p>You must write an algorithm with O(log n) runtime complexity.</p>

            <h3 className='text-lg font-semibold mt-4'>Example 1:</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4`}
            </pre>

            <h3 className='text-lg font-semibold mt-4'>Example 2:</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1`}
            </pre>

            <h3 className='text-lg font-semibold mt-4'>Example 3:</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`Input: nums = [1], target = 0
Output: -1`}
            </pre>

            <h3 className='text-lg font-semibold mt-4'>Constraints:</h3>
            <ul className='list-disc ml-5 space-y-2'>
              <li><pre className='bg-gray-800 py-1 px-3 rounded-lg'>1 &lt;= nums.length &lt;= 5000</pre></li>
              <li><pre className='bg-gray-800 py-1 px-3 rounded-lg'>-104 &lt;= nums[i] &lt;= 104</pre></li>
              <li><pre className='bg-gray-800 py-1 px-3 rounded-lg'>All values of nums are unique.</pre></li>
              <li><pre className='bg-gray-800 py-1 px-3 rounded-lg'>nums is an ascending array that is possibly rotated.</pre></li>
              <li><pre className='bg-gray-800 py-1 px-3 rounded-lg'>-104 &lt;= target &lt;= 104</pre></li>
            </ul>
          </div>
        </div>

        <div className='w-1/2 space-y-4'>
          {problems.map((problem) => {
            const langKeys = Object.keys(problem.languages)
            const activeLang = selectedLang[problem.id] || langKeys[0]
            const activeCode = problem.languages[activeLang as keyof typeof problem.languages]

            return (
              <div key={problem.id} className='bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition'>
                <div className='p-6 border-b border-gray-800'>
                  <h3 className='text-xl font-semibold'>{problem.title}</h3>
                  <div className='flex gap-2 mt-3'>
                    {langKeys.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLang({ ...selectedLang, [problem.id]: lang })}
                        className={`cursor-pointer px-3 py-1 rounded-lg text-sm capitalize border transition
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
                    <span className='text-xs cursor-pointer'>{copiedId === problem.id ? 'Copied!' : 'Copy'}</span>
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
