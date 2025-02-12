import { Construction, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default async function Projects() {
  const result = await fetch('https://api.github.com/users/stgonzales/starred').then(res => res.json()).then(data => data.filter((repo: any) => repo.owner.login === 'stgonzales')) as Card[];
  
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        {result.map(repo => <Card key={repo.name} {...repo} />)}
      </div>
    </main>
  )
}

type Card = {
  name: string;
  description: string;
  topics: string[];
  homepage: string;
  language: string;
  html_url: string;
}

function Card({ name, description, homepage,topics, language, html_url }: Card) {
  return (
    <div className="w-full flex flex-col justify-start gap-5">
      <div className="flex justify-between gap-3">
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm">{description}</p>
          </div>
          <div className="flex gap-3 flex-wrap text-sm">
            {topics.map(topic => <span key={topic} className="">{topic}</span>)}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <Link href={html_url} target="_blank">
            <div className="flex gap-2 items-center">
              <p className="text-sm">Repository</p>
              <SquareArrowOutUpRight size={12} />
            </div>
          </Link>
          <Link href={homepage} target="_blank">
            <div className="flex gap-2 items-center">
              <p className="text-sm">Live Demo</p>
              <SquareArrowOutUpRight size={12} />
            </div>
          </Link>
        </div>
      </div>
      <div className='w-[50px] h-[1px] bg-white rounded-full'></div>
    </div>
  )
}