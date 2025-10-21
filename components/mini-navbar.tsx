"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const defaultTextColor = "text-gray-300";
  const hoverTextColor = "text-white";
  const textSizeClass = "text-sm";

  return (
    <a
      href={href}
      className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}
    >
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </a>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  // ✅ NextAuth session
  const { data: session, status } = useSession();
  const user = session?.user;
  const mounted = status !== "loading";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    if (isOpen) setHeaderShapeClass("rounded-xl");
    else shapeTimeoutRef.current = setTimeout(() => setHeaderShapeClass("rounded-full"), 300);
    return () => {
      if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    };
  }, [isOpen]);

  if (!mounted) return null;

  const topClass = pathname === "/" ? "top-10" : "top-5";

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const navLinksData = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Forum", href: "/forum" },
    { label: "Support", href: "/support" },
    { label: "Github", href: "https://www.github.com/OpenNova-Tech/Open-Docs" },
  ];

  return (
    <header
      className={`fixed ${topClass} left-1/2 transform -translate-x-1/2 z-100 flex flex-col items-center px-6 py-3 backdrop-blur-xs
                  ${headerShapeClass} border border-[#333] bg-[#1f1f1f57]
                  w-[calc(100%-2rem)] md:w-[calc(100%-7rem)]
                  transition-[border-radius] duration-0 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative w-5 h-5 flex items-center justify-center">
            <span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 top-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
            <span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 left-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
            <span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 right-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
            <span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 bottom-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
          </div>
          <b className="pl-4 text-lg">OPEN DOCS</b>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        {/* ✅ Auth Section */}
        <div className="hidden sm:flex items-center gap-3">
          {!user ? (
            <>
              <button
                onClick={() => router.push("/login")}
                className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200"
              >
                Log In
              </button>
              <button
                onClick={() => router.push("/register")}
                className="px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <img
                src={user.image || "https://wallpapers.com/images/hd/cartoon-developer-profile-picture-j23xefhmfofeiayv.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-400"
              />
              <button
                onClick={handleLogout}
                className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#470e0e] bg-[rgba(33,9,9,0.62)] text-red-300 rounded-full hover:border-red-100/50 hover:text-red-50 transition-colors duration-200"
              >
                Log Out
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
