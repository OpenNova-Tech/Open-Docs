import { HeroSection } from "@/components/hero-section-4";
import { FocusCards } from "@/components/ui/focus-cards";
import Link from "next/link";
import { DIcons } from "dicons";
import ThemeToogle from "@/components/ui/footer";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { GradientCard1 } from "@/components/ui/gradient-card-1";
import { GradientCard2 } from "@/components/ui/gradient-card-2";
import { GradientCard3 } from "@/components/ui/gradient-card-3";

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
  
  const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform `;

  return (
    <main>
      <HeroSection />
      
      <div className="grid grid-cols-3 p-4">
        {/* <FocusCards cards={cards} /> */}
        <Link href='/language'>
        <GradientCard1 />
      </Link>
        <GradientCard2 />
        <GradientCard3 />
      </div>
<BackgroundPaths title="Read Docs Like Smooth Lines Flow" />
      <footer className="border-ali/20 :px-4 mx-auto w-full border-b   border-t  px-2">
      <div className="mt-10 flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Logo"
            href="mailto:contact@designali.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://x.com/designali_in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.instagram.com/designali.in/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.threads.net/designali.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Threads className="h-5 w-5" />
          </Link>



          <Link
            aria-label="Logo"
            href="https://www.linkedin.com/company/designali"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.LinkedIn className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.youtube.com/@designali-in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.YouTube className="h-5 w-5" />
          </Link>
        </div>
        <ThemeToogle />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made by</span>
          <span className="text-violet-600 text-lg font-black animate-pulse">
            <Link aria-label="Logo" className="" href="/">
              Project Amethyst
            </Link>
          </span>
        </div>
      </div>
    </footer>
    </main>
  );
}
