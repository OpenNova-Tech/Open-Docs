'use client'

import {
	IconSettings,
	IconTerminal2,
	IconCode,
	IconFileCode,
	IconHierarchy2,
	IconRefresh,
	IconDatabase,
	IconTimeline,
	IconBrowser,
	IconColorSwatch,
	IconBlockquote,
	IconLink,
	IconLayoutNavbar,
	IconLayoutGridAdd,
	IconBraces,
	IconListDetails,
	IconHash,
	IconAsterisk,
	IconForms,
	IconLanguage,
	IconEye,
	IconAlertTriangle,
	IconBolt,
	IconWorld,
	IconWand,
	IconShieldLock,
	IconDeviceMobile,
	IconComponents,
	IconPlugConnected,
	IconBook,
	IconBug
} from '@tabler/icons-react'

import { ScrollableFeatureRow } from '@/components/ScrollableRow'

/* ================= CORE ================= */

const core = [
	{ title: 'What is HTML', description: 'Standard markup language for creating webpages.', icon: <IconTerminal2 />, link: 'html/introduction' },
	{ title: 'History of HTML', description: 'Created by Tim Berners-Lee in 1991.', icon: <IconTimeline />, link: 'html/history' },
	{ title: 'Setup & Structure', description: 'DOCTYPE, html, head, body.', icon: <IconSettings />, link: 'html/3' },
	{ title: 'Hello World Page', description: 'Your first HTML document.', icon: <IconFileCode />, link: 'html/4' },
]

/* ================= SYNTAX ================= */

const syntax = [
	{ title: 'HTML Tags', description: 'Elements & attributes.', icon: <IconCode />, link: 'html/5' },
	{ title: 'Headings & Paragraphs', description: 'h1-h6, p tags.', icon: <IconBlockquote />, link: 'html/6' },
	{ title: 'Lists (ul/ol)', description: 'Ordered & unordered lists.', icon: <IconListDetails />, link: 'html/7' },
	{ title: 'Links & Images', description: 'anchor, img, paths.', icon: <IconLink />, link: 'html/8' },
	{ title: 'Tables', description: 'Tabular data.', icon: <IconLayoutGridAdd />, link: 'html/9' },
	{ title: 'Attributes Deep Dive', description: 'id, class, data-*.', icon: <IconAsterisk />, link: 'html/10' },
	{ title: 'Responsive Images', description: 'picture, srcset, sizes.', icon: <IconDeviceMobile />, link: 'html/27' },
]

/* ================= LAYOUT ================= */

const layout = [
	{ title: 'Divs & Spans', description: 'Block vs inline.', icon: <IconHierarchy2 />, link: 'html/11' },
	{ title: 'Semantic Elements', description: 'header, nav, main.', icon: <IconLayoutNavbar />, link: 'html/12' },
	{ title: 'Forms & Inputs', description: 'User data.', icon: <IconDatabase />, link: 'html/13' },
	{ title: 'Advanced Form Controls', description: 'Validation.', icon: <IconForms />, link: 'html/14' },
	{ title: 'Audio & Video', description: 'Media embedding.', icon: <IconBrowser />, link: 'html/15' },
]

/* ================= ADVANCED ================= */

const advanced = [
	{ title: 'HTML5 APIs', description: 'Canvas, Drag & Drop.', icon: <IconBraces />, link: 'html/16' },
	{ title: 'Meta Tags & SEO', description: 'Search optimization.', icon: <IconHash />, link: 'html/17' },
	{ title: 'Entities & Symbols', description: 'Reserved chars.', icon: <IconColorSwatch />, link: 'html/18' },
	{ title: 'HTML & CSS Integration', description: 'Styling.', icon: <IconRefresh />, link: 'html/19' },
	{ title: 'Head Elements Deep Dive', description: 'meta, link, script.', icon: <IconSettings />, link: 'html/26' },
	{ title: 'Web Components', description: 'template, slot.', icon: <IconComponents />, link: 'html/28' },
	{ title: 'HTML with JavaScript', description: 'DOM, events.', icon: <IconPlugConnected />, link: 'html/29' },
]

/* ================= ACCESSIBILITY ================= */

const accessibility = [
	{ title: 'Accessibility Basics', description: 'alt, labels.', icon: <IconEye />, link: 'html/20' },
	{ title: 'ARIA Roles', description: 'a11y attributes.', icon: <IconLanguage />, link: 'html/21' },
]

/* ================= BEST PRACTICES ================= */

const bestPractices = [
	{ title: 'Deprecated Tags', description: 'Obsolete tags.', icon: <IconAlertTriangle />, link: 'html/22' },
	{ title: 'Code Validation', description: 'W3C validation.', icon: <IconWand />, link: 'html/23' },
	{ title: 'Performance Tips', description: 'Optimize loading.', icon: <IconBolt />, link: 'html/24' },
	{ title: 'Internationalization', description: 'UTF-8, RTL.', icon: <IconWorld />, link: 'html/25' },
	{ title: 'HTML Security', description: 'XSS, CSP, sandbox.', icon: <IconShieldLock />, link: 'html/30' },
	{ title: 'PWA Markup', description: 'Manifest, install.', icon: <IconWorld />, link: 'html/31' },
	{ title: 'Browser Compatibility', description: 'Cross-browser.', icon: <IconBrowser />, link: 'html/32' },
]

/* ================= REFERENCE ================= */

const reference = [
	{ title: 'HTML Tag Reference', description: 'All tags.', icon: <IconBook />, link: 'html/ref' },
	{ title: 'Common Mistakes', description: 'Avoid errors.', icon: <IconBug />, link: 'html/mistakes' },
]

/* ================= PAGE ================= */

export default function Page() {
	return (
		<div className="bg-black p-10 py-32">

			<h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#e34c26] mb-4 flex items-center gap-3'> <img src="/icons/langs/html.svg" alt="HTML Logo" className="w-10 h-10" /> &nbsp;HTML Docs </h1> <p className='text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'> HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. <br /><br /> Creator: Tim Berners-Lee <a target='_blank' href='https://github.com/timbl' className='text-neutral-500'>Profile</a> <br /> <a target='_blank' href='https://github.com/whatwg/html' className='text-violet-500'>WHATWG Spec Repo</a> </p>

			<p className="px-10">Core Concepts</p>
			<ScrollableFeatureRow features={core} />

			<p className="px-10">Elements & Syntax</p>
			<ScrollableFeatureRow features={syntax} />

			<p className="px-10">Layout & Media</p>
			<ScrollableFeatureRow features={layout} />

			<p className="px-10">Advanced Concepts</p>
			<ScrollableFeatureRow features={advanced} />

			<p className="px-10">Accessibility</p>
			<ScrollableFeatureRow features={accessibility} />

			<p className="px-10">Best Practices</p>
			<ScrollableFeatureRow features={bestPractices} />

			<p className="px-10">Reference</p>
			<ScrollableFeatureRow features={reference} />

		</div>
	)
}