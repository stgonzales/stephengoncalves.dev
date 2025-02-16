'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const path = usePathname()

  return (
    <nav className="w-full">
      <ul className="flex justify-evenly items-center">
        <Link href={'/about-me'} className={`${path === '/about-me' && 'font-bold underline underline-offset-4'} px-5 md:px-0 py-3 text-center`}>
          <li>About me</li>
        </Link>
        <Link href={'/work-experience'} className={`${path === '/work-experience' && 'font-bold underline underline-offset-4'} px-5 md:px-0 py-3 text-center`}>
          <li>Work Experience</li>
        </Link>
        <Link href={'/projects'} className={`${path === '/projects' && 'font-bold underline underline-offset-4'} px-5 md:px-0 py-3 text-center`}>
          <li>Projects</li>
        </Link>
        <Link href={'/get-in-touch'} className={`${path === '/get-in-touch' && 'font-bold underline underline-offset-4'} px-5 md:px-0 py-3 text-center`}>
          <li>Get in touch</li>
        </Link>
        
      </ul>
    </nav>
  )
}