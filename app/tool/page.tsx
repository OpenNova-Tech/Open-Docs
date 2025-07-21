'use client'

import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect'

export default function page() {
  const version = [
    {
      title: 'Git',
      description: '',
      link: '/tool/git',
      iconSrc: 'icons/tools/git.svg'
    },
  ]

  const testing = [
    {
        title: 'Jest',
        description: '',
        link: '/tool/jest',
        iconSrc: 'icons/tools/jest.svg'
    },
    {
        title: 'Selenium',
        description: '',
        link: '/tool/selenium',
        iconSrc: 'icons/tools/selenium.svg'
    },
    {
        title: 'JUnit',
        description: '',
        link: '/tool/junit5',
        iconSrc: 'icons/tools/junit5.svg'
    },
    {
        title: 'Cypress',
        description: '',
        link: '/tool/cypress',
        iconSrc: 'icons/tools/cypress.svg'
    },
  ]

  const design = [
    {
      title: 'Figma',
      description: '',
      link: '/tool/figma',
      iconSrc: 'icons/tools/figma.svg'
    },
    {
      title: 'Sketch',
      description: '',
      link: '/tool/sketch',
      iconSrc: 'icons/tools/sketch.svg'
    },
  ]

  const project = [
    {
      title: 'Notion',
      description: '',
      link: '/tool/notion',
      iconSrc: 'icons/tools/notion.svg'
    },
    {
      title: 'Jira',
      description: '',
      link: '/tool/jira',
      iconSrc: 'icons/tools/jira.svg'
    },
  ]

  return (
    <div className='bg-black pt-20'>
        <div className='max-w-5xl mx-auto px-8 py-12'>
            Version Controls
            <HoverEffect items={version} />
            Testing Tools
            <HoverEffect items={testing} />
            Design and Prototyping
            <HoverEffect items={design} />
            Project and Documentation 
            <HoverEffect items={project} />
        </div>
    </div>
  )
}
