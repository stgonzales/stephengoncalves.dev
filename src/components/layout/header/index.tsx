import Navigation from './navigation'
import { SocialMedia } from './social-media'

export function Header() {
  return (
    <header className="w-full">
      <div className='flex flex-col items-center gap-3'>
        <div className='text-2xl md:flex md:gap-3 md:justify-center md:items-center'>
          <h1 className='text-center'>Stephen Goncalves</h1>
          <span className='hidden md:block'>-</span>
          <h2 className='font-bold'>Software Engineer</h2>
        </div>
        <SocialMedia/>
        <div className='w-full h-px bg-white rounded-full'></div>
      </div>
      <Navigation />
    </header>
  )
}