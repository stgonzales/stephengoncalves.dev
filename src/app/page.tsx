"use client"

import { Github, Linkedin, Mail, MessageCircle, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ResumePage() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/stgonzales", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/stephgoncalves", label: "LinkedIn" },
    { icon: Mail, href: "mailto:stephengoncalves.dev@gmail.com", label: "Email" },
  ]

  const contactDetails = [
    { label: "Email", value: "stephengoncalves.dev@gmail.com", href: "mailto:stephengoncalves.dev@gmail.com" },
    { label: "Phone", value: "+44 07590775593", href: "tel:+4407590775593" },
    { label: "Location", value: "Nottingham, UK" },
    { label: "LinkedIn", value: "linkedin.com/in/stepgoncalves", href: "https://linkedin.com/in/stepgoncalves" },
    { label: "GitHub", value: "github.com/stgonzales", href: "https://github.com/stgonzales" },
  ]

  const handleDownloadPDF = () => {
    // In a real implementation, this would generate/download an actual PDF
    console.log("Download PDF clicked")
    alert("PDF download functionality - connect to your PDF generation service")
  }

  const experience = [
    {
      company: "Motorpoint",
      role: "Software Engineer",
      period: "July 2024 - Present",
      description:
        "Help improve and simplify the car-buying process to enhance the customer experience, prioritizing application speed and responsiveness with performance optimizations down to milliseconds. Manage and enhance large-scale applications capable of handling up to 500,000 requests per second.",
    },
    {
      company: "Gigaclear",
      role: "Software Engineer",
      period: "June 2023 - August 2024",
      description:
        "Acted as Scrum Master while designing and developing backend services using Node.js and GraphQL, integrating with headless Strapi CMS. Built and maintained Next.js applications consuming GraphQL APIs, enabling efficient data fetching and improved frontend performance.",
    },
    {
      company: "Gigaclear",
      role: "Web Developer",
      period: "May 2021 - June 2023",
      description:
        "Developed and maintained applications using Node.js, Vue.js, Next.js, headless Strapi CMS and GraphQL. Collaborated closely with DevOps teams to deploy and scale applications on AWS, following best practices for CI/CD and infrastructure.",
    },
  ]

  const skills = {
    Frontend: ["TypeScript", "React", "Next.js", "Vue.js", "HTML", "CSS", "SASS", "Tailwind"],
    Backend: ["Node.js", "GraphQL", "Go"],
    Data: ["Postgres", "MySQL", "SQLite", "Redis"],
    DevOps: ["Docker", "AWS", "CI/CD", "Vercel", "GitHub Actions"],
    Tools: ["Git", "VS Code", "Figma", "Linear", "Notion"],
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 size-96 animate-blob rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="animation-delay-2000 absolute right-1/4 top-1/3 size-96 animate-blob rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="animation-delay-4000 absolute bottom-1/4 left-1/3 size-96 animate-blob rounded-full bg-pink-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        <header className="mb-16 md:mb-24">
          <h1 className="mb-4 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Stephen Goncalves
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Software Engineer
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="size-5" />
              </a>
            ))}

            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
                  aria-label="Get in contact"
                >
                  <MessageCircle className="size-5" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Get in Contact</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex flex-col gap-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {detail.label}
                      </span>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground transition-colors hover:text-foreground/80"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-foreground">{detail.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            <button
              onClick={handleDownloadPDF}
              className="text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
              aria-label="Download PDF"
            >
              <Download className="size-5" />
            </button>
          </div>
        </header>

        <section className="mb-16 md:mb-24">
          <div className="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm sm:p-8 md:p-10">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">About Me</h2>
            <p className="text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg">
              I'm a Software Engineer with over five years of hands-on development experience and a decade in
              technology, skilled in Node.js, TypeScript, React/Next.js and GraphQL. Known for delivering high-quality
              software in fast-paced environments, I excel in driving project success and enhancing team efficiency.
              With a strong commitment to learning and adaptability, I bring innovative, cutting-edge solutions to meet
              evolving business needs.
            </p>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:mb-12">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-border hover:bg-card/50 sm:p-8"
              >
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{job.role}</h3>
                  <time className="text-sm text-muted-foreground/80">{job.period}</time>
                </div>
                <p className="mb-4 text-base font-medium text-foreground/70 sm:text-lg">{job.company}</p>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:mb-12">
            Skills & Technologies
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category} className="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-base font-semibold text-foreground/90">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-xs font-normal transition-all hover:scale-105 hover:bg-accent"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
