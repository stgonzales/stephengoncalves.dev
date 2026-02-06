import { getAboutMe } from "@/lib/queries/get-about-me"
import { getLocaleFromHeaders } from "@/lib/helpers/get-locale-from-headers"

export async function AboutMe() {
    const locale = await getLocaleFromHeaders()
    const aboutMe = await getAboutMe(locale)

    if (!aboutMe) return null

    return (
        <section id="about-me" className="mb-16 md:mb-24">
          <div className="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm sm:p-8 md:p-10">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">About Me</h2>
            <p className="text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg">
              {aboutMe}
            </p>
          </div>
        </section>
    )
}