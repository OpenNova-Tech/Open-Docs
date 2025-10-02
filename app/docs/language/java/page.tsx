'use client'

import {
	IconTerminal2,
	IconFileCode,
	IconHistory,
	IconMessage,
	IconAlertTriangle,
	IconAdjustments,
	IconArrowsShuffle,
	IconHierarchy2,
	IconLoader2,
	IconFunction,
	IconCpu,
	IconLayoutDashboard,
	IconBoxMultiple,
	IconShieldLock,
	IconHierarchy,
	IconCirclesRelation,
	IconClock,
	IconTableOptions,
	IconHash,
	IconRecycle,
	IconDatabase,
	IconServer,
	IconActivityHeartbeat,
	IconGitBranch,
	IconListDetails,
	IconFileLambda,
	IconBolt,
	IconLink,
	IconBug,
	IconGauge,
	IconRocket,
	IconCheckbox,
	IconCode,
} from '@tabler/icons-react'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

const intro = [
	{ title: 'Introduction to Java', description: 'Java is an object-oriented programming language.', icon: <IconTerminal2 />, link: 'java/1' },
	{ title: 'History of Java', description: 'James Gosling, Sun Microsystems, Oracle.', icon: <IconHistory />, link: 'java/2' },
	{ title: 'Java Features', description: 'Platform Independent, Secure, Robust, Multithreaded.', icon: <IconShieldLock />, link: 'java/3' },
	{ title: 'JVM vs JDK vs JRE', description: 'Key differences and roles in Java ecosystem.', icon: <IconAdjustments />, link: 'java/4' },
	{ title: 'Hello World in Java', description: 'Basic program structure & output.', icon: <IconFileCode />, link: 'java/5' },
	{ title: 'Compilation Workflow', description: '.java → .class → JVM execution.', icon: <IconRocket />, link: 'java/6' },
]

const fundamentals = [
	{ title: 'Java Syntax Basics', description: 'Structure of a Java program.', icon: <IconCode />, link: 'java/7' },
	{ title: 'Variables & Data Types', description: 'Primitive & Non-primitive data types.', icon: <IconAdjustments />, link: 'java/8' },
	{ title: 'Operators', description: 'Arithmetic, Logical, Bitwise, Ternary.', icon: <IconArrowsShuffle />, link: 'java/9' },
	{ title: 'Type Casting', description: 'Implicit & explicit conversions.', icon: <IconFunction />, link: 'java/10' },
	{ title: 'Decision Making', description: 'if, else-if, switch.', icon: <IconHierarchy2 />, link: 'java/11' },
	{ title: 'Loops', description: 'for, while, do-while, enhanced-for.', icon: <IconLoader2 />, link: 'java/12' },
	{ title: 'Break & Continue', description: 'Control loop execution flow.', icon: <IconAlertTriangle />, link: 'java/13' },
	{ title: 'Exception Basics', description: 'try, catch, finally, throw, throws.', icon: <IconBug />, link: 'java/14' },
]

const oop = [
	{ title: 'Classes & Objects', description: 'Blueprint and instance creation.', icon: <IconCpu />, link: 'java/15' },
	{ title: 'Constructors', description: 'Default, parameterized, initialization blocks.', icon: <IconLayoutDashboard />, link: 'java/16' },
	{ title: 'Inheritance', description: 'Single, multilevel, hierarchical.', icon: <IconBoxMultiple />, link: 'java/17' },
	{ title: 'Polymorphism', description: 'Compile-time & runtime polymorphism.', icon: <IconFunction />, link: 'java/18' },
	{ title: 'Abstraction', description: 'Abstract class & interface.', icon: <IconHierarchy />, link: 'java/19' },
	{ title: 'Encapsulation', description: 'Access modifiers, getters/setters.', icon: <IconShieldLock />, link: 'java/20' },
	{ title: 'this & super', description: 'Access parent & current object.', icon: <IconArrowsShuffle />, link: 'java/21' },
	{ title: 'Static vs Instance', description: 'Class-level vs object-level members.', icon: <IconAdjustments />, link: 'java/22' },
]

const stringsArrays = [
	{ title: 'String Class', description: 'Immutability & usage.', icon: <IconLink />, link: 'java/23' },
	{ title: 'StringBuilder & Buffer', description: 'Mutable strings for performance.', icon: <IconBolt />, link: 'java/24' },
	{ title: 'Arrays in Java', description: '1D, 2D, Jagged arrays.', icon: <IconTableOptions />, link: 'java/25' },
	{ title: 'Array Utilities', description: 'Arrays.sort, Arrays.copyOf, etc.', icon: <IconHash />, link: 'java/26' },
]

const collections = [
	{ title: 'List', description: 'ArrayList, LinkedList, Vector, Stack.', icon: <IconCirclesRelation />, link: 'java/27' },
	{ title: 'Set', description: 'HashSet, LinkedHashSet, TreeSet.', icon: <IconHierarchy />, link: 'java/28' },
	{ title: 'Map', description: 'HashMap, TreeMap, Hashtable.', icon: <IconDatabase />, link: 'java/29' },
	{ title: 'Queue', description: 'PriorityQueue, Deque.', icon: <IconServer />, link: 'java/30' },
	{ title: 'Iterators', description: 'Iteration techniques.', icon: <IconLoader2 />, link: 'java/31' },
	{ title: 'Generics', description: 'Type-safe collections.', icon: <IconFunction />, link: 'java/32' },
]

const exceptionsThreads = [
	{ title: 'Types of Exceptions', description: 'Checked, Unchecked, Errors.', icon: <IconBug />, link: 'java/33' },
	{ title: 'Custom Exceptions', description: 'Define your own exceptions.', icon: <IconMessage />, link: 'java/34' },
	{ title: 'Thread Lifecycle', description: 'States of a thread.', icon: <IconClock />, link: 'java/35' },
	{ title: 'Creating Threads', description: 'Thread class, Runnable.', icon: <IconCpu />, link: 'java/36' },
	{ title: 'Synchronization', description: 'Managing shared resources.', icon: <IconShieldLock />, link: 'java/37' },
	{ title: 'Inter-thread Comm', description: 'wait, notify, notifyAll.', icon: <IconHierarchy />, link: 'java/38' },
	{ title: 'Concurrency Utilities', description: 'Executors, thread pools.', icon: <IconRocket />, link: 'java/39' },
]

const io = [
	{ title: 'Byte & Char Streams', description: 'Input/Output basics.', icon: <IconFileCode />, link: 'java/40' },
	{ title: 'File Handling', description: 'File, FileReader, FileWriter.', icon: <IconDatabase />, link: 'java/41' },
	{ title: 'Buffered I/O', description: 'BufferedReader & BufferedWriter.', icon: <IconServer />, link: 'java/42' },
	{ title: 'Serialization', description: 'Save & restore objects.', icon: <IconRecycle />, link: 'java/43' },
	{ title: 'NIO Package', description: 'New I/O features.', icon: <IconBolt />, link: 'java/44' },
]

const advanced = [
	{ title: 'Lambdas', description: 'Anonymous functions in Java.', icon: <IconFileLambda />, link: 'java/45' },
	{ title: 'Streams API', description: 'Functional-style operations.', icon: <IconBolt />, link: 'java/46' },
	{ title: 'Functional Interfaces', description: 'Single-method interfaces.', icon: <IconFunction />, link: 'java/47' },
	{ title: 'Annotations & Reflection', description: 'Metadata & inspection.', icon: <IconListDetails />, link: 'java/48' },
	{ title: 'Packages & Modules', description: 'module-info.java usage.', icon: <IconCirclesRelation />, link: 'java/49' },
	{ title: 'JDBC', description: 'Database connectivity.', icon: <IconDatabase />, link: 'java/50' },
	{ title: 'Networking', description: 'Sockets, URL, HTTP.', icon: <IconServer />, link: 'java/51' },
]

const memoryPerformance = [
	{ title: 'JVM Architecture', description: 'Class Loader, Runtime Data Areas.', icon: <IconGauge />, link: 'java/52' },
	{ title: 'Garbage Collection', description: 'Automatic memory cleanup.', icon: <IconRecycle />, link: 'java/53' },
	{ title: 'Stack vs Heap', description: 'Memory allocation explained.', icon: <IconHierarchy />, link: 'java/54' },
	{ title: 'Performance Tuning', description: 'Optimization techniques.', icon: <IconRocket />, link: 'java/55' },
]

const realWorld = [
	{ title: 'Desktop Apps', description: 'Swing & JavaFX.', icon: <IconActivityHeartbeat />, link: 'java/56' },
	{ title: 'Web Apps', description: 'Servlets & JSP.', icon: <IconServer />, link: 'java/57' },
	{ title: 'Enterprise Apps', description: 'Spring & Hibernate.', icon: <IconCpu />, link: 'java/58' },
	{ title: 'Mobile Apps', description: 'Android basics.', icon: <IconBolt />, link: 'java/59' },
	{ title: 'Cloud & Microservices', description: 'Modern deployments.', icon: <IconRocket />, link: 'java/60' },
]

const security = [
	{ title: 'Java Security Manager', description: 'Sandbox & access control.', icon: <IconShieldLock />, link: 'java/61' },
	{ title: 'Cryptography APIs', description: 'Encryption, hashing.', icon: <IconBug />, link: 'java/62' },
	{ title: 'SQL Injection Prevention', description: 'Secure coding tips.', icon: <IconAlertTriangle />, link: 'java/63' },
]

const testing = [
	{ title: 'JUnit Basics', description: 'Unit testing in Java.', icon: <IconCheckbox />, link: 'java/64' },
	{ title: 'Mockito', description: 'Mocking framework.', icon: <IconFunction />, link: 'java/65' },
	{ title: 'TestNG', description: 'Testing alternative.', icon: <IconAdjustments />, link: 'java/66' },
	{ title: 'Best Practices', description: 'Effective unit tests.', icon: <IconGauge />, link: 'java/67' },
]

const tools = [
	{ title: 'Popular IDEs', description: 'IntelliJ, Eclipse, NetBeans, VS Code.', icon: <IconListDetails />, link: 'java/68' },
	{ title: 'Build Tools', description: 'Maven, Gradle, Ant.', icon: <IconGitBranch />, link: 'java/69' },
	{ title: 'Dependency Mgmt', description: 'Managing external libraries.', icon: <IconCirclesRelation />, link: 'java/70' },
	{ title: 'Logging Frameworks', description: 'Log4j, SLF4J.', icon: <IconMessage />, link: 'java/71' },
]

export default function Page() {
	return (
		<div className='bg-black p-10 py-32'>
			<h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#b07219] mb-4 flex items-center gap-3'>
				<img src="/icons/langs/java.svg" alt="Java Logo" className="w-10 h-10" />
				&nbsp;Java Docs
			</h1>

			<p className='text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
				Java is a class-based, object-oriented programming language designed to be platform-independent and secure.
				<br /><br />
				Creator: James Gosling <a target='_blank' href='https://github.com/jamesgosling' className='text-neutral-500'>Profile</a>
				<br />
				<a target='_blank' href='https://github.com/openjdk' className='text-violet-500'>Official Repo Link</a>
			</p>

			<p className="px-10">Introduction to Java</p>
			<ScrollableFeatureRow features={intro} />

			<p className="px-10">Java Fundamentals</p>
			<ScrollableFeatureRow features={fundamentals} />

			<p className="px-10">Object-Oriented Programming</p>
			<ScrollableFeatureRow features={oop} />

			<p className="px-10">Strings & Arrays</p>
			<ScrollableFeatureRow features={stringsArrays} />

			<p className="px-10">Collections Framework</p>
			<ScrollableFeatureRow features={collections} />

			<p className="px-10">Exceptions & Multithreading</p>
			<ScrollableFeatureRow features={exceptionsThreads} />

			<p className="px-10">Java I/O</p>
			<ScrollableFeatureRow features={io} />

			<p className="px-10">Advanced Concepts</p>
			<ScrollableFeatureRow features={advanced} />

			<p className="px-10">Memory & Performance</p>
			<ScrollableFeatureRow features={memoryPerformance} />

			<p className="px-10">Java in Real-World Development</p>
			<ScrollableFeatureRow features={realWorld} />

			<p className="px-10">Security in Java</p>
			<ScrollableFeatureRow features={security} />

			<p className="px-10">Testing in Java</p>
			<ScrollableFeatureRow features={testing} />

			<p className="px-10">Tools & Ecosystem</p>
			<ScrollableFeatureRow features={tools} />
		</div>
	)
}
