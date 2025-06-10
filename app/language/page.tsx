"use client"

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function LanguagePage() {
  const projects = [
    { title: "C++", description: "A powerful general-purpose programming language for system-level development.", link: "/language/cplusplus" },
    { title: "JavaScript", description: "The language of the web for dynamic and interactive pages.", link: "/language/javascript" },
    { title: "Python", description: "Beginner-friendly scripting language great for automation, AI, and web.", link: "/language/python" },
    { title: "Java", description: "Platform-independent object-oriented language used in enterprise-level applications.", link: "/language/java" },
    { title: "Go", description: "Google's compiled language known for concurrency and efficient networking tools.", link: "/language/go" },
    { title: "Rust", description: "Memory-safe systems programming language with zero-cost abstractions and performance.", link: "/language/rust" },
    { title: "TypeScript", description: "Typed superset of JavaScript enhancing code quality and scalability.", link: "/language/typescript" },
    { title: "Kotlin", description: "Concise modern JVM language preferred for Android development by Google.", link: "/language/kotlin" },
    { title: "Swift", description: "Apple's safe and fast language for iOS and macOS apps.", link: "/language/swift" },
    { title: "PHP", description: "Server-side scripting language widely used for web development and CMS.", link: "/language/php" },
    { title: "Ruby", description: "Elegant, expressive language popularized by the Ruby on Rails framework.", link: "/language/ruby" },
    { title: "C#", description: "Microsoft's modern object-oriented language used with the .NET framework.", link: "/language/csharp" },
    { title: "Shell", description: "Scripting language for automating Unix/Linux system tasks and workflows.", link: "/language/shell" },
    { title: "SQL", description: "Standard language for querying and managing relational databases efficiently.", link: "/language/sql" },
    { title: "R", description: "Statistical programming language used for data analysis and visualization.", link: "/language/r" },
    { title: "Scala", description: "Combines object-oriented and functional programming for JVM-based applications.", link: "/language/scala" },
    { title: "Perl", description: "Text-processing language known for scripting, bioinformatics, and sysadmin tasks.", link: "/language/perl" },
    { title: "Haskell", description: "Purely functional language with strong typing and lazy evaluation features.", link: "/language/haskell" },
    { title: "Dart", description: "Optimized for UI, used to build Flutter apps seamlessly.", link: "/language/dart" },
    { title: "Elixir", description: "Scalable functional language built on Erlang VM for distributed systems.", link: "/language/elixir" },
    { title: "Lua", description: "Lightweight scripting language embedded in games and IoT applications.", link: "/language/lua" },
    { title: "Assembly", description: "Low-level programming language giving direct control over hardware instructions.", link: "/language/assembly" },
    { title: "MATLAB", description: "Numerical computing environment used for simulations, engineering, and data analysis.", link: "/language/matlab" },
    { title: "Objective-C", description: "Legacy Apple language for macOS and iOS before Swift.", link: "/language/objectivec" },
    { title: "Fortran", description: "High-performance language primarily used for scientific and numerical computing.", link: "/language/fortran" },
    { title: "COBOL", description: "Legacy business programming language used in finance and government systems.", link: "/language/cobol" },
  ]

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <HoverEffect items={projects} />
    </div>
  );
}
