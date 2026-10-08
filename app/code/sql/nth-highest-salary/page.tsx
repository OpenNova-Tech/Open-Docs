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
			title: 'Using LIMIT + OFFSET',
			languages: {
				sql: `SELECT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET N-1;`,
			}
		},
		{
			id: 2,
			title: 'Using DISTINCT (for unique salaries)',
			languages: {
				sql: `SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET N-1;`
			}
		},
		{
			id: 3,
			title: 'Using DENSE_RANK (Recommended)',
			languages: {
				sql: `SELECT salary
FROM (
  SELECT salary,
         DENSE_RANK() OVER (ORDER BY salary DESC) as rnk
  FROM employees
) t
WHERE rnk = N;`
			}
		},
		{
			id: 4,
			title: 'Using Subquery',
			languages: {
				sql: `SELECT MAX(salary)
FROM employees
WHERE salary < (
  SELECT MAX(salary)
  FROM employees
);`
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
					<h1 className='text-2xl font-bold'>Nth Highest Salary</h1>
					<p className='text-sm text-cyan-400 mt-1'>SQL Interview Problem</p>

					{/* Tags */}
					<div className='flex gap-2 mt-3'>
						<span className='px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded border border-cyan-500/20'>
							SQL
						</span>
					</div>

					<div className='mt-5 space-y-5 text-sm text-gray-300'>

						{/* Description */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Problem</h3>
							<p>
								Given an employee table with salaries, find the Nth highest salary.
							</p>
							<p className='mt-2'>
								If multiple employees have the same salary, treat them as duplicates unless specified otherwise.
							</p>
						</div>

						{/* Example */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Example</h3>
							<pre className='bg-gray-800 p-3 rounded-lg'>
								{`Table: employees

id | salary
-----------
1  | 100
2  | 200
3  | 300
4  | 200

Input: N = 2
Output: 200`}
							</pre>
						</div>

						{/* Approach */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Approaches</h3>
							<ul className='list-disc ml-5 space-y-2'>
								<li>Using ORDER BY with LIMIT and OFFSET</li>
								<li>Using DISTINCT with LIMIT (for unique salaries)</li>
								<li>Using window functions like DENSE_RANK() (OPTIMAL)</li>
								<li>Using subqueries (MAX with conditions)</li>
							</ul>
						</div>

						{/* Key Insight */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Key Insight</h3>
							<p>
								OFFSET-based queries are simple but window functions like DENSE_RANK() are more reliable and scalable for real-world datasets.
							</p>
						</div>

					</div>
				</div>

				<div className='w-full lg:w-1/2 space-y-5'>

					{problems.map((problem) => {
						const langKeys = Object.keys(problem.languages)

						const langLabels: Record<string, string> = {
							sql: "SQL"
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
