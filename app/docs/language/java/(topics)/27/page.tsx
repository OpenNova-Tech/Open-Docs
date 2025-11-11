'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { usePathname } from 'next/navigation'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function Page() {
  const pathname = usePathname()
  const currentSection = pathname.split('/').filter(Boolean).pop() || '1'
  const num = (sub: number) => `${currentSection}.${sub}`

  const table1 = [
    { property: 'Duplicates', description: 'Keys ❌ (unique), Values ✅' },
    { property: 'Order', description: 'Depends on implementation' },
    { property: 'Null Keys/Values', description: 'Allowed in HashMap, not in Hashtable or TreeMap' },
    { property: 'Access Method', description: 'Via get(key) not by index' },
    { property: 'Primary Interfaces', description: 'Map, SortedMap, NavigableMap' },
  ]

  const table2 = [
    { method: 'put(K key, V value)', description: 'Inserts or updates a key-value pair' },
    { method: 'get(Object key)', description: 'Retrieves value for given key' },
    { method: 'remove(Object key)', description: 'Removes a key-value pair' },
    { method: 'containsKey(Object key)', description: 'Checks if key exists' },
    { method: 'containsValue(Object value)', description: 'Checks if value exists' },
    { method: 'keySet()', description: 'Returns all keys' },
    { method: 'values()', description: 'Returns all values' },
    { method: 'entrySet()', description: 'Returns all key-value pairs as a set' },
    { method: 'size()', description: 'Returns total mappings' },
    { method: 'clear()', description: 'Removes all entries' },
  ]

  const table3 = [
    { implementation: 'HashMap', order: 'Unordered', null: '✅', thread: '❌', time: 'O(1)' },
    { implementation: 'LinkedHashMap', order: 'Insertion order', null: '✅', thread: '❌', time: 'O(1)' },
    { implementation: 'TreeMap', order: 'Sorted', null: '❌', thread: '❌', time: 'O(log n)' },
    { implementation: 'Hashtable', order: 'Unordered', null: '❌', thread: '✅', time: 'O(1)' },
  ]

  const table4 = [
    { scenario: 'General-purpose key-value storage with fast lookups.', recommend: 'HashSet' },
    { scenario: 'When both fast lookup and preserved order are required (e.g., caching).', recommend: 'LinkedHashSet' },
    { scenario: 'When sorted key order is important.', recommend: 'TreeSet' },
    { scenario: 'Multi-threaded environments where safety matters more than speed.', recommend: 'Hashtable' },
  ]


  const code1 = `Map
 ├── HashMap
 │    └── LinkedHashMap
 ├── TreeMap
 └── Hashtable`

  const code2 = `
HashMap<Integer, String> map = new HashMap<>();
map.put(1, "Java");
map.put(2, "Python");
map.put(3, "C++");
map.put(2, "Rust"); // Overwrites value for key 2

System.out.println(map); // {1=Java, 2=Rust, 3=C++}
System.out.println(map.get(3)); // C++`

  const code3 = `LinkedHashMap<Integer, String> lhm = new LinkedHashMap<>();
lhm.put(101, "Alice");
lhm.put(102, "Bob");
lhm.put(103, "Charlie");
System.out.println(lhm); // {101=Alice, 102=Bob, 103=Charlie}`

  const code4 = `TreeMap<String, Integer> scores = new TreeMap<>();
scores.put("Alice", 90);
scores.put("Bob", 85);
scores.put("Charlie", 95);
System.out.println(scores); // {Alice=90, Bob=85, Charlie=95}`

  const code5 = `TreeMap<Integer, String> desc = new TreeMap<>(Comparator.reverseOrder());
desc.put(1, "Low");
desc.put(2, "Medium");
desc.put(3, "High");
System.out.println(desc); // {3=High, 2=Medium, 1=Low}`

  const code6 = `Hashtable<Integer, String> table = new Hashtable<>();
table.put(1, "Apple");
table.put(2, "Banana");
// table.put(null, "Mango"); ❌ NullPointerException
System.out.println(table);`

  const code7 = `for (Map.Entry<Integer, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " → " + entry.getValue());
}`

  const code8 = `map.forEach((key, value) -> System.out.println(key + ": " + value));`

  const code9 = `for (Integer key : map.keySet()) {
    System.out.println(key + " = " + map.get(key));
}`

  const code10 = `import java.util.concurrent.*;

ConcurrentHashMap<String, Integer> cmap = new ConcurrentHashMap<>();
cmap.put("A", 1);
cmap.put("B", 2);
System.out.println(cmap);`

  const code11 = `Map<String, Integer> inventory = new HashMap<>();
inventory.put("Apple", 50);
inventory.put("Banana", 30);
inventory.put("Mango", 20);

System.out.println("Stock of Apple: " + inventory.get("Apple"));
inventory.put("Apple", inventory.get("Apple") - 10); // Update quantity

System.out.println("Updated Inventory:");
inventory.forEach((fruit, qty) -> System.out.println(fruit + " - " + qty));`

  const code12 = `Stock of Apple: 50
Updated Inventory:
Apple - 40
Banana - 30
Mango - 20`


  return (
    <main className='pt-32 dark:bg-black py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#b07219] bg-black'>
            Map in Java
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(1)}</b> What Are Maps?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A <b>Map</b> in Java is a <b>collection of key–value pairs</b> where <b>each key is unique</b> and is used to retrieve its corresponding value. <br />
            It is <b>not</b> a true subtype of <span className='bg-neutral-800 px-2 rounded-lg'>Collection</span>, but it&apos;s one of the most essential data structures in Java.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(2)}</b> Hierarchy Overview
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="" code={code1} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(3)}</b> Core Characteristics
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table1.map((content) => (
                  <TableRow key={content.property}>
                    <TableCell className='font-bold'>{content.property}</TableCell>
                    <TableCell>{content.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(4)}</b> Commonly Used Methods
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Method</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table2.map((content) => (
                  <TableRow key={content.method}>
                    <TableCell><span className='bg-neutral-800 px-2 rounded-lg'>{content.method}</span></TableCell>
                    <TableCell>{content.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(5)}</b> Implementations
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>HashMap</b> <br />
            • Based on <b>hash table</b> data structure. <br />
            • <b>No order</b> is guaranteed. <br />
            • <b>Allows one</b> <span className='bg-neutral-800 px-2 rounded-lg'>null</span> <b>key</b> and multiple <span className='bg-neutral-800 px-2 rounded-lg'>null</span> values. <br />
            • <b>Fastest performance (O(1))</b> for most operations. <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code2} /> <br />
            <b>LinkedHashMap</b> <br />
            • Maintains <b>insertion order</b> using a <b>doubly-linked list</b>. <br />
            • Slightly slower than <span className='bg-neutral-800 px-2 rounded-lg'>HashMap</span> due to ordering overhead. <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code3} /> <br />
            <b>TreeMap</b> <br />
            • Implements the <b>SortedMap</b> interface. <br />
            • Maintains entries in <b>ascending order of keys</b> (by default). <br />
            • <b>Does not allow null keys</b>. <br />
            • Backed by a <b>Red-Black Tree</b> (balanced tree). <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code4} /> <br />
            <b>Custom ordering</b>:
            <CodeBlock language="java" filename="java" code={code5} /> <br />
            <b>Hashtable</b> <br />
            • Legacy implementation (older than Java Collections Framework). <br />
            • <b>Thread-safe</b> (synchronized). <br />
            • <b>No null keys or values</b> allowed. <br />
            • Generally slower due to synchronization overhead. <br />
            <br />
            <b>Example</b>:
            <CodeBlock language="java" filename="java" code={code6} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(6)}</b> Iterating Through a Map
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Using <span className='bg-neutral-800 px-2 rounded-lg'>entrySet()</span>
            <CodeBlock language="java" filename="java" code={code7} /> <br />
            Using <span className='bg-neutral-800 px-2 rounded-lg'>forEach()</span>
            <CodeBlock language="java" filename="java" code={code8} /> <br />
            Using <span className='bg-neutral-800 px-2 rounded-lg'>keySet()</span>
            <CodeBlock language="java" filename="java" code={code9} /> <br />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(7)}</b> Performance Comparison
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Implementation</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead>Null Key</TableHead>
                  <TableHead>Thread Safe</TableHead>
                  <TableHead>Time Complexity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table3.map((content) => (
                  <TableRow key={content.implementation}>
                    <TableCell className='font-bold'>{content.implementation}</TableCell>
                    <TableCell>{content.order}</TableCell>
                    <TableCell>{content.null}</TableCell>
                    <TableCell>{content.thread}</TableCell>
                    <TableCell>{content.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(8)}</b> When to Use Which?
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Scenario</TableHead>
                  <TableHead>Recommended</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table4.map((content) => (
                  <TableRow key={content.scenario}>
                    <TableCell>{content.scenario}</TableCell>
                    <TableCell>{content.recommend}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(9)}</b> Special Maps
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • <b>ConcurrentHashMap</b> → Thread-safe and highly efficient alternative to Hashtable. <br />
            • <b>EnumMap</b> → Optimized for keys that are <span className='bg-neutral-800 px-2 rounded-lg'>enum</span> types. <br />
            • <b>WeakHashMap</b> → Entries are garbage-collected when keys are no longer referenced. <br />
            <br />
            <CodeBlock language="java" filename="java" code={code10} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(10)}</b> Practical Example
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <CodeBlock language="java" filename="java" code={code11} /> <br />
            <b>Output</b>:
            <CodeBlock language="bash" filename="" code={code12} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#b07219] border border-[#b07219]/15 rounded-2xl shadow-lg p-8 transition-shadow bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#b07219]'>{num(11)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            • A <b>Map</b> associates <b>unique keys</b> with <b>specific values</b>. <br />
            • <b>HashMap</b> is the default go-to for speed and flexibility. <br />
            • <b>LinkedHashMap</b> maintains order; <b>TreeMap</b> maintains sorting. <br />
            • <b>Hashtable</b> is legacy but thread-safe. <br />
            • For concurrent programs, <b>ConcurrentHashMap</b> is preferred.
          </div>
        </motion.div>
      </div>
    </main>
  )
}