"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function JavaScriptDocPage() {
	const code1 = `class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n = nums.size();
        int low = 0;
        int high = n - 1;
        if(n == 2) {
            if(target == nums[0]) {
                return 0;
            }
            else if(target == nums[1]) {
                return 1;
            }
            else {
                return -1;
            }
        }
        int pivot = -1;
        while(low <= high) {
            int mid = low + (high - low) / 2;
            if(mid == 0) {
                low = mid + 1;
            }
            else if(mid == (n - 1)) {
                high = mid - 1;
            }
            else if((nums[mid] < nums[mid + 1]) && (nums[mid] < nums[mid - 1])) {
                pivot = mid;
                break;
            }
            else if((nums[mid] > nums[mid + 1]) && (nums[mid] > nums[mid - 1])) {
                pivot = mid + 1;
                break;
            }
            else if(nums[mid] > nums[high]) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        if(pivot == -1) {
            int low = 0;
            int high = n - 1;
            while(low <= high) {
                int mid = low + (high - low) / 2;
                if(nums[mid] == target) {
                    return mid;
                }
                else if(nums[mid] > target) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
            }
            return -1;
        }
        else if((target >= nums[0]) && (target <= nums[pivot - 1])) {
            int low = 0;
            int high = pivot - 1;
            while(low <= high) {
                int mid = low + (high - low) / 2;
                if(nums[mid] == target) {
                    return mid;
                }
                else if(nums[mid] > target) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
            }
        }
        else {
            int low = pivot;
            int high = n - 1;
            while(low <= high) {
                int mid = low + (high - low) / 2;
                if(nums[mid] == target) {
                    return mid;
                }
                else if(nums[mid] > target) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
            }
        }
        return -1;
    }
};`


	return (
    // <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900 py-12 px-6">
    <main className="min-h-screen from-white to-gray-100 dark:bg-black  py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-amber-400 bg-black">
            Search in Rotated Sorted Array - Medium
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
						<CodeBlock language="cpp" filename="searchInRotatedSortedArray.cpp" code={code1} /> 
          </div>
        </section>
      </div>
    </main>
  );
}
