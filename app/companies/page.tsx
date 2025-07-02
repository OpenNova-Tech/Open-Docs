"use client"

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function page() {
  const service = [
  {
    title: "Accenture",
    description: "Global consulting and IT services leader known for digital transformation, cloud, and AI solutions.",
    link: "/companies/accenture",
    iconSrc: "icons/bloc/accenture.svg"
  },
  {
    title: "Capgemini",
    description: "French multinational providing consulting, technology, and outsourcing services across various sectors.",
    link: "/companies/capgemini",
    iconSrc: "icons/bloc/capgemini.svg"
  },
  {
    title: "Cognizant",
    description: "American IT services and consulting firm specializing in digital transformation and business operations.",
    link: "/companies/cognizant",
    iconSrc: "icons/bloc/cognizant.svg"
  },
  {
    title: "DXC Technologies",
    description: "Global IT services company offering enterprise tech, cloud, and application services.",
    link: "/language/f",
    iconSrc: "icons/bloc/dxc.svg"
  },
  {
    title: "EPAM Systems",
    description: "Engineering-focused IT service provider known for product development and digital platform engineering.",
    link: "/language/f",
    iconSrc: "icons/bloc/epam.svg"
  },
  {
    title: "HCLTech",
    description: "Indian multinational offering IT and engineering services with a strong focus on digital and cloud.",
    link: "/language/f",
    iconSrc: "icons/bloc/hcl.svg"
  },
  {
    title: "IBM",
    description: "Legacy tech giant offering IT infrastructure, consulting, and hybrid cloud services worldwide.",
    link: "/language/f",
    iconSrc: "icons/bloc/ibm.svg"
  },
  {
    title: "Infosys",
    description: "Global leader in next-gen digital services and consulting with strong presence in BFSI and retail.",
    link: "/language/f",
    iconSrc: "icons/bloc/infosys.svg"
  },
  {
    title: "LTI Mindtree",
    description: "Merged Indian IT firm delivering digital transformation and cloud solutions to global enterprises.",
    link: "/language/f",
    iconSrc: "icons/bloc/LTIM.svg"
  },
  {
    title: "TCS",
    description: "India’s largest IT services firm specializing in consulting, software, and business solutions.",
    link: "/language/j",
    iconSrc: "icons/bloc/tcs.svg"
  },
  {
    title: "Tech Mahindra",
    description: "IT and BPO services provider with strengths in telecom, digital engineering, and AI services.",
    link: "/language/j",
    iconSrc: "icons/bloc/mahindra.svg"
  },
  {
    title: "Wipro",
    description: "IT, consulting, and business process services firm focusing on cloud, cybersecurity, and AI.",
    link: "/language/j",
    iconSrc: "icons/bloc/wipro.svg"
  },
];

  return (
    <div className="max-w-5xl mt-20 mx-auto px-8 py-12">
      Service Based MNC
      <HoverEffect items={service} />
    </div>
  );
}
