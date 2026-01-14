import Link from "next/link";

import Github from "@/components/icons/github"
import LinkedIn from "@/components/icons/linkedin"
import { cms } from "@/lib/data";
import { ContactDialog } from "../dialogs/dialog";

const socialLinks = [
    { icon: Github, href: "https://github.com/stgonzales", label: "GitHub" },
    { icon: LinkedIn, href: "https://www.linkedin.com/in/stephgoncalves", label: "LinkedIn" },
]

export async function Header() {
    const { personalDetails } = await cms.findGlobal({
      slug: 'defaults',
      depth: 2,
    })

    return (
        <header className="mb-16 md:mb-24">
          <h1 className="mb-4 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            {personalDetails.name}
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            {personalDetails.role}
          </p>

          {socialLinks && <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="size-5" />
              </Link>
            ))}

            <ContactDialog />

            {/* <button
              // onClick={handleDownloadPDF}
              className="text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
              aria-label="Download PDF"
            >
              <Download className="size-5" />
            </button> */}
          </div>}
        </header>
    )
}