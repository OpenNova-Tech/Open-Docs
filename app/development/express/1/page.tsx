"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function page() {
	const code1 = `mkdir express-intro
cd express-intro`

	const code2 = `npm init -y`

	const code3 = `npm install express`

	const code4 = `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, User! Welcome to Express.js!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(\`Server is running at http://localhost:\${PORT}\`);
});`;

	const code5 = `node app.js`

	return (
		// <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-slate-900 py-12 px-6">
		<main className="pt-32 from-white to-gray-100 dark:bg-black  py-12 px-6">
			<div className="max-w-4xl mx-auto space-y-8">
				<header className="text-center">
					<h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-slate-400 bg-black">
						Introduction to Express.JS
					</h1>
				</header>
				<section className="shadow-slate-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
					<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
						<b className="text-slate-400">1.1</b> What is Express.JS
					</h2>
					<div className="max-w-3xl mx-auto">
						Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features to develop web and mobile applications. <br />
						<br /> 
						Think of Express as the engine that helps your Node.js server easily handle HTTP requests, routing, middleware, and much more.
					</div>
				</section>
				<section className="shadow-slate-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
					<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
						<b className="text-slate-400">1.2</b> Why use Express.JS
					</h2>
					<div className="max-w-3xl mx-auto">
						- Simplifies server creation in Node.js. <br />
						- Supports routing, middleware, and templating. <br />
						- Ideal for building RESTful APIs or MVC apps. <br />
						- Works well with databases like MongoDB, MySQL, etc.
					</div>
				</section>
				<section className="shadow-slate-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
					<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
						<b className="text-slate-400">1.3</b> Installing Express.JS
					</h2>
					<div className="max-w-3xl mx-auto">
						NOTE: Make sure Node.JS is installed in your system. <br />
						<br />
						STEP 1 - Create a folder for your app:
						<CodeBlock language="bash" filename="bash" code={code1} />
						<br />
						STEP 2 - Initialize a Node.js project:
						<CodeBlock language="bash" filename="bash" code={code2} />
						<br />
						STEP 3 - Install Express:
						<CodeBlock language="bash" filename="bash" code={code3} />
						<br />
						Now Express.JS has been loaded in your app
					</div>
				</section>
				<section className="shadow-slate-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
					<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
						<b className="text-slate-400">1.4</b> First Express App
					</h2>
					<div className="max-w-3xl mx-auto">
						Create a file called app.js and add: <br />
						<CodeBlock language="javascript" filename="app.js" code={code4} /> <br />
						and then run it using:
						<CodeBlock language="bash" filename="bash" code={code5} /> <br />
						Visit http://localhost:3000 — you will see your welcome message!
					</div>
				</section>
			</div>
		</main>
	);
}
