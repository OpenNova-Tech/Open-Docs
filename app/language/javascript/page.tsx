'use client'

import {
	IconSettings,
	IconTerminal2,
	IconCode,
	IconFileCode,
	IconFunction,
	IconCpu,
	IconAdjustments,
	IconLayoutDashboard,
	IconBrowser,
	IconActivityHeartbeat,
	IconArrowsShuffle,
	IconClock,
	IconBolt,
	IconHierarchy2,
	IconRefresh,
	IconLink,
	IconSquareRotated,
	IconFileLambda,
	IconCirclesRelation,
	IconDatabase,
	IconBug,
	IconBrandNodejs,
	IconTimeline,
	IconLoader,
	IconCloudDownload,
	IconRecycle,
	IconLoader2,
} from '@tabler/icons-react'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

const core = [
	{ title: 'What is JavaScript', description: 'Lightweight, interpreted programming language of the web.', icon: <IconTerminal2 />, link: 'javascript/1' },
	{ title: 'History of JS', description: 'Created by Brendan Eich in 1995 at Netscape.', icon: <IconTimeline />, link: 'javascript/2' },
	{ title: 'Setup & Environment', description: 'Browser console, Node.js, and editors to run JS.', icon: <IconSettings />, link: 'javascript/3' },
	{ title: 'Hello World', description: 'Your first JavaScript program and output methods.', icon: <IconFileCode />, link: 'javascript/4' },
]

const syntax = [
	{ title: 'Variables (var/let/const)', description: 'Declare & store values using different keywords.', icon: <IconCode />, link: 'javascript/5' },
	{ title: 'Data Types', description: 'Primitive & reference types in JavaScript.', icon: <IconAdjustments />, link: 'javascript/6' },
	{ title: 'Operators', description: 'Arithmetic, assignment, comparison, logical & others.', icon: <IconArrowsShuffle />, link: 'javascript/7' },
	{ title: 'Control Statements', description: 'If-else, switch, loops (for, while, do-while).', icon: <IconHierarchy2 />, link: 'javascript/8' },
	{ title: 'Loops in JavaScript', description: 'for, while, do–while, for…in, for…of.', icon: <IconLoader2 />, link: 'javascript/9' },
]

const functions = [
	{ title: 'Functions', description: 'Declaration, Expression & Arrow functions in JS.', icon: <IconFunction />, link: 'javascript/9' },
	{ title: 'Scope & Hoisting', description: 'Understanding lexical scope and hoisting.', icon: <IconSquareRotated />, link: 'javascript/10' },
	{ title: 'Closures', description: 'Functions with preserved lexical environment.', icon: <IconFileLambda />, link: 'javascript/11' },
]

const objects = [
	{ title: 'Objects & Prototypes', description: 'JavaScript object creation and inheritance.', icon: <IconCpu />, link: 'javascript/13' },
	{ title: 'Arrays & Methods', description: 'Common methods like map, filter, reduce.', icon: <IconLayoutDashboard />, link: 'javascript/14' },
	{ title: 'Browser DOM', description: 'Interact with HTML elements using JavaScript.', icon: <IconBrowser />, link: 'javascript/15' },
	{ title: 'Events', description: 'Handle clicks, inputs, submit events etc.', icon: <IconActivityHeartbeat />, link: 'javascript/16' },
	{ title: 'JSON', description: 'JavaScript Object Notation – lightweight data format.', icon: <IconFileCode />, link: 'javascript/17' },
	{ title: 'Fetch API', description: 'Make HTTP requests in the browser.', icon: <IconCloudDownload />, link: 'javascript/18' }
]

const asyncjs = [
	{ title: 'Callbacks', description: 'First asynchronous technique in JavaScript.', icon: <IconLink />, link: 'javascript/19' },
	{ title: 'Promises', description: 'Handle async operations with .then() & .catch().', icon: <IconClock />, link: 'javascript/20' },
	{ title: 'Async / Await', description: 'Modern way to write asynchronous code.', icon: <IconBolt />, link: 'javascript/21' },
	{ title: 'Event Loop', description: 'How JavaScript handles concurrency.', icon: <IconLoader />, link: 'javascript/22' },
]

const advanced = [
	{ title: 'ES6+ Features', description: 'Let, const, template literals, destructuring, etc.', icon: <IconRefresh />, link: 'javascript/23' },
	{ title: 'Modules', description: 'Import/export syntax & modular JS.', icon: <IconCirclesRelation />, link: 'javascript/24' },
	{ title: 'Error Handling', description: 'try...catch...finally blocks and errors.', icon: <IconBug />, link: 'javascript/25' },
	{ title: 'LocalStorage', description: 'Store key-value pairs in browser.', icon: <IconDatabase />, link: 'javascript/26' },
	{ title: 'Node.js Intro', description: 'JavaScript runtime outside the browser.', icon: <IconBrandNodejs />, link: 'javascript/27' },
	{ title: 'OOP in JavaScript', description: 'Classes, constructor functions & prototype chains.', icon: <IconHierarchy2 />, link: 'javascript/28' },
	{ title: 'Memory & Garbage Collection', description: 'How JavaScript manages memory under the hood.', icon: <IconRecycle />, link: 'javascript/29' },
]

export default function page() {
	return (
		<div className='bg-black p-10 py-32'>
			<h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#f1e05a] mb-4 flex items-center gap-3'>
				<img src="/icons/langs/js.svg" alt="JavaScript Logo" className="w-10 h-10" />
				&nbsp;JavaScript Docs
			</h1>
			<p className='text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
				JavaScript is a high-level, versatile scripting language primarily used to create interactive effects within web browsers.
				<br /><br />
				Creator: Brendan Eich <a target='_blank' href='https://github.com/BrendanEich' className='text-neutral-500'>Profile</a>
				<br />
				<a target='_blank' href='https://github.com/tc39' className='text-violet-500'>Official Repo Link</a>
			</p>


			<p className="px-10">Core Concepts & Setup</p>
			<ScrollableFeatureRow features={core} />

			<p className="px-10">Syntax & Building Blocks</p>
			<ScrollableFeatureRow features={syntax} />

			<p className="px-10">Functions & Scopes</p>
			<ScrollableFeatureRow features={functions} />

			<p className="px-10">Objects, Arrays & DOM</p>
			<ScrollableFeatureRow features={objects} />

			<p className="px-10">Asynchronous JavaScript</p>
			<ScrollableFeatureRow features={asyncjs} />

			<p className="px-10">Advanced Concepts</p>
			<ScrollableFeatureRow features={advanced} />

		</div>
	)
}
