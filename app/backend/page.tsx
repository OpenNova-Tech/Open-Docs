"use client"

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function LanguagePage() {
  const projects = [
    {
      title: "Express.JS",
      description: "A powerful general-purpose programming language.",
      link: "language/cplusplus",
    },
    {
      title: "FastAPI",
      description: "The language of the web for dynamic client-side behavior.",
      link: "language/javascript",
    },
    {
      title: "Nest.JS",
      description: "A beginner-friendly language known for its simplicity.",
      link: "/python",
    },
    {
      title: "Django",
      description: "A versatile language widely used for enterprise applications.",
      link: "/java",
    },
    {
      title: "Flask",
      description: "A statically typed language designed at Google, famous for its performance.",
      link: "/go",
    },
    {
      title: "Fastify",
      description: "A language empowering everyone to build reliable and efficient software.",
      link: "/rust",
    },
    {
      title: "Ruby on Rails",
      description: "A language empowering everyone to build reliable and efficient software.",
      link: "/rust",
    },
    {
      title: "Laravel",
      description: "A language empowering everyone to build reliable and efficient software.",
      link: "/rust",
    },
    {
      title: "Spring",
      description: "A language empowering everyone to build reliable and efficient software.",
      link: "/rust",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <HoverEffect items={projects} />
    </div>
  );
}
