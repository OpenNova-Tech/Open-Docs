'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Prism as SyntaxHighlighterPrism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type LanguageMap = {
  [key: string]: string
}

const CodeVault = () => {
	const [copiedId, setCopiedId] = useState<number | null>(null)
	const [selectedLang, setSelectedLang] = useState<{ [key: number]: string }>({})

	const problems = [
		{
			id: 1,
			title: 'Second Largest (Sorting Approach)',
			complexity: {
				time: 'O(n log n)',
				space: 'O(1)'
			},
			languages: {
				cpp: `#include <bits/stdc++.h>
using namespace std;

int secondLargest(vector<int> arr) {
    int n = arr.size();
    if (n < 2) return INT_MIN;

    sort(arr.begin(), arr.end());
    int largest = arr[n - 1];

    for (int i = n - 2; i >= 0; i--) {
        if (arr[i] != largest) {
            return arr[i];
        }
    }
    return INT_MIN;
}

int main() {
    int n;
    cin >> n;

    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];

    int result = secondLargest(arr);

    if (result == INT_MIN)
        cout << "No valid second largest element";
    else
        cout << result;

    return 0;
}`,
				java: `import java.util.*;

public class Main {
    public static int secondLargest(int[] arr) {
        int n = arr.length;
        if (n < 2) return Integer.MIN_VALUE;

        Arrays.sort(arr);
        int largest = arr[n - 1];

        for (int i = n - 2; i >= 0; i--) {
            if (arr[i] != largest) {
                return arr[i];
            }
        }
        return Integer.MIN_VALUE;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();

        int result = secondLargest(arr);

        if (result == Integer.MIN_VALUE)
            System.out.println("No valid second largest element");
        else
            System.out.println(result);

        sc.close();
    }
}`,
				py: `import sys

def secondLargest(arr):
    n = len(arr)
    if n < 2:
        return -sys.maxsize - 1   # equivalent to INT_MIN

    arr.sort()
    largest = arr[-1]

    for i in range(n - 2, -1, -1):
        if arr[i] != largest:
            return arr[i]

    return -sys.maxsize - 1


# main
n = int(input())
arr = list(map(int, input().split()))

result = secondLargest(arr)

if result == -sys.maxsize - 1:
    print("No valid second largest element")
else:
    print(result)`
			} as LanguageMap
		},
		{
			id: 2,
			title: 'Second Largest (Two Pass Approach)',
			complexity: {
				time: 'O(n)',
				space: 'O(1)'
			},
			languages: {
				cpp: `#include <bits/stdc++.h>
using namespace std;

int secondLargest(vector<int> arr) {
    int n = arr.size();
    if (n < 2) return INT_MIN;

    int largest = *max_element(arr.begin(), arr.end());

    int second = INT_MIN;
    bool found = false;

    for (int num : arr) {
        if (num != largest && num > second) {
            second = num;
            found = true;
        }
    }

    return found ? second : INT_MIN;
}

int main() {
    int n;
    cin >> n;

    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];

    int result = secondLargest(arr);

    if (result == INT_MIN)
        cout << "No valid second largest element";
    else
        cout << result;

    return 0;
}`,
				java: `import java.util.*;

public class Main {
    public static int secondLargest(int[] arr) {
        int n = arr.length;
        if (n < 2) return Integer.MIN_VALUE;

        int largest = Arrays.stream(arr).max().getAsInt();

        int second = Integer.MIN_VALUE;
        boolean found = false;

        for (int num : arr) {
            if (num != largest && num > second) {
                second = num;
                found = true;
            }
        }

        return found ? second : Integer.MIN_VALUE;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();

        int result = secondLargest(arr);

        if (result == Integer.MIN_VALUE)
            System.out.println("No valid second largest element");
        else
            System.out.println(result);

        sc.close();
    }
}`,
				python: `import sys

def secondLargest(arr):
    n = len(arr)
    if n < 2:
        return -sys.maxsize - 1

    largest = max(arr)

    second = -sys.maxsize - 1
    found = False

    for num in arr:
        if num != largest and num > second:
            second = num
            found = True

    return second if found else -sys.maxsize - 1


# main
n = int(input())
arr = list(map(int, input().split()))

result = secondLargest(arr)

if result == -sys.maxsize - 1:
    print("No valid second largest element")
else:
    print(result)`
			} as LanguageMap
		},
		{
			id: 3,
			title: 'Second Largest (Single Pass Approach)',
			complexity: {
				time: 'O(n)',
				space: 'O(1)'
			},
			languages: {
				cpp: `#include <bits/stdc++.h>
using namespace std;

int secondLargest(vector<int> arr) {
    int n = arr.size();
    if (n < 2) return INT_MIN;

    int largest = INT_MIN, second = INT_MIN;
    bool found = false;

    for (int num : arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num < largest && num > second) {
            second = num;
            found = true;
        }
    }

    return found ? second : INT_MIN;
}

int main() {
    int n;
    cin >> n;

    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];

    int result = secondLargest(arr);

    if (result == INT_MIN)
        cout << "No valid second largest element";
    else
        cout << result;

    return 0;
}`,
				java: `import java.util.*;

public class Main {
    public static int secondLargest(int[] arr) {
        int n = arr.length;
        if (n < 2) return Integer.MIN_VALUE;

        int largest = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        boolean found = false;

        for (int num : arr) {
            if (num > largest) {
                second = largest;
                largest = num;
            } else if (num < largest && num > second) {
                second = num;
                found = true;
            }
        }

        return found ? second : Integer.MIN_VALUE;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();

        int result = secondLargest(arr);

        if (result == Integer.MIN_VALUE)
            System.out.println("No valid second largest element");
        else
            System.out.println(result);

        sc.close();
    }
}`,
				py: `import sys

def secondLargest(arr):
    n = len(arr)
    if n < 2:
        return -sys.maxsize - 1

    largest = -sys.maxsize - 1
    second = -sys.maxsize - 1
    found = False

    for num in arr:
        if num > largest:
            second = largest
            largest = num
        elif num < largest and num > second:
            second = num
            found = True

    return second if found else -sys.maxsize - 1


# main
n = int(input())
arr = list(map(int, input().split()))

result = secondLargest(arr)

if result == -sys.maxsize - 1:
    print("No valid second largest element")
else:
    print(result)`
			}
		},
		{
			id: 4,
			title: 'Second Largest (Using Set)',
			complexity: {
				time: 'O(n log n)',
				space: 'O(n)'
			},
			languages: {
				cpp: `#include <bits/stdc++.h>
using namespace std;

int secondLargest(vector<int>& arr) {
  set<int> s(arr.begin(), arr.end());

  if (s.size() < 2) return INT_MIN;

  auto it = s.rbegin();
  it++;

  return *it;
}

int main() {
  int n;
  cin >> n;

  vector<int> arr(n);
  for (int i = 0; i < n; i++) cin >> arr[i];

  int ans = secondLargest(arr);

  if (ans == INT_MIN) cout << "No second largest element";
  else cout << ans;
}`,
				java: `import java.util.*;

public class Main {
    public static int secondLargest(int[] arr) {
        Set<Integer> set = new TreeSet<>();

        for (int num : arr) {
            set.add(num);
        }

        if (set.size() < 2) return Integer.MIN_VALUE;

        List<Integer> list = new ArrayList<>(set);
        return list.get(list.size() - 2);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();

        int ans = secondLargest(arr);

        if (ans == Integer.MIN_VALUE)
            System.out.println("No second largest element");
        else
            System.out.println(ans);

        sc.close();
    }
}`,
				py: `import sys

def secondLargest(arr):
    s = sorted(set(arr))

    if len(s) < 2:
        return -sys.maxsize - 1

    return s[-2]


# main
n = int(input())
arr = list(map(int, input().split()))

ans = secondLargest(arr)

if ans == -sys.maxsize - 1:
    print("No second largest element")
else:
    print(ans)`
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
					<h1 className='text-2xl font-bold'>Second Highest Element</h1>
					<p className='text-sm text-cyan-400 mt-1'>Fundamental Array Problem</p>

					{/* Tags */}
					<div className='flex gap-2 mt-3'>
						<span className='px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded border border-cyan-500/20'>
							Array
						</span>
					</div>

					<div className='mt-5 space-y-5 text-sm text-gray-300'>

						{/* Description */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Problem</h3>
							<p>
								Given an array of integers, find the second largest element.
							</p>
							<p className='mt-2'>
								The second largest element is the largest value smaller than the maximum.
							</p>
						</div>

						{/* Example */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Example</h3>
							<pre className='bg-gray-800 p-3 rounded-lg'>
								{`Input:  [10, 5, 20, 8]
Output: 10`}
							</pre>
						</div>

						{/* Edge Cases */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Edge Cases</h3>
							<ul className='list-disc ml-5 space-y-2'>
								<li>Array size &lt; 2 → no second largest</li>
								<li>All elements same → no valid answer</li>
								<li>Negative numbers</li>
								<li>Duplicate values</li>
							</ul>
						</div>

						{/* Approaches */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Approaches</h3>
							<ul className='list-disc ml-5 space-y-2'>
								<li>Sorting the array </li>
								<li>Two-pass approach</li>
								<li>One-pass approach (OPTIMAL)</li>
								<li>Using a set to remove duplicates</li>
							</ul>
						</div>

						{/* Key Insight */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Key Insight</h3>
							<p>
								Tracking the largest and second largest in a single pass gives the most optimal solution.
							</p>
						</div>

					</div>
				</div>

				<div className='w-full lg:w-1/2 space-y-5'>

					{problems.map((problem) => {
						const langKeys = Object.keys(problem.languages)

						const langLabels: Record<string, string> = {
							cpp: "C++",
							java: "Java",
							py: "Python",
							js: "JavaScript", 
							cs: "C#",
							go: "Go"
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

								{/* Complexity */}
								<div className='px-6 py-3 flex gap-6 text-sm border-b border-gray-800 bg-gray-900/50'>
									<p>
										<span className='text-cyan-400 font-medium'>Time:</span>{' '}
										{problem.complexity.time}
									</p>
									<p>
										<span className='text-cyan-400 font-medium'>Space:</span>{' '}
										{problem.complexity.space}
									</p>
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
