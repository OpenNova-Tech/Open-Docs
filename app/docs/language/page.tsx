'use client'

import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect'

export default function Page() {
  const objectOriented = [
    // {
    //   title: 'Java',
    //   description: 'Platform-independent, object-oriented language widely used in enterprise systems.',
    //   link: '/docs/language/java',
    //   iconSrc: '/icons/langs/java.svg'
    // },
    {
      title: 'Python',
      description: 'Multi-paradigm language supporting OOP, functional, and scripting styles.',
      link: '/docs/language/python',
      iconSrc: '/icons/langs/py.svg'
    },
    {
      title: 'C++',
      description: 'Extension of C with classes and OOP features for performance-critical systems.',
      link: '/docs/language/cplusplus',
      iconSrc: '/icons/langs/cpp.svg'
    },
    // {
    //   title: 'C#',
    //   description: 'Modern object-oriented language from Microsoft for .NET applications.',
    //   link: '/docs/language/csharp',
    //   iconSrc: '/icons/langs/cs.svg'
    // },
    // {
    //   title: 'Kotlin',
    //   description: 'Concise modern OOP language preferred for Android and JVM development.',
    //   link: '/docs/language/kotlin',
    //   iconSrc: '/icons/langs/kt.svg'
    // },
    // {
    //   title: 'Swift',
    //   description: 'Object- and protocol-oriented language for Apple’s platforms.',
    //   link: '/docs/language/swift',
    //   iconSrc: '/icons/langs/swift.svg'
    // },
    // {
    //   title: 'Ruby',
    //   description: 'Elegant, dynamic, and fully object-oriented scripting language.',
    //   link: '/docs/language/ruby',
    //   iconSrc: '/icons/langs/rb.svg'
    // }
  ]

  const procedural = [
  //   {
  //     title: 'C',
  //     description: 'Foundational procedural language used in system and embedded programming.',
  //     link: '/docs/language/c',
  //     iconSrc: '/icons/langs/c.svg'
  //   },
    {
      title: 'Go',
      description: 'Compiled procedural language by Google emphasizing simplicity and concurrency.',
      link: '/docs/language/go',
      iconSrc: '/icons/langs/go.svg'
    },
  //   {
  //     title: 'Fortran',
  //     description: 'Procedural high-performance language for scientific and numerical computing.',
  //     link: '/docs/language/fortran',
  //     iconSrc: '/icons/langs/f.svg'
  //   },
  //   {
  //     title: 'Pascal',
  //     description: 'Classic procedural teaching language emphasizing structured programming.',
  //     link: '/docs/language/pascal'
  //   },
  ]

  // const functional = [
  //   {
  //     title: 'Haskell',
  //     description: 'Purely functional language emphasizing immutability and lazy evaluation.',
  //     link: '/docs/language/haskell',
  //     iconSrc: '/icons/langs/hs.svg'
  //   },
  //   {
  //     title: 'Scala',
  //     description: 'Combines functional and object-oriented paradigms on the JVM.',
  //     link: '/docs/language/scala',
  //     iconSrc: '/icons/langs/sc.svg'
  //   },
  //   {
  //     title: 'Elixir',
  //     description: 'Functional language built on Erlang VM for scalable, fault-tolerant systems.',
  //     link: '/docs/language/elixir',
  //     iconSrc: '/icons/langs/ex.svg'
  //   },
  //   {
  //     title: 'F#',
  //     description: 'Functional-first language in the .NET ecosystem.',
  //     link: '/docs/language/fsharp',
  //     iconSrc: '/icons/langs/fs.svg'
  //   }
  // ]

  const markupAndStyling = [
    {
      title: 'HTML',
      description: 'The standard markup language for structuring content on the web.',
      link: '/docs/language/html',
      iconSrc: '/icons/langs/html.svg'
    },
  //   {
  //     title: 'CSS',
  //     description: 'Style sheet language used to design the visual presentation of web pages.',
  //     link: '/docs/language/css',
  //     iconSrc: '/icons/langs/css.svg'
  //   }
  ]

  // const compute = [
  //   {
  //     title: "MATLAB",
  //     description: "Numerical computing environment used for simulations, engineering, and data analysis.",
  //     link: "/docs/language/matlab",
  //     iconSrc: "/icons/langs/matlab.svg",
  //   },
  //   {
  //     title: 'Jupyter Notebook',
  //     description: 'Interactive computational notebook supporting multiple languages like Python, R, and Julia.',
  //     link: '/docs/language/jupyter',
  //     iconSrc: '/icons/langs/ipynb.svg'
  //   },
  //   {
  //     title: "R",
  //     description: "Statistical programming language used for data analysis and visualization.",
  //     link: "/docs/language/r",
  //     iconSrc: "/icons/langs/r.svg",
  //   },
  // ]

  const scripting = [
    {
      title: 'JavaScript',
      description: 'Lightweight interpreted scripting language for web interactivity.',
      link: '/docs/language/javascript',
      iconSrc: '/icons/langs/js.svg'
    },
    {
      title: 'TypeScript',
      description: 'Statically-typed superset of JavaScript improving maintainability and tooling.',
      link: '/docs/language/typescript',
      iconSrc: '/icons/langs/ts.svg'
    },
  //   {
  //     title: 'PHP',
  //     description: 'Server-side scripting language widely used for web applications and CMS.',
  //     link: '/docs/language/php',
  //     iconSrc: '/icons/langs/php.svg'
  //   },
  //   {
  //     title: 'Perl',
  //     description: 'Scripting language known for text processing, sysadmin tasks, and automation.',
  //     link: '/docs/language/perl',
  //     iconSrc: '/icons/langs/pl.svg'
  //   },
  //   {
  //     title: 'Lua',
  //     description: 'Lightweight scripting language embedded in games and IoT applications.',
  //     link: '/docs/language/lua',
  //     iconSrc: '/icons/langs/lua.svg'
  //   },
  //   {
  //     title: 'Shell',
  //     description: 'Scripting language for automating Unix/Linux tasks and workflows.',
  //     link: '/docs/language/shell',
  //     iconSrc: '/icons/langs/sh.svg'
  //   }
  ]

  // const modernHybrid = [
  //   {
  //     title: 'Rust',
  //     description: 'Memory-safe systems language blending procedural and functional paradigms.',
  //     link: '/docs/language/rust',
  //     iconSrc: '/icons/langs/rs.svg'
  //   },
  //   {
  //     title: 'Julia',
  //     description: 'High-performance dynamic language combining scripting simplicity with compiled speed.',
  //     link: '/docs/language/julia',
  //     iconSrc: '/icons/langs/jl.svg'
  //   },
  //   {
  //     title: 'Dart',
  //     description: 'Optimized for UI, blending OOP and functional styles, used in Flutter.',
  //     link: '/docs/language/dart',
  //     iconSrc: '/icons/langs/dart.svg'
  //   },
  //   {
  //     title: 'Nim',
  //     description: 'Fast, expressive language that mixes procedural, OOP, and functional paradigms.',
  //     link: '/docs/language/nim',
  //     iconSrc: '/icons/langs/nim.svg'
  //   },
  //   {
  //     title: 'Crystal',
  //     description: 'Ruby-like syntax with compiled speed and static typing.',
  //     link: '/docs/language/crystal',
  //     iconSrc: '/icons/langs/cr.svg'
  //   }
  // ]

  // const legacy = [
  //   {
  //     title: 'Erlang',
  //     description: 'Concurrent functional language used in telecom and fault-tolerant legacy systems.',
  //     link: '/docs/language/erlang',
  //     iconSrc: '/icons/langs/erl.svg'
  //   },
  //   {
  //     title: "Assembly",
  //     description: "Low-level programming language giving direct control over hardware instructions.",
  //     link: "/docs/language/assembly",
  //     iconSrc: "/icons/langs/asm.svg",
  //   },
  //   {
  //     title: 'Objective-C',
  //     description: 'Legacy Apple language for macOS and iOS before Swift.',
  //     link: '/docs/language/objectivec'
  //   },
  //   {
  //     title: 'COBOL',
  //     description: 'Legacy business programming language used in finance and government systems.',
  //     link: '/docs/language/cobol'
  //   }
  // ]

  return (
    <div className="bg-black pt-20">
      <div className="max-w-5xl mx-auto px-8 py-12 space-y-12 text-white">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Object-Oriented Programming (OOP) Languages</h2>
          <HoverEffect items={objectOriented} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Procedural Programming Languages</h2>
          <HoverEffect items={procedural} />
        </div>

        {/* <div>
          <h2 className="text-2xl font-semibold mb-4">Functional Programming Languages</h2>
          <HoverEffect items={functional} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Computation Languages</h2>
          <HoverEffect items={compute} />
        </div> */}

        <div>
          <h2 className="text-2xl font-semibold mb-4">Markup & Styling Languages</h2>
          <HoverEffect items={markupAndStyling} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Scripting Languages</h2>
          <HoverEffect items={scripting} />
        </div>

        {/* <div>
          <h2 className="text-2xl font-semibold mb-4">Modern Multi-Paradigm Languages</h2>
          <HoverEffect items={modernHybrid} />
        </div> */}

        {/* <div>
          <h2 className="text-2xl font-semibold mb-4">Legacy & System-Era Languages</h2>
          <HoverEffect items={legacy} />
        </div> */}
      </div>
    </div>
  )
}
