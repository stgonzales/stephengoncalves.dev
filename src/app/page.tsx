import { useState } from 'react'
import { ChevronDown, Github, Globe, Linkedin } from 'lucide-react'
import { TLDR } from '@/components'

export default function Home() {
  return (
    <main className="w-full mx-auto py-3 px-6 flex flex-col items-center gap-6 md:gap-7 lg:gap-8 lg:items-start">
      <div id='heading'>
        <h1>Stephen Goncalves</h1>
        <h3>Front-end Developer</h3>
      </div>
      <div id='social-media' className='flex gap-5'>
        <Github className='stroke-orange-500' size={24} strokeWidth={1}/>
        <Linkedin className='stroke-orange-500' size={24} strokeWidth={1}/>
        <Globe className='stroke-orange-500' size={24} strokeWidth={1}/>
      </div>
      <div className='flex flex-col gap-6'>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <TLDR/>
      </div>
    </main>
  )
}
