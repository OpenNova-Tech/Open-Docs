'use client'

import {
	IconDatabase,
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
	IconCode,
	IconTextSize,
	IconAsterisk,
	IconLink,
	IconAdjustments,
	IconClock,
	IconCalculator,
	IconCircleOff,
	IconSwitch,
	IconAlertCircle,
	IconClearAll,
	IconTimeline,
	IconFileCode
} from '@tabler/icons-react';

import { motion } from 'framer-motion'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

/* ================= 1. FUNDAMENTALS ================= */
const fundamentals = [
	{ title: 'Introduction', description: 'Structured Query Language for managing databases.', icon: <IconTerminal2 />, link: 'sql/introduction' },
  { title: 'History of SQL', description: 'Developed by IBM in the 1970s.', icon: <IconTimeline />, link: 'sql/history' },
	{ title: 'Relational Databases', description: 'Tables, rows, and relationships.', icon: <IconDatabase />, link: 'sql/rdbms' },
	{ title: 'SQL Dialects', description: 'MySQL, PostgreSQL, SQLite.', icon: <IconCodeDots />, link: 'sql/dialects' },
  { title: 'Hello World Query', description: 'Your first SELECT statement.', icon: <IconFileCode />, link: 'sql/hello-world' },
	{ title: 'SQL Syntax Basics', description: 'Statements, clauses, keywords.', icon: <IconCode />, link: 'sql/syntax' },
]

/* ================= 2. QUERY LANGUAGE (DQL) ================= */
const queries = [
	{ title: 'SELECT Basics', description: 'Fetching data from tables.', icon: <IconSearch />, link: 'sql/select' },
	{ title: 'Filtering Data', description: 'WHERE, AND, OR, IN.', icon: <IconFilter />, link: 'sql/filtering' },
	{ title: 'Sorting & Limiting', description: 'ORDER BY, LIMIT.', icon: <IconSortAscending />, link: 'sql/sorting' },
	{ title: 'Aliases', description: 'Rename columns and tables.', icon: <IconTextSize />, link: 'sql/aliases' },
	{ title: 'Operators', description: 'Arithmetic, logical, comparison.', icon: <IconAsterisk />, link: 'sql/operators' },
	{ title: 'Joins Basics', description: 'Combining multiple tables.', icon: <IconLink />, link: 'sql/joins-basics' },
	{ title: 'Aggregate Functions', description: 'COUNT, SUM, AVG.', icon: <IconMath />, link: 'sql/aggregates' },
	{ title: 'Grouping Data', description: 'GROUP BY, HAVING.', icon: <IconChartBar />, link: 'sql/grouping' },
	{ title: 'Set Operations', description: 'UNION, INTERSECT, EXCEPT.', icon: <IconArrowsJoin />, link: 'sql/set-operations' },
]

/* ================= 3. DATA MANIPULATION (DML) ================= */
const dml = [
	{ title: 'INSERT', description: 'Add new records.', icon: <IconPlus />, link: 'sql/insert' },
	{ title: 'UPDATE', description: 'Modify existing data.', icon: <IconEdit />, link: 'sql/update' },
	{ title: 'DELETE', description: 'Remove records.', icon: <IconTrash />, link: 'sql/delete' },
	{ title: 'TRUNCATE', description: 'Delete all records quickly.', icon: <IconClearAll />, link: 'sql/truncate' },
	{ title: 'Upserts', description: 'ON CONFLICT, MERGE.', icon: <IconRefresh />, link: 'sql/upsert' },
	{ title: 'RETURNING Clause', description: 'Get affected rows.', icon: <IconArrowBackUp />, link: 'sql/returning' },
	{ title: 'Bulk Operations', description: 'Import & export data.', icon: <IconUpload />, link: 'sql/bulk' },
]

/* ================= 4. DATA DEFINITION (DDL) ================= */
const ddl = [
	{ title: 'CREATE', description: 'Create databases & tables.', icon: <IconPlus />, link: 'sql/create' },
	{ title: 'ALTER', description: 'Modify table structure.', icon: <IconAdjustments />, link: 'sql/alter' },
	{ title: 'DROP', description: 'Delete tables/databases.', icon: <IconTrash />, link: 'sql/drop' },
	{ title: 'Data Types', description: 'INT, VARCHAR, DATE, BOOLEAN.', icon: <IconNumbers />, link: 'sql/data-types' },
	{ title: 'Keys & Constraints', description: 'PK, FK, UNIQUE.', icon: <IconKey />, link: 'sql/constraints' },
	{ title: 'Advanced Constraints', description: 'CHECK, DEFAULT, NOT NULL.', icon: <IconChecklist />, link: 'sql/advanced-constraints' },
]

/* ================= 5. DATABASE DESIGN ================= */
const design = [
	{ title: 'Schema Design', description: 'Structuring databases.', icon: <IconHierarchy2 />, link: 'sql/schema' },
	{ title: 'Normalization', description: 'Reduce redundancy.', icon: <IconLayersIntersect />, link: 'sql/normalization' },
	{ title: 'Indexes', description: 'Improve query performance.', icon: <IconBolt />, link: 'sql/indexes' },
	{ title: 'Views', description: 'Reusable virtual tables.', icon: <IconEye />, link: 'sql/views' },
	{ title: 'Temporary Tables', description: 'Session-based tables.', icon: <IconTable />, link: 'sql/temp-tables' },
]

/* ================= 6. FUNCTIONS & EXPRESSIONS ================= */
const functions = [
	{ title: 'String Functions', description: 'CONCAT, SUBSTRING, TRIM.', icon: <IconTextSize />, link: 'sql/string-functions' },
	{ title: 'Date & Time Functions', description: 'NOW, INTERVAL, EXTRACT.', icon: <IconClock />, link: 'sql/date-functions' },
	{ title: 'Numeric Functions', description: 'ROUND, CEIL, FLOOR.', icon: <IconCalculator />, link: 'sql/numeric-functions' },
	{ title: 'NULL Handling', description: 'COALESCE, NULLIF.', icon: <IconCircleOff />, link: 'sql/null-functions' },
	{ title: 'Conditional Logic', description: 'CASE, WHEN, ELSE.', icon: <IconSwitch />, link: 'sql/case' },
	{ title: 'NULL Behavior', description: 'Three-valued logic.', icon: <IconAlertCircle />, link: 'sql/null-behavior' },
]

/* ================= 7. ADVANCED QUERYING ================= */
const advancedQueries = [
	{ title: 'Joins Mastery', description: 'INNER, LEFT, RIGHT, FULL.', icon: <IconArrowsJoin />, link: 'sql/joins' },
	{ title: 'Subqueries', description: 'Nested queries.', icon: <IconBraces />, link: 'sql/subqueries' },
	{ title: 'Derived Tables', description: 'Subqueries in FROM.', icon: <IconTableAlias />, link: 'sql/derived-tables' },
	{ title: 'CTEs', description: 'WITH clause.', icon: <IconCodePlus />, link: 'sql/cte' },
	{ title: 'Window Functions', description: 'Advanced analytics.', icon: <IconChartDots />, link: 'sql/window' },
	{ title: 'Recursive Queries', description: 'Hierarchical data.', icon: <IconGitFork />, link: 'sql/recursive' },
]

/* ================= 8. TRANSACTIONS ================= */
const transactions = [
	{ title: 'ACID Properties', description: 'Transaction guarantees.', icon: <IconShieldCheck />, link: 'sql/acid' },
	{ title: 'Transactions', description: 'BEGIN, COMMIT, ROLLBACK.', icon: <IconRepeat />, link: 'sql/transactions' },
	{ title: 'Locks & Isolation', description: 'Concurrency control.', icon: <IconLock />, link: 'sql/locking' },
]

/* ================= 9. PROGRAMMABLE SQL ================= */
const programmable = [
	{ title: 'Stored Procedures', description: 'Reusable SQL logic.', icon: <IconSettings />, link: 'sql/procedures' },
	{ title: 'User Functions', description: 'Custom functions.', icon: <IconFunction />, link: 'sql/functions' },
	{ title: 'Triggers', description: 'Automatic execution.', icon: <IconBolt />, link: 'sql/triggers' },
]

/* ================= 10. SECURITY ================= */
const security = [
	{ title: 'SQL Injection', description: 'Prevent vulnerabilities.', icon: <IconShieldLock />, link: 'sql/injection' },
	{ title: 'User Privileges', description: 'GRANT, REVOKE.', icon: <IconUserCheck />, link: 'sql/privileges' },
	{ title: 'Encryption', description: 'Data protection.', icon: <IconFingerprint />, link: 'sql/encryption' },
	{ title: 'Auditing', description: 'Track database activity.', icon: <IconFileSearch />, link: 'sql/auditing' },
]

/* ================= 11. PERFORMANCE ================= */
const performance = [
	{ title: 'Query Plans', description: 'EXPLAIN analysis.', icon: <IconActivity />, link: 'sql/explain' },
	{ title: 'Index Optimization', description: 'Index tuning.', icon: <IconTrendingUp />, link: 'sql/index-opt' },
	{ title: 'Partitioning', description: 'Handling large datasets.', icon: <IconLayoutGrid />, link: 'sql/partitioning' },
	{ title: 'Replication', description: 'High availability.', icon: <IconCopy />, link: 'sql/replication' },
	{ title: 'Sharding', description: 'Horizontal scaling.', icon: <IconSitemap />, link: 'sql/sharding' },
]

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
								href="https://github.com/alyviabiswas"
								target="_blank"
								className="px-3 py-1 rounded-full bg-neutral-800 text-indigo-300 font-semibold
          hover:bg-neutral-700 transition"
							>
								@Alyvia
							</a>
						</p>
					</div>
				</div>

				<div className="flex-shrink-0">
					<img
						src="https://news.ucsc.edu/wp-content/uploads/2009/07/chamberlin_250-1.jpg"
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

			<p className="px-10">Data Query (DQL)</p>
			<ScrollableFeatureRow features={queries} />

			<p className="px-10">Data Manipulation (DML)</p>
			<ScrollableFeatureRow features={dml} />

			<p className="px-10">Data Definition (DDL)</p>
			<ScrollableFeatureRow features={ddl} />

			<p className="px-10">Database Design</p>
			<ScrollableFeatureRow features={design} />

			<p className="px-10">Functions & Expressions</p>
			<ScrollableFeatureRow features={functions} />

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
