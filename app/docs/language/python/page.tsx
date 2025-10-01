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
  IconClock,
  IconBolt,
  IconShieldLock,
  IconRocket,
  IconHierarchy,
  IconCheckbox,
  IconGitBranch,
  IconFileLambda,
  IconLink,
  IconListDetails,
  IconRegex,
  IconGauge,
  IconRecycle,
  IconServer,
  IconBug,
  IconActivityHeartbeat
} from '@tabler/icons-react'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'


// 2. Python Basics
const basics = [
  { title: 'Introduction to Python', description: 'Python is a high-level, interpreted programming language.', icon: <IconTerminal2 />, link: 'python/0' },
  { title: 'History of Python', description: 'Created by Guido van Rossum in 1991, Python is maintained by the Python Software Foundation.', icon: <IconHistory />, link: 'python/1' },
  { title: 'Python Features', description: 'Interpreted, dynamically typed, easy syntax, portable, and supports multiple paradigms.', icon: <IconSettings />, link: 'python/2' },
  { title: 'Installation & Setup', description: 'Install Python, configure PATH, use IDEs like PyCharm, VS Code, Jupyter.', icon: <IconSettings />, link: 'python/3' },
  { title: 'Hello World', description: 'Your first Python program explained.', icon: <IconFileCode />, link: 'python/4' },
  { title: 'Python Interpreter & Execution', description: 'Run scripts using interpreter, REPL, or IDE.', icon: <IconTerminal2 />, link: 'python/5' },
]

// 3. Variables, Data Types & Operators
const variables = [
  { title: 'Variables & Data Types', description: 'Numbers, Strings, Lists, Tuples, Sets, Dictionaries.', icon: <IconAdjustments />, link: 'python/6' },
  { title: 'Operators', description: 'Arithmetic, Relational, Logical, Bitwise, Assignment, Membership, Identity.', icon: <IconArrowsShuffle />, link: 'python/7' },
  { title: 'Type Conversion & Casting', description: 'Implicit and explicit type conversion.', icon: <IconAdjustments />, link: 'python/8' },
  { title: 'Comments', description: 'Single-line, multi-line, and docstring usage.', icon: <IconMessage />, link: 'python/9' },
]

// 4. Control Flow
const controlFlow = [
  { title: 'Decision Making', description: 'if, elif, else statements.', icon: <IconHierarchy />, link: 'python/10' },
  { title: 'Loops', description: 'for, while, break, continue, pass.', icon: <IconLoader2 />, link: 'python/11' },
  { title: 'Functions', description: 'Defining functions, parameters, return, scope.', icon: <IconFunction />, link: 'python/12' },
  { title: 'Exception Handling', description: 'try, except, finally, raise, custom exceptions.', icon: <IconBug />, link: 'python/13' },
]

// 5. Data Structures
const dataStructures = [
  { title: 'Lists & Tuples', description: 'Mutable vs Immutable sequences.', icon: <IconBoxMultiple />, link: 'python/14' },
  { title: 'Sets', description: 'Unordered collections with unique elements.', icon: <IconBoxMultiple />, link: 'python/15' },
  { title: 'Dictionaries', description: 'Key-value pairs with fast lookups.', icon: <IconDatabase />, link: 'python/16' },
  { title: 'Comprehensions', description: 'List, set, dictionary comprehensions.', icon: <IconArrowsShuffle />, link: 'python/17' },
]

// 6. Modules & Packages
const modules = [
  { title: 'Importing Modules', description: 'Built-in, external, and custom modules.', icon: <IconFileCode />, link: 'python/18' },
  { title: 'Python Standard Library', description: 'os, sys, math, datetime, json, random, itertools, functools.', icon: <IconTableOptions />, link: 'python/19' },
  { title: 'Creating Packages', description: '__init__.py, organizing code into packages.', icon: <IconFileCode />, link: 'python/20' },
]

// 7. File Handling & I/O
const fileIO = [
  { title: 'File Operations', description: 'open, read, write, append, close.', icon: <IconDatabase />, link: 'python/21' },
  { title: 'Context Managers', description: 'Using with statement to handle files safely.', icon: <IconRecycle />, link: 'python/22' },
  { title: 'Serialization', description: 'pickle, json, CSV handling.', icon: <IconCloudDownload />, link: 'python/23' },
]

// 8. OOP in Python
const oop = [
  { title: 'Classes & Objects', description: 'Defining classes, creating objects, self keyword.', icon: <IconCpu />, link: 'python/24' },
  { title: 'Inheritance', description: 'Single, multiple, multilevel inheritance.', icon: <IconBoxMultiple />, link: 'python/25' },
  { title: 'Polymorphism', description: 'Method overloading & overriding.', icon: <IconFunction />, link: 'python/26' },
  { title: 'Encapsulation', description: 'Private, protected members & getters/setters.', icon: <IconShieldLock />, link: 'python/27' },
  { title: 'Abstraction', description: 'Abstract classes & interfaces using abc module.', icon: <IconHierarchy />, link: 'python/28' },
]

// 9. Advanced Python
const advanced = [
  { title: 'Decorators', description: 'Enhancing functions without modifying them.', icon: <IconBolt />, link: 'python/29' },
  { title: 'Generators', description: 'Lazy evaluation using yield.', icon: <IconLoader2 />, link: 'python/30' },
  { title: 'Context Managers', description: 'Custom context managers with __enter__ & __exit__.', icon: <IconFileCode />, link: 'python/31' },
  { title: 'Lambda & Functional Programming', description: 'lambda, map, filter, reduce, functools.', icon: <IconFileLambda />, link: 'python/32' },
]

// 10. Python in Real-World
const realWorld = [
  { title: 'Web Development', description: 'Flask, Django, FastAPI.', icon: <IconCloudDownload />, link: 'python/33' },
  { title: 'Data Science & ML', description: 'NumPy, Pandas, Matplotlib, scikit-learn.', icon: <IconCpu />, link: 'python/34' },
  { title: 'Automation & Scripting', description: 'Automate tasks using Python scripts.', icon: <IconTerminal2 />, link: 'python/35' },
  { title: 'GUI Development', description: 'Tkinter, PyQt, Kivy.', icon: <IconActivityHeartbeat />, link: 'python/36' },
  { title: 'Python in Cloud & Microservices', description: 'Using Python with AWS, GCP, Azure.', icon: <IconServer />, link: 'python/37' },
]

// 11. Testing & Debugging
const testing = [
  { title: 'Unit Testing', description: 'unittest, pytest basics.', icon: <IconCheckbox />, link: 'python/38' },
  { title: 'Mocking', description: 'Using unittest.mock or pytest-mock.', icon: <IconFunction />, link: 'python/39' },
  { title: 'Debugging Tools', description: 'pdb, logging, breakpoints.', icon: <IconBug />, link: 'python/40' },
]

// 12. Tools & Ecosystem
const tools = [
  { title: 'IDEs & Editors', description: 'PyCharm, VS Code, Jupyter Notebook, Spyder.', icon: <IconListDetails />, link: 'python/41' },
  { title: 'Package Management', description: 'pip, conda, virtualenv, poetry.', icon: <IconGitBranch />, link: 'python/42' },
  { title: 'Build & Automation', description: 'tox, invoke, nox.', icon: <IconRocket />, link: 'python/43' },
  { title: 'Logging Frameworks', description: 'logging, loguru.', icon: <IconGauge />, link: 'python/44' },
]

export default function Page() {
  return (
    <div className='bg-black p-10 py-32'>
      <h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#3776AB] mb-4 flex items-center gap-3'>
        <img src="/icons/langs/py.svg" alt="Python Logo" className="w-10 h-10" />
        &nbsp;Python Docs
      </h1>
      <p className='text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
    Python is a high-level, interpreted programming language known for its readability, simplicity, and wide range of applications including web development, data science, and automation.
    <br /><br />
    Creator: Guido van Rossum <a target='_blank' href='https://github.com/gvanrossum' className='text-neutral-500'>Profile</a>
    <br />
    <a target='_blank' href='https://github.com/python/cpython' className='text-violet-500'>Official Repo Link</a>
</p>


      <p className="px-10">Python Basics</p>
      <ScrollableFeatureRow features={basics} />

      <p className="px-10">Variables & Data Types</p>
      <ScrollableFeatureRow features={variables} />

      <p className="px-10">Control Flow & Functions</p>
      <ScrollableFeatureRow features={controlFlow} />

      <p className="px-10">Data Structures</p>
      <ScrollableFeatureRow features={dataStructures} />

      <p className="px-10">Modules & Packages</p>
      <ScrollableFeatureRow features={modules} />

      <p className="px-10">File Handling & I/O</p>
      <ScrollableFeatureRow features={fileIO} />

      <p className="px-10">OOP in Python</p>
      <ScrollableFeatureRow features={oop} />

      <p className="px-10">Advanced Python</p>
      <ScrollableFeatureRow features={advanced} />

      <p className="px-10">Python in Real-World</p>
      <ScrollableFeatureRow features={realWorld} />

      <p className="px-10">Testing & Debugging</p>
      <ScrollableFeatureRow features={testing} />

      <p className="px-10">Tools & Ecosystem</p>
      <ScrollableFeatureRow features={tools} />
    </div>
  )
}
