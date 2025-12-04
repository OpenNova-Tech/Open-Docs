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
        java: `import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Scanner;

class Solution{

    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        while(in.hasNext()){
            String IP = in.next();
            System.out.println(IP.matches(new MyRegex().pattern));
        }

    }
}

class MyRegex {
    String num = "([01]?\\d{1,2}|2[0-4]\\d|25[0-5])";
    String pattern = num + "." +  num + "." +  num + "." + num;
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
          <h1 className='text-2xl font-bold'>Java Regex</h1>
          <p className='text-sm text-amber-400 mt-1'>Medium</p>

          <div className='mt-4 space-y-3 text-sm'>
            <p>Write a class called MyRegex which will contain a string pattern. You need to write a regular expression and assign it to the pattern such that it can be used to validate an IP address. Use the following definition of an IP address:</p>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`IP address is a string in the form "A.B.C.D", where the value of A, B, C, and D may
range from 0 to 255. Leading zeros are allowed. The length of A, B, C, or D can't be 
greater than 3.`}
            </pre>
            <p>Some valid IP address:</p>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`000.12.12.034
121.234.12.12
23.45.12.56`}
            </pre>
            <p>Some invalid IP address:</p>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`000.12.234.23.23
666.666.23.23
.213.123.23.32
23.45.22.32.
I.Am.not.an.ip`}
            </pre>
            <p>In this problem you will be provided strings containing any combination of ASCII characters. You have to write a regular expression to find the valid IPs.</p>
            <p>Just write the MyRegex class which contains a String pattern. The string should contain the correct regular expression.</p>
            <p>(MyRegex class MUST NOT be public)</p>

            <h3 className='text-lg font-semibold mt-4'>Sample Input</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`000.12.12.034
121.234.12.12
23.45.12.56
00.12.123.123123.123
122.23
Hello.IP`}
            </pre>

            <h3 className='text-lg font-semibold mt-4'>Sample Output</h3>
            <pre className='bg-gray-800 p-3 rounded-lg'>
{`true
true
true
false
false
false`}
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
