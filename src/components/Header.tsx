import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full mx-auto py-3 px-6 flex items-center justify-between md:py-4 md:px-9 lg:py-5 lg:px-10">
      <p className='text-xl font-bold'><span className='text-orange-500'>stephen</span>goncalves<span className='text-orange-500'>.</span>dev</p>
      <nav className="hidden md:block">
        <ul className="flex">
          <Link href={'/'}>
            <li className="">me</li>
          </Link>
          <Link href={'/'}>
            <li className="">projects</li>
          </Link>
          <Link href={'/'}>
            <li className="">experience</li>
          </Link>
          <Link href={'/'}>
            <li className="">contact</li>
          </Link>
        </ul>
      </nav>
      <Menu className='md:hidden stroke-orange-500 cursor-pointer' size={24} strokeWidth={1}/>
    </header>
  )
}