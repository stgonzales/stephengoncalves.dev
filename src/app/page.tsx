import Image from 'next/image'
import Link from 'next/link'
import { Github, Mail, Linkedin } from 'lucide-react'
import { TLDR } from '@/components'

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto py-3 px-6 flex flex-col items-center md:items-start lg:flex-row md:gap-7 lg:gap-8">
      <div className='flex flex-col items-center gap-6 md:gap-7 lg:gap-8 lg:items-start flex-1'>
        <div id='heading'>
          <h1>Stephen Goncalves</h1>
          <h3 className='text-orange-500'>Front-end Developer</h3>
        </div>
        <div id='social-media' className='flex gap-5'>
          <Link href={'https://github.com/stgonzales'} target='_blank'>
            <Github className='stroke-orange-500' size={24} strokeWidth={2}/>
          </Link>
          <Link href={'https://www.linkedin.com/in/stephgoncalves'} target='_blank'>
          <Linkedin className='stroke-orange-500' size={24} strokeWidth={2}/>
          </Link>
          <Link href={'mailto:stephengoncalves.dev@gmail.com'} target='_blank'>
            <Mail className='stroke-orange-500' size={24} strokeWidth={2}/>
          </Link>
        </div>
        <div className='flex flex-col gap-6'>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <TLDR/>
        </div>
      </div>
      <div className='hidden md:block relative w-[440px] h-[643px]'>
        <Image src={'/assets/me.png'} alt='Stephen Goncalves Illustration' fill/>
      </div>
    </main>
  )
}
