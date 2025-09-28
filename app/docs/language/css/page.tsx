'use client'

import {
	IconPalette,
	IconSettings,
	IconTypography,
	IconBrush,
	IconLayout,
	IconAlignBoxCenterMiddle,
	IconBoxPadding,
	IconSpacingVertical,
	IconBorderStyle2,
	IconArrowsMaximize,
	IconArrowsMove,
	IconColorSwatch,
	IconLayersSubtract,
	IconListCheck,
	IconTransform,
	IconTransitionRight,
	IconWaveSawTool,
	IconCode,
	IconRefresh,
	IconCircleCheck,
	IconTimeline,
} from '@tabler/icons-react'

import { ScrollableFeatureRow } from '@/components/ScrollableRow'

const core = [
	{ title: 'What is CSS', description: 'Style sheet language for designing web content.', icon: <IconPalette />, link: 'css/1' },
	{ title: 'History of CSS', description: 'Introduced in 1996 to separate structure and style.', icon: <IconTimeline />, link: 'css/2' },
	{ title: 'Ways to Add CSS', description: 'Inline, Internal, and External methods.', icon: <IconSettings />, link: 'css/3' },
	{ title: 'CSS Syntax', description: 'Selectors, properties, values and how rules are formed.', icon: <IconCode />, link: 'css/4' }
]

const selectors = [
	{ title: 'Selectors', description: 'Target elements using tag, class, ID, attribute, etc.', icon: <IconListCheck />, link: 'css/5' },
	{ title: 'Colors & Units', description: 'Hex, RGB, HSL, rem, em, %, px, etc.', icon: <IconColorSwatch />, link: 'css/6' },
	{ title: 'Typography', description: 'Fonts, sizes, weights, spacing & text decoration.', icon: <IconTypography />, link: 'css/7' },
	{ title: 'Box Model', description: 'Content, padding, border, and margin areas.', icon: <IconBoxPadding />, link: 'css/8' },
	{ title: 'Positioning', description: 'static, relative, absolute, fixed, sticky.', icon: <IconArrowsMove />, link: 'css/9' },
	{ title: 'Display & Visibility', description: 'block, inline, flex, grid, none.', icon: <IconLayersSubtract />, link: 'css/10' },
]

const layout = [
	{ title: 'Flexbox', description: 'One-dimensional layout control.', icon: <IconAlignBoxCenterMiddle />, link: 'css/11' },
	{ title: 'CSS Grid', description: 'Two-dimensional layout system.', icon: <IconLayout />, link: 'css/12' },
	{ title: 'Spacing & Sizing', description: 'margin, padding, width, height, etc.', icon: <IconSpacingVertical />, link: 'css/13' },
	{ title: 'Borders & Shadows', description: 'Style elements with borders, radius, box-shadow.', icon: <IconBorderStyle2 />, link: 'css/14' },
	{ title: 'Backgrounds', description: 'Colors, images, gradients, and their properties.', icon: <IconBrush />, link: 'css/15' }
]

const advanced = [
	{ title: 'Transitions', description: 'Animate CSS property changes over time.', icon: <IconTransitionRight />, link: 'css/16' },
	{ title: 'Transforms', description: 'Rotate, scale, skew, translate elements.', icon: <IconTransform />, link: 'css/17' },
	{ title: 'Animations', description: 'Keyframes and advanced UI motion.', icon: <IconWaveSawTool />, link: 'css/18' },
	{ title: 'Media Queries', description: 'Responsive designs for various screen sizes.', icon: <IconArrowsMaximize />, link: 'css/19' },
	{ title: 'Custom Properties (Variables)', description: 'Reusable values using `--var` syntax.', icon: <IconRefresh />, link: 'css/20' },
	{ title: 'Best Practices', description: 'Organizing, resetting, and maintaining CSS.', icon: <IconCircleCheck />, link: 'css/21' }
]

export default function page() {
	return (
		<div className='bg-black p-10 py-32'>
			<h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#663399] mb-4 flex items-center gap-3'>
				<img src="/icons/langs/css.svg" alt="CSS Logo" className="w-10 h-10" />
				&nbsp;CSS Docs
			</h1>
			<p className='text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
				CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of HTML documents.
				<br /><br />
				Creator: Håkon Wium Lie <a target='_blank' href='https://github.com/' className='text-neutral-500'>Profile</a>
				<br />
				<a target='_blank' href='https://github.com/w3c/csswg-drafts' className='text-violet-500'>W3C Spec Repo</a>
			</p>


			<p className="px-10">Core Concepts</p>
			<ScrollableFeatureRow features={core} />

			<p className="px-10">Selectors & Properties</p>
			<ScrollableFeatureRow features={selectors} />

			<p className="px-10">Layout & Visual Design</p>
			<ScrollableFeatureRow features={layout} />

			<p className="px-10">Advanced CSS</p>
			<ScrollableFeatureRow features={advanced} />


		</div>
	)
}
