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
  IconTimeline,
  IconLoader,
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
  IconAlarm,
  IconHash,
  IconRepeat,
  IconGauge,
  IconArchive,
  IconDatabaseExport,
  IconServer,
  IconShieldLock,
  IconRocket,
  IconEye,
} from '@tabler/icons-react'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

const core = [
  { title: 'Introduction to C++', description: 'General-purpose, compiled, high-performance programming language.', icon: <IconTerminal2 />, link: 'cplusplus/1' },
  { title: 'History of C++', description: 'Created by Bjarne Stroustrup as an extension of C.', icon: <IconTimeline />, link: 'cplusplus/2' },
  { title: 'C++ Standards', description: 'C++98, C++11, C++14, C++17, C++20, C++23.', icon: <IconRefresh />, link: 'cplusplus/3' },
  { title: 'Setup & Environment', description: 'GCC, Clang, MSVC, IDEs, build tools.', icon: <IconSettings />, link: 'cplusplus/4' },
  { title: 'Hello World', description: 'First C++ program and compilation process.', icon: <IconFileCode />, link: 'cplusplus/5' },
  { title: 'Compilation Process', description: 'Preprocessing, compilation, linking.', icon: <IconCpu />, link: 'cplusplus/6' },
]

const syntax = [
  { title: 'Variables & Data Types', description: 'int, float, double, char, bool.', icon: <IconCode />, link: 'cplusplus/7' },
  { title: 'Constants & Literals', description: 'const, constexpr, literals.', icon: <IconHash />, link: 'cplusplus/8' },
  { title: 'Type Casting', description: 'static_cast, dynamic_cast, const_cast.', icon: <IconArrowsLeftRight />, link: 'cplusplus/9' },
  { title: 'Operators', description: 'Arithmetic, relational, logical, bitwise.', icon: <IconArrowsShuffle />, link: 'cplusplus/10' },
  { title: 'Control Flow', description: 'if, switch, loops (for, while, do-while).', icon: <IconHierarchy2 />, link: 'cplusplus/11' },
  { title: 'Input / Output', description: 'cin, cout, cerr, file streams.', icon: <IconMessage />, link: 'cplusplus/12' },
]

const functions = [
  { title: 'Functions', description: 'Declaration, definition, calling.', icon: <IconFunction />, link: 'cplusplus/13' },
  { title: 'Function Overloading', description: 'Multiple functions with same name.', icon: <IconRepeat />, link: 'cplusplus/14' },
  { title: 'Default Arguments', description: 'Optional function parameters.', icon: <IconListDetails />, link: 'cplusplus/15' },
  { title: 'Inline Functions', description: 'Performance optimization using inline.', icon: <IconBolt />, link: 'cplusplus/16' },
  { title: 'Recursion', description: 'Function calling itself.', icon: <IconLoader />, link: 'cplusplus/17' },
]

const memory = [
  { title: 'Pointers', description: 'Memory addresses and pointer operations.', icon: <IconPointer />, link: 'cplusplus/18' },
  { title: 'References', description: 'Alias to existing variables.', icon: <IconLink />, link: 'cplusplus/19' },
  { title: 'Stack vs Heap', description: 'Allocation strategies and performance.', icon: <IconCpu />, link: 'cplusplus/20' },
  { title: 'Dynamic Memory', description: 'new, delete, malloc, free.', icon: <IconDatabase />, link: 'cplusplus/21' },
  { title: 'RAII Fundamentals', description: 'Resource acquisition is initialization.', icon: <IconRecycle />, link: 'cplusplus/22' },
  { title: 'Smart Pointers Internals', description: 'Ownership, control blocks.', icon: <IconShieldLock />, link: 'cplusplus/23' },
  { title: 'Custom Deleters', description: 'Fine-grained resource cleanup.', icon: <IconSettings />, link: 'cplusplus/24' },
  { title: 'Memory Leaks & Detection', description: 'Valgrind and sanitizers.', icon: <IconBug />, link: 'cplusplus/25' },
]

const oop = [
  { title: 'Classes & Objects', description: 'Blueprints and instances.', icon: <IconBoxMultiple />, link: 'cplusplus/23' },
  { title: 'Constructors & Destructors', description: 'Object lifecycle management.', icon: <IconAlarm />, link: 'cplusplus/24' },
  { title: 'Encapsulation', description: 'Access specifiers & data hiding.', icon: <IconShieldLock />, link: 'cplusplus/25' },
  { title: 'Inheritance', description: 'Base and derived classes.', icon: <IconGitBranch />, link: 'cplusplus/26' },
  { title: 'Polymorphism', description: 'Virtual functions & runtime binding.', icon: <IconCirclesRelation />, link: 'cplusplus/27' },
  { title: 'Abstraction', description: 'Interfaces & abstract classes.', icon: <IconSquareRotated />, link: 'cplusplus/28' },
]

const templates = [
  { title: 'Template Fundamentals', description: 'Generic programming model.', icon: <IconFileLambda />, link: 'cplusplus/29' },
  { title: 'Function Templates', description: 'Type-agnostic functions.', icon: <IconFunction />, link: 'cplusplus/30' },
  { title: 'Class Templates', description: 'Generic data structures.', icon: <IconBoxMultiple />, link: 'cplusplus/31' },
  { title: 'Template Specialization', description: 'Partial & full specialization.', icon: <IconAdjustments />, link: 'cplusplus/32' },
  { title: 'Variadic Templates', description: 'Parameter packs.', icon: <IconListDetails />, link: 'cplusplus/33' },
  { title: 'Template Instantiation', description: 'When and how templates compile.', icon: <IconCpu />, link: 'cplusplus/34' },
  { title: 'constexpr Templates', description: 'Compile-time computation.', icon: <IconBolt />, link: 'cplusplus/35' },
  { title: 'SFINAE', description: 'Substitution failure rules.', icon: <IconCirclesRelation />, link: 'cplusplus/36' },
  { title: 'Concepts', description: 'Readable constraints (C++20).', icon: <IconCheckbox />, link: 'cplusplus/37' },
]

const stl = [
  { title: 'STL Architecture', description: 'Containers, iterators, algorithms.', icon: <IconLayoutDashboard />, link: 'cplusplus/34' },
  { title: 'Sequence Containers', description: 'vector, deque, list.', icon: <IconDatabase />, link: 'cplusplus/35' },
  { title: 'Associative Containers', description: 'map, set, multimap.', icon: <IconHierarchy2 />, link: 'cplusplus/36' },
  { title: 'Unordered Containers', description: 'Hash-based containers.', icon: <IconHash />, link: 'cplusplus/37' },
  { title: 'Iterators', description: 'Iterator categories.', icon: <IconArrowsLeftRight />, link: 'cplusplus/38' },
  { title: 'Algorithms', description: 'Sorting, searching, transforming.', icon: <IconCpu />, link: 'cplusplus/39' },
  { title: 'Lambda Expressions', description: 'Closures and captures.', icon: <IconFileLambda />, link: 'cplusplus/40' },
  { title: 'Ranges Library', description: 'Composable pipelines.', icon: <IconTimeline />, link: 'cplusplus/41' },
]

const advanced = [
  { title: 'Move Semantics', description: 'Rvalue references & std::move.', icon: <IconArrowsShuffle />, link: 'cplusplus/39' },
  { title: 'Concurrency', description: 'Threads, mutex, async.', icon: <IconLoader2 />, link: 'cplusplus/40' },
  { title: 'Exception Handling', description: 'try, catch, throw.', icon: <IconBug />, link: 'cplusplus/41' },
  { title: 'Namespaces', description: 'Avoid naming conflicts.', icon: <IconHierarchy2 />, link: 'cplusplus/42' },
  { title: 'Preprocessor', description: 'Macros, include guards.', icon: <IconTerminal2 />, link: 'cplusplus/43' },
]

const tooling = [
  { title: 'Build Systems', description: 'Make, CMake, Meson.', icon: <IconSettings />, link: 'cplusplus/44' },
  { title: 'Debugging', description: 'gdb, lldb, Visual Studio debugger.', icon: <IconBug />, link: 'cplusplus/45' },
  { title: 'Testing', description: 'Google Test, Catch2.', icon: <IconCheckbox />, link: 'cplusplus/46' },
  { title: 'Performance Optimization', description: 'Profiling & optimization techniques.', icon: <IconGauge />, link: 'cplusplus/47' },
  { title: 'Best Practices', description: 'Clean code, modern C++ guidelines.', icon: <IconRocket />, link: 'cplusplus/48' },
]

const typeSystem = [
  { title: 'C++ Type System Overview', description: 'Static typing model.', icon: <IconAdjustments />, link: 'cplusplus/49' },
  { title: 'Fundamental Types', description: 'Integral, floating-point, void.', icon: <IconHash />, link: 'cplusplus/50' },
  { title: 'Compound Types', description: 'Pointers, references, arrays.', icon: <IconBoxMultiple />, link: 'cplusplus/51' },
  { title: 'cv-Qualifiers', description: 'const, volatile, mutable.', icon: <IconShieldLock />, link: 'cplusplus/52' },
  { title: 'Value Categories', description: 'lvalue, rvalue, xvalue.', icon: <IconArrowsLeftRight />, link: 'cplusplus/53' },
  { title: 'Object Lifetime', description: 'Construction, destruction, storage.', icon: <IconClock />, link: 'cplusplus/54' },
  { title: 'Rule of 0 / 3 / 5', description: 'Correct ownership semantics.', icon: <IconRepeat />, link: 'cplusplus/55' },
  { title: 'Copy vs Move', description: 'Performance implications.', icon: <IconBolt />, link: 'cplusplus/56' },
  { title: 'Object Slicing', description: 'Polymorphism pitfalls.', icon: <IconAlertTriangle />, link: 'cplusplus/57' },
]

const lowLevel = [
  { title: 'Memory Layout & Alignment', description: 'Padding, alignment, and layout rules.', icon: <IconDatabase />, link: 'cplusplus/55' },
  { title: 'Stack vs Heap', description: 'Performance and lifetime tradeoffs.', icon: <IconCpu />, link: 'cplusplus/56' },
  { title: 'Placement new', description: 'Manual object construction.', icon: <IconPointer />, link: 'cplusplus/57' },
  { title: 'Custom Allocators', description: 'Allocator design & STL integration.', icon: <IconRecycle />, link: 'cplusplus/58' },
  { title: 'Endianness', description: 'Byte order and portability.', icon: <IconArrowsShuffle />, link: 'cplusplus/59' },
  { title: 'Bit Manipulation', description: 'Bitfields, masks, std::bitset.', icon: <IconGauge />, link: 'cplusplus/60' },
  { title: 'Undefined Behavior', description: 'Causes, detection, and avoidance.', icon: <IconBug />, link: 'cplusplus/61' },
]

const compileTime = [
  { title: 'constexpr Programming', description: 'Compile-time evaluation.', icon: <IconBolt />, link: 'cplusplus/62' },
  { title: 'consteval & constinit', description: 'Immediate and guaranteed initialization.', icon: <IconAlarm />, link: 'cplusplus/63' },
  { title: 'Type Traits', description: 'std::type_traits utilities.', icon: <IconListDetails />, link: 'cplusplus/64' },
  { title: 'SFINAE', description: 'Substitution failure rules.', icon: <IconCirclesRelation />, link: 'cplusplus/65' },
  { title: 'Concepts', description: 'Constraints and requires clauses.', icon: <IconCheckbox />, link: 'cplusplus/66' },
  { title: 'requires Expressions', description: 'Readable template constraints.', icon: <IconLink />, link: 'cplusplus/67' },
]

const modernLib = [
  { title: 'std::optional', description: 'Nullable value semantics.', icon: <IconBoxMultiple />, link: 'cplusplus/68' },
  { title: 'std::variant', description: 'Type-safe unions.', icon: <IconTableOptions />, link: 'cplusplus/69' },
  { title: 'std::any', description: 'Type-erased containers.', icon: <IconArchive />, link: 'cplusplus/70' },
  { title: 'Ranges Library', description: 'Composable algorithms & views.', icon: <IconLayoutDashboard />, link: 'cplusplus/71' },
  { title: 'std::span', description: 'Non-owning array views.', icon: <IconListDetails />, link: 'cplusplus/72' },
  { title: 'Chrono Library', description: 'Time, clocks, durations.', icon: <IconClock />, link: 'cplusplus/73' },
]

const systemIO = [
  { title: 'Filesystem Library', description: 'std::filesystem (C++17).', icon: <IconDatabaseExport />, link: 'cplusplus/74' },
  { title: 'Command Line Arguments', description: 'argc, argv, parsing.', icon: <IconTerminal2 />, link: 'cplusplus/75' },
  { title: 'Environment Variables', description: 'Process environment access.', icon: <IconServer />, link: 'cplusplus/76' },
  { title: 'Signals & Processes', description: 'Basic OS-level interaction.', icon: <IconActivityHeartbeat />, link: 'cplusplus/77' },
]

const abiSecurity = [
  { title: 'Linking Models', description: 'Static vs dynamic.', icon: <IconGitBranch />, link: 'cplusplus/78' },
  { title: 'ABI & Name Mangling', description: 'Binary compatibility.', icon: <IconHierarchy2 />, link: 'cplusplus/79' },
  { title: 'Symbol Visibility', description: 'Export control.', icon: <IconEye />, link: 'cplusplus/80' },
  { title: 'Undefined Behavior', description: 'Security & correctness risks.', icon: <IconAlertTriangle />, link: 'cplusplus/81' },
  { title: 'Sanitizers', description: 'ASan, UBSan, TSan.', icon: <IconBug />, link: 'cplusplus/82' },
]



export default function page() {
  return (
    <div className='bg-black p-10 py-32'>
      <h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#F34B7D] mb-4 flex items-center gap-3'>
        <img src="/icons/langs/cpp.svg" alt="C++ Logo" className="w-10 h-10" />
        &nbsp;C++ Docs
      </h1>

      <p className='text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
        C++ is a high-performance, general-purpose programming language widely used for
        system software, game engines, embedded systems, and competitive programming.
        <br /><br />
        Creator: Bjarne Stroustrup{' '}
        <a
          target='_blank'
          href='https://github.com/bjarnestroustrup'
          className='text-neutral-500'
        >
          Profile
        </a>
        <br />
        <a
          target='_blank'
          href='https://github.com/cplusplus'
          className='text-violet-500'
        >
          Official Standards Repository
        </a>
      </p>

      <p className="px-10">Core Concepts & Setup</p>
      <ScrollableFeatureRow features={core} />

      <p className="px-10">Syntax & Language Fundamentals</p>
      <ScrollableFeatureRow features={syntax} />

      <p className="px-10">Functions & Program Structure</p>
      <ScrollableFeatureRow features={functions} />

      <p className="px-10">Memory Management</p>
      <ScrollableFeatureRow features={memory} />

      <p className="px-10">Object-Oriented Programming</p>
      <ScrollableFeatureRow features={oop} />

      <p className="px-10">Templates & Generic Programming</p>
      <ScrollableFeatureRow features={templates} />

      <p className="px-10">STL & Standard Library</p>
      <ScrollableFeatureRow features={stl} />

      <p className="px-10">Advanced C++ Concepts</p>
      <ScrollableFeatureRow features={advanced} />

      <p className="px-10">Tooling & Best Practices</p>
      <ScrollableFeatureRow features={tooling} />

      <p className="px-10">Type System & Object Model</p>
      <ScrollableFeatureRow features={typeSystem} />

      <p className="px-10">Low-Level & System Programming</p>
      <ScrollableFeatureRow features={lowLevel} />

      <p className="px-10">Compile-Time & Metaprogramming (C++20+)</p>
      <ScrollableFeatureRow features={compileTime} />

      <p className="px-10">Modern C++ Standard Library</p>
      <ScrollableFeatureRow features={modernLib} />

      <p className="px-10">Filesystem & OS Interaction</p>
      <ScrollableFeatureRow features={systemIO} />

      <p className="px-10">ABI, Linking & Security</p>
      <ScrollableFeatureRow features={abiSecurity} />
    </div>
  )
}
