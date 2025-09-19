'use client'

import {
    IconSettings,
    IconTerminal2,
    IconFileCode,
    IconHierarchy2,
    IconRefresh,
    IconDatabase,
    IconTimeline,
    IconColorSwatch,
    IconBlockquote,
    IconLink,
    IconLayoutGridAdd,
    IconBraces,
    IconListDetails,
    IconHash,
    IconAsterisk,
    IconForms,
    IconLanguage,
    IconEye,
    IconAlertTriangle,
    IconBolt,
    IconWorld,
    IconWand
} from '@tabler/icons-react'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

const core = [
    { title: 'What is Sorting?', description: 'Arranging data in a particular order (ascending/descending).', icon: <IconTerminal2 />, link: 'sorting/1' },
    { title: 'Importance of Sorting', description: 'Improves efficiency of searching, indexing, and data organization.', icon: <IconTimeline />, link: 'sorting/2' },
    { title: 'Types of Sorting', description: 'Comparison-based vs non-comparison-based algorithms.', icon: <IconSettings />, link: 'sorting/3' },
    { title: 'Real-life Applications', description: 'Databases, file systems, search engines, leaderboards, etc.', icon: <IconFileCode />, link: 'sorting/4' },
]

const basic = [
    { title: 'Bubble Sort', description: 'Concept only. Repeatedly swap adjacent elements until sorted. O(n²).', icon: <IconBlockquote />, link: 'sorting/5' },
    { title: 'Selection Sort', description: 'Find the smallest element and place it at the beginning. O(n²).', icon: <IconListDetails />, link: 'sorting/6' },
    { title: 'Insertion Sort', description: 'Insert elements into correct position. Adaptive and efficient for small inputs.', icon: <IconLink />, link: 'sorting/7' },
]

const efficient = [
    { title: 'Merge Sort', description: 'Divide & Conquer. Stable. O(n log n).', icon: <IconLayoutGridAdd />, link: 'sorting/8' },
    { title: 'Quick Sort', description: 'Partition-based, Avg: O(n log n), Worst: O(n²). Pivot strategies matter.', icon: <IconHierarchy2 />, link: 'sorting/9' },
    { title: 'Heap Sort', description: 'Uses heap data structure. In-place O(n log n). Not stable.', icon: <IconDatabase />, link: 'sorting/10' },
]

const nonComparison = [
    { title: 'Counting Sort', description: 'Non-comparison sort based on frequency. O(n + k).', icon: <IconBraces />, link: 'sorting/11' },
    { title: 'Radix Sort', description: 'Digit-by-digit sorting, often uses Counting Sort. O(nk).', icon: <IconHash />, link: 'sorting/12' },
    { title: 'Bucket Sort', description: 'Distributes elements into buckets, sorts each bucket. Best for uniform distribution.', icon: <IconColorSwatch />, link: 'sorting/13' },
]

const variants = [
    { title: 'Shell Sort', description: 'Gap-based improvement of Insertion Sort. O(n log² n).', icon: <IconSettings />, link: 'sorting/14' },
    { title: 'Tim Sort', description: 'Hybrid of Merge + Insertion. Used in Python, Java. O(n log n).', icon: <IconRefresh />, link: 'sorting/15' },
    { title: 'Intro Sort', description: 'Hybrid of Quick, Heap, Insertion. Used in C++ STL sort().', icon: <IconBolt />, link: 'sorting/16' },
]

const analysis = [
    { title: 'Time Complexity', description: 'Compare best, average, and worst-case performance of algorithms.', icon: <IconAsterisk />, link: 'sorting/17' },
    { title: 'Space Complexity', description: 'Memory requirements — in-place vs extra space.', icon: <IconForms />, link: 'sorting/18' },
    { title: 'Stability in Sorting', description: 'Stable sorts preserve relative order of equal elements.', icon: <IconEye />, link: 'sorting/19' },
    { title: 'Recursive vs Iterative', description: 'Trade-offs between recursion depth and iterative implementations.', icon: <IconLanguage />, link: 'sorting/20' },
]

const problemSolving = [
    { title: 'Sorting + Binary Search', description: 'Solve problems like 2-sum variants, closest pair efficiently.', icon: <IconTerminal2 />, link: 'sorting/21' },
    { title: 'Sorting + Greedy', description: 'Greedy problems like interval scheduling, activity selection.', icon: <IconTimeline />, link: 'sorting/22' },
    { title: 'Sorting with Custom Comparators', description: 'Sort strings, pairs, or objects with custom rules.', icon: <IconLanguage />, link: 'sorting/23' },
]

const bestPractices = [
    { title: 'Choosing the Right Algorithm', description: 'Match algorithm choice with input size, type, and constraints.', icon: <IconAlertTriangle />, link: 'sorting/24' },
    { title: 'Optimizations', description: 'Use hybrid algorithms like Timsort or optimized Quicksort.', icon: <IconBolt />, link: 'sorting/25' },
    { title: 'Parallel & External Sorting', description: 'Sort large datasets using parallelism or disk-based algorithms.', icon: <IconWorld />, link: 'sorting/26' },
    { title: 'Testing & Validation', description: 'Verify correctness using test cases, dry runs, and invariants.', icon: <IconWand />, link: 'sorting/27' },
]

export default function page() {
    return (
        <div className='bg-black p-10 py-32'>
            <h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#16a085] mb-4 flex items-center gap-3'>
                <img src="/icons/data/sort.svg" alt="Sorting Logo" className="w-10 h-10" />
                &nbsp;Sorting Algorithms
            </h1>
            <p className='text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
                Sorting algorithms are methods used to rearrange data into a particular order, often ascending or descending.  
                <br /><br />
                Key Creators: John von Neumann (Merge Sort), Tony Hoare (Quick Sort).  
                <br />
                <a target='_blank' href='https://en.wikipedia.org/wiki/Sorting_algorithm' className='text-violet-500'>Wikipedia Reference</a>
            </p>

            <p className="px-10">Core Concepts</p>
            <ScrollableFeatureRow features={core} />

            <p className="px-10">Basic Sorting</p>
            <ScrollableFeatureRow features={basic} />

            <p className="px-10">Efficient Sorting</p>
            <ScrollableFeatureRow features={efficient} />

            <p className="px-10">Non-Comparison Sorting</p>
            <ScrollableFeatureRow features={nonComparison} />

            <p className="px-10">Special Variants</p>
            <ScrollableFeatureRow features={variants} />

            <p className="px-10">Analysis & Properties</p>
            <ScrollableFeatureRow features={analysis} />

            <p className="px-10">Problem-Solving Angle</p>
            <ScrollableFeatureRow features={problemSolving} />

            <p className="px-10">Best Practices</p>
            <ScrollableFeatureRow features={bestPractices} />
        </div>
    )
}
