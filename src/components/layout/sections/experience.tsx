const experience = [
    {
      company: "Motorpoint",
      role: "Software Engineer",
      period: "July 2024 - Present",
      description: [
        "Help improve and simplify the car-buying process to enhance the customer experience, prioritizing application speed and responsiveness with performance optimizations down to milliseconds.",
        "Manage and enhance large-scale applications capable of handling up to 500,000 requests per second.",
        "Build and maintain customer-facing applications using Node.js, TypeScript, Next.js, and React.",
        "Contribute to high-traffic, distributed systems with a focus on scalability, observability, and fault tolerance.",
        "Leverage cloud platforms such as AWS or Azure alongside Git-based workflows to support modern development practices.",
      ]
    },
    {
      company: "Gigaclear",
      role: "Software Engineer",
      period: "June 2023 - August 2024",
      description: [
        "Acted as Scrum Master, facilitating sprint planning, retrospectives, and team alignment to keep delivery on track.",
        "Designed and developed backend services using Node.js and GraphQL, integrating with headless Strapi CMS to expose structured APIs for frontend consumption.",
        "Built and maintained Next.js applications consuming and maintaining GraphQL APIs, enabling efficient data fetching and improved frontend performance.",
        "Used PostgreSQL as the primary database for Strapi CMS, managing content, relational data, and migrations.",
        "Communicated complex technical concepts to users with varying technical backgrounds, ensuring clarity and usability.",
        "Built strong relationships with end-users, fostering a user-focused approach and improving product adoption and satisfaction.",
      ]
    },
    {
        company: "Gigaclear",
        role: "Web Developer",
        period: "May 2021 - June 2023",
        description: [
        "Defined and documented requirements for new features and web applications, contributing to product clarity and delivery efficiency.",
        "Developed and maintained applications using Node.js, Vue.js, Next.js, headless Strapi CMS and GraphQL, improving performance and maintainability.",
        "Operated and supported production web applications to ensure reliability, availability, and user satisfaction.",
        "Collaborated closely with DevOps teams to deploy and scale applications on AWS, following best practices for CI/CD and infrastructure",
        ]
    },
]

export function Experience() {
    return (
        <section id="experience" className="mb-16 md:mb-24">
          <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:mb-12">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map(({ role, period, company, description }, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-border hover:bg-card/50 sm:p-8"
              >
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{role}</h3>
                  <time className="text-sm text-muted-foreground/80">{period}</time>
                </div>
                <p className="mb-4 text-base font-medium text-foreground/70 sm:text-lg">{company}</p>
                {description.map((desc, i) => (
                <p key={i} className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <span>• </span>{desc}
                </p>))}
              </div>
            ))}
          </div>
        </section>
    )
}