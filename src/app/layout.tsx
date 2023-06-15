import './globals.css'
import { Ubuntu } from 'next/font/google'
import { Header, Footer } from '@/components'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300','400','500','700'],
})

export const metadata = {
  title: 'Stephen Goncalves',
  description: 'Here you can find out more about me, my work and my thoughts - kind of.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}, bg-slate-100 flex flex-col gap-12 md:gap-14 lg:gap-16`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
