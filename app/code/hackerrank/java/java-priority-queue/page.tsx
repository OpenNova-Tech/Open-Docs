'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Prism as SyntaxHighlighterPrism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Page = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [selectedLang, setSelectedLang] = useState<{ [key: number]: string }>({})

  const problems = [
    {
      id: 1,
      title: 'Standard Approach',
      languages: {
        java: `import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.PriorityQueue;

class Student implements Comparable<Student> {
    int id;
    String name;
    double cgpa;
    Student(int id, String name, double cgpa) {
        this.id = id;
        this.name = name;
        this.cgpa = cgpa;
    }

    public int compareTo(Student b) {
        if (this.cgpa > b.cgpa) { return -1; }
        if (this.cgpa < b.cgpa) { return 1; }
        if (this.cgpa == b.cgpa) {
            if (this.name.compareTo(b.name) < 0 ) { return -1; }
            if (this.name.compareTo(b.name) > 0) { return 1; }
            if (this.name.compareTo(b.name) == 0) {
                if (this.id < b.id) { return -1; }
                if (this.id > b.id) { return 1; }
            }
        }
        return 0;
    }

    public String getName() {
        return name;
    }
}

    class Priorities {
        Priorities() {}
    public List<Student> getStudents(List<String> events) {
        PriorityQueue<Student> queue = new PriorityQueue<>();
        for (String event : events) {
            if (event.contains("SERVED")) {
                if (!queue.isEmpty()) {
                    queue.poll();
                }
            } else {
                String[] data = event.split(" ");
                queue.add(new Student(Integer.parseInt(data[3]), data[1], Double.parseDouble(data[2])));
            }
        }

        List<Student> result = new ArrayList<>();
        while (!queue.isEmpty()) {
        result.add(queue.poll());
        }

        return result;
        }
        }


public class Solution {
    private final static Scanner scan = new Scanner(System.in);
    private final static Priorities priorities = new Priorities();
    
    public static void main(String[] args) {
        int totalEvents = Integer.parseInt(scan.nextLine());    
        List<String> events = new ArrayList<>();
        
        while (totalEvents-- != 0) {
            String event = scan.nextLine();
            events.add(event);
        }
        
        List<Student> students = priorities.getStudents(events);
        
        if (students.isEmpty()) {
            System.out.println("EMPTY");
        } else {
            for (Student st: students) {
                System.out.println(st.getName());
            }
        }
    }
}`
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
      <div className='mx-auto px-12 py-12 flex gap-6'>

        <div className='w-1/2 bg-gray-900 border border-gray-800 p-6 rounded-xl h-fit sticky top-6'>
          <h1 className='text-2xl font-bold'>Java Priority Queue</h1>
          <p className='text-sm text-amber-400 mt-1'>Medium</p>

          <div className='mt-4 space-y-3 text-sm'>
            <p>In computer science, a priority queue is an abstract data type which is like a regular queue, but where additionally each element has a &quot;priority&quot; associated with it. In a priority queue, an element with high priority is served before an element with low priority.</p>
            <p>In this problem we will test your knowledge on Java Priority Queue.</p>
            <p>There are a number of students in a school who wait to be served. Two types of events, ENTER and SERVED, can take place which are described below.</p>
            <ul className='list-disc ml-5 space-y-2'>
              <li>ENTER: A student with some priority enters the queue to be served.</li>
              <li>SERVED: The student with the highest priority is served (removed) from the queue.</li>
            </ul>
            <p>A unique id is assigned to each student entering the queue. The queue serves the students based on the following criteria (priority criteria):</p>
            <ol type='1' className='list-disc ml-5 space-y-2'>
              <li>The student having the highest Cumulative Grade Point Average (CGPA) is served first.</li>
              <li>Any students having the same CGPA will be served by name in ascending case-sensitive alphabetical order.</li>
              <li>Any students having the same CGPA and name will be served in ascending order of the id.</li>
            </ol>
            <p>Create the following two classes:</p>
            <ul className='list-disc ml-5 space-y-2'>
              <li>
                The Student class should implement:
                <ul className='list-disc ml-5 space-y-2'>
                  <li>The constructor Student(int id, String name, double cgpa).</li>
                  <li>The method int getID() to return the id of the student.</li>
                  <li>The method String getName() to return the name of the student.</li>
                  <li>The method double getCGPA() to return the CGPA of the student.</li>
                </ul>
              </li>
              <li>The Priorities class should implement the method List&lt;Student&gt; getStudents(List&lt;String&gt; events) to process all the given events and return all the students yet to be served in the priority order.</li>
            </ul>

            <h3 className='text-lg font-semibold mt-4'>Sample Input</h3>
            <p>The first line contains an integer, n, describing the total number of events. Each of the  subsequent lines will be of the following two forms:</p>
            <ul className='list-disc ml-5 space-y-2'>
              <li>ENTER name CGPA id: The student to be inserted into the priority queue.</li>
              <li>SERVED: The highest priority student in the queue was served.</li>
            </ul>
            <p>The locked stub code in the editor reads the input and tests the correctness of the Student and Priorities classes implementation.</p>

            <h3 className='text-lg font-semibold mt-4'>Constraints</h3>
            <ul className='list-disc ml-5 space-y-2'>
              <li>2 &le; n &le; 1000</li>
              <li>0 &le; CGPA &le; 4.00</li>
              <li>1 &le; id &le; 1000</li>
              <li>2 &le; |name| &le; 30</li>
            </ul>

            <h3 className='text-lg font-semibold mt-4'>Output Format</h3>
            <p>The locked stub code prints the names of the students yet to be served in the priority order. If there are no such student, then the code prints EMPTY.</p>

            <h3 className='text-lg font-semibold mt-4'>Sample Input 0</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`12
ENTER John 3.75 50
ENTER Mark 3.8 24
ENTER Shafaet 3.7 35
SERVED
SERVED
ENTER Samiha 3.85 36
SERVED
ENTER Ashley 3.9 42
ENTER Maria 3.6 46
ENTER Anik 3.95 49
ENTER Dan 3.95 50
SERVED`}
            </pre>

            <h3 className='text-lg font-semibold mt-4'>Sample Output 0</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`Dan
Ashley
Shafaet
Maria`}
            </pre>
          </div>
        </div>

        <div className='w-1/2 space-y-4'>
          {problems.map((problem) => {
            const langKeys = Object.keys(problem.languages);
            const activeLang = selectedLang[problem.id] || langKeys[0];
            const activeCode = problem.languages[activeLang as keyof typeof problem.languages];

            return (
              <div key={problem.id} className='bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition'>
                <div className='p-6 border-b border-gray-800'>
                  <h3 className='text-xl font-semibold'>{problem.title}</h3>
                  <div className='flex gap-2 mt-3'>
                    {langKeys.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLang({ ...selectedLang, [problem.id]: lang })}
                        className={`px-3 py-1 rounded-lg text-sm capitalize border transition
                       ${activeLang === lang ? 'bg-cyan-600 border-cyan-400' : 'bg-gray-800 border-gray-700 hover:bg-gray-700'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <div className='relative'>
                  <button
                    onClick={() => handleCopy(activeCode, problem.id)}
                    className='absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 flex items-center gap-2'
                  >
                    {copiedId === problem.id ? <Check className='w-4 h-4 text-green-400' /> : <Copy className='w-4 h-4 text-cyan-400' />}
                    <span className='text-xs'>{copiedId === problem.id ? 'Copied!' : 'Copy'}</span>
                  </button>

                  <SyntaxHighlighterPrism
                    language={activeLang}
                    style={dracula}
                    showLineNumbers
                    wrapLongLines
                    customStyle={{
                      padding: '24px',
                      backgroundColor: '#0a0a0f',
                      fontSize: '14px',
                      borderRadius: '8px',
                    }}
                  >
                    {activeCode}
                  </SyntaxHighlighterPrism>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

}

export default Page
