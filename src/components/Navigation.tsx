'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const path = usePathname()

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-24 font-medium text-lg">
        <Link href={'/me'} className={`${path === '/me' ? 'text-orange-500 font-bold' : 'hover:text-orange-900'}`}>
          <li>me</li>
          { path === '/me' && <div className="h-[0.190rem] rounded-sm bg-orange-500"></div>}
        </Link>
        <Link href={'/projects'} className={`${path === '/projects' ? 'text-orange-500 font-bold' : 'hover:text-orange-900'}`}>
          <li>projects</li>
          { path === '/projects' && <div className="h-[0.190rem] rounded-sm bg-orange-500"></div>}
        </Link>
        <Link href={'/experience'} className={`${path === '/experience' ? 'text-orange-500 font-bold' : 'hover:text-orange-900'}`}>
          <li>experience</li>
          { path === '/experience' && <div className="h-[0.190rem] rounded-sm bg-orange-500"></div>}
        </Link>
        <Link href={'/contact'} className={`${path === '/contact' ? 'text-orange-500 font-bold' : 'hover:text-orange-900'}`}>
          <li>contact</li>
          { path === '/contact' && <div className="h-[0.190rem] rounded-sm bg-orange-500"></div>}
        </Link>
      </ul>
    </nav>
  )
}