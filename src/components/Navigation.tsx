'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const path = usePathname()

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-24">
        <Link href={'/'} className=''>
          <li className={`${path === '/' ? 'text-orange-500' : ''}`}>me</li>
          { path === '/' && <div className="h-[2px] bg-orange-500"></div>}
        </Link>
        <Link href={'/projects'}>
          <li className={`${path === '/projects' ? 'text-orange-500' : ''}`}>projects</li>
          { path === '/projects' && <div className="h-[2px] bg-orange-500"></div>}
        </Link>
        <Link href={'/experience'}>
          <li className={`${path === '/experience' ? 'text-orange-500' : ''}`}>experience</li>
          { path === '/experience' && <div className="h-[2px] bg-orange-500"></div>}
        </Link>
        <Link href={'/contact'}>
          <li className={`${path === '/contact' ? 'text-orange-500' : ''}`}>contact</li>
          { path === '/contact' && <div className="h-[2px] bg-orange-500"></div>}
        </Link>
      </ul>
    </nav>
  )
}