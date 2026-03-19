'use client'

import {
  IconTerminal2,
  IconHistory,
  IconSettings,
  IconFileCode,
  IconMessage,
  IconAdjustments,
  IconArrowsShuffle,
  IconLoader2,
  IconFunction,
  IconCpu,
  IconBoxMultiple,
  IconTableOptions,
  IconDatabase,
  IconCloudDownload,
  IconBolt,
  IconShieldLock,
  IconRocket,
  IconHierarchy,
  IconCheckbox,
  IconGitBranch,
  IconFileLambda,
  IconListDetails,
  IconGauge,
  IconRecycle,
  IconServer,
  IconBug,
  IconActivityHeartbeat,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

// 2. Python Basics
const basics = [
  {
    title: 'Introduction to Python',
    description: 'Python is a high-level, interpreted programming language.',
    icon: <IconTerminal2 />,
    link: 'python/0',
  },
  {
    title: 'History of Python',
    description:
      'Created by Guido van Rossum in 1991, Python is maintained by the Python Software Foundation.',
    icon: <IconHistory />,
    link: 'python/1',
  },
  {
    title: 'Python Features',
    description:
      'Interpreted, dynamically typed, easy syntax, portable, and supports multiple paradigms.',
    icon: <IconSettings />,
    link: 'python/2',
  },
  {
    title: 'Installation & Setup',
    description:
      'Install Python, configure PATH, use IDEs like PyCharm, VS Code, Jupyter.',
    icon: <IconSettings />,
    link: 'python/3',
  },
  {
    title: 'Hello World',
    description: 'Your first Python program explained.',
    icon: <IconFileCode />,
    link: 'python/4',
  },
  {
    title: 'Python Interpreter & Execution',
    description: 'Run scripts using interpreter, REPL, or IDE.',
    icon: <IconTerminal2 />,
    link: 'python/5',
  },
]

// 3. Variables, Data Types & Operators
const variables = [
  {
    title: 'Variables & Data Types',
    description: 'Numbers, Strings, Lists, Tuples, Sets, Dictionaries.',
    icon: <IconAdjustments />,
    link: 'python/6',
  },
  {
    title: 'Operators',
    description:
      'Arithmetic, Relational, Logical, Bitwise, Assignment, Membership, Identity.',
    icon: <IconArrowsShuffle />,
    link: 'python/7',
  },
  {
    title: 'Type Conversion & Casting',
    description: 'Implicit and explicit type conversion.',
    icon: <IconAdjustments />,
    link: 'python/8',
  },
  {
    title: 'Comments',
    description: 'Single-line, multi-line, and docstring usage.',
    icon: <IconMessage />,
    link: 'python/9',
  },
]

// 4. Control Flow
const controlFlow = [
  {
    title: 'Decision Making',
    description: 'if, elif, else statements.',
    icon: <IconHierarchy />,
    link: 'python/10',
  },
  {
    title: 'Loops',
    description: 'for, while, break, continue, pass.',
    icon: <IconLoader2 />,
    link: 'python/11',
  },
  {
    title: 'Functions',
    description: 'Defining functions, parameters, return, scope.',
    icon: <IconFunction />,
    link: 'python/12',
  },
  {
    title: 'Exception Handling',
    description: 'try, except, finally, raise, custom exceptions.',
    icon: <IconBug />,
    link: 'python/13',
  },
]

// 5. Data Structures
const dataStructures = [
  {
    title: 'Lists & Tuples',
    description: 'Mutable vs Immutable sequences.',
    icon: <IconBoxMultiple />,
    link: 'python/14',
  },
  {
    title: 'Sets',
    description: 'Unordered collections with unique elements.',
    icon: <IconBoxMultiple />,
    link: 'python/15',
  },
  {
    title: 'Dictionaries',
    description: 'Key-value pairs with fast lookups.',
    icon: <IconDatabase />,
    link: 'python/16',
  },
  {
    title: 'Comprehensions',
    description: 'List, set, dictionary comprehensions.',
    icon: <IconArrowsShuffle />,
    link: 'python/17',
  },
]

// 6. Modules & Packages
const modules = [
  {
    title: 'Importing Modules',
    description: 'Built-in, external, and custom modules.',
    icon: <IconFileCode />,
    link: 'python/18',
  },
  {
    title: 'Python Standard Library',
    description: 'os, sys, math, datetime, json, random, itertools, functools.',
    icon: <IconTableOptions />,
    link: 'python/19',
  },
  {
    title: 'Creating Packages',
    description: '__init__.py, organizing code into packages.',
    icon: <IconFileCode />,
    link: 'python/20',
  },
]

// 7. File Handling & I/O
const fileIO = [
  {
    title: 'File Operations',
    description: 'open, read, write, append, close.',
    icon: <IconDatabase />,
    link: 'python/21',
  },
  {
    title: 'Context Managers',
    description: 'Using with statement to handle files safely.',
    icon: <IconRecycle />,
    link: 'python/22',
  },
  {
    title: 'Serialization',
    description: 'pickle, json, CSV handling.',
    icon: <IconCloudDownload />,
    link: 'python/23',
  },
]

// 8. OOP in Python
const oop = [
  {
    title: 'Classes & Objects',
    description: 'Defining classes, creating objects, self keyword.',
    icon: <IconCpu />,
    link: 'python/24',
  },
  {
    title: 'Inheritance',
    description: 'Single, multiple, multilevel inheritance.',
    icon: <IconBoxMultiple />,
    link: 'python/25',
  },
  {
    title: 'Polymorphism',
    description: 'Method overloading & overriding.',
    icon: <IconFunction />,
    link: 'python/26',
  },
  {
    title: 'Encapsulation',
    description: 'Private, protected members & getters/setters.',
    icon: <IconShieldLock />,
    link: 'python/27',
  },
  {
    title: 'Abstraction',
    description: 'Abstract classes & interfaces using abc module.',
    icon: <IconHierarchy />,
    link: 'python/28',
  },
]

// 9. Advanced Python
const advanced = [
  {
    title: 'Decorators',
    description: 'Enhancing functions without modifying them.',
    icon: <IconBolt />,
    link: 'python/29',
  },
  {
    title: 'Generators',
    description: 'Lazy evaluation using yield.',
    icon: <IconLoader2 />,
    link: 'python/30',
  },
  {
    title: 'Context Managers',
    description: 'Custom context managers with __enter__ & __exit__.',
    icon: <IconFileCode />,
    link: 'python/31',
  },
  {
    title: 'Lambda & Functional Programming',
    description: 'lambda, map, filter, reduce, functools.',
    icon: <IconFileLambda />,
    link: 'python/32',
  },
]

// 10. Python in Real-World
const realWorld = [
  {
    title: 'Web Development',
    description: 'Flask, Django, FastAPI.',
    icon: <IconCloudDownload />,
    link: 'python/33',
  },
  {
    title: 'Data Science & ML',
    description: 'NumPy, Pandas, Matplotlib, scikit-learn.',
    icon: <IconCpu />,
    link: 'python/34',
  },
  {
    title: 'Automation & Scripting',
    description: 'Automate tasks using Python scripts.',
    icon: <IconTerminal2 />,
    link: 'python/35',
  },
  {
    title: 'GUI Development',
    description: 'Tkinter, PyQt, Kivy.',
    icon: <IconActivityHeartbeat />,
    link: 'python/36',
  },
  {
    title: 'Python in Cloud & Microservices',
    description: 'Using Python with AWS, GCP, Azure.',
    icon: <IconServer />,
    link: 'python/37',
  },
]

// 11. Testing & Debugging
const testing = [
  {
    title: 'Unit Testing',
    description: 'unittest, pytest basics.',
    icon: <IconCheckbox />,
    link: 'python/38',
  },
  {
    title: 'Mocking',
    description: 'Using unittest.mock or pytest-mock.',
    icon: <IconFunction />,
    link: 'python/39',
  },
  {
    title: 'Debugging Tools',
    description: 'pdb, logging, breakpoints.',
    icon: <IconBug />,
    link: 'python/40',
  },
]

// 12. Tools & Ecosystem
const tools = [
  {
    title: 'IDEs & Editors',
    description: 'PyCharm, VS Code, Jupyter Notebook, Spyder.',
    icon: <IconListDetails />,
    link: 'python/41',
  },
  {
    title: 'Package Management',
    description: 'pip, conda, virtualenv, poetry.',
    icon: <IconGitBranch />,
    link: 'python/42',
  },
  {
    title: 'Build & Automation',
    description: 'tox, invoke, nox.',
    icon: <IconRocket />,
    link: 'python/43',
  },
  {
    title: 'Logging Frameworks',
    description: 'logging, loguru.',
    icon: <IconGauge />,
    link: 'python/44',
  },
]

export default function Page() {
  return (
    <div className='bg-black p-10 py-32'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-20'
      >
        <div>
          <h1 className='text-3xl md:text-5xl max-w-5xl mx-auto font-extrabold text-[#3572A5] mb-4 flex items-center gap-3'>
            <img
              src='/icons/langs/py.svg'
              alt='Python Logo'
              className='w-10 h-10'
            />
            Python Docs
          </h1>

          <div className='text-neutral-300 text-base md:text-lg flex-1'>
            Python is a high-level, interpreted programming language known for
            its simplicity, readability, and versatility in web, AI, data
            science, and automation.
            <br />
            <br />
            <span className='text-neutral-400'>👨‍💻 Creator:</span> Guido van
            Rossum
            <br />
            <span className='text-neutral-400'>📘 Maintained By:</span> Python
            Software Foundation
            <br />
            <span className='text-neutral-400'>🚀 Latest Version:</span> Python
            3.x
            <br />
            <br />
            <a
              target='_blank'
              href='https://github.com/python/cpython'
              className='text-violet-500 hover:text-violet-400'
            >
              CPython Official Repository
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
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEgjmHVGUkLfSZEiVDAIrJECgP1Vg3b6FcmMNhAISR1ZsTKJvAbJzbnXmc2xhoPmVK_VMsFCSpB-PlQQnKGviJ8akRtWmsJLbaAlAAEvwfav30sHayJdD3D4FFRyoXKrY3wZ3jg8yyAbG4Diml7WPhTVaFS6TgZrr6pb9t8rqbVLGrtMTg78LWgYZ8PW%2Fs878%2FGuido-van-Rossum-CWI.jpg&f=1&nofb=1&ipt=5822f63cb38d7b7cb033ef23b1b0d23d79ac14b088a7bacace578a19d511eb1f'
            alt='Guido van Rossum'
            className='w-90 h-90 rounded-full border-8 border-[#3572A5] object-cover'
          />
        </div>
      </motion.div>

      <br />
      <br />
      <br />
      <br />

      <p className='px-10'>Python Basics</p>
      <ScrollableFeatureRow features={basics} />

      <p className='px-10'>Variables & Data Types</p>
      <ScrollableFeatureRow features={variables} />

      <p className='px-10'>Control Flow & Functions</p>
      <ScrollableFeatureRow features={controlFlow} />

      <p className='px-10'>Data Structures</p>
      <ScrollableFeatureRow features={dataStructures} />

      <p className='px-10'>Modules & Packages</p>
      <ScrollableFeatureRow features={modules} />

      <p className='px-10'>File Handling & I/O</p>
      <ScrollableFeatureRow features={fileIO} />

      <p className='px-10'>OOP in Python</p>
      <ScrollableFeatureRow features={oop} />

      <p className='px-10'>Advanced Python</p>
      <ScrollableFeatureRow features={advanced} />

      <p className='px-10'>Python in Real-World</p>
      <ScrollableFeatureRow features={realWorld} />

      <p className='px-10'>Testing & Debugging</p>
      <ScrollableFeatureRow features={testing} />

      <p className='px-10'>Tools & Ecosystem</p>
      <ScrollableFeatureRow features={tools} />
    </div>
  )
}
