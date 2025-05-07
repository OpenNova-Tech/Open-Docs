"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function JavaScriptDocPage() {
	const code2 = `class Solution {
    public int reverse(int x) {
        long reverse = 0;
        while(x != 0) {
            reverse = reverse * 10 + (x % 10);
            x = x / 10;
        }
        if(reverse > Integer.MAX_VALUE || reverse < Integer.MIN_VALUE) {
            return 0;
        }
        else {
            return (int) reverse;
        }
    }
}`


	return (
    // <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900 py-12 px-6">
    <main className="min-h-screen from-white to-gray-100 dark:bg-black  py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-amber-400 bg-black">
            Reverse Integer - Medium
          </h1>
        </header>
        <section className="shadow-amber-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            <b className="text-amber-400">1.1</b> Problem Statement
          </h2>
          <div className="max-w-3xl mx-auto">

          </div>
        </section>
				<section className="shadow-amber-400 rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            <b className="text-amber-400">1.3</b> Solution in Java
          </h2>
          <div className="max-w-3xl mx-auto">
						<CodeBlock language="java" filename="reverseInteger.java" code={code2} /> 
          </div>
        </section>
      </div>
    </main>
  );
}
