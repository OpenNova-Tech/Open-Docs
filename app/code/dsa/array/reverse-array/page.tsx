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
			title: 'Reverse Array (Iterative)',
			languages: {
				c: `#include <stdio.h>

void reverse(int arr[], int n) {
  int start = 0, end = n - 1;
  while (start < end) {
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

int main() {
  int n;
  scanf("%d", &n);

  int arr[n];
  for (int i = 0; i < n; i++) {
    scanf("%d", &arr[i]);
  }

  reverse(arr, n);

  for (int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
  }

  return 0;
}`,

				cpp: `#include <bits/stdc++.h>
using namespace std;

void reverseArray(vector<int>& arr) {
  int start = 0, end = arr.size() - 1;
  while (start < end) {
    swap(arr[start], arr[end]);
    start++;
    end--;
  }
}

int main() {
  int n;
  cin >> n;

  vector<int> arr(n);
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  reverseArray(arr);

  for (int x : arr) {
    cout << x << " ";
  }

  return 0;
}`,

				java: `import java.util.*;

public class Main {

  public static void reverse(int[] arr) {
    int start = 0, end = arr.length - 1;
    while (start < end) {
      int temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();
    int[] arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = sc.nextInt();
    }

    reverse(arr);

    for (int i = 0; i < n; i++) {
      System.out.print(arr[i] + " ");
    }
  }
}`,

				python: `def reverse(arr):
  start, end = 0, len(arr) - 1
  while start < end:
    arr[start], arr[end] = arr[end], arr[start]
    start += 1
    end -= 1

n = int(input())
arr = list(map(int, input().split()))

reverse(arr)

print(*arr)`,

				perl: `sub reverse_array {
  my @arr = @_;
  my $start = 0;
  my $end = $#arr;

  while ($start < $end) {
    my $temp = $arr[$start];
    $arr[$start] = $arr[$end];
    $arr[$end] = $temp;
    $start++;
    $end--;
  }

  return @arr;
}

my $n = <STDIN>;
chomp($n);

my @arr = split(' ', <STDIN>);

@arr = reverse_array(@arr);

print "@arr\\n";`
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
			<div className='mx-auto px-4 md:px-10 py-6 md:py-12 flex flex-col lg:flex-row gap-6'>

				<div className='w-full lg:w-1/2 bg-gray-900 border border-gray-800 p-6 rounded-xl h-fit lg:sticky lg:top-6'>

					{/* Title */}
					<h1 className='text-2xl font-bold'>Reverse Array</h1>
					<p className='text-sm text-cyan-400 mt-1'>Fundamental Array Problem</p>

					{/* Tags */}
					<div className='flex gap-2 mt-3'>
						<span className='px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded border border-cyan-500/20'>
							Array
						</span>
						<span className='px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded border border-gray-700'>
							Two Pointer
						</span>
					</div>

					<div className='mt-5 space-y-5 text-sm text-gray-300'>

						{/* Description */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Problem</h3>
							<p>
								Given an array, reverse its elements in-place without using extra space.
							</p>
							<p className='mt-2'>
								The first element becomes last, second becomes second-last, and so on.
							</p>
						</div>

						{/* Example */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Example</h3>
							<pre className='bg-gray-800 p-3 rounded-lg'>
								{`Input:  [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]`}
							</pre>
						</div>

						{/* Approach */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Approach</h3>
							<ul className='list-disc ml-5 space-y-2'>
								<li>Use two pointers: one at the start and one at the end</li>
								<li>Swap elements at both positions</li>
								<li>Move pointers toward the center</li>
								<li>Stop when both pointers meet</li>
							</ul>
						</div>

						{/* Complexity */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Complexity</h3>
							<div className='space-y-1'>
								<p><span className='text-cyan-400'>Time:</span> O(n)</p>
								<p><span className='text-cyan-400'>Space:</span> O(1)</p>
							</div>
						</div>

						{/* Edge Cases */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Edge Cases</h3>
							<ul className='list-disc ml-5 space-y-2'>
								<li>Empty array → returns empty</li>
								<li>Single element → remains unchanged</li>
								<li>Even vs odd length arrays</li>
							</ul>
						</div>

						{/* Other Approaches */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Other Approaches</h3>
							<ul className='list-disc ml-5 space-y-2'>
								<li>Using an extra array (O(n) space)</li>
								<li>Using built-in reverse functions</li>
								<li>Recursive approach</li>
							</ul>
						</div>

						{/* Key Insight */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Key Insight</h3>
							<p>
								In-place swapping avoids extra memory usage and is the most optimal way to reverse an array.
							</p>
						</div>

					</div>
				</div>

				<div className='w-full lg:w-1/2 space-y-5'>

					{problems.map((problem) => {
						const langKeys = Object.keys(problem.languages)

						const langLabels: Record<string, string> = {
							c: "C",
							cpp: "C++",
							java: "Java",
							python: "Python",
							perl: "Perl"
						}

						const activeLang = selectedLang[problem.id] || langKeys[0]
						const activeCode =
							problem.languages[activeLang as keyof typeof problem.languages]

						return (
							<div
								key={problem.id}
								className='relative group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden transition hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10'
							>
								{/* Glow */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/5 blur-xl transition pointer-events-none" />

								{/* Header */}
								<div className='p-6 border-b border-gray-800 flex flex-col md:flex-row md:items-center justify-between flex-wrap gap-4'>
									<h3 className='text-lg font-semibold text-white'>
										{problem.title}
									</h3>

									{/* Language Switch */}
									<div className='flex gap-2 flex-wrap'>
										{langKeys.map((lang) => (
											<button
												key={lang}
												onClick={() =>
													setSelectedLang({
														...selectedLang,
														[problem.id]: lang
													})
												}
												className={`px-2 py-1 text-[10px] md:text-xs rounded-lg font-medium border transition-all duration-200 cursor-pointer
                  ${activeLang === lang
														? 'bg-cyan-600 border-cyan-400 text-white shadow-md shadow-cyan-500/20'
														: 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
													}`}
											>
												{langLabels[lang] || lang.toUpperCase()}
											</button>
										))}
									</div>
								</div>

								{/* Code Block */}
								<div className='relative'>

									{/* Copy Button */}
									<button
										onClick={() => handleCopy(activeCode, problem.id)}
										className='absolute top-4 right-4 z-10 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 flex items-center gap-2 text-xs transition-all duration-200 active:scale-90 cursor-pointer'
									>
										{copiedId === problem.id ? (
											<Check className='w-4 h-4 text-green-400' />
										) : (
											<Copy className='w-4 h-4 text-cyan-400' />
										)}
										<span>
											{copiedId === problem.id ? 'Copied' : 'Copy'}
										</span>
									</button>

									{/* Code */}
									<div className="overflow-x-auto">
									<SyntaxHighlighterPrism
										language={activeLang}
										style={dracula}
										showLineNumbers
										wrapLongLines
										customStyle={{
											padding: '24px',
											backgroundColor: '#0a0a0f',
											fontSize: '14px',
											borderRadius: '0px',
											margin: 0
										}}
									>
										{activeCode}
									</SyntaxHighlighterPrism>
									</div>
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
