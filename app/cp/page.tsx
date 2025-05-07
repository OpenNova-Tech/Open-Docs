"use client"

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function LanguagePage() {
  const projects = [
    {
      title: "Leetcode",
      description: "Solving Leetcode Problems",
      link: "cp/leetcode",
    },
    {
      title: "HackerRank",
      description: "Solving HackerRank Problems",
      link: "cp/hackerrank",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <HoverEffect items={projects} />
    </div>
  );
}
