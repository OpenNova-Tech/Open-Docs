// app/lectures/javascript/page.tsx

// import { GlareCard } from "@/components/ui/glare-card";
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
import { ScrollableFeatureRow } from "@/components/ScrollableRow";


// const lectures = [
// 	{ title: "What is Express.JS", href: "/development/express/1" },
// 	{ title: "Setting up a basic Express app", href: "/development/express/2" },
// 	{ title: "Routing in Express", href: "/development/express/3" },
// 	{ title: "Middleware: built-in, third-party, custom", href: "/development/express/4" },
// 	{ title: "Request & Response objects", href: "/development/express/5" },
// ];

const features = [
	{
		title: "What is Express.JS",
		description: "Built for engineers, developers, dreamers, thinkers and doers.",
		icon: <IconBrandJavascript />,
		link: 'express/1'
	},
	{
		title: "Routing in Express",
		description: "Built for engineers, developers, dreamers, thinkers and doers.",
		icon: <IconBrandJavascript />,
		link: 'express/2'
	},
	{
		title: "Middleware",
		description: "Built for engineers, developers, dreamers, thinkers and doers.",
		icon: <IconBrandJavascript />,
		link: 'express/4'
	},
	{
		title: "Request & Response objects",
		description: "Built for engineers, developers, dreamers, thinkers and doers.",
		icon: <IconBrandJavascript />,
		link: 'express/5'
	},
	{
		title: "Serving static files",
		description: "Built for engineers, developers, dreamers, thinkers and doers.",
		icon: <IconBrandJavascript />,
		link: 'express/6'
	},
	{
		title: "JSON and URL-encoded data",
		description: "Built for engineers, developers, dreamers, thinkers and doers.",
		icon: <IconBrandJavascript />,
		link: 'express/7'
	},
	{
		title: "Templating with EJS",
		description: "Built for engineers, developers, dreamers, thinkers and doers.",
		icon: <IconBrandJavascript />,
		link: 'express/8'
	},

];




export default function page() {
	return (
		<div className="'bg-black p-10 py-32">
			<h1 className="text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center gap-3">
			<img src="/icons/web/express.svg" alt="Express Logo" className="w-10 h-10" />
				Express.JS
			</h1>
			<p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg">
				Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.
				<br /><br />
				Creator: TJ Holowaychuk <a target="_blank" href="https://github.com/tj" className="text-neutral-500">Profile</a>
				<br />
				<a target="_blank" href="https://github.com/expressjs/express" className="text-violet-500">Github Repo Link</a>
			</p>

			{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
				{features.map((feature) => (
					<Link href={feature.link} key={feature.title} className="contents">
						<Feature {...feature} />
					</Link>
				))}
			</div> */}
			<p className="px-10"></p>
			<ScrollableFeatureRow features={features} />
		</div>

	);
}
