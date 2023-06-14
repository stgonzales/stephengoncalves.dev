import Link from 'next/link'
import { Menu } from 'lucide-react'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:px-20 lg:px-16 xl:px-0">
      <Link href={'/'}>
        <p className='text-2xl font-bold'><span className='text-orange-500'>stephen</span>goncalves<span className='text-orange-500'>.</span>dev</p>
      </Link>
      <Navigation/>
      <Menu className='lg:hidden stroke-orange-500 cursor-pointer' size={32} strokeWidth={2}/>
    </header>
  )
}