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
			title: 'Using ROW_NUMBER() (Recommended)',
			languages: {
				sql: `DELETE FROM users
WHERE id IN (
  SELECT id FROM (
    SELECT id,
           ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) as rn
    FROM users
  ) t
  WHERE rn > 1
);`,
			}
		},
		{
			id: 2,
			title: 'Using MIN(id) with GROUP BY (Simple)',
			languages: {
				sql: `DELETE FROM users
WHERE id NOT IN (
  SELECT MIN(id)
  FROM users
  GROUP BY email
);`
			}
		},
		{
			id: 3,
			title: 'Using Self JOIN',
			languages: {
				sql: `DELETE u1
FROM users u1
JOIN users u2
ON u1.email = u2.email
AND u1.id > u2.id;`
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

					<h1 className='text-2xl font-bold'>Remove Duplicate Records</h1>
					<p className='text-sm text-cyan-400 mt-1'>SQL Interview Problem</p>

					<div className='flex gap-2 mt-3'>
						<span className='px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded border border-cyan-500/20'>
							SQL
						</span>
					</div>

					<div className='mt-5 space-y-5 text-sm text-gray-300'>

						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Problem</h3>
							<p>
								Remove duplicate rows from a table while keeping only one record per unique value.
							</p>
						</div>

						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Example</h3>
							<pre className='bg-gray-800 p-3 rounded-lg'>
								{`Table: users

id | email
-----------
1  | a@test.com
2  | b@test.com
3  | a@test.com

After Removal:
id | email
-----------
1  | a@test.com
2  | b@test.com`}
							</pre>
						</div>

						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Approaches</h3>
							<ul className='list-disc ml-5 space-y-2'>
								<li>ROW_NUMBER() window function (best control)</li>
								<li>GROUP BY + MIN(id) (simplest)</li>
								<li>Self JOIN comparison</li>
							</ul>
						</div>

						<div>
							<h3 className='text-lg font-semibold text-white mb-1'>Key Insight</h3>
							<p>
								ROW_NUMBER() is the most flexible approach because you can control exactly which row to keep (oldest, latest, etc.).
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
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/5 blur-xl transition pointer-events-none" />

								<div className='p-6 border-b border-gray-800 flex flex-col md:flex-row md:items-center justify-between flex-wrap gap-4'>
									<h3 className='text-lg font-semibold text-white'>
										{problem.title}
									</h3>

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

								<div className='relative'>

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