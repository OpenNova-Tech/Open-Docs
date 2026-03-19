'use client'

import {
	IconTerminal2,
	IconCalculator,
	IconBraces,
	IconLayoutGrid,
	IconVector,
	IconChartBar,
	IconArrowsShuffle,
	IconRefresh,
	IconFunction,
	IconMath,
	IconZoom,
	IconBolt,
	IconLayersIntersect,
	IconSettings,
	IconFileAnalytics,
	IconCpu,
	IconDatabase,
	IconTriangle,
	IconGridDots,
	IconSettingsAutomation,
	IconBinary,
	IconDice,
	IconCut,
	IconWaveSine,
	IconSortAscending,
	IconHandClick,
	IconFilter,
	IconInfoCircle,
} from '@tabler/icons-react'

import { motion } from 'framer-motion'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'


/* ================= 1. FUNDAMENTALS ================= */
const fundamentals = [
  { title: 'What is NumPy?', description: 'Numerical computing.', icon: <IconTerminal2 />, link: 'numpy/what-is-numpy' },
  { title: 'Installation', description: 'Setup NumPy.', icon: <IconSettings />, link: 'numpy/install' },
  { title: 'ndarray Basics', description: 'Core array object.', icon: <IconLayoutGrid />, link: 'numpy/ndarray' },
  { title: 'Array Creation', description: 'zeros, ones, arange.', icon: <IconVector />, link: 'numpy/creation' },
  { title: 'Array Attributes', description: 'shape, ndim, size.', icon: <IconInfoCircle />, link: 'numpy/attributes' },
  { title: 'Data Types', description: 'dtype system.', icon: <IconDatabase />, link: 'numpy/dtypes' },
]


/* ================= 2. ARRAY OPERATIONS ================= */
const operations = [
  { title: 'Indexing & Slicing', description: 'Access data.', icon: <IconZoom />, link: 'numpy/indexing' },
  { title: 'Boolean Indexing', description: 'Mask filtering.', icon: <IconFilter />, link: 'numpy/boolean-indexing' },
  { title: 'Fancy Indexing', description: 'Index arrays.', icon: <IconHandClick />, link: 'numpy/fancy-indexing' },
  { title: 'Reshaping Arrays', description: 'reshape, flatten.', icon: <IconLayoutGrid />, link: 'numpy/reshape' },
  { title: 'Broadcasting', description: 'Auto expansion.', icon: <IconArrowsShuffle />, link: 'numpy/broadcasting' },
  { title: 'Sorting & Searching', description: 'sort, where.', icon: <IconSortAscending />, link: 'numpy/sort-search' },
  { title: 'Stacking & Splitting', description: 'hstack, split.', icon: <IconLayersIntersect />, link: 'numpy/stacking' },
  { title: 'Copy vs View', description: 'Memory behavior.', icon: <IconRefresh />, link: 'numpy/copy-view' },
]


/* ================= 3. MATHEMATICS ================= */
const mathematics = [
  { title: 'Basic Math', description: 'add, multiply.', icon: <IconMath />, link: 'numpy/basic-math' },
  { title: 'Trigonometry', description: 'sin, cos, tan.', icon: <IconTriangle />, link: 'numpy/trigonometry' },
  { title: 'Statistics', description: 'mean, std, var.', icon: <IconChartBar />, link: 'numpy/statistics' },
  { title: 'Linear Algebra', description: 'dot, eig.', icon: <IconCalculator />, link: 'numpy/linear-algebra' },
  { title: 'FFT & Signals', description: 'Fourier transform.', icon: <IconWaveSine />, link: 'numpy/fft' },
  { title: 'Polynomials', description: 'polyfit, roots.', icon: <IconFunction />, link: 'numpy/polynomials' },
  { title: 'Rounding & Clipping', description: 'round, clip.', icon: <IconCut />, link: 'numpy/rounding' },
  { title: 'Random Module', description: 'Random numbers.', icon: <IconDice />, link: 'numpy/random' },
]


/* ================= 4. DATA HANDLING ================= */
const dataHandling = [
  { title: 'Reading Text Files', description: 'loadtxt.', icon: <IconFileAnalytics />, link: 'numpy/read-text' },
  { title: 'Binary Files', description: '.npy, .npz.', icon: <IconBinary />, link: 'numpy/binary-files' },
  { title: 'Saving Data', description: 'save, savez.', icon: <IconDatabase />, link: 'numpy/save-data' },
  { title: 'Structured Arrays', description: 'Table arrays.', icon: <IconLayoutGrid />, link: 'numpy/structured' },
  { title: 'Masked Arrays', description: 'Missing values.', icon: <IconLayersIntersect />, link: 'numpy/masked' },
  { title: 'Memory Mapping', description: 'memmap.', icon: <IconCpu />, link: 'numpy/memmap' },
]


/* ================= 5. ADVANCED NUMPY ================= */
const advanced = [
  { title: 'Universal Functions', description: 'ufuncs.', icon: <IconFunction />, link: 'numpy/ufuncs' },
  { title: 'Vectorization', description: 'No loops.', icon: <IconBolt />, link: 'numpy/vectorization' },
  { title: 'Strides & Views', description: 'Memory layout.', icon: <IconGridDots />, link: 'numpy/strides' },
  { title: 'Broadcasting Internals', description: 'How it works.', icon: <IconArrowsShuffle />, link: 'numpy/broadcast-internal' },
  { title: 'Advanced Reductions', description: 'reduce, accumulate.', icon: <IconSettingsAutomation />, link: 'numpy/reductions' },
  { title: 'Custom dtypes', description: 'User types.', icon: <IconBraces />, link: 'numpy/custom-dtypes' },
  { title: 'Subclassing ndarray', description: 'Extend arrays.', icon: <IconLayersIntersect />, link: 'numpy/subclassing' },
]


/* ================= PAGE ================= */

export default function Page() {
	return (
		<div className="bg-black p-10 py-32">

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-20"
			>

				<div>
					<h1 className="text-3xl md:text-5xl max-w-5xl mx-auto font-extrabold text-[#006a8e] mb-4 flex items-center gap-3">
						<img
							src="/icons/bot/numpy.svg"
							alt="NumPy Logo"
							className="w-10 h-10"
						/>
						NumPy Docs
					</h1>

					<div className="text-neutral-300 text-base md:text-lg flex-1">

						NumPy is the fundamental package for numerical computing in Python.
						It provides powerful N-dimensional arrays and mathematical tools.

						<br /><br />

						<span className="text-neutral-400">👨‍💻 Creator:</span> Travis Oliphant (
						<a
							target='_blank'
							href='https://github.com/teoliphant'
							className='text-neutral-500 hover:text-violet-500'
						>
							GitHub
						</a>
						)
						<br />

						<span className="text-neutral-400">📘 Maintained By:</span> NumPy Community
						<br />

						<span className="text-neutral-400">🚀 Latest Version:</span> Stable Release
						<br /><br />

						<a
							target='_blank'
							href="https://numpy.org/doc/"
							className='text-violet-500 hover:text-violet-400'
						>
							Official NumPy Documentation
						</a>

						<br /> <br /> <p className="text-neutral-400 flex items-center gap-2"> <span className="font-medium text-neutral-300"> OpenDocs Maintainer: </span> <a href="https://github.com/DarkmodeWorking" target="_blank" className="px-3 py-1 rounded-full bg-neutral-800 text-indigo-300 font-semibold hover:bg-neutral-700 transition" > @Anurag </a> </p>

					</div>
				</div>


				<div className="flex-shrink-0">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6gXoS6MNo6XTsZHONd92HyU6JnsofBBrQd65Esn5NCfg-Q_-TD_KvjVjG7IYmQmCM61hjZdY1GVK1LFrqlNcsoji337RWPUwRViThAsuqw&s=10"
						alt="NumPy Logo"
						className="w-80 h-80 rounded-full border-8 border-[#006a8e] object-contain"
					/>
				</div>

			</motion.div>


			<br /><br /><br /><br />

			<p className="px-10">Fundamentals</p>
			<ScrollableFeatureRow features={fundamentals} />

			<p className="px-10">Array Operations</p>
			<ScrollableFeatureRow features={operations} />

			<p className="px-10">Mathematics</p>
			<ScrollableFeatureRow features={mathematics} />

			<p className="px-10">Data Handling</p>
			<ScrollableFeatureRow features={dataHandling} />

			<p className="px-10">Advanced NumPy</p>
			<ScrollableFeatureRow features={advanced} />

			{/* <p className="px-10">Performance</p>
      <ScrollableFeatureRow features={performance} />

      <p className="px-10">Interoperability</p>
      <ScrollableFeatureRow features={interoperability} />

      <p className="px-10">Utilities</p>
      <ScrollableFeatureRow features={utilities} /> */}

		</div>
	)
}