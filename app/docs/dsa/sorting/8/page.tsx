'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code1 = `procedure mergeSort(A : list of sortable items)
    if length(A) > 1 then
        mid = length(A) / 2
        left = A[0..mid-1]
        right = A[mid..end]

        mergeSort(left)
        mergeSort(right)

        i = j = k = 0
        while i < length(left) and j < length(right) do
            if left[i] <= right[j] then
                A[k] = left[i]
                i = i + 1
            else
                A[k] = right[j]
                j = j + 1
            k = k + 1
        end while

        while i < length(left) do
            A[k] = left[i]
            i = i + 1
            k = k + 1
        end while

        while j < length(right) do
            A[k] = right[j]
            j = j + 1
            k = k + 1
        end while
    end if
end procedure`

	const code2p = `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left = arr[:mid]
        right = arr[mid:]

        merge_sort(left)
        merge_sort(right)

        i = j = k = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1

        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1

arr = [5, 3, 8, 4, 2]
merge_sort(arr)
print(arr)`

	const code2j = `class MergeSort {
    void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;

        int L[] = new int[n1];
        int R[] = new int[n2];

        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0;
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    void sort(int arr[], int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;
            sort(arr, l, m);
            sort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }

    public static void main(String args[]) {
        int arr[] = {5, 3, 8, 4, 2};
        new MergeSort().sort(arr, 0, arr.length - 1);
        for (int num : arr)
            System.out.print(num + " ");
    }
}`

	const code2c = `#include <iostream>
using namespace std;

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[n1], R[n2];

    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = (l + r) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int n = sizeof(arr)/sizeof(arr[0]);
    mergeSort(arr, 0, n-1);
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}`

	return (
		<main className='pt-32 dark:bg-black py-12 px-6'>
			<div className='max-w-4xl mx-auto space-y-12'>
				<motion.header
					className='text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#16a085] bg-black'>
						Merge Sorting
					</h1>
				</motion.header>

				{/* 5.1 Introduction */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>6.1</b> Introduction
					</h2>
					<div className='text-gray-300'>
						Merge Sort is a <b>divide and conquer</b> algorithm that divides the array into halves, sorts each half recursively, and then merges them together. <br /><br />
						It is highly efficient for large datasets and guarantees a time complexity of <b>O(n log n)</b>.
					</div>
				</motion.div>

				{/* 6.2 How it Works */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>6.2</b> How it Works
					</h2>
					<div className='text-gray-300'>
						1. Divide the array into two halves.<br />
						2. Recursively sort each half.<br />
						3. Merge the two sorted halves into a single sorted array.<br />
						4. Continue until the entire array is sorted.
					</div>
				</motion.div>

				{/* 6.3 Example */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>6.3</b> Working Procedure
					</h2>
					<div className='text-gray-300'>
						Input: <span className='bg-neutral-800 px-2 rounded-lg'>[5, 3, 8, 4, 2]</span><br /><br />
						Process:<br />
						• Split into [5, 3, 8] and [4, 2]<br />
						• Split further → [5], [3, 8], [4], [2]<br />
						• Merge step by step → [3, 5, 8], [2, 4]<br />
						• Final merge → <span className='bg-neutral-800 px-2 rounded-lg'>[2, 3, 4, 5, 8]</span>
					</div>
				</motion.div>

				{/* 6.4 Pseudocode */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>6.4</b> Pseudocode
					</h2>
					<CodeBlock language="pgsql" filename="pseudocode" code={code1} />
				</motion.div>

				{/* 6.5 Implementation */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>6.5</b> Implementation
					</h2>
					<CodeBlock
						language="jsx"
						filename="MergeSort"
						tabs={[
							{ name: "C++", code: code2c, language: "cpp" },
							{ name: "Java", code: code2j, language: "java" },
							{ name: "Python", code: code2p, language: "python" },
						]}
					/>
				</motion.div>

				{/* 6.6 Complexity Analysis */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>6.6</b> Complexity Analysis
					</h2>
					<div className='text-gray-300'>
						• <b>Best Case</b>: O(n log n) <br />
						• <b>Average Case</b>: O(n log n) <br />
						• <b>Worst Case</b>: O(n log n) <br />
						• <b>Space Complexity</b>: O(n) <br />
						• <b>Stability</b>: ✔️ Stable
					</div>
				</motion.div>

				{/* 6.7 Real Life Use Cases */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>6.7</b> Real-Life Use Cases
					</h2>
					<div className='text-gray-300'>
						Merge Sort is widely used in:<br />
						• External sorting (large datasets that don’t fit in memory).<br />
						• Linked lists sorting.<br />
						• In stable sorting operations in databases and libraries.
					</div>
				</motion.div>

				{/* 6.8 Key Takeaways */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>6.8</b> Key Takeaways
					</h2>
					<div className='text-gray-300'>
						• Merge Sort follows the <b>divide and conquer</b> strategy.<br />
						• Consistent time complexity of <b>O(n log n)</b>.<br />
						• Requires extra space but is <b>stable and predictable</b>.<br />
						• Suitable for <b>large datasets</b> and linked lists.
					</div>
				</motion.div>

				{/* Navigation */}
				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='7'>
						<button className='bg-transparent border border-[#16a085] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='9'>
						<button className='bg-transparent border border-[#16a085] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
