"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"

export default function JavaScriptDocPage() {
  const arithmatic = [
    {
      operator: "+",
      description: "Addition",
      example: "10 + 5",
      result: "15",
    },
    {
      operator: "-",
      description: "Subtraction",
      example: "10 - 5",
      result: "5",
    },
    {
      operator: "*",
      description: "Multiplication",
      example: "10 * 5",
      result: "50",
    },
    {
      operator: "/",
      description: "Division",
      example: "10 / 5",
      result: "2",
    },
    {
      operator: "%",
      description: "Modulus (Remainder)",
      example: "10 % 3",
      result: "1",
    },
    {
      operator: "**",
      description: "Exponentiation",
      example: "2 ** 3",
      result: "8",
    },
  ]

	const code1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
  <h1>JavaScript Test</h1>
  <script>
    console.log("JavaScript inside HTML!");
    alert("Welcome to JavaScript!");
  </script>
</body>
</html>`

  const code2 = `console.log("Hello from the Console")`

  const code3 = `// This is a single-line comment
/* This is a
   multi-line comment */`
  
  const code4 = `console.log("This goes to the browser console")`

  const code5 = `alert("This is an alert box!")`

  const code6 = `let name = "Oliver"
const age = 17`

  const code7 = `let message = "Hello, World!"`

  const code8 = `let score = 10
score = 20  // allowed`

  const code9 = `const pi = 3.14
pi = 3.14159  // error`

  const code10 = `let str = "Oliver"      // String
let num = 42            // Number
let isStudent = true    // Boolean
let x                   // Undefined
let y = null            // Null`
  const code11 = `console.log(typeof "Oliver")    // string
console.log(typeof 10)          // number
console.log(typeof true)        // boolean
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object (weird quirk!)`

	return (
    // <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900 py-12 px-6">
    <main className="min-h-screen from-white to-gray-100 dark:bg-black  py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-yellow-300 bg-black">
            JavaScript Documentation
          </h1>
        </header>
        <section className="shadow-yellow-300 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            <b className="text-yellow-300">1.1</b> What is JavaScript
          </h2>
          <div className="max-w-3xl mx-auto">
            - JavaScript (JS) is a high-level, interpreted, multi-paradigm language. <br />
            - Originally created to add interactivity to web pages (pop-ups, form validation, animations) <br />
            - Now it runs everywhere: Browsers, Servers, Apps etc. <br />
            - Created by Brendan Eich in 1995, earlier known as "Mocha", then "LiveScript", then "JavaScript". <br />
            <br />
            Famous Websites that run on JavaScript: Google, Facebook, Youtube, Netflix.
          </div>
        </section>
				<section className="shadow-yellow-300 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          <b className="text-yellow-300">1.2</b> How Javascript runs
          </h2>
          <div className="max-w-3xl mx-auto">
            Suppose when we open a Web Page <br />
            - The browser downloads the HTML, CSS and JS files. <br />
            - It parses (reads) the HTML. <br />
            - When it finds a &lt;script&gt; tag and sends the JS code the JavaScript Engine. <br />
            - The engine compiles and runs the JavaScript code. <br />
            <br />
            In Chrome the JavaScript Engine is called V8. <br />
            <br />
            Example Code as in a HTML file.
            <CodeBlock language="html" filename="samplePage.html" code={code1} /> <br />
            On loading the page you will find an alert saying "Welcome to JavaScript!". <br />
            On going to the Console Tab from Inspect you will find the message "JavaScript inside HTML!" <br />
            <br />
            You can also directly write this code in Console.
            <CodeBlock language="js" filename="console.js" code={code2} />
          </div>
        </section>
        <section className="shadow-yellow-300 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          <b className="text-yellow-300">1.3</b> Basic JavaScript Syntax
          </h2>
          <div className="max-w-3xl mx-auto">
            Comment Lines:
            <CodeBlock language="js" filename="comments.js" code={code3} /> <br />
            Logging Output:
            <CodeBlock language="js" filename="output.js" code={code4} /> <br />
            Alert Popup:
            <CodeBlock language="js" filename="alert.js" code={code5} /> <br />
            Variables:
            <CodeBlock language="js" filename="variables.js" code={code6} /> <br />
          </div>
        </section>
        <section className="shadow-yellow-300 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          <b className="text-yellow-300">1.4</b> JavaScript variables
          </h2>
          <div className="max-w-3xl mx-auto">
            A variable is a container that stores data which you can use and manipulate later. <br />
            It is to be understood as a labelled box. <br />
            <br />
            Example of Variable
            <CodeBlock language="js" filename="variable.js" code={code7} /> 
            Here "Hello, World!" is stored in a box labelled message. <br />
            <br />
            Declaration and Scope of Variables <br />
            <br />
            var <br />
            - Reassign: Yes ✅ <br />
            - Scope: Function-scoped <br />
            - Hoisting: Yes ✅ <br />
            - Best Use: Avoid (legacy code) ❌ <br />
            <br />
            let <br />
            - Reassign: Yes ✅ <br />
            - Scope: Block-scoped <br />
            - Hoisting: No ❌ <br />
            - Best Use: Use for changeable variables ✅ <br />
            <br />
            const <br />
            - Reassign: No ❌ <br />
            - Scope: Block-scoped <br />
            - Hoisting: No ❌ <br />
            - Best Use: Use when value should not change ✅ <br />
            <br />
            We generally use let and const in modern JavaScript. <br />
            <br />
            Usage of let
            <CodeBlock language="js" filename="letKeyword.js" code={code8} />  <br />
            Usage of const
            <CodeBlock language="js" filename="constKeyword.js" code={code9} />  <br />
          </div>
        </section>
        <section className="shadow-yellow-300 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          <b className="text-yellow-300">1.5</b> Data Types in JavaScript
          </h2>
          <div className="max-w-3xl mx-auto">
            Primitive Data Types - These hold only single values <br />
            <br />
            - String - ( "Hello" , 'JavaScript' )  <br />
            - Number - ( 10 , 3.14 , -5 )  <br />
            - Boolean - ( true , false )  <br />
            - Undefined - ( A declared variable with no value )  <br />
            - Null - ( An intentional empty value )  <br />
            - BigInt - ( Very large number )  <br />
            - Symbol - ( Unique and Immutable value )  <br />
            <br />
            Example of different Data Types
            <CodeBlock language="js" filename="dataTypes.js" code={code10} /> 
            <br />
            Non-Primitive (Reference) Data Types - These hold primitive values <br />
            <br />
            - Object <br />
            - Array <br />
            - Function <br />
            <br />
            To be discussed later <br />
            <br />
            The typeof Operator - to check the type of any variable <br />
            <br />
            Usage of typeof Operator:
            <CodeBlock language="js" filename="typeof.js" code={code11} /> 
            <br />
            Caution: null is intentional, undefined is not
          </div>
        </section>
        <section className="shadow-yellow-300 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          <b className="text-yellow-300">1.6</b> Operators and Expressions in JavaScript
          </h2>
          <div className="max-w-3xl mx-auto">
            Expression is any valid unit of code that evaluates to a value <br />
            <br />
            3 + 5 = 8 <br />
            "Hello" + "World" = "HelloWorld" <br />
            true && false = false <br />
            <br />
            We write expressions using operators and values <br />
            <br />
            Arithmatic Operators
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operator</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                  <TableHead>Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {arithmatic.map((content) => (
                  <TableRow key={content.operator}>
                    <TableCell>{content.operator}</TableCell>
                    <TableCell>{content.description}</TableCell>
                    <TableCell>{content.example}</TableCell>
                    <TableCell>{content.result}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </main>
  );
}
