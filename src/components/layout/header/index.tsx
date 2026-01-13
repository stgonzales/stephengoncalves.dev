import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { MessageCircle, Download, Mail } from "lucide-react";
import { DialogHeader } from "@/components/ui/dialog";
import Github from "@/components/icons/github"
import LinkedIn from "@/components/icons/linkedin"


const socialLinks = [
    { icon: Github, href: "https://github.com/stgonzales", label: "GitHub" },
    { icon: LinkedIn, href: "https://www.linkedin.com/in/stephgoncalves", label: "LinkedIn" },
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

export function Header() {
    return (
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
    )
}