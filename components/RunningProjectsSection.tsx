import Link from "next/link"

export default function RunningProjectsSection() {
  return (
    <section id="running-project" className="py-16 sm:py-32 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            OUR
            <br />
            RUNNING PROJECT
          </h2>
          <div className="max-w-md lg:text-right">
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-pretty">
              Currently building a cross-border platform that reimagines how industries source, validate, and deliver
              materials. Blending AI, compliance, and product strategy into one venture.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-foreground px-4 sm:px-6 py-2 sm:py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              Let's discuss <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
