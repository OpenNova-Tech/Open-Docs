"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function JavaScriptDocPage() {
    const code1 = `#include <iostream>
using namespace std;

int main(void) {
    cout << "Hello World";
    return 0;
}`;

    const code2 = `// Using var
var city = "Barrackpore"
console.log(city)

// Using let
let school = "Central School"
console.log(school)

// Using const
const country = "India"
console.log(country)`;

  const code3 = `let myName = "Rishikesh"; // String
let myAge = 20;           // Number
let isStudent = true;     // Boolean
let myAddress = null;     // Null
let myPhone;              // Undefined
let id = Symbol('id');    // Symbol
let bigNumber = 12345678901234567890n; // BigInt

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isStudent);
console.log(typeof myAddress); // object (quirk in JS!)
console.log(typeof myPhone);
console.log(typeof id);
console.log(typeof bigNumber);`

    return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-pink-500 bg-black">
            C++ Documentation
          </h1>
        </header>
        <section className=" rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            <b className="text-pink-500">1.1</b> What is JavaScript
          </h2>
          <div className="max-w-3xl mx-auto">
            - JavaScript (JS) is a high-level interpreted, multi-paradigm language. <br />
            - Originally created to add interactivity to web pages <br />
            - Now it runs everywhere: browsers, servers, mobile apps etc. <br />
            <br />
            Famous Websites that run on JavaScript: Google, Facebook, Youtube, Netflix.
          </div>
        </section>
                <section className=" rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          <b className="text-pink-500">1.2</b> How Javascript runs
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
            <CodeBlock language="cpp" filename="hello_world.cpp" code={code1} />
          </div>
        </section>
                <section className=" rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            <b className="text-pink-500">1.3</b> Variables in JavaScript (var, let, const)
          </h2>
          <div className="max-w-3xl mx-auto">
            <CodeBlock language="js" filename="variables.js" code={code2} />
          </div>
        </section>
                <section className="rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Data Types in JavaScript 
          </h2>
          <div className="max-w-3xl mx-auto">
            <CodeBlock language="js" filename="dataTypes.js" code={code3} />
          </div>
        </section>
      </div>
    </main>
  );
}
