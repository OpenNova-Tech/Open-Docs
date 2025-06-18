"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "fixed  inset-x-0 max-w-lg mx-auto z-50 bg-[#1f1f1f57] backdrop-blur-sm border border-white/20 rounded-full shadow-input flex justify-center space-x-8 px-8 py-4",
        className
      )}
    >
      <Link href="/" className="text-white ">
        Home
      </Link>
      <Link href="/docs" className="text-white ">
        Docs
      </Link>
      <Link href="/support" className="text-white ">
        Support
      </Link>
    </nav>
  );
}
