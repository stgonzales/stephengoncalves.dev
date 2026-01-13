import { Badge } from "@/components/ui/badge"

const skills = {
    Frontend: ["TypeScript", "React", "Next.js", "Vue.js", "HTML", "CSS", "SASS", "Tailwind"],
    Backend: ["Node.js", "GraphQL", "Go"],
    Data: ["Postgres", "MySQL", "SQLite", "Redis"],
    DevOps: ["Docker", "AWS", "CI/CD", "Vercel", "GitHub Actions"],
    Tools: ["Git", "VS Code", "Figma", "Linear", "Notion"],
}

export function Skills() {
    return (
        <section id="skills" className="mb-16 md:mb-24">
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
    )
}