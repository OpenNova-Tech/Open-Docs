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
        java: `public class Solution {
    public static void main(String[] args) {
        System.out.println("Hello, World.");
        System.out.println("Hello, Java.");
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
          <h1 className='text-2xl font-bold'>Welcome to Java!</h1>
          <p className='text-sm text-emerald-400 mt-1'>Easy</p>

          <div className='mt-4 space-y-3 text-sm'>
            <p>Welcome to the world of Java! In this challenge, we practice printing to stdout.</p>
            <p>The code stubs in your editor declare a Solution class and a main method. Complete the main method by copying the two lines of code below and pasting them inside the body of your main method.</p>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`System.out.println("Hello, World.");
System.out.println("Hello, Java.");`}
            </pre>

            <h3 className='text-lg font-semibold mt-4'>Input Format</h3>
            <p>There is no input for this challenge.</p>

            <h3 className='text-lg font-semibold mt-4'>Output Format</h3>
            <p>You must print two lines of output:</p>
            <p>1. Print Hello, World. on the first line.</p>
            <p>2. Print Hello, Java. on the second line.</p>

            <h3 className='text-lg font-semibold mt-4'>Sample Output</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`Hello, World.
Hello, Java.`}
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
