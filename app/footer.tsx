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
    <footer className="w-full bg-black text-white pt-10">
      {/* Top Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 pb-20">
        <div>
          <h3 className="text-lg font-semibold mb-2">Docs</h3>
          <ul className="space-y-1 text-sm text-neutral-400">
            <li><a href="#">Libraries</a></li>
            <li><a href="#">Frameworks</a></li>
            <li><a href="#">Languages</a></li>
            <li><a href="#">All Technologies</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Community</h3>
          <ul className="space-y-1 text-sm text-neutral-400">
            <li><a href="#">Join Discord</a></li>
            <li><a href="#">Follow on X</a></li>
            <li><a href="#">Star us on GitHub</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contribute</h3>
          <ul className="space-y-1 text-sm text-neutral-400">
            <li><a href="#">Write Docs</a></li>
            <li><a href="#">Open an Issue</a></li>
            <li><a href="#">GitHub Repository</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">More</h3>
          <ul className="space-y-1 text-sm text-neutral-400">
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">License</a></li>
          </ul>
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
