import React from 'react'
import { Card } from '@/components/Card'

const sections = [
  {
    title: '',
    cards: [
      {
        title: 'Programming Languages',
        subtitle: 'Code logic using powerful languages',
        image: '/docs/languages.jpg',
        readMoreLink: '/docs/language'
      },
      {
        title: 'Website and Application Development',
        subtitle: 'Build modern tech applications',
        image: '/docs/development.webp',
        readMoreLink: '/docs/development'
      },
      {
        title: 'Software Tools',
        subtitle: 'Tools enhancing productivity and automation',
        image: '/docs/tools.jpg',
        readMoreLink: '/docs/tools'
      },
    ],
  },
  // {
  //   title: 'Technology Domains and Sectors',
  //   cards: [
  //     {
  //       title: 'Cloud Computing',
  //       subtitle: 'Deploy scalable services on cloud',
  //       image: '/docs/cloud.webp',
  //     },
  //     {
  //       title: 'Machine Learning',
  //       subtitle: 'Train models with meaningful data',
  //       image: '/docs/aiml.webp',
  //       readMoreLink: '/docs/aiml'
  //     },
  //     {
  //       title: 'Dev-Ops',
  //       subtitle: 'Streamline development and deployment pipelines',
  //       image: '/docs/devops.webp',
  //     },
  //     {
  //       title: 'Cybersecurity',
  //       subtitle: 'Protect systems from digital threats',
  //       image: '/docs/cyber.webp',
  //     },
  //   ],
  // },
  // {
  //   title: 'Other Technologies',
  //   cards: [
  //     {
  //       title: 'Web 3.0',
  //       subtitle: 'Decentralized future of the web',
  //       image: '/docs/web3.jpg',
  //     },
  //     {
  //       title: 'Internet of Things',
  //       subtitle: 'Smart devices communicating through internet',
  //       image: '/docs/iot.jpg',
  //       readMoreLink: '/docs/iot'
  //     }
  //   ],
  // },
  // {
  //   title: 'System Knowledge and Theory',
  //   cards: [
  //     {
  //       title: 'Operating Systems',
  //       subtitle: 'Foundation managing hardware and software',
  //       image: '/docs/os.jpg',
  //     },
  //     {
  //       title: 'Software Engineering',
  //       subtitle: 'Principles for building reliable software systems.',
  //       image: '/docs/system.png',
  //     },
  //     {
  //       title: 'Data Structures & Algorithms',
  //       subtitle: 'Master logic, speed, and code.',
  //       image: '/docs/cp.webp',
  //       readMoreLink: 'docs/dsa'
  //     }, {
  //       title: 'Computer Networks',
  //       subtitle: 'Learn protocols and data communication systems.',
  //       image: '/docs/net.jpg',
  //       readMoreLink: 'docs/net'
  //     },
  //     {
  //       title: 'Database Management',
  //       subtitle: 'Design and manage structured data efficiently.',
  //       image: '/docs/dbms.webp',
  //       readMoreLink: 'docs/db'
  //     },
  //     {
  //       title: 'Computer Graphics',
  //       subtitle: 'Understand visuals and rendering algorithms.',
  //       image: '/docs/ai.webp',
  //       readMoreLink: 'docs/graphics'
  //     },
  //     {
  //       title: 'Cryptography',
  //       subtitle: 'Secure data using encryption techniques.',
  //       image: '/docs/cys.avif',
  //       readMoreLink: 'docs/cryptography'
  //     },
  //     {
  //       title: 'Theoretical Computer Science',
  //       subtitle: 'Mathematical foundations behind computation',
  //       image: '/docs/theory.jpg',
  //     },
  //     {
  //       title: 'Artificial Intelligence',
  //       subtitle: 'Study logic, reasoning, and learning principles.',
  //       image: '/docs/ait.jpg',
  //     },
  //     {
  //       title: 'Computer Architecture',
  //       subtitle: 'Study processors, memory, and instruction design.',
  //       image: '/docs/arc.jpg',
  //     },
  //   ],
  // },
]

const page = () => {
  return (
    <div className='pt-32 px-10 md:px-20 bg-black pb-16'>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <p className='text-neutral-500 py-10'>{section.title}</p>
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
            {section.cards.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                readMoreLink={card.readMoreLink}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default page
