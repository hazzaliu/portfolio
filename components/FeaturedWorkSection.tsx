import Link from "next/link"

export default function FeaturedWorkSection() {
  return (
    <section id="featured-work" className="px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">Selected Work</h2>
            <p className="text-muted-foreground text-lg sm:text-xl mt-4 sm:mt-0">2018 — 2025</p>
          </div>

          <div className="space-y-0">
            {[
              {
                year: "2025",
                title: "Product Manager",
                company: "BrandComms.ai @ Forethought",
                description:
                  "Leading synthetic data and AI-enabled product development, extending market science methodologies into next-gen applications.",
                tags: ["AI/ML", "Data Strategy", "Product Leadership", "Stakeholder Management", "Synthetic Data"],
                projectLink: "/projects/ai-data-platform",
              },
              {
                year: "2025",
                title: "Data Scientist",
                company: "Forethought",
                description:
                  "Built AI-powered survey automation platform (SurveyForge) reducing survey creation from 3 weeks to 3 days, integrating OCR, RAG, Django/Postgres, Next.js, and AWS.",
                tags: ["UX/UI Design", "LLMOps", "RAG", "API Design", "AWS Deployment"],
                projectLink: "/projects/synthetic-data-system",
              },
              {
                year: "2024",
                title: "Data Consultant",
                company: "Centre for Business Analytics - Melbourne Business School",
                description:
                  "Consulted on data-driven strategies for non-profits and education. Partnered with Fitted for Work to improve client engagement through analytics and qualitative research, and collaborated on a Retrieval Augmented Generation (RAG) system to enhance LLM reliability for educational use. Delivered actionable insights, aligned solutions with organisational goals, and promoted responsible AI practices.",
                tags: ["Data Strategy", "Consulting", "Responsible AI", "LLM Reliability", "Qualitative Research"],
                projectLink: "/projects/data-visualization",
              },
              {
                year: "2022-2023",
                title: "Business Analyst / Delivery Manager",
                company: "Blitzm Systems",
                description:
                  "Partnered with cross-functional teams to deliver modern software solutions by translating business needs into detailed requirements, shaping product roadmaps, and managing delivery across the SDLC. Oversaw estimation, planning, and coordination to ensure efficiency, functionality, and on-time delivery. Maintained documentation and post-implementation support, while guiding the strategic direction of projects and aligning development with business objectives.",
                tags: [
                  "Business Analysis",
                  "Delivery Management",
                  "Project Planning",
                  "Agile",
                  "Stakeholder Communication",
                ],
                projectLink: "/projects/data-visualization",
              },
            ].map((work, index) => (
              <div key={index} className="py-12 sm:py-16 border-t border-border first:border-t-0 rounded-lg">
                <div className="space-y-6">
                  <p className="text-2xl sm:text-3xl font-light text-muted-foreground">{work.year}</p>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold">{work.title}</h3>
                    <p className="text-lg sm:text-xl text-muted-foreground">{work.company}</p>
                  </div>

                  <p className="text-muted-foreground max-w-2xl leading-relaxed">{work.description}</p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 border border-border rounded-lg text-sm text-foreground hover:border-muted-foreground transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={work.projectLink}
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      View Project
                      <span className="text-lg group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Thoughts */}
        <div id="thoughts" className="mb-16 sm:mb-32 scroll-mt-24 sm:scroll-mt-32">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-12 sm:mb-16">Recent Thoughts</h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                date: "Jan 2025",
                readTime: "6 min",
                title: "Building AI Products That Scale",
                description:
                  "Exploring the intersection of synthetic data, product strategy, and responsible AI deployment in enterprise environments.",
                slug: "building-ai-products-that-scale",
              },
              {
                date: "Dec 2024",
                readTime: "8 min",
                title: "Data Strategy in Modern Organizations",
                description:
                  "Lessons learned from implementing data-driven decision making across cross-functional teams and stakeholder groups.",
                slug: "data-strategy-modern-organizations",
              },
              {
                date: "Nov 2024",
                readTime: "5 min",
                title: "The Product Manager's Guide to AI",
                description:
                  "How product managers can effectively lead AI initiatives without needing to be machine learning experts.",
                slug: "product-manager-guide-to-ai",
              },
              {
                date: "Oct 2024",
                readTime: "7 min",
                title: "From Analyst to Product Leader",
                description:
                  "Reflections on transitioning from data analysis to product management and the skills that transfer between roles.",
                slug: "analyst-to-product-leader",
              },
            ].map((thought, index) => (
              <Link
                key={index}
                href={`/blog/${thought.slug}`}
                className="group border border-border rounded-lg p-6 sm:p-8 hover:border-muted-foreground transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm text-muted-foreground">{thought.date}</span>
                  <span className="text-sm text-muted-foreground">{thought.readTime}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-muted-foreground transition-colors">
                  {thought.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">{thought.description}</p>

                <div className="inline-flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  Read more
                  <span className="text-lg group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
