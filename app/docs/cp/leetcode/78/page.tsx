"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function JavaScriptDocPage() {
	const code1 = `class Solution {
public:
    void helper(vector<int>& nums, vector<int> ans, vector<vector<int>>& finalAns, int idx) {
        if(idx == nums.size()) {
            finalAns.push_back(ans); 
            return;
        }
        helper(nums, ans, finalAns, idx + 1);
        ans.push_back(nums[idx]);
        helper(nums, ans, finalAns, idx + 1);
    }

    vector<vector<int>> subsets(vector<int>& nums) {
        vector<int> ans;
        vector<vector<int>> finalAns;
        helper(nums, ans, finalAns, 0);
        return finalAns;
    }
};`


	return (
    // <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900 py-12 px-6">
    <main className="min-h-screen from-white to-gray-100 dark:bg-black  py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-amber-400 bg-black">
            Subsets - Medium
          </h1>
        </header>
        <section className="shadow-amber-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            <b className="text-amber-400">1.1</b> Problem Statement
          </h2>
          <div className="max-w-3xl mx-auto">

          </div>
        </section>
				<section className="shadow-amber-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            <b className="text-amber-400">1.2</b> Solution in C++
          </h2>
          <div className="max-w-3xl mx-auto">
						<CodeBlock language="cpp" filename="subsets.cpp" code={code1} /> 
          </div>
        </section>
      </div>
    </main>
  );
}
