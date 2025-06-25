import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconHome,
  IconBook,
} from "@tabler/icons-react";

export function FloatingDockFooter() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Docs",
      icon: <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/docs",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/your-org-name",
    },
    {
      title: "Discord",
      icon: <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://discord.gg/your-invite-code",
    },
    {
      title: "X (Twitter)",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://x.com/your-handle",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/company/your-company",
    },
  ];

  return (
    <footer className="w-full bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 pb-20">
  <div>
    <h3 className="text-lg font-semibold mb-2">Organization</h3>
    <ul className="space-y-1 text-sm text-neutral-400">
      <li><a href="about" className="hover:text-indigo-400">About</a></li>
      <li><a href="blog" className="hover:text-indigo-400">Blog</a></li>
      <li><a href="team" className="hover:text-indigo-400">Team</a></li>
    </ul>
  </div>

  <div>
    <h3 className="text-lg font-semibold mb-2">Community</h3>
    <ul className="space-y-1 text-sm text-neutral-400">
      <li><a href="#" className="hover:text-indigo-400">Community</a></li>
      <li><a href="#" className="hover:text-indigo-400">Forum</a></li>
      <li><a href="#" className="hover:text-indigo-400">Chat</a></li>
    </ul>
  </div>

  <div>
    <h3 className="text-lg font-semibold mb-2">Contribute</h3>
    <ul className="space-y-1 text-sm text-neutral-400">
      <li><a href="#" className="hover:text-indigo-400">Write Docs</a></li>
      <li><a href="#" className="hover:text-indigo-400">Open an Issue</a></li>
      <li><a href="#" className="hover:text-indigo-400">GitHub Repository</a></li>
    </ul>
  </div>

  <div>
    <h3 className="text-lg font-semibold mb-2">More</h3>
    <ul className="space-y-1 text-sm text-neutral-400">
      <li><a href="#" className="hover:text-indigo-400">Changelog</a></li>
      <li><a href="#" className="hover:text-indigo-400">Roadmap</a></li>
      <li><a href="#" className="hover:text-indigo-400">License</a></li>
    </ul>
  </div>

  {/* Made Using Tech */}
  <div className="hidden md:flex flex-col items-end justify-center text-xs text-neutral-500">
  <div className="flex flex-col items-center">
    <span className="mb-2">Made using</span>
    <div className="flex gap-2">
      <img src="icons/web/next.svg" alt="Next.js" className="h-4" />
      <img src="icons/web/tailwind.svg" alt="Tailwind CSS" className="h-4" />
      <img src="icons/web/shadcn.svg" alt="ShadCN UI" className="h-4" />
      <img src="icons/web/appwrite.svg" alt="Appwrite" className="h-4" />
      <img src="icons/web/vercel.svg" alt="Vercel" className="h-4" />
    </div>
  </div>
</div>
</div>


      {/* Floating Dock */}
      <div className="flex items-center justify-center">
        <FloatingDock
          mobileClassName="translate-y-20" // demo-specific
          items={links}
        />
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-neutral-500 text-xs py-6 border-t border-neutral-800 mt-8">
        © {new Date().getFullYear()} OpenDocs by OpenNova. All rights reserved.
      </div>
    </footer>
  );
}

