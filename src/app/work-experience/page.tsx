import { ReadMore } from "@/components";

export type Experience = {
  company: string;
  role: string;
  start: string;
  location: string;
  end?: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: 'Motorpoint',
    role: 'Software Engineer',
    start: 'July 2024',
    location: 'Derby, UK',
    description: [
      'Help improve and simplify the car-buying process to enhance the customer experience. I prioritize application speed and responsiveness, optimizing performance down to milliseconds.',
      'Manage and enhance large-scale applications capable of handling up to 500,000 requests per second.',
      'Contribute to building and supporting high-traffic, customer-focused applications, ensuring reliability even under heavy loads.',
      'Use a stack that includes TypeScript, JavaScript, Next.js, React, CSS, and Sass.',
      'Leverage cloud providers like AWS or Azure and use tools like Git to support development.',
    ]
  },
  {
    company: 'Gigaclear',
    role: 'Software Engineer',
    start: 'June 2023',
    end: 'July 2024',
    location: 'Abingdon, UK',
    description: [
      'Acted as Scrum Master, facilitating team alignment and sprint planning to keep projects on track.',
      'Communicated complex technical concepts to users with varying technical backgrounds, ensuring accessibility and understanding.',
      'Built strong relationships with end-users, fostering a user-focused approach and enhancing product adoption and satisfaction.',
    ]
  },
  {
    company: 'Gigaclear',
    role: 'Web Developer',
    start: 'May 2021',
    end: 'June 2023',
    location: 'Abingdon, UK',
    description: [
      'Defined and documented requirements for new features and web applications, contributing to product innovation and clarity.',
      'Developed and maintained applications using Vue.js, Node.js, Next.js, and Strapi CMS, enhancing efficiency and performance.',
      'Operated and supported web applications to ensure consistent functionality, reliability, and user satisfaction.',
      'Collaborated with DevOps teams to streamline deployments on AWS, creating robust and scalable applications.',
    ]
  },
  {
    company: 'GPRDigital',
    role: 'Support Analyst',
    start: 'June 2018',
    end: 'October 2018',
    location: 'Londrina, BR',
    description: [
      'Analyzed, solved and corrected SQL Server issues in real-time, providing end-to-end problem resolution.',
      'Executed new software to assist with strategic decisions.',
      'Generated reports from extracted data for analyses.'
    ]
  },
  {
    company: 'Elitesoft',
    role: 'Support Analyst',
    start: 'October 2014',
    end: 'May 2016',
    location: 'Londrina, BR',
    description: [
      'Reported incidents, risks and hazards by following set procedures.',
      'Communicated technical concepts to customers clearly by phone, email and online chat.',
      'Gave first-line support to customers within the agreed Service Line Agreement (SLA).'
    ]
  },
  {
    company: 'GPRDigital',
    role: 'Technical Support',
    start: 'April 2012',
    end: 'June 2014',
    location: 'Londrina, BR',
    description: [
      'Responded to incidents on-site, providing precise time estimations and managing customer expectations.',
      'Configured and maintained internal lab servers, workstations and group policies for smooth operations.'
    ]
  }
]

export default function Experiences() {
  const [ first, second, third, ...olders ] = experiences

  return (
    <main className="w-full flex flex-col items-center gap-4 md:gap-6 lg:gap-12">
      <div className="flex flex-col gap-6">
        <Experience {...first}/>
        <Experience {...second}/>
        <Experience {...third}/>
        <ReadMore text="Older experiences">
          {olders.map((experience, index) => <Experience key={index} {...experience}/>)}
        </ReadMore>
      </div>
    </main>
  )
}

function Experience(experience: Experience) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-1 font-bold flex-wrap">
          <p className="">{experience.role}</p>
          <p>|</p>
          <p className="font-medium">{experience.company}</p>
          <p>|</p>
          <p>{experience.location}</p>
          <p>|</p>
          <p>{`${experience.start} - ${experience.end || 'Present'}`}</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-start">
        {experience.description.map((description, index) => <li key={index} className="text-base">{description}</li>)}
      </ul>
      <div className='w-[50px] h-px bg-white rounded-full'></div>
    </div>
  )
}