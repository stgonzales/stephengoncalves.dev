import Link from 'next/link'
import { Menu } from 'lucide-react'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto py-3 px-6 flex items-center justify-between md:py-4 md:px-9 lg:py-5 lg:px-10">
      <Link href={'/'}>
        <p className='text-xl font-bold'><span className='text-orange-500'>stephen</span>goncalves<span className='text-orange-500'>.</span>dev</p>
      </Link>
      <Navigation/>
      <Menu className='md:hidden stroke-orange-500 cursor-pointer' size={24} strokeWidth={2}/>
    </header>
  )
}