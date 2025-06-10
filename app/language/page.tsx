"use client"

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function LanguagePage() {
  const development = [
    {
      title: "HTML",
      description: "The standard markup language for creating web pages and web applications.",
      link: "/language/html",
      iconSrc: "icons/langs/html.svg"
    },
    {
      title: "CSS",
      description: "Style sheet language used to design the visual presentation of web pages.",
      link: "/language/css",
      iconSrc: "icons/langs/css.svg"
    },
    {
      title: "JavaScript",
      description: "The language of the web for dynamic and interactive pages.",
      link: "/language/javascript",
      iconSrc: "icons/langs/js.svg"
    },
    {
      title: "Python",
      description: "Beginner-friendly scripting language great for automation, AI, and web.",
      link: "/language/python",
      iconSrc: "icons/langs/py.svg"
    },
    {
      title: "Java",
      description: "Platform-independent object-oriented language used in enterprise-level applications.",
      link: "/language/java",
      iconSrc: "icons/langs/java.svg"
    },
    {
      title: "TypeScript",
      description: "Typed superset of JavaScript enhancing code quality and scalability.",
      link: "/language/typescript",
      iconSrc: "icons/langs/ts.svg"
    },
    {
      title: "Kotlin",
      description: "Concise modern JVM language preferred for Android development by Google.",
      link: "/language/kotlin",
      iconSrc: "icons/langs/kt.svg"
    },
    {
      title: "Swift",
      description: "Apple's safe and fast language for iOS and macOS apps.",
      link: "/language/swift",
      iconSrc: "icons/langs/swift.svg"
    },
    {
      title: "PHP",
      description: "Server-side scripting language widely used for web development and CMS.",
      link: "/language/php",
      iconSrc: "icons/langs/php.svg"
    },
    {
      title: "Ruby",
      description: "Elegant, expressive language popularized by the Ruby on Rails framework.",
      link: "/language/ruby",
      iconSrc: "icons/langs/rb.svg"
    },
    {
      title: "C#",
      description: "Microsoft's modern object-oriented language used with the .NET framework.",
      link: "/language/csharp",
      iconSrc: "icons/langs/cs.svg"
    },
    {
      title: "Dart",
      description: "Optimized for UI, used to build Flutter apps seamlessly.",
      link: "/language/dart",
      iconSrc: "icons/langs/dart.svg"
    }
  ]

  const systems = [
    {
      title: "C",
      description: "Low-level procedural language foundational for system and embedded programming.",
      link: "/language/c",
      iconSrc: "icons/langs/c.svg"
    },
    {
      title: "C++",
      description: "A powerful general-purpose programming language for system-level development.",
      link: "/language/cplusplus",
      iconSrc: "icons/langs/cpp.svg"
    },
    {
      title: "Go",
      description: "Google's compiled language known for concurrency and efficient networking tools.",
      link: "/language/go",
      iconSrc: "icons/langs/go.svg"
    },
    {
      title: "Rust",
      description: "Memory-safe systems programming language with zero-cost abstractions and performance.",
      link: "/language/rust",
      iconSrc: "icons/langs/rs.svg"
    },
    {
      title: "Shell",
      description: "Scripting language for automating Unix/Linux system tasks and workflows.",
      link: "/language/shell",
      iconSrc: "icons/langs/sh.svg"
    },
    {
      title: "Perl",
      description: "Text-processing language known for scripting, bioinformatics, and sysadmin tasks.",
      link: "/language/perl",
      iconSrc: "icons/langs/pl.svg"
    },
    {
      title: "Lua",
      description: "Lightweight scripting language embedded in games and IoT applications.",
      link: "/language/lua",
      iconSrc: "icons/langs/lua.svg"
    },
        {
      title: "Assembly",
      description: "Low-level programming language giving direct control over hardware instructions.",
      link: "/language/assembly",
      iconSrc: "icons/langs/asm.svg"
    },
  ]

  const data = [
    {
      title: "R",
      description: "Statistical programming language used for data analysis and visualization.",
      link: "/language/r",
      iconSrc: "icons/langs/r.svg"
    },
    {
      title: "MATLAB",
      description: "Numerical computing environment used for simulations, engineering, and data analysis.",
      link: "/language/matlab",
      iconSrc: "icons/langs/matlab.svg"
    },
    {
      title: "Julia",
      description: "High-performance dynamic language for scientific computing and machine learning.",
      link: "/language/julia",
      iconSrc: "icons/langs/jl.svg"
    },
    {
      title: "Fortran",
      description: "High-performance language primarily used for scientific and numerical computing.",
      link: "/language/fortran",
      iconSrc: "icons/langs/f.svg"
    },
  ]

  const distributed = [
    {
      title: "Elixir",
      description: "Scalable functional language built on Erlang VM for distributed systems.",
      link: "/language/elixir",
      iconSrc: "icons/langs/ex.svg"
    },
    {
      title: "Scala",
      description: "Combines object-oriented and functional programming for JVM-based applications.",
      link: "/language/scala",
      iconSrc: "icons/langs/sc.svg"
    },
    {
      title: "Haskell",
      description: "Purely functional language with strong typing and lazy evaluation features.",
      link: "/language/haskell",
      iconSrc: "icons/langs/hs.svg"
    },
    {
      title: "Nim",
      description: "Fast, typed language with Python-like syntax and system focus.",
      link: "/language/nim",
      iconSrc: "icons/langs/nim.svg"
    },
    {
      title: "Crystal",
      description: "Ruby-like syntax with static typing and compiled performance.",
      link: "/language/crystal",
      iconSrc: "icons/langs/cr.svg"
    },
  ]

  const legacy = [
    {
      title: "Erlang",
      description: "Legacy Concurrent functional language used in telecom and fault-tolerant systems.",
      link: "/language/erlang",
      iconSrc: "icons/langs/erl.svg"
    },
    {
      title: "Objective-C",
      description: "Legacy Apple language for macOS and iOS before Swift.",
      link: "/language/objectivec"
    },
    
    {
      title: "COBOL",
      description: "Legacy business programming language used in finance and government systems.",
      link: "/language/cobol"
    }
  ]

  return (
    <div className="max-w-5xl mt-20 mx-auto px-8 py-12">
      Application and Server Development
      <HoverEffect items={development} />
      System Level Programming
      <HoverEffect items={systems} />
      Data Analysis and Computing
      <HoverEffect items={data} />
      Distributed Systems
      <HoverEffect items={distributed} />
      Legacy Systems 
      <HoverEffect items={legacy} />
    </div>
  );
}
