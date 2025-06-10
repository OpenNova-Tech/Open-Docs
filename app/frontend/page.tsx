"use client"

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function LanguagePage() {
  const frameworks = [
  {
    title: "React.JS",
    description: "Component-based JavaScript library for building user interfaces efficiently.",
    link: "language/cplusplus",
  },
  {
    title: "Angular",
    description: "Robust TypeScript-based framework for scalable single-page applications.",
    link: "language/javascript",
  },
  {
    title: "Vue.JS",
    description: "Lightweight progressive framework for building interactive web interfaces.",
    link: "/python",
  },
  {
    title: "Svelte",
    description: "Compiler-based UI framework with zero runtime overhead and reactivity.",
    link: "/java",
  },
  {
    title: "Astro.JS",
    description: "Modern static site generator optimized for performance and minimal JavaScript.",
    link: "/go",
  }
];


	const cross = [
  {
    title: "React Native",
    description: "Build native mobile apps using React and JavaScript codebase.",
    link: "language/cplusplus",
  },
  {
    title: "Flutter",
    description: "Google’s UI toolkit for crafting natively compiled mobile apps.",
    link: "language/javascript",
  },
  {
    title: "Lynx",
    description: "Minimal, fast UI toolkit designed for modern native apps.",
    link: "/python",
  }
];


	const libraries = [
  {
    title: "ShadCN UI",
    description: "Accessible, customizable components built with Radix and Tailwind CSS.",
    link: "language/cplusplus",
  },
  {
    title: "Mantine UI",
    description: "Modern React components library with native TypeScript support and themes.",
    link: "language/javascript",
  },
  {
    title: "Chakra UI",
    description: "Flexible, accessible component library for building React applications quickly.",
    link: "/python",
  }
];


  return (
    <div className="max-w-5xl mt-20 mx-auto px-8 py-12">
      Frontend Web Frameworks
      <HoverEffect items={frameworks} />
			Frontend Cross-Platform Frameworks
      <HoverEffect items={cross} />
			UI Libraries
      <HoverEffect items={libraries} />
    </div>
  );
}
