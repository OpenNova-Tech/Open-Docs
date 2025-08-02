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
	IconHash
} from '@tabler/icons-react'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

const core = [
	{ title: 'What is HTML', description: 'Standard markup language for creating webpages.', icon: <IconTerminal2 />, link: 'html/1' },
	{ title: 'History of HTML', description: 'Created by Tim Berners-Lee in 1991.', icon: <IconTimeline />, link: 'html/2' },
	{ title: 'Setup & Structure', description: 'Basic HTML template with DOCTYPE, html, head, body.', icon: <IconSettings />, link: 'html/3' },
	{ title: 'Hello World Page', description: 'Creating your first HTML document.', icon: <IconFileCode />, link: 'html/4' },
]

const syntax = [
	{ title: 'HTML Tags', description: 'Structure pages using elements & attributes.', icon: <IconCode />, link: 'html/5' },
	{ title: 'Headings & Paragraphs', description: 'Text formatting using h1–h6 and p tags.', icon: <IconBlockquote />, link: 'html/6' },
	{ title: 'Lists (ul/ol)', description: 'Create ordered & unordered lists.', icon: <IconListDetails />, link: 'html/7' },
	{ title: 'Links & Images', description: 'Anchor, img, and absolute vs relative paths.', icon: <IconLink />, link: 'html/8' },
	{ title: 'Tables', description: 'Structure tabular data with table, tr, td.', icon: <IconLayoutGridAdd />, link: 'html/9' },
]

const layout = [
	{ title: 'Divs & Spans', description: 'Block vs inline elements.', icon: <IconHierarchy2 />, link: 'html/10' },
	{ title: 'Semantic Elements', description: 'header, nav, main, footer, article, section.', icon: <IconLayoutNavbar />, link: 'html/11' },
	{ title: 'Forms & Inputs', description: 'Collect user data using form, input, textarea.', icon: <IconDatabase />, link: 'html/12' },
	{ title: 'Audio & Video', description: 'Embed media using audio and video tags.', icon: <IconBrowser />, link: 'html/13' },
]

const advanced = [
	{ title: 'HTML5 APIs', description: 'Canvas, Geolocation, Drag & Drop, etc.', icon: <IconBraces />, link: 'html/14' },
	{ title: 'Meta Tags & SEO', description: 'Improve indexing & sharing (title, description).', icon: <IconHash />, link: 'html/15' },
	{ title: 'Entities & Symbols', description: 'Display reserved characters in HTML.', icon: <IconColorSwatch />, link: 'html/16' },
	{ title: 'HTML & CSS Integration', description: 'Style HTML using internal, external, inline CSS.', icon: <IconRefresh />, link: 'html/17' },
]

export default function page() {
	return (
		<div className='bg-black p-10 py-32'>
			<h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#e34c26] mb-4 flex items-center gap-3'>
				<img src="/icons/langs/html.svg" alt="HTML Logo" className="w-10 h-10" />
				&nbsp;HTML Docs
			</h1>
			<p className='text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
				HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web.
				<br /><br />
				Creator: Tim Berners-Lee <a target='_blank' href='https://github.com/timbl' className='text-neutral-500'>Profile</a>
				<br />
				<a target='_blank' href='https://github.com/whatwg/html' className='text-violet-500'>WHATWG Spec Repo</a>
			</p>



			<p className="px-10">Core Concepts & Setup</p>
			<ScrollableFeatureRow features={core} />

			<p className="px-10">Elements & Tags</p>
			<ScrollableFeatureRow features={syntax} />

			<p className="px-10">Layout & Media</p>
			<ScrollableFeatureRow features={layout} />

			<p className="px-10">Advanced Concepts</p>
			<ScrollableFeatureRow features={advanced} />


		</div>
	)
}
