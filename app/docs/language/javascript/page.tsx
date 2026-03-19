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
  IconMessage,
  IconAlertTriangle,
  IconArrowsLeftRight,
  IconCheckbox,
  IconPointer,
  IconListDetails,
  IconTableOptions,
  IconBoxMultiple,
  IconGitBranch,
  IconTimelineEvent,
  IconAlarm,
  IconHash,
  IconRepeat,
  IconRegex,
  IconGauge,
  IconArchive,
  IconCookie,
  IconDatabaseExport,
  IconMapPin,
  IconClipboard,
  IconBell,
  IconServer,
  IconMessageChatbot,
  IconShieldLock,
  IconRocket,
} from '@tabler/icons-react'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'
import { motion } from 'framer-motion'

const core = [
  {
    title: 'What is JavaScript',
    description: 'Lightweight, interpreted programming language of the web.',
    icon: <IconTerminal2 />,
    link: 'javascript/1',
  },
  {
    title: 'History of JS',
    description: 'Created by Brendan Eich in 1995 at Netscape.',
    icon: <IconTimeline />,
    link: 'javascript/2',
  },
  {
    title: 'Setup & Environment',
    description: 'Browser console, Node.js, and editors to run JS.',
    icon: <IconSettings />,
    link: 'javascript/3',
  },
  {
    title: 'Hello World',
    description: 'Your first JavaScript program and output methods.',
    icon: <IconFileCode />,
    link: 'javascript/4',
  },
  {
    title: 'Comments',
    description: 'Single-line and multi-line comments in JS.',
    icon: <IconMessage />,
    link: 'javascript/5',
  },
  {
    title: 'Strict Mode',
    description: 'Enforce stricter parsing and error handling in JS.',
    icon: <IconAlertTriangle />,
    link: 'javascript/6',
  },
]

const syntax = [
  {
    title: 'Variables (var/let/const)',
    description: 'Declare & store values using different keywords.',
    icon: <IconCode />,
    link: 'javascript/7',
  },
  {
    title: 'Data Types',
    description: 'Primitive & reference types in JavaScript.',
    icon: <IconAdjustments />,
    link: 'javascript/8',
  },
  {
    title: 'Type Conversion & Coercion',
    description: 'Implicit vs explicit conversion in JS.',
    icon: <IconArrowsLeftRight />,
    link: 'javascript/9',
  },
  {
    title: 'Truthy & Falsy Values',
    description: 'How JS evaluates values in boolean context.',
    icon: <IconCheckbox />,
    link: 'javascript/10',
  },
  {
    title: 'Operators',
    description: 'Arithmetic, assignment, comparison, logical & others.',
    icon: <IconArrowsShuffle />,
    link: 'javascript/11',
  },
  {
    title: 'Control Statements',
    description: 'If-else, switch, loops (for, while, do-while).',
    icon: <IconHierarchy2 />,
    link: 'javascript/12',
  },
  {
    title: 'Loops in JavaScript',
    description: 'for, while, do–while, for…in, for…of.',
    icon: <IconLoader2 />,
    link: 'javascript/13',
  },
]

const functions = [
  {
    title: 'Functions',
    description: 'Declaration, Expression & Arrow functions in JS.',
    icon: <IconFunction />,
    link: 'javascript/14',
  },
  {
    title: 'Scope & Hoisting',
    description: 'Understanding lexical scope and hoisting.',
    icon: <IconSquareRotated />,
    link: 'javascript/15',
  },
  {
    title: 'Closures',
    description: 'Functions with preserved lexical environment.',
    icon: <IconFileLambda />,
    link: 'javascript/16',
  },
  {
    title: 'this Keyword',
    description: 'How "this" behaves in different contexts.',
    icon: <IconPointer />,
    link: 'javascript/17',
  },
  {
    title: 'Call, Apply, Bind',
    description: 'Explicitly set "this" value in functions.',
    icon: <IconLink />,
    link: 'javascript/18',
  },
  {
    title: 'Default & Rest Parameters',
    description: 'Flexible function arguments handling.',
    icon: <IconListDetails />,
    link: 'javascript/19',
  },
]

const objects = [
  {
    title: 'Objects & Prototypes',
    description: 'JavaScript object creation and inheritance.',
    icon: <IconCpu />,
    link: 'javascript/20',
  },
  {
    title: 'Object Methods',
    description: 'Object.keys, Object.values, Object.entries, Object.assign.',
    icon: <IconTableOptions />,
    link: 'javascript/21',
  },
  {
    title: 'Arrays & Methods',
    description: 'Common methods like map, filter, reduce.',
    icon: <IconLayoutDashboard />,
    link: 'javascript/22',
  },
  {
    title: 'Destructuring & Spread',
    description: 'Extract values and use ...spread/rest.',
    icon: <IconBoxMultiple />,
    link: 'javascript/23',
  },
  {
    title: 'Browser DOM',
    description: 'Interact with HTML elements using JavaScript.',
    icon: <IconBrowser />,
    link: 'javascript/24',
  },
  {
    title: 'Events',
    description: 'Handle clicks, inputs, submit events etc.',
    icon: <IconActivityHeartbeat />,
    link: 'javascript/25',
  },
  {
    title: 'Event Delegation',
    description: 'Efficient event handling strategy.',
    icon: <IconGitBranch />,
    link: 'javascript/26',
  },
  {
    title: 'JSON',
    description: 'JavaScript Object Notation – lightweight data format.',
    icon: <IconFileCode />,
    link: 'javascript/27',
  },
  {
    title: 'Fetch API',
    description: 'Make HTTP requests in the browser.',
    icon: <IconCloudDownload />,
    link: 'javascript/28',
  },
]

const asyncjs = [
  {
    title: 'Callbacks',
    description: 'First asynchronous technique in JavaScript.',
    icon: <IconLink />,
    link: 'javascript/29',
  },
  {
    title: 'Promises',
    description: 'Handle async operations with .then() & .catch().',
    icon: <IconClock />,
    link: 'javascript/30',
  },
  {
    title: 'Async / Await',
    description: 'Modern way to write asynchronous code.',
    icon: <IconBolt />,
    link: 'javascript/31',
  },
  {
    title: 'Event Loop',
    description: 'How JavaScript handles concurrency.',
    icon: <IconLoader />,
    link: 'javascript/32',
  },
  {
    title: 'Microtasks vs Macrotasks',
    description: 'Queues and priorities in async execution.',
    icon: <IconTimelineEvent />,
    link: 'javascript/33',
  },
  {
    title: 'setTimeout & setInterval',
    description: 'Timers and scheduling in JavaScript.',
    icon: <IconAlarm />,
    link: 'javascript/34',
  },
]

const advanced = [
  {
    title: 'ES6+ Features',
    description: 'Let, const, template literals, destructuring, etc.',
    icon: <IconRefresh />,
    link: 'javascript/35',
  },
  {
    title: 'Modules',
    description: 'Import/export syntax & modular JS.',
    icon: <IconCirclesRelation />,
    link: 'javascript/36',
  },
  {
    title: 'Error Handling',
    description: 'try...catch...finally blocks and errors.',
    icon: <IconBug />,
    link: 'javascript/37',
  },
  {
    title: 'OOP in JavaScript',
    description: 'Classes, constructor functions & prototype chains.',
    icon: <IconHierarchy2 />,
    link: 'javascript/38',
  },
  {
    title: 'Symbols & BigInt',
    description: 'Special data types for unique values & large integers.',
    icon: <IconHash />,
    link: 'javascript/39',
  },
  {
    title: 'Iterators & Generators',
    description: 'Custom iteration logic in JS.',
    icon: <IconRepeat />,
    link: 'javascript/40',
  },
  {
    title: 'Regular Expressions',
    description: 'Pattern matching and text manipulation.',
    icon: <IconRegex />,
    link: 'javascript/41',
  },
  {
    title: 'Debouncing & Throttling',
    description: 'Optimize performance of frequent events.',
    icon: <IconGauge />,
    link: 'javascript/42',
  },
  {
    title: 'Memory & Garbage Collection',
    description: 'How JavaScript manages memory under the hood.',
    icon: <IconRecycle />,
    link: 'javascript/43',
  },
  {
    title: 'Node.js Intro',
    description: 'JavaScript runtime outside the browser.',
    icon: <IconBrandNodejs />,
    link: 'javascript/44',
  },
]

const browserAPIs = [
  {
    title: 'LocalStorage',
    description: 'Store key-value pairs in browser.',
    icon: <IconDatabase />,
    link: 'javascript/45',
  },
  {
    title: 'SessionStorage',
    description: 'Temporary storage that clears on tab close.',
    icon: <IconArchive />,
    link: 'javascript/46',
  },
  {
    title: 'Cookies',
    description: 'Store small pieces of data with expiration.',
    icon: <IconCookie />,
    link: 'javascript/47',
  },
  {
    title: 'IndexedDB',
    description: 'Client-side NoSQL database for complex data.',
    icon: <IconDatabaseExport />,
    link: 'javascript/48',
  },
  {
    title: 'Geolocation API',
    description: 'Access user location with JS.',
    icon: <IconMapPin />,
    link: 'javascript/49',
  },
  {
    title: 'Clipboard API',
    description: 'Copy and paste functionality in JS.',
    icon: <IconClipboard />,
    link: 'javascript/50',
  },
  {
    title: 'Notifications API',
    description: 'Send system notifications from web apps.',
    icon: <IconBell />,
    link: 'javascript/51',
  },
  {
    title: 'Service Workers',
    description: 'Enable offline capabilities (PWA).',
    icon: <IconServer />,
    link: 'javascript/52',
  },
  {
    title: 'WebSockets',
    description: 'Real-time communication in JS.',
    icon: <IconMessageChatbot />,
    link: 'javascript/53',
  },
]

const security = [
  {
    title: 'JS Security Basics',
    description: 'Prevent XSS, CSRF, and injection attacks.',
    icon: <IconShieldLock />,
    link: 'javascript/54',
  },
  {
    title: 'Performance Optimization',
    description: 'Async loading, defer, lazy load, minify, etc.',
    icon: <IconRocket />,
    link: 'javascript/55',
  },
]

export default function page() {
  return (
    <div className='bg-black p-10 py-32'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-20'
      >
        <div>
          <h1 className='text-3xl md:text-5xl max-w-5xl mx-auto font-extrabold text-[#f1e05a] mb-4 flex items-center gap-3'>
            <img
              src='/icons/langs/js.svg'
              alt='JavaScript Logo'
              className='w-10 h-10'
            />
            JavaScript Docs
          </h1>

          <div className='text-neutral-300 text-base md:text-lg flex-1'>
            JavaScript is a versatile, high-level programming language used for
            building interactive websites, web applications, servers, and mobile
            apps.
            <br />
            <br />
            <span className='text-neutral-400'>👨‍💻 Creator:</span> Brendan Eich
            <br />
            <span className='text-neutral-400'>📘 Standardized By:</span> ECMA
            International
            <br />
            <span className='text-neutral-400'>🚀 Latest Standard:</span>{' '}
            ECMAScript (ES2023+)
            <br />
            <br />
            <a
              target='_blank'
              href='https://github.com/tc39/ecma262'
              className='text-violet-500 hover:text-violet-400'
            >
              ECMAScript Specification Repository
            </a>
            <br />
            <br />
            <p className='text-neutral-400 flex items-center gap-2'>
              <span className='font-medium text-neutral-300'>
                OpenDocs Maintainer:
              </span>

              <a
                href='https://github.com/DarkmodeWorking'
                target='_blank'
                className='px-3 py-1 rounded-full bg-neutral-800 text-indigo-300 font-semibold
          hover:bg-neutral-700 transition'
              >
                @Anurag
              </a>
            </p>
          </div>
        </div>

        <div className='flex-shrink-0'>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.masaischool.com%2Fblog%2Fcontent%2Fimages%2Fwordpress%2F2022%2F04%2FBrendan-Eich.png&f=1&nofb=1&ipt=483d15e6d73f99dc59b05e16718ce858035384f5d52425b62f69268b74130617'
            alt='Brendan Eich'
            className='w-90 h-90 rounded-full border-8 border-[#f1e05a] object-cover'
          />
        </div>
      </motion.div>

      <br />
      <br />
      <br />
      <br />

      <p className='px-10'>Core Concepts & Setup</p>
      <ScrollableFeatureRow features={core} />

      <p className='px-10'>Syntax & Building Blocks</p>
      <ScrollableFeatureRow features={syntax} />

      <p className='px-10'>Functions & Scopes</p>
      <ScrollableFeatureRow features={functions} />

      <p className='px-10'>Objects, Arrays & DOM</p>
      <ScrollableFeatureRow features={objects} />

      <p className='px-10'>Asynchronous JavaScript</p>
      <ScrollableFeatureRow features={asyncjs} />

      <p className='px-10'>Advanced Concepts</p>
      <ScrollableFeatureRow features={advanced} />

      <p className='px-10'>JavaScript in Web</p>
      <ScrollableFeatureRow features={browserAPIs} />

      <p className='px-10'>Security Concepts</p>
      <ScrollableFeatureRow features={security} />
    </div>
  )
}
