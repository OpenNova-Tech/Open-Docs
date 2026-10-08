import React from 'react'
import { Card } from '@/components/Card'

const sections = [
  {
    title: 'System Knowledge and Theory',
    cards: [
      {
        title: 'Operating Systems',
        subtitle: 'Foundation managing hardware and software',
        image: '/docs/os.jpg',
      },
      {
        title: 'Software Engineering',
        subtitle: 'Principles for building reliable software systems.',
        image: '/docs/system.png',
      },
      {
        title: 'Data Structures & Algorithms',
        subtitle: 'Master logic, speed, and code.',
        image: '/docs/cp.webp',
        readMoreLink: 'theory/dsa'
      }, 
      {
        title: 'Computer Networks',
        subtitle: 'Learn protocols and data communication systems.',
        image: '/docs/net.jpg',
        readMoreLink: 'theory/computer-networks'
      },
      {
        title: 'Database Management',
        subtitle: 'Design and manage structured data efficiently.',
        image: '/docs/dbms.webp',
        readMoreLink: 'docs/db'
      },
      {
        title: 'Computer Graphics',
        subtitle: 'Understand visuals and rendering algorithms.',
        image: '/docs/ai.webp',
        readMoreLink: 'docs/graphics'
      },
      {
        title: 'Cryptography',
        subtitle: 'Secure data using encryption techniques.',
        image: '/docs/cys.avif',
        readMoreLink: 'docs/cryptography'
      },
      {
        title: 'Theoretical Computer Science',
        subtitle: 'Mathematical foundations behind computation',
        image: '/docs/theory.jpg',
      },
      {
        title: 'Artificial Intelligence',
        subtitle: 'Study logic, reasoning, and learning principles.',
        image: '/docs/ait.jpg',
      },
      {
        title: 'Computer Architecture',
        subtitle: 'Study processors, memory, and instruction design.',
        image: '/docs/arc.jpg',
      },
      {
        title: 'Computing Infrastructure',
        subtitle: 'Cloud, servers, and system platforms',
        image: '/docs/infra.jpg',
      },
      {
        title: 'Simulation and Modelling',
        subtitle: 'Modeling and testing real systems',
        image: '/docs/sims.jpg',
      },
    ],
  },
  {
    title: 'Ethical Knowledge and Cyber Law',
    cards: [
      {
        title: 'Human & Social Aspects',
        subtitle: 'Technology, people, and society',
        image: '/docs/hci.jpg',
      }
    ],
  },
]

const page = () => {
  return (
    <div className="pt-32 px-10 md:px-20 bg-black pb-16">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <p className="py-10 text-xl font-semibold">
                {section.title}
              </p>
    
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
