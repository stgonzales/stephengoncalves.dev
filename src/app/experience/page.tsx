import { Linkedin } from "lucide-react";
import Link from "next/link";

export type Experience = {
  company: string;
  role: string;
  start: string;
  end?: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: 'Gigaclear',
    role: 'Web Developer',
    start: 'may 2021',
    description: [
      'Participate and help with requirement definitions for new features and web applications.',
      'Designed web pages to enhance branding and navigation.',
      'Optimized HTML email templates to improve click-through and conversion rates.',
      'Enhanced front-end performance through image optimization and clean coding practices, accelerating load times.',
      'Delivered front and back-end development across mobile and web applications.'
    ]
  },
  {
    company: 'GPRDigital',
    role: 'Support Analyst',
    start: 'jun 2018',
    end: 'oct 2018',
    description: [
      'Analyzed, solved and corrected SQL Server issues in real-time, providing end-to-end problem resolution.',
      'Executed new software to assist with strategic decisions.',
      'Generated reports from extracted data for analyses.'
    ]
  },
  {
    company: 'Elitesoft',
    role: 'Support Analyst',
    start: 'oct 2014',
    end: 'may 2016',
    description: [
      'Reported incidents, risks and hazards by following set procedures.',
      'Communicated technical concepts to customers clearly by phone, email and online chat.',
      'Gave first-line support to customers within the agreed Service Line Agreement (SLA).'
    ]
  },
  {
    company: 'GPRDigital',
    role: 'Technical Support',
    start: 'apr 2012',
    end: 'jun 2014',
    description: [
      'Responded to incidents on-site, providing precise time estimations and managing customer expectations.',
      'Configured and maintained internal lab servers, workstations and group policies for smooth operations.'
    ]
  }
]

export default function Experiences() {
  return (
    <main className="w-full max-w-7xl mx-auto mt-6 mb-16 md:mt-8 md:mb-32 lg:mt-10 px-6 md:px-20 lg:px-16 xl:px-0 flex flex-col items-center gap-4 md:gap-6 lg:gap-12">
      <div className="flex flex-col items-center gap-4">
        <h1>Experience</h1>
        <Link href='https://www.linkedin.com/in/stephgoncalves' target="_blank" className="flex items-center gap-1 text-orange-500">
          <Linkedin className="stroke-orange-500"/>
        </Link>
      </div>
      <div className="w-full flex flex-col gap-6">
        {experiences.map((experience, index) => <Experience key={index} {...experience}/>)}
      </div>
    </main>
  )
}

function Experience(experience: Experience) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-1">
          <h2 className="text-lg font-medium">{experience.company}</h2>
          <p className="text-lg">-</p>
          <p className="text-lg italic text-orange-500">{experience.role}</p>
        </div>
        <div className="flex items-center gap-1 border max-w-fit border-slate-400 bg-slate-200 px-1 rounded-sm">
          <p className="text-sm font-medium">{experience.start}</p>
          <p className="text-sm font-medium">-</p>
          <p className="text-sm font-medium">{experience.end || 'present'}</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-start">
        {experience.description.map((description, index) => <li key={index} className="text-base">{description}</li>)}
      </ul>
    </div>
  )
}