import { Github, RadioTower } from "lucide-react";
import Link from "next/link";

export default async function Projects() {
  const result = await fetch('https://api.github.com/users/stgonzales/starred').then(res => res.json()).then(data => data.filter((repo: any) => repo.owner.login === 'stgonzales')) as Card[];

  console.log(result);
  
  return (
    <main className="w-full max-w-7xl mx-auto py-3 px-6 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <h1>Projects</h1>
        <Link href='https://github.com/stgonzales' className="flex items-center gap-1 text-orange-500">
          <Github className="stroke-orange-500"/>
          <h3>@stgonzales</h3>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center flex-wrap gap-3 md:flex-row">
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
}

function Card({ name, description, homepage,topics, language }: Card) {
  return (
    <div className="w-full max-w-[327px] min-w-[327px] border border-zinc-300 rounded-lg py-3 px-3 flex flex-col gap-3">
      <div>
        <p className="font-bold text-orange-500">{name}</p>
        <p className="font-light text-sm italic">{description}</p>
      </div>
      <p className="text-xs">{language}</p>
      <div className="flex gap-1 flex-wrap">
        {topics.map(topic => <span key={topic} className="px-2 font-semibold bg-zinc-300 text-orange-800 text-xs rounded-full">{topic}</span>)}
      </div>
      <Link href={homepage}>
        <div className="flex gap-2 items-center">
          <RadioTower className='stroke-orange-500' size={16} strokeWidth={2}/>
          <p className="italic text-sm">Live!</p>
        </div>
      </Link>
    </div>
  )
}