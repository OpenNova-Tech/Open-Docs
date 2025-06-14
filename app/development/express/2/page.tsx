"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function page() {
const arithmatic = [
    { method: "GET", purpose: "Read data", example: "View home page" },
    { method: "POST", purpose: "Submit data", example: "Submit a form" },
    { method: "PUT", purpose: "Update existing data", example: "Update a user profile" },
    { method: "DELETE", purpose: "Remove data", example: "Delete an account" },
  ]

	const code1 = `app.get('/home', (req, res) => {
  res.send("Welcome to Home Page!");
});`

	const code2 = `app.get('/product/:id', (req, res) => {
  res.send(\`Product ID: \${req.params.id}\`);
});`

	const code3 = `app.get('/search', (req, res) => {
  const q = req.query.q;
  res.send(\`You searched for: \${q}\`);
});`

	return (
		// <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-slate-900 py-12 px-6">
		<main className="pt-32 from-white to-gray-100 dark:bg-black  py-12 px-6">
			<div className="max-w-4xl mx-auto space-y-8">
				<header className="text-center">
					<h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-slate-400 bg-black">
						Routing in Express.JS
					</h1>
				</header>
				<section className="shadow-slate-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
					<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
						<b className="text-slate-400">1.1</b> What is Routing
					</h2>
					<div className="max-w-3xl mx-auto">
						When a user makes a request to your server (like visiting a website or clicking a button), Express decides how to respond using routes. <br />
						<br />
						Think of a route like this:
						<CodeBlock language="javascript" filename="route.js" code={code1} /> <br />
						- app is your Express app instance. <br />
						- get is the HTTP method (others include post, put, delete). <br />
						- /home is the path (like going to localhost:3000/home). <br />
						- The function (req, res) =&gt; &#123; &#125; is called the route handler. It sends the response.
					</div>
				</section>
				<section className="shadow-slate-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
					<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
						<b className="text-slate-400">1.2</b>  Different HTTP Methods
					</h2>
					<div className="max-w-3xl mx-auto">
						<Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Method</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Example Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {arithmatic.map((content) => (
                  <TableRow key={content.method}>
                    <TableCell>{content.method}</TableCell>
                    <TableCell>{content.purpose}</TableCell>
                    <TableCell>{content.example}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
					</div>
				</section>
				<section className="shadow-slate-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
					<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
						<b className="text-slate-400">1.3</b>  Route Parameters (req.params)
					</h2>
					<div className="max-w-3xl mx-auto">
						These are variables in the URL. Like: <br />
						<br />
						/product/:id <br />
						<br />
						<CodeBlock language="javascript" filename="" code={code2} /> <br />
						Visiting /product/123 → shows: Product ID: 123
					</div>
				</section>
				<section className="shadow-slate-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
					<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
						<b className="text-slate-400">1.4</b> Query Parameters (req.query)
					</h2>
					<div className="max-w-3xl mx-auto">
						Used like this in the URL: <br />
						<br />
						/search?q=laptop <br />
						<br />
						<CodeBlock language="javascript" filename="" code={code3} /> <br />
						Visiting /search?q=laptop → shows: You searched for: laptop
					</div>
				</section>
			</div>
		</main>
	);
}
