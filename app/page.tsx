'use client'

import { HeroSection } from "@/components/hero-section-4";

import Link from "next/link";

import { BackgroundPaths } from "@/components/ui/background-paths";
import { GradientCard1 } from "@/components/ui/gradient-card-1";
import { GradientCard2 } from "@/components/ui/gradient-card-2";
import { GradientCard3 } from "@/components/ui/gradient-card-3";
import { OpenSource } from "@/components/open-source";

export default function Home() {
      const cards = [
    {
      title: "Languages",
      src: "/languages.png",
      href: "/language",
    },
    {
      title: "Front End",
      src: "/frontend.png",
      href: "/development",
    },
    {
      title: "Backend",
      src: "/backend.png",
      href: "/cloud",
    },
    {
      title: "CP",
      src: "/cp.png",
      href: "/cp",
    },
  ];

  return (
    <main>
      <HeroSection />
        {/* <FocusCards cards={cards} /> */}
      
      <OpenSource
        repository="OprahDingus/unity-oliver-phi"
        title="Proudly open-source"
        description="Our source code is available on GitHub - feel free to read, review, or contribute to it however you want!"
        buttonText="Star on GitHub"
        defaultStats={{
          stars: 10,
          contributors: [
            {
              login: "OprahDingus",
              avatar_url: "https://avatars.githubusercontent.com/u/12345678?v=4",
            },
          ],
        }}
      />
      <BackgroundPaths title="Read Docs Like Smooth Lines Flow" />
    </main>
  );
}
