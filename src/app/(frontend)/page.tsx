import { AnimatedBlobs } from "@/components/animated/background"
import { Header } from "@/components/layout/header"
import { AboutMe } from "@/components/layout/sections/about-me"
import { Experience } from "@/components/layout/sections/experience"
import { Education } from "@/components/layout/sections/education"
import { Skills } from "@/components/layout/sections/skills"

export default function ResumePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBlobs />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        <Header />
        <AboutMe />
        <Experience />
        <Education />
        <Skills />
      </div>
    </main>
  )
}
