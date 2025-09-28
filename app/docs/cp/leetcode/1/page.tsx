"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function JavaScriptDocPage() {
	const code1 = `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> answer(2);
        for(int i = 0; i < nums.size() - 1; i++) {
            for(int j = i + 1; j < nums.size(); j++) {
                if(nums[i] + nums[j] == target) {
                    answer[0] = i;
                    answer[1] = j;
                    break;
                }
            }
        }
        return answer;
    }
};`


	return (
    // <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900 py-12 px-6">
    <main className="min-h-screen from-white to-gray-100 dark:bg-black  py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-amber-400 bg-black">
            Two Sum - Easy
          </h1>
        </header>
        <section className="shadow-amber-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            <b className="text-amber-400">1.1</b> Problem Statement
          </h2>
          <div className="max-w-3xl mx-auto">
						Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. <br />
						<br />
						You may assume that each input would have exactly one solution, and you may not use the same element twice. <br />
						<br />
						You can return the answer in any order. <br />
						<br />
						Example 1: <br />
						Input: nums = [2,7,11,15], target = 9 <br />
						Output: [0,1] <br />
						Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. <br />
						<br />
						Example 2: <br />
						Input: nums = [3,2,4], target = 6 <br />
						Output: [1,2] <br />
						<br />
						Example 3: <br />
						Input: nums = [3,3], target = 6 <br />
						Output: [0,1] <br />
						<br />
						Constraints: <br />
						<br />
						2 &lt;= nums.length &lt;= 104 <br />
						-109 &lt;= nums[i] &lt;= 109 <br />
						-109 &lt;= target &lt;= 109 <br />
						Only one valid answer exists. <br />
						<br />
						Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
          </div>
        </section>
				<section className="shadow-amber-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            <b className="text-amber-400">1.2</b> Solution in C++
          </h2>
          <div className="max-w-3xl mx-auto">
						<CodeBlock language="cpp" filename="twoSum.cpp" code={code1} /> 
          </div>
        </section>
      </div>
    </main>
  );
}
