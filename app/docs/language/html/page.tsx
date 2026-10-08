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
  IconBug,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

/* ================= CORE ================= */
const core = [
  { title: 'Introduction', description: 'Standard markup language for creating webpages.', icon: <IconTerminal2 />, link: 'html/introduction' },
  { title: 'History of HTML', description: 'Created by Tim Berners-Lee in 1991.', icon: <IconTimeline />, link: 'html/history' },
  { title: 'Setup & Structure', description: 'DOCTYPE, html, head, body.', icon: <IconSettings />, link: 'html/setup-structure' },
  { title: 'Hello World Page', description: 'Your first HTML document.', icon: <IconFileCode />, link: 'html/hello-world' },
]

/* ================= SYNTAX ================= */
const syntax = [
  { title: 'HTML Tags', description: 'Elements & attributes.', icon: <IconCode />, link: 'html/tags' },
  { title: 'Headings & Paragraphs', description: 'h1-h6, p tags.', icon: <IconBlockquote />, link: 'html/headings-paragraphs' },
  { title: 'Lists (ul/ol)', description: 'Ordered & unordered lists.', icon: <IconListDetails />, link: 'html/lists' },
  { title: 'Links & Images', description: 'anchor, img, paths.', icon: <IconLink />, link: 'html/links-images' },
  { title: 'Tables', description: 'Tabular data.', icon: <IconLayoutGridAdd />, link: 'html/tables' },
  { title: 'Attributes', description: 'id, class, data-*.', icon: <IconAsterisk />, link: 'html/attributes' },
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
    <div className='bg-black p-10 py-32'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-20'
      >
        <div>
          <h1 className='text-3xl md:text-5xl max-w-5xl mx-auto font-extrabold text-[#e34c26] mb-4 flex items-center gap-3 '>
            <img
              src='/icons/langs/html.svg'
              alt='HTML Logo'
              className='w-10 h-10'
            />
            HTML Docs
          </h1>
          <div className='text-neutral-300 text-base md:text-lg flex-1'>
            HTML (HyperText Markup Language) is the standard markup language
            used to create and structure content on the web.
            <br />
            <br />
            <span className='text-neutral-400'>👨‍💻 Creator:</span> Tim
            Berners-Lee (
            <a
              target='_blank'
              href='https://github.com/timbl'
              className='text-neutral-500 hover:text-violet-500'
            >
              GitHub
            </a>
            )
            <br />
            <span className='text-neutral-400'>📘 Maintained By:</span> W3C &
            WHATWG
            <br />
            <span className='text-neutral-400'>🚀 Latest Standard:</span> HTML
            Living Standard
            <br />
            <br />
            <a
              target='_blank'
              href='https://github.com/whatwg/html'
              className='text-violet-500 hover:text-violet-400'
            >
              WHATWG Specification Repository
            </a>
            <br />
            <br />
            <p className=' text-neutral-400 flex items-center gap-2'>
              <span className='font-medium text-neutral-300'>
                OpenDocs Maintainer:
              </span>
              <a
                href='https://github.com/DarkmodeWorking'
                target='_blank'
                className='px-3 py-1 rounded-full bg-neutral-800 text-indigo-300 font-semibold
               hover:bg-neutral-700 transition'
              >
                @Anurag
              </a>
            </p>
          </div>
        </div>

        <div className='flex-shrink-0'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP1VTE1rZfjmTO4FlZGBH4ZVi3Xcj3xEhjvcFx-JXDi55JANdMKCKguOOa8M0yG775J_FfIy8NwMsTqH71GvHXuN7NLkBlmmQo6ICozvWu&s=10'
            alt='Tim Berners-Lee'
            className='w-90 h-90 rounded-full border-8 border-[#e34c26] object-cover'
          />
        </div>
      </motion.div>

      <br />
      <br />
      <br />
      <br />

      <p className='px-10'>Core Concepts</p>
      <ScrollableFeatureRow features={core} />

      <p className='px-10'>Elements & Syntax</p>
      <ScrollableFeatureRow features={syntax} />

      <p className='px-10'>Layout & Media</p>
      <ScrollableFeatureRow features={layout} />

      <p className='px-10'>Advanced Concepts</p>
      <ScrollableFeatureRow features={advanced} />

      <p className='px-10'>Accessibility</p>
      <ScrollableFeatureRow features={accessibility} />

      <p className='px-10'>Best Practices</p>
      <ScrollableFeatureRow features={bestPractices} />

      <p className='px-10'>Reference</p>
      <ScrollableFeatureRow features={reference} />
    </div>
  )
}
