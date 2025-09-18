'use client'

import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect'

export default function page() {
	const linear = [
		{
			title: 'Array',
			description: 'Linear data structure for storing elements in contiguous memory.',
			link: 'dsa/array',
			iconSrc: '/icons/data/array.svg'
		},
		{
			title: 'String',
			description: 'Sequence of characters used for text manipulation.',
			link: 'dsa/string',
			iconSrc: '/icons/data/string.svg'
		},
		{
			title: 'Linked Lists',
			description: 'Sequential data structure with nodes connected via pointers.',
			link: 'dsa/linked',
			iconSrc: '/icons/data/linked.svg'
		},
		{
			title: 'Stack',
			description: 'LIFO (Last In, First Out) data structure.',
			link: 'dsa/stack',
			iconSrc: '/icons/data/stacks.svg'
		},
		{
			title: 'Queue',
			description: 'FIFO (First In, First Out) data structure.',
			link: 'dsa/queue',
			iconSrc: '/icons/data/queue.svg'
		},
		{
			title: 'Dequeue',
			description: 'Double-ended queue for insertion/deletion at both ends.',
			link: 'dsa/dequeue',
			iconSrc: '/icons/data/dequeue.svg'
		},
		{
			title: 'Hash Table',
			description: 'Fast lookup structure using key-value mapping.',
			link: 'dsa/hash',
			iconSrc: '/icons/data/hash.svg'
		},
	]

	const nonLinearStructures = [
		{
			title: 'Binary Tree',
			description: 'Hierarchical structure where each node has at most two children.',
			link: 'dsa/binary-tree',
			iconSrc: '/icons/data/bt.svg'
		},
		{
			title: 'Binary Search Tree',
			description: 'Tree with ordered nodes for efficient search.',
			link: 'dsa/bst',
			iconSrc: '/icons/data/bst.svg'
		},
		{
			title: 'Heap',
			description: 'Complete binary tree used for priority queues.',
			link: 'dsa/heap',
			iconSrc: '/icons/data/heap.svg'
		},
		{
			title: 'Trie',
			description: 'Tree-like structure for efficient string search.',
			link: 'dsa/trie',
			iconSrc: '/icons/data/trie.svg'
		},
		{
			title: 'Segment Tree',
			description: 'Used for range queries and updates.',
			link: 'dsa/segment-tree',
			iconSrc: '/icons/data/seg.svg'
		},
		{
			title: 'Fenwick Tree (BIT)',
			description: 'Efficient structure for cumulative frequency/range queries.',
			link: 'dsa/fenwick-tree',
			iconSrc: '/icons/data/fen.svg'
		},
		{
			title: 'Graphs',
			description: 'General structure of vertices and edges with multiple traversal techniques.',
			link: 'dsa/graphs',
			iconSrc: '/icons/data/graph.svg'
		},
	]

	const algorithms = [
		{
			title: 'Sorting',
			description: 'Bubble, Insertion, Merge, Quick, Heap Sort, and more.',
			link: 'dsa/sorting',
			iconSrc: '/icons/data/sort.svg'
		},
		{
			title: 'Searching',
			description: 'Linear search, Binary search, and variations.',
			link: 'dsa/searching',
			iconSrc: '/icons/data/search.svg'
		},
		{
			title: 'Divide and Conquer',
			description: 'Problem-solving by breaking into subproblems.',
			link: 'dsa/divide-conquer',
			iconSrc: '/icons/data/divide.svg'
		},
		{
			title: 'Dynamic Programming',
			description: 'Solving problems using overlapping subproblems & optimal substructure.',
			link: 'dsa/dp',
			iconSrc: '/icons/data/dp.svg'
		},
		{
			title: 'Greedy Algorithms',
			description: 'Making locally optimal choices for global optimization.',
			link: 'dsa/greedy',
			iconSrc: '/icons/data/greedy.svg'
		},
		{
			title: 'Backtracking',
			description: 'Trying all possibilities with pruning.',
			link: 'dsa/backtracking',
			iconSrc: '/icons/data/back.svg'
		},
		{
			title: 'Graph Algorithms',
			description: 'DFS, BFS, Dijkstra, Bellman-Ford, Kruskal, Prim, Topological Sort.',
			link: 'dsa/graph-algos',
			iconSrc: '/icons/data/algo.svg'
		},
	]


	return (
		<div className='bg-black pt-20'>
			<div className='max-w-5xl mx-auto px-8 py-12'>
				Linear Data Structures
				<HoverEffect items={linear} />
				Non-Linear Data Structures
				<HoverEffect items={nonLinearStructures} />
				Algorithms
				<HoverEffect items={algorithms} />
			</div>
		</div>
	)
}
