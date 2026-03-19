'use client'

import {
	IconDatabase,
	IconServer,
	IconTerminal2,
	IconSearch,
	IconFilter,
	IconSortAscending,
	IconMath,
	IconChartBar,
	IconPlus,
	IconEdit,
	IconTrash,
	IconRefresh,
	IconUpload,
	IconHierarchy2,
	IconKey,
	IconBolt,
	IconEye,
	IconArrowsJoin,
	IconBraces,
	IconCodePlus,
	IconChartDots,
	IconGitFork,
	IconShieldCheck,
	IconRepeat,
	IconLock,
	IconShieldLock,
	IconUserCheck,
	IconFingerprint,
	IconFileSearch,
	IconActivity,
	IconTrendingUp,
	IconLayoutGrid,
	IconCopy,
	IconSitemap,
	IconLayersIntersect,
	IconNumbers,
	IconChecklist,
	IconCodeDots,
	IconSettings,
	IconFunction,
	IconTableAlias,
	IconTable,
	IconArrowBackUp,
} from '@tabler/icons-react';
import { motion } from 'framer-motion'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

/* ================= 1. FUNDAMENTALS ================= */
const fundamentals = [
  { title: 'What is SQL?', description: 'Purpose and use cases.', icon: <IconTerminal2 />, link: 'sql/what-is-sql' },
  { title: 'Relational Databases', description: 'Tables and relations.', icon: <IconDatabase />, link: 'sql/rdbms' },
  { title: 'Types of Databases', description: 'SQL vs NoSQL.', icon: <IconServer />, link: 'sql/db-types' },
  { title: 'SQL Dialects', description: 'MySQL vs PostgreSQL.', icon: <IconCodeDots />, link: 'sql/dialects' },
];


/* ================= 2. QUERY LANGUAGE ================= */
const queries = [
  { title: 'SELECT Basics', description: 'Fetching data.', icon: <IconSearch />, link: 'sql/select' },
  { title: 'Filtering Data', description: 'WHERE, AND, OR, IN.', icon: <IconFilter />, link: 'sql/filtering' },
  { title: 'Sorting & Limiting', description: 'ORDER BY, LIMIT.', icon: <IconSortAscending />, link: 'sql/sorting' },
  { title: 'Aggregate Functions', description: 'COUNT, SUM, AVG.', icon: <IconMath />, link: 'sql/aggregates' },
  { title: 'Grouping Data', description: 'GROUP BY, HAVING.', icon: <IconChartBar />, link: 'sql/grouping' },
  { title: 'Set Operations', description: 'UNION, INTERSECT, EXCEPT.', icon: <IconArrowsJoin />, link: 'sql/set-operations' },
];


/* ================= 3. DATA MANAGEMENT ================= */
const dataManagement = [
  { title: 'Insert Data', description: 'INSERT statements.', icon: <IconPlus />, link: 'sql/insert' },
  { title: 'Update Records', description: 'UPDATE queries.', icon: <IconEdit />, link: 'sql/update' },
  { title: 'Delete Data', description: 'DELETE & TRUNCATE.', icon: <IconTrash />, link: 'sql/delete' },
  { title: 'Upserts', description: 'ON CONFLICT, MERGE.', icon: <IconRefresh />, link: 'sql/upsert' },
  { title: 'Returning Data', description: 'RETURNING clause.', icon: <IconArrowBackUp />, link: 'sql/returning' },
  { title: 'Bulk Operations', description: 'Import & export.', icon: <IconUpload />, link: 'sql/bulk' },
];


/* ================= 4. DATABASE DESIGN ================= */
const design = [
  { title: 'Schema Design', description: 'Structuring databases.', icon: <IconHierarchy2 />, link: 'sql/schema' },
  { title: 'Data Types', description: 'INT, VARCHAR, DATE, BOOLEAN.', icon: <IconNumbers />, link: 'sql/data-types' },
  { title: 'Keys & Constraints', description: 'PK, FK, UNIQUE.', icon: <IconKey />, link: 'sql/constraints' },
  { title: 'Advanced Constraints', description: 'NOT NULL, CHECK, DEFAULT.', icon: <IconChecklist />, link: 'sql/advanced-constraints' },
  { title: 'Normalization', description: 'Remove redundancy.', icon: <IconLayersIntersect />, link: 'sql/normalization' },
  { title: 'Indexes', description: 'Improve performance.', icon: <IconBolt />, link: 'sql/indexes' },
  { title: 'Views', description: 'Reusable queries.', icon: <IconEye />, link: 'sql/views' },
  { title: 'Temporary Tables', description: 'CREATE TEMP TABLE.', icon: <IconTable />, link: 'sql/temp-tables' },
];


/* ================= 5. ADVANCED QUERYING ================= */
const advancedQueries = [
  { title: 'Joins Mastery', description: 'INNER, LEFT, RIGHT.', icon: <IconArrowsJoin />, link: 'sql/joins' },
  { title: 'Subqueries', description: 'Nested logic.', icon: <IconBraces />, link: 'sql/subqueries' },
  { title: 'Derived Tables', description: 'Subqueries in FROM.', icon: <IconTableAlias />, link: 'sql/derived-tables' },
  { title: 'CTEs', description: 'WITH clause.', icon: <IconCodePlus />, link: 'sql/cte' },
  { title: 'Window Functions', description: 'Analytics.', icon: <IconChartDots />, link: 'sql/window' },
  { title: 'Recursive Queries', description: 'Tree data.', icon: <IconGitFork />, link: 'sql/recursive' },
];


/* ================= 6. FUNCTIONS & LOGIC ================= */
// const functions = [
//   { title: 'String Functions', description: 'CONCAT, SUBSTRING, TRIM.', icon: <IconTextSize />, link: 'sql/string-functions' },
//   { title: 'Date & Time Functions', description: 'NOW, INTERVAL, EXTRACT.', icon: <IconClock />, link: 'sql/date-functions' },
//   { title: 'Numeric Functions', description: 'ROUND, MOD, CEIL.', icon: <IconCalculator />, link: 'sql/numeric-functions' },
//   { title: 'NULL Handling', description: 'COALESCE, NULLIF.', icon: <IconCircleOff />, link: 'sql/null-functions' },
//   { title: 'Conditional Logic', description: 'CASE, WHEN, ELSE.', icon: <IconSwitch />, link: 'sql/case' },
// ];


/* ================= 7. TRANSACTIONS ================= */
const transactions = [
  { title: 'ACID Properties', description: 'Transaction basics.', icon: <IconShieldCheck />, link: 'sql/acid' },
  { title: 'Transactions', description: 'BEGIN, COMMIT, ROLLBACK.', icon: <IconRepeat />, link: 'sql/transactions' },
  { title: 'Locks & Isolation', description: 'Concurrency control.', icon: <IconLock />, link: 'sql/locking' },
];


/* ================= 8. PROGRAMMABLE SQL ================= */
const programmable = [
  { title: 'Stored Procedures', description: 'Reusable logic.', icon: <IconSettings />, link: 'sql/procedures' },
  { title: 'User Functions', description: 'Custom functions.', icon: <IconFunction />, link: 'sql/functions' },
  { title: 'Triggers', description: 'Auto execution.', icon: <IconBolt />, link: 'sql/triggers' },
];


/* ================= 7. SECURITY ================= */
const security = [
	{ title: 'SQL Injection', description: 'Prevent attacks.', icon: <IconShieldLock />, link: 'sql/injection' },
	{ title: 'User Privileges', description: 'GRANT, REVOKE.', icon: <IconUserCheck />, link: 'sql/privileges' },
	{ title: 'Encryption', description: 'Data protection.', icon: <IconFingerprint />, link: 'sql/encryption' },
	{ title: 'Auditing', description: 'Track changes.', icon: <IconFileSearch />, link: 'sql/auditing' },
];


/* ================= 8. PERFORMANCE ================= */
const performance = [
	{ title: 'Query Plans', description: 'EXPLAIN analysis.', icon: <IconActivity />, link: 'sql/explain' },
	{ title: 'Index Optimization', description: 'Tuning.', icon: <IconTrendingUp />, link: 'sql/index-opt' },
	{ title: 'Partitioning', description: 'Large datasets.', icon: <IconLayoutGrid />, link: 'sql/partitioning' },
	{ title: 'Replication', description: 'High availability.', icon: <IconCopy />, link: 'sql/replication' },
	{ title: 'Sharding', description: 'Horizontal scaling.', icon: <IconSitemap />, link: 'sql/sharding' },
];

/* ================= PAGE ================= */

export default function Page() {
	return (
		<div className='bg-black p-10 py-32'>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-20"
			>
				<div>
					<h1 className="text-3xl md:text-5xl max-w-5xl mx-auto font-extrabold text-[#e38c00] mb-4 flex items-center gap-3">
						<img
							src="/icons/langs/sql.svg"
							alt="SQL Logo"
							className="w-10 h-10"
						/>
						SQL Docs
					</h1>

					<div className="text-neutral-300 text-base md:text-lg flex-1">
						SQL (Structured Query Language) is a standard language used to manage,
						query, and manipulate relational databases.
						<br />
						<br />

						<span className="text-neutral-400">👨‍💻 Creator:</span> Donald D. Chamberlin
						& Raymond F. Boyce (IBM)
						<br />

						<span className="text-neutral-400">📘 Maintained By:</span> ISO / ANSI
						<br />

						<span className="text-neutral-400">🚀 Latest Standard:</span> SQL:2023
						<br />
						<br />

						<a
							target="_blank"
							href="https://www.iso.org/standard/76583.html"
							className="text-violet-500 hover:text-violet-400"
						>
							Official SQL Standard (ISO)
						</a>

						<br />
						<br />

						<p className="text-neutral-400 flex items-center gap-2">
							<span className="font-medium text-neutral-300">
								OpenDocs Maintainer:
							</span>

							<a
								href="https://github.com/DarkmodeWorking"
								target="_blank"
								className="px-3 py-1 rounded-full bg-neutral-800 text-indigo-300 font-semibold
          hover:bg-neutral-700 transition"
							>
								@Anurag
							</a>
						</p>
					</div>
				</div>

				<div className="flex-shrink-0">
					<img
						src="https://www.computerhope.com/people/pictures/donald_chamberlin.jpg"
						alt="IBM Logo"
						className="w-80 h-80 rounded-full border-8 border-[#e38c00] object-cover"
					/>
				</div>
			</motion.div>

			<br />
			<br />
			<br />
			<br />

			<p className="px-10">Fundamentals</p>
			<ScrollableFeatureRow features={fundamentals} />

			<p className="px-10">Query Language</p>
			<ScrollableFeatureRow features={queries} />

			<p className="px-10">Data Management</p>
			<ScrollableFeatureRow features={dataManagement} />

			<p className="px-10">Database Design</p>
			<ScrollableFeatureRow features={design} />

			<p className="px-10">Advanced Querying</p>
			<ScrollableFeatureRow features={advancedQueries} />

			<p className="px-10">Transactions</p>
			<ScrollableFeatureRow features={transactions} />

			<p className="px-10">Programmable SQL</p>
			<ScrollableFeatureRow features={programmable} />

			<p className="px-10">Security</p>
			<ScrollableFeatureRow features={security} />

			<p className="px-10">Performance Optimization</p>
			<ScrollableFeatureRow features={performance} />
		</div>
	)
}
