import { Github, RadioTower } from "lucide-react";
import Link from "next/link";

export default async function Projects() {
  const result = await fetch('https://api.github.com/users/stgonzales/starred').then(res => res.json()).then(data => data.filter((repo: any) => repo.owner.login === 'stgonzales')) as Card[];

  console.log(result);
  
  return (
    <main className="w-full max-w-7xl mx-auto mt-16 md:mt-64 lg:mt-44 px-6 md:px-20 lg:px-16 xl:px-0 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <h1>Projects</h1>
        <Link href='https://github.com/stgonzales' target="_blank" className="flex items-center gap-1 text-orange-500">
          <Github className="stroke-orange-500"/>
          {/* <h3>@stgonzales</h3> */}
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
  html_url: string;
}

function Card({ name, description, homepage,topics, language, html_url }: Card) {
  return (
    <Link href={html_url} className="w-full min-w-[327px] max-w-2xl border border-slate-300 shadow rounded-lg py-3 px-3 flex flex-col gap-3 hover:scale-105 transition-transform">
      <div>
        <p className="font-bold text-orange-500">{name}</p>
        <p className="text-xs">Description: <span className="font-light text-sm italic">{description}</span></p>
      </div>
      <p className="text-xs font-normal">Language: <span className="font-light">{language}</span></p>
      {/* Pills */}
      <div className="flex gap-1 flex-wrap">
        <p className="text-xs">Tags:</p>
        {topics.map(topic => <span key={topic} className="px-2 font-semibold bg-slate-200 text-orange-400 text-xs rounded-full">{topic}</span>)}
      </div>
      <Link href={homepage} target="_blank" className="px-4 py-2 rounded-xl border border-orange-500 shadow w-fit">
        <div className="flex gap-2 items-center">
          <RadioTower className='stroke-orange-500' size={16} strokeWidth={2}/>
          <p className="italic text-xs font-medium">Live!</p>
        </div>
      </Link>
    </Link>
  )
}