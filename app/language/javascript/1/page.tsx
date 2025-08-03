"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";


export default function JavaScriptDocPage() {
  


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






	return (
    // <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900 py-12 px-6">
    <main className="min-h-screen from-white to-gray-100 dark:bg-black  py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-yellow-300 bg-black">
            JavaScript Documentation
          </h1>
        </header>
        {/* 1.1 What is JavaScript */}
        <section className="shadow-yellow-300 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            <b className="text-yellow-300">1.1</b> What is JavaScript
          </h2>
          <div className="max-w-3xl mx-auto">
            - JavaScript (JS) is a high-level, interpreted, multi-paradigm language. <br />
            - Originally created to add interactivity to web pages (pop-ups, form validation, animations) <br />
            - Now it runs everywhere: Browsers, Servers, Apps etc. <br />
            - Created by Brendan Eich in 1995, earlier known as Mocha, then LiveScript, then JavaScript. <br />
            <br />
            Famous Websites that run on JavaScript: Google, Facebook, Youtube, Netflix.
          </div>
        </section>
        {/* 1.2 How JavaScript runs */}
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
            On loading the page you will find an alert saying &quot;Welcome to JavaScript!&quot;. <br />
            On going to the Console Tab from Inspect you will find the message &quot;JavaScript inside HTML!&quot; <br />
            <br />
            You can also directly write this code in Console.
            <CodeBlock language="js" filename="console.js" code={code2} />
          </div>
        </section>
        {/* 1.3 Basic JavaScript Syntax */}
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
        

        
        {/* 1.7 Conditionals in JavaScript */}
        <section className="shadow-yellow-300 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          <b className="text-yellow-300">1.7</b> Conditionals in JavaScript
          </h2>
          <div className="max-w-3xl mx-auto">
            
          </div>
        </section>
        {/* 1.8 Loops in JavaScript */}
        <section className="shadow-yellow-300 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          <b className="text-yellow-300">1.8</b> Loops in JavaScript
          </h2>
          <div className="max-w-3xl mx-auto">
            
          </div>
        </section>
      </div>
    </main>
  );
}
