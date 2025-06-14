// app/lectures/javascript/page.tsx

import {
  // IconAdjustmentsBolt,
  IconBrandJavascript,
  // IconCloud,
  // IconCurrencyDollar,
  // IconEaseInOut,
  // IconHeart,
  // IconHelp,
  // IconRouteAltLeft,
  // IconTerminal2,
} from "@tabler/icons-react";
import { Feature } from "@/components/feature-section-with-hover-effects";
import Link from "next/link";

const features = [
  { title: "Introduction", description: "He;p", icon: <IconBrandJavascript />, link: "/language/javascript/1" },
  { title: "DOM and Functions", description: "He;p", icon: <IconBrandJavascript />, link: "/language/javascript/2" },
  { title: "Arrays, OOP, Events", description: "He;p", icon: <IconBrandJavascript />, link: "/language/javascript/3" },
  { title: "Async, APIS, Storage", description: "He;p", icon: <IconBrandJavascript />, link: "/language/javascript/4" },
  { title: "ES6+, Event Loop", description: "He;p", icon: <IconBrandJavascript />, link: "/language/javascript/5" },
  { title: "Functional Programming", description: "He;p", icon: <IconBrandJavascript />, link: "/language/javascript/6" },
  { title: "Memory, Optimization", description: "He;p", icon: <IconBrandJavascript />, link: "/language/javascript/7" },
  { title: "Design Patterns", description: "He;p", icon: <IconBrandJavascript />, link: "/language/javascript/8" },
  { title: "Generators, Web Workers", description: "He;p", icon: <IconBrandJavascript />, link: "/language/javascript/9" },
];

export default function page() {
	return (
		<div className="m-10 py-12 md:py-16 lg:py-20">
			<h1 className="text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-neutral-800 dark:text-neutral-100 mb-4">
				Welcome to Express.JS
			</h1>
			<p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg">
				Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.
				<br /><br />
				Creator: TJ Holowaychuk <a target="_blank" href="https://github.com/tj" className="text-neutral-500">Profile</a>
				<br />
				<a target="_blank" href="https://github.com/expressjs/express" className="text-violet-500">Github Repo Link</a>
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
				{features.map((feature) => (
					<Link href={feature.link} key={feature.title} className="contents">
						<Feature {...feature} />
					</Link>
				))}
			</div>
		</div>

	);
}
