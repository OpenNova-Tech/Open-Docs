'use client'

import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect'

export default function page() {
  const version = [
    {
      title: 'Git',
      description: 'Distributed version control system for managing code efficiently.',
      link: '/tool/git',
      iconSrc: 'icons/tools/git.svg'
    },
  ]

  const testing = [
    {
      title: 'Jest',
      description: 'Delightful JavaScript testing framework with a focus on simplicity.',
      link: '/tool/jest',
      iconSrc: 'icons/tools/jest.svg'
    },
    {
      title: 'Selenium',
      description: 'Automates web browsers for testing across multiple platforms.',
      link: '/tool/selenium',
      iconSrc: 'icons/tools/selenium.svg'
    },
    {
      title: 'JUnit',
      description: 'Widely used testing framework for Java-based applications.',
      link: '/tool/junit5',
      iconSrc: 'icons/tools/junit5.svg'
    },
    {
      title: 'Cypress',
      description: 'Fast, easy, and reliable testing for web applications.',
      link: '/tool/cypress',
      iconSrc: 'icons/tools/cypress.svg'
    },
  ]

  const design = [
    {
      title: 'Figma',
      description: 'Collaborative interface design tool for teams and individuals.',
      link: '/tool/figma',
      iconSrc: 'icons/tools/figma.svg'
    },
    {
      title: 'Sketch',
      description: 'Vector-based design tool for macOS used by professionals.',
      link: '/tool/sketch',
      iconSrc: 'icons/tools/sketch.svg'
    },
  ]

  const project = [
    {
      title: 'Notion',
      description: 'All-in-one workspace for notes, tasks, and collaboration.',
      link: '/tool/notion',
      iconSrc: 'icons/tools/notion.svg'
    },
    {
      title: 'Jira',
      description: 'Agile project management tool for tracking issues and tasks.',
      link: '/tool/jira',
      iconSrc: 'icons/tools/jira.svg'
    },
  ]

  return (
    <div className='bg-black pt-20'>
      <div className='max-w-5xl mx-auto px-8 py-12'>
        <p className="text-white text-xl font-semibold mb-4">Version Controls</p>
        <HoverEffect items={version} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Testing Tools</p>
        <HoverEffect items={testing} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Design and Prototyping</p>
        <HoverEffect items={design} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Project and Documentation</p>
        <HoverEffect items={project} />
      </div>
    </div>
  )
}
