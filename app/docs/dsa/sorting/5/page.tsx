'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'

export default function page() {
	const code1 = `procedure bubbleSort(A : list of sortable items)
    n = length(A)
    repeat
        swapped = false
        for i = 1 to n-1 do
            if A[i-1] > A[i] then
                swap(A[i-1], A[i])
                swapped = true
        end for
    until not swapped
end procedure`

	const code2p = `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

arr = [5, 3, 8, 4, 2]
bubble_sort(arr)
print(arr)`

	const code2j = `class BubbleSort {
    void sort(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    public static void main(String args[]) {
        int arr[] = {5, 3, 8, 4, 2};
        new BubbleSort().sort(arr);
        for (int num : arr)
            System.out.print(num + " ");
    }
}`

	const code2c  =`#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int n = sizeof(arr)/sizeof(arr[0]);

    bubbleSort(arr, n);

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}`

	const code3c = `#include <iostream>
using namespace std;

void optimizedBubbleSort(int arr[], int n) {
    bool swapped;
    for (int i = 0; i < n-1; i++) {
        swapped = false;
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
                swapped = true;
            }
        }
        if (!swapped) break; // stop early if no swaps
    }
}

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int n = sizeof(arr)/sizeof(arr[0]);

    optimizedBubbleSort(arr, n);

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}`

	const code3j = `class OptimizedBubbleSort {
    void sort(int arr[]) {
        int n = arr.length;
        boolean swapped;
        for (int i = 0; i < n-1; i++) {
            swapped = false;
            for (int j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // stop early
        }
    }

    public static void main(String args[]) {
        int arr[] = {5, 3, 8, 4, 2};
        new OptimizedBubbleSort().sort(arr);
        for (int num : arr)
            System.out.print(num + " ");
    }
}`

	const code3p = `def optimized_bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break  # stop early

arr = [5, 3, 8, 4, 2]
optimized_bubble_sort(arr)
print(arr)`

	const code4c = `#include <iostream>
using namespace std;

void recursiveBubbleSort(int arr[], int n) {
    if (n == 1) return; // base case

    for (int i = 0; i < n-1; i++) {
        if (arr[i] > arr[i+1])
            swap(arr[i], arr[i+1]);
    }

    recursiveBubbleSort(arr, n-1); // recurse for remaining
}

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int n = sizeof(arr)/sizeof(arr[0]);

    recursiveBubbleSort(arr, n);

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}`

	const code4j = `class RecursiveBubbleSort {
    void sort(int arr[], int n) {
        if (n == 1) return; // base case

        for (int i = 0; i < n-1; i++) {
            if (arr[i] > arr[i+1]) {
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }

        sort(arr, n-1); // recurse
    }

    public static void main(String args[]) {
        int arr[] = {5, 3, 8, 4, 2};
        new RecursiveBubbleSort().sort(arr, arr.length);
        for (int num : arr)
            System.out.print(num + " ");
    }
}`

	const code4p = `def recursive_bubble_sort(arr, n=None):
    if n is None:
        n = len(arr)
    if n == 1:
        return

    for i in range(n-1):
        if arr[i] > arr[i+1]:
            arr[i], arr[i+1] = arr[i+1], arr[i]

    recursive_bubble_sort(arr, n-1)

arr = [5, 3, 8, 4, 2]
recursive_bubble_sort(arr)
print(arr)`

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
						Bubble Sorting
					</h1>
				</motion.header>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>5.1</b> Introduction
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly compares adjacent elements and swaps them if they are in the wrong order. The process continues until the entire list is sorted. <br />
						<br />
						It is mainly used for learning purposes due to its simplicity but is inefficient for large datasets.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>5.2</b> How it Works
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						1. Start from the first element. <br />
						2. Compare it with the next element. <br />
						3. If the first element is greater, swap them. <br />
						4. Move to the next pair and repeat until the end of the array. <br />
						5. After each pass, the largest element &quot;bubbles up&quot; to its correct position. <br />
						6. Repeat the process for the remaining unsorted part.
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>5.3</b> Working Procedure
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Input: <br />
						<span className='bg-neutral-800 px-2 rounded-lg'>[5, 3, 8, 4, 2]</span> <br />
						<br />
						Process: <br />
						• Pass 1 → <span className='bg-neutral-800 px-2 rounded-lg'>[3, 5, 4, 2, 8]</span> <br />
						• Pass 2 → <span className='bg-neutral-800 px-2 rounded-lg'>[3, 4, 2, 5, 8]</span> <br />
						• Pass 3 → <span className='bg-neutral-800 px-2 rounded-lg'>[3, 2, 4, 5, 8]</span> <br />
						• Pass 4 → <span className='bg-neutral-800 px-2 rounded-lg'>[2, 3, 4, 5, 8]</span> <br />
						<br />
						Output: <br />
						<span className='bg-neutral-800 px-2 rounded-lg'>[2, 3, 4, 5, 8]</span>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>5.4</b> Pseudocode
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<CodeBlock language="pgsql" filename="pseudocode" code={code1} />
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>5.5</b> Implementation
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						<CodeBlock
							language="jsx"
							filename="DummyComponent.jsx"
							tabs={[
								{ name: "C++", code: code2c, language: "cpp" },
								{ name: "Java", code: code2j, language: "java" },
								{ name: "Python", code: code2p, language: "python" },
							]}
						/>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>5.6</b> Complexity Analysis
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <b>Best Case (Already Sorted)</b>: O(n) with optimization <br />
						• <b>Average Case</b>: O(n²) <br />
						• <b>Worst Case</b>: O(n²) <br />
						• <b>Space Complexity</b>: O(1) (in-place) <br />
						• <b>Stability</b>: ✔️ Stable (equal elements retain order)
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>5.7</b> Variants
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• <b>Optimized Bubble Sort</b>: O(n) Stops early if no swaps occur in a pass. <br />
						<br />
						<CodeBlock
							language="jsx"
							filename="DummyComponent.jsx"
							tabs={[
								{ name: "C++", code: code3c, language: "cpp" },
								{ name: "Java", code: code3j, language: "java" },
								{ name: "Python", code: code3p, language: "python" },
							]}
						/>
						<br />
						• <b>Recursive Bubble Sort</b>: Uses recursion instead of loops. <br />
						<br />
						<CodeBlock
							language="jsx"
							filename="DummyComponent.jsx"
							tabs={[
								{ name: "C++", code: code4c, language: "cpp" },
								{ name: "Java", code: code4j, language: "java" },
								{ name: "Python", code: code4p, language: "python" },
							]}
						/>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>5.8</b> Real-Life Use Cases
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						Rarely used in practice, but helpful for: <br />
						• Teaching the fundamentals of sorting <br />
						• Small datasets with nearly sorted data <br />
						• Detecting if a list is already sorted
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } }}
					className='shadow-[#16a085] border border-[#16a085]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
				>
					<h2 className='text-2xl font-bold mb-4 text-gray-100'>
						<b className='text-[#16a085]'>5.9</b> Key Takeaways
					</h2>
					<div className='max-w-3xl mx-auto text-gray-300'>
						• Bubble Sort is <b>easy to understand</b> but <b>inefficient</b> for large inputs. <br />
						• Time complexity: <b>O(n²)</b> (generally not practical). <br />
						• Useful mainly for <b>educational purposes</b>.
					</div>
				</motion.div>

				<motion.div
					className='flex justify-center gap-6 pt-20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href='4'>
						<button className='bg-transparent border border-[#16a085] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'>
							← View Previous
						</button>
					</Link>
					<Link href='6'>
						<button className='bg-transparent border border-[#16a085] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'>
							View Next →
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	)
}