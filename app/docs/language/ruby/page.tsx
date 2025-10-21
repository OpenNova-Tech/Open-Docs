'use client'

import {
	IconTerminal2,
	IconHistory,
	IconDiamond,
	IconAdjustments,
	IconFileCode,
	IconCode,
	IconVariable,
	IconArrowsShuffle,
	IconHierarchy2,
	IconLoader2,
	IconBug,
	IconCpu,
	IconLayoutDashboard,
	IconBoxMultiple,
	IconHierarchy,
	IconFunction,
	IconShieldLock,
	IconHash,
	IconTableOptions,
	IconLink,
	IconMessage,
	IconRecycle,
	IconBolt,
	IconClock,
	IconServer,
	IconGauge,
	IconRocket,
	IconListDetails,
	IconDatabase,
	IconGitBranch,
	IconCirclesRelation,
  IconFileLambda,
} from '@tabler/icons-react'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

const intro = [
	{ title: 'Introduction to Ruby', description: 'A dynamic, interpreted, object-oriented language.', icon: <IconTerminal2 />, link: 'ruby/1' },
	{ title: 'History of Ruby', description: 'Created by Yukihiro “Matz” Matsumoto in Japan.', icon: <IconHistory />, link: 'ruby/2' },
	{ title: 'Ruby Philosophy', description: 'Focus on developer happiness and simplicity.', icon: <IconDiamond />, link: 'ruby/3' },
	{ title: 'Ruby Installation', description: 'Installing Ruby via RVM, rbenv, or system package.', icon: <IconAdjustments />, link: 'ruby/4' },
	{ title: 'First Ruby Program', description: 'Printing “Hello, World!” and running scripts.', icon: <IconFileCode />, link: 'ruby/5' },
	{ title: 'IRB & REPL Basics', description: 'Interactive Ruby Shell (irb) and usage.', icon: <IconTerminal2 />, link: 'ruby/6' },
]

const fundamentals = [
	{ title: 'Syntax Basics', description: 'Keywords, indentation, and Ruby style.', icon: <IconCode />, link: 'ruby/7' },
	{ title: 'Variables & Constants', description: 'Local, global, instance, class variables.', icon: <IconVariable />, link: 'ruby/8' },
	{ title: 'Data Types', description: 'Numbers, Strings, Symbols, Arrays, Hashes.', icon: <IconAdjustments />, link: 'ruby/9' },
	{ title: 'Operators', description: 'Arithmetic, comparison, logical, range.', icon: <IconArrowsShuffle />, link: 'ruby/10' },
	{ title: 'Conditional Statements', description: 'if, unless, case-when.', icon: <IconHierarchy2 />, link: 'ruby/11' },
	{ title: 'Loops', description: 'while, until, for, each, times.', icon: <IconLoader2 />, link: 'ruby/12' },
]

const oop = [
	{ title: 'Classes & Objects', description: 'Defining classes and creating objects.', icon: <IconCpu />, link: 'ruby/13' },
	{ title: 'Constructors', description: 'Using initialize method.', icon: <IconLayoutDashboard />, link: 'ruby/14' },
	{ title: 'Instance & Class Methods', description: 'self keyword and method scopes.', icon: <IconBoxMultiple />, link: 'ruby/15' },
	{ title: 'Inheritance', description: 'Single inheritance and overriding.', icon: <IconHierarchy />, link: 'ruby/16' },
	{ title: 'Modules & Mixins', description: 'Code reuse using modules.', icon: <IconCirclesRelation />, link: 'ruby/17' },
	{ title: 'Encapsulation', description: 'attr_accessor, private, protected.', icon: <IconShieldLock />, link: 'ruby/18' },
	{ title: 'Polymorphism', description: 'Duck typing and dynamic behavior.', icon: <IconFunction />, link: 'ruby/19' },
]

const collections = [
	{ title: 'Arrays', description: 'Ordered lists of elements.', icon: <IconTableOptions />, link: 'ruby/20' },
	{ title: 'Hashes', description: 'Key-value pairs with symbol keys.', icon: <IconHash />, link: 'ruby/21' },
	{ title: 'Sets & Ranges', description: 'Working with unique collections.', icon: <IconAdjustments />, link: 'ruby/22' },
	{ title: 'Enumerables', description: 'Iteration using each, map, select.', icon: <IconLoader2 />, link: 'ruby/23' },
]

const blocksProcsLambdas = [
	{ title: 'Blocks', description: 'Anonymous code chunks using do...end.', icon: <IconFileLambda />, link: 'ruby/24' },
	{ title: 'Procs', description: 'Reusable code blocks as objects.', icon: <IconFunction />, link: 'ruby/25' },
	{ title: 'Lambdas', description: 'Closures with argument checking.', icon: <IconBolt />, link: 'ruby/26' },
	{ title: 'Yield & Call', description: 'Invoking passed blocks.', icon: <IconRocket />, link: 'ruby/27' },
]

const exceptionsIO = [
	{ title: 'Exception Handling', description: 'begin, rescue, ensure, retry.', icon: <IconBug />, link: 'ruby/28' },
	{ title: 'Custom Exceptions', description: 'Defining and raising your own errors.', icon: <IconMessage />, link: 'ruby/29' },
	{ title: 'File I/O', description: 'Reading and writing files with File class.', icon: <IconServer />, link: 'ruby/30' },
	{ title: 'Directory Operations', description: 'Working with Dir and FileUtils.', icon: <IconDatabase />, link: 'ruby/31' },
]

const advanced = [
	{ title: 'Symbols vs Strings', description: 'Understanding immutability & memory.', icon: <IconLink />, link: 'ruby/32' },
	{ title: 'Regular Expressions', description: 'Pattern matching with =~ and gsub.', icon: <IconAdjustments />, link: 'ruby/33' },
	{ title: 'Metaprogramming Basics', description: 'define_method, send, method_missing.', icon: <IconFunction />, link: 'ruby/34' },
	{ title: 'Reflection', description: 'Inspecting objects and methods.', icon: <IconListDetails />, link: 'ruby/35' },
	{ title: 'Threading', description: 'Using Thread.new and synchronization.', icon: <IconClock />, link: 'ruby/36' },
]

const memoryPerformance = [
	{ title: 'Garbage Collection', description: 'Automatic memory management in Ruby.', icon: <IconRecycle />, link: 'ruby/37' },
	{ title: 'Memory Optimization', description: 'Profiling and performance tuning.', icon: <IconGauge />, link: 'ruby/38' },
	{ title: 'Global Interpreter Lock', description: 'Understanding Ruby GIL and concurrency.', icon: <IconHierarchy />, link: 'ruby/39' },
]

const tools = [
	{ title: 'RubyGems', description: 'Package management system for Ruby.', icon: <IconGitBranch />, link: 'ruby/40' },
	{ title: 'IRB & Pry', description: 'Interactive debugging tools.', icon: <IconTerminal2 />, link: 'ruby/41' },
	{ title: 'RSpec & Testing', description: 'Behavior-driven testing in Ruby.', icon: <IconBug />, link: 'ruby/42' },
	{ title: 'Rake', description: 'Automation tool for Ruby projects.', icon: <IconRocket />, link: 'ruby/43' },
	{ title: 'Bundler', description: 'Manage gem dependencies.', icon: <IconCirclesRelation />, link: 'ruby/44' },
]

export default function Page() {
	return (
		<div className='bg-black p-10 py-32'>
			<h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#701516] mb-4 flex items-center gap-3'>
				<img src="/icons/langs/rb.svg" alt="Ruby Logo" className="w-10 h-10" />
				&nbsp;Ruby Docs
			</h1>

			<p className='text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
				Ruby is a dynamic, open-source programming language focused on simplicity and productivity. Its elegant syntax makes it natural to read and easy to write.
				<br /><br />
				Creator: Yukihiro Matsumoto (<a target='_blank' href='https://github.com/matz' className='text-neutral-500'>@matz</a>)
				<br />
				<a target='_blank' href='https://github.com/ruby/ruby' className='text-violet-500'>Official Repo Link</a>
			</p>

			<p className="px-10">Introduction to Ruby</p>
			<ScrollableFeatureRow features={intro} />

			<p className="px-10">Ruby Fundamentals</p>
			<ScrollableFeatureRow features={fundamentals} />

			<p className="px-10">Object-Oriented Programming</p>
			<ScrollableFeatureRow features={oop} />

			<p className="px-10">Collections</p>
			<ScrollableFeatureRow features={collections} />

			<p className="px-10">Blocks, Procs & Lambdas</p>
			<ScrollableFeatureRow features={blocksProcsLambdas} />

			<p className="px-10">Exceptions & File I/O</p>
			<ScrollableFeatureRow features={exceptionsIO} />

			<p className="px-10">Advanced Concepts</p>
			<ScrollableFeatureRow features={advanced} />

			<p className="px-10">Memory & Performance</p>
			<ScrollableFeatureRow features={memoryPerformance} />

			<p className="px-10">Tools & Ecosystem</p>
			<ScrollableFeatureRow features={tools} />
		</div>
	)
}
