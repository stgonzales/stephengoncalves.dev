import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/layout/footer"
import "./globals.css"
import { cms } from "@/lib/data"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export async function generateMetadata() {
  const metadata = await cms.findGlobal({
    slug: 'metadata',
    depth: 2,
  })

  return metadata.seo
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-background`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
