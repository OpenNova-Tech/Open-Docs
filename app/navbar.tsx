"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/moving-border";

export function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "fixed  inset-x-0 max-w-lg mx-auto z-50 bg-[#1f1f1f57] backdrop-blur-sm border border-white/20 rounded-full shadow-input flex items-center justify-center space-x-8 px-8 py-2",
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
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Login
      </Button>
    </nav>
  );
}
