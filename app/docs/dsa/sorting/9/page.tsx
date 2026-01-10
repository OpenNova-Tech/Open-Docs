'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code1 = `procedure quickSort(A, low, high)
    if low < high then
        pivotIndex = partition(A, low, high)
        quickSort(A, low, pivotIndex - 1)
        quickSort(A, pivotIndex + 1, high)
    end if
end procedure

procedure partition(A, low, high)
    pivot = A[high]
    i = low - 1
    for j = low to high - 1 do
        if A[j] <= pivot then
            i = i + 1
            swap A[i] and A[j]
        end if
    end for
    swap A[i + 1] and A[high]
    return i + 1
end procedure`

	const code2p = `def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

arr = [7, 2, 1, 6, 8, 5, 3, 4]
quick_sort(arr, 0, len(arr) - 1)
print(arr)`

	const code2j = `class QuickSort {
    static int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int idx = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                idx++;
                int temp = arr[idx];
                arr[idx] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[idx + 1];
        arr[idx + 1] = arr[high];
        arr[high] = temp;
        return idx + 1;
    }

    static void quicksort(int arr[], int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quicksort(arr, low, pi - 1);
            quicksort(arr, pi + 1, high);
        }
    }

    public static void main(String args[]) {
        int arr[] = {7, 2, 1, 6, 8, 5, 3, 4};
        quicksort(arr, 0, arr.length - 1);
        System.out.print("Sorted array: ");
        for (int num : arr)
            System.out.print(num + " ");
    }
}`

	const code2c = `#include <iostream>
using namespace std;

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {7, 2, 1, 6, 8, 5, 3, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n - 1);
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
						Quick Sorting
					</h1>
				</motion.header>

				{/* 7.1 Introduction */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>7.1</b> Introduction
					</h2>
					<div className='text-gray-300'>
						Quick Sort is a <b>divide and conquer</b> algorithm that selects a pivot, partitions the array around it, and recursively sorts the subarrays. <br /><br />
						It is generally faster than Merge Sort for smaller datasets due to in-place sorting.
					</div>
				</motion.div>

				{/* 7.2 How it Works */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>7.2</b> How it Works
					</h2>
					<div className='text-gray-300'>
						1. Choose a <b>pivot</b> element (commonly last element).<br />
						2. Rearrange elements so that smaller values go to the left, larger to the right.<br />
						3. Recursively apply Quick Sort to the left and right subarrays.<br />
						4. Continue until all elements are sorted.
					</div>
				</motion.div>

				{/* 7.3 Example */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>7.3</b> Working Procedure
					</h2>
					<div className='text-gray-300'>
						Input: <span className='bg-neutral-800 px-2 rounded-lg'>[7, 2, 1, 6, 8, 5, 3, 4]</span><br /><br />
						Process:<br />
						<b>•</b> Choose pivot = 4<br />
						<b>•</b> Partition → [2, 1, 3] [4] [7, 6, 8, 5]<br />
						<b>•</b> Recursively sort left and right parts<br />
						<b>•</b> Final output → <span className='bg-neutral-800 px-2 rounded-lg'>[1, 2, 3, 4, 5, 6, 7, 8]</span>
					</div>
				</motion.div>

				{/* 7.4 Pseudocode */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>7.4</b> Pseudocode
					</h2>
					<CodeBlock language="pgsql" filename="pseudocode" code={code1} />
				</motion.div>

				{/* 7.5 Implementation */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>7.5</b> Implementation
					</h2>
					<CodeBlock
						language="jsx"
						filename="QuickSort"
						tabs={[
							{ name: "C++", code: code2c, language: "cpp" },
							{ name: "Java", code: code2j, language: "java" },
							{ name: "Python", code: code2p, language: "python" },
						]}
					/>
				</motion.div>

				{/* 7.6 Complexity Analysis */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>7.6</b> Complexity Analysis
					</h2>
					<div className='text-gray-300'>
						<b>•</b> <b>Best Case</b>: O(n log n) <br />
						<b>•</b> <b>Average Case</b>: O(n log n) <br />
						<b>•</b> <b>Worst Case</b>: O(n²) (when pivot is smallest/largest)<br />
						<b>•</b> <b>Space Complexity</b>: O(log n) <br />
						<b>•</b> <b>Stability</b>: ❌ Unstable
					</div>
				</motion.div>

				{/* 7.7 Real Life Use Cases */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>7.7</b> Real-Life Use Cases
					</h2>
					<div className='text-gray-300'>
						Quick Sort is used in:<br />
						<b>•</b> Built-in sorting functions like C’s `qsort()`.<br />
						<b>•</b> Systems where <b>in-place sorting</b> is preferred.<br />
						<b>•</b> Optimized libraries and database systems.
					</div>
				</motion.div>

				{/* 7.8 Key Takeaways */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03 }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>7.8</b> Key Takeaways
					</h2>
					<div className='text-gray-300'>
						<b>•</b> Quick Sort follows the <b>divide and conquer</b> method.<br />
						<b>•</b> Performs best on average and for in-memory datasets.<br />
						<b>•</b> Unstable but efficient and <b>in-place</b>.<br />
						<b>•</b> Ideal for arrays where <b>extra space is limited</b>.
					</div>
				</motion.div>

				{/* Navigation */}
				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='8'>
						<button className='bg-transparent border border-[#16a085] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='10'>
						<button className='bg-transparent border border-[#16a085] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}
