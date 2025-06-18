'use client'

import { HeroSection } from "@/components/hero-section-4";

// import Link from "next/link";

import { BackgroundPaths } from "@/components/ui/background-paths";
// import { GradientCard1 } from "@/components/ui/gradient-card-1";
// import { GradientCard2 } from "@/components/ui/gradient-card-2";
// import { GradientCard3 } from "@/components/ui/gradient-card-3";
import { OpenSource } from "@/components/open-source";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function Home() {
     

  return (
    <main>
      {/* <HeroSection /> */}
      <div className="relative h-screen py-40 dark:bg-black bg-white w-full">
  {/* Text Positioned Absolutely in Center */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 pointer-events-none">
    <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
      Open{" "}
      <span className="text-neutral-200">
        {"Docs".split("").map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </p>
    <p className="text-sm md:text-lg text-neutral-300 max-w-2xl py-4">
      Building the coolest documentation website for programming, languages, frameworks, libraries, tools and systems.
    </p>
  </div>

  {/* World Map is background content */}
  <div className="mx-auto max-w-6xl z-0 relative">
    <WorldMap
  dots={[
    {
      start: { lat: 64.2008, lng: -149.4937 }, // Alaska
      end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    },
    {
      start: { lat: 64.2008, lng: -149.4937 },
      end: { lat: -15.7975, lng: -47.8919 }, // Brasília
    },
    {
      start: { lat: -15.7975, lng: -47.8919 },
      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London
      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
    },
    {
      start: { lat: 28.6139, lng: 77.209 },
      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
    },
    {
      start: { lat: 28.6139, lng: 77.209 },
      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    },
    {
      start: { lat: 35.6895, lng: 139.6917 }, // Tokyo
      end: { lat: 55.7558, lng: 37.6176 }, // Moscow
    },
    {
      start: { lat: 55.7558, lng: 37.6176 }, // Moscow
      end: { lat: -33.8688, lng: 151.2093 }, // Sydney
    },
    {
      start: { lat: 40.7128, lng: -74.006 }, // New York
      end: { lat: 52.52, lng: 13.405 }, // Berlin
    },
    {
      start: { lat: 52.52, lng: 13.405 }, // Berlin
      end: { lat: 1.3521, lng: 103.8198 }, // Singapore
    },
    {
      start: { lat: -33.8688, lng: 151.2093 }, // Sydney
      end: { lat: -36.8485, lng: 174.7633 }, // Auckland
    },
  ]}
/>

  </div>
</div>

      {/* <FocusCards cards={cards} /> */}
      
      <OpenSource
        repository="Amethyst-Docs/Amethyst"
        title="Proudly open-source"
        description="Our source code is available on GitHub - feel free to read, review, or contribute to it however you want!"
        buttonText="Star on GitHub"
        defaultStats={{
          stars: 10,
          contributors: [
            {
              login: "DarkmodeWorking",
              avatar_url: "https://avatars.githubusercontent.com/u/12345678?v=4",
            },
          ],
        }}
      />
      <BackgroundPaths title="Read Docs Like Smooth Lines Flow" />
    </main>
  );
}
