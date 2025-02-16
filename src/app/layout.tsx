import './globals.css'
import { Ubuntu } from 'next/font/google'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '700'],
})

export const metadata = {
  title: 'Stephen Goncalves',
  description: 'Here you can find out more about me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}, bg-black px-5 flex justify-center`}>
        <div className='max-w-[452px] md:max-w-[640px] flex flex-col gap-5 py-44'>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
