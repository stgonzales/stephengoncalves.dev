import './globals.css'
import { Ubuntu } from 'next/font/google'
import { Header } from '@/components'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300','400','700'],
})

export const metadata = {
  title: 'Stephe Goncalves',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}, bg-zinc-900 flex flex-col gap-6`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
