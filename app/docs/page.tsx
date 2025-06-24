import React from "react";
import { Card } from '@/components/Card';

const sections = [
  {
    title: "Languages, Libraries, Frameworks and Software Tools",
    cards: [
      {
        title: "Programming Languages",
        subtitle: "Code logic using powerful languages",
        image: "/languages.webp",
        readMoreLink: "/language"
      },
      {
        title: "Website and Application Development",
        subtitle: "Build modern web-based applications",
        image: "/development.webp",
        readMoreLink: "/development"
      },
      {
        title: "Software Tools",
        subtitle: "Tools enhancing productivity and automation",
        image: "/languages.webp",
      },
    ],
  },
  {
    title: "Technology Domains and Sectors",
    cards: [
      {
        title: "Cloud Computing",
        subtitle: "Deploy scalable services on cloud",
        image: "/development.webp",
      },
      {
        title: "Machine Learning",
        subtitle: "Train models with meaningful data",
        image: "/languages.webp",
        readMoreLink: "/aiml"
      },
      {
        title: "Dev-Ops",
        subtitle: "Streamline development and deployment pipelines",
        image: "/development.webp",
      },
      {
        title: "Cybersecurity",
        subtitle: "Protect systems from digital threats",
        image: "/languages.webp",
      },
    ],
  },
  {
    title: "Other Technologies",
    cards: [
      {
        title: "Web 3.0",
        subtitle: "Decentralized future of the web",
        image: "/languages.webp",
      },
      {
        title: "Internet of Things",
        subtitle: "Smart devices communicating through internet",
        image: "/development.webp",
      },
      {
        title: "Competitive Programming",
        subtitle: "Solve algorithmic challenges under pressure",
        image: "/languages.webp",
        readMoreLink: "/cp"
      },
    ],
  },
  {
    title: "System Knowledge and Theory",
    cards: [
      {
        title: "Operating Systems",
        subtitle: "Foundation managing hardware and software",
        image: "/development.webp",
      },
      {
        title: "System Design",
        subtitle: "Design scalable and maintainable architecture",
        image: "/languages.webp",
      },
      {
        title: "Theoretical Computer Science",
        subtitle: "Mathematical foundations behind computation",
        image: "/development.webp",
      },
    ],
  },
];



const page = () => {
  return (
  <div className="pt-32 px-20 bg-black pb-16">
    {sections.map((section, sectionIndex) => (
      <div key={sectionIndex}>
        <p className="text-neutral-500 py-10">{section.title}</p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
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
);

}



export default page