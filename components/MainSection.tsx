import Link from "next/link"

export default function MainSection() {
  return (
    <section id="main" className="pt-24 sm:pt-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 sm:mb-32">
          <div className="text-sm mb-4">(HELLO, I'M Harry Liu)</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
            Product Manager
            <br />
            <span className="font-serif italic font-normal">Data Products</span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
            <p className="max-w-lg text-muted-foreground">
              I connect the dots between data, technology, and business strategy. From enterprise AI platforms to
              synthetic data systems, I've led cross-functional teams to deliver products that empower organisations and
              unlock new growth.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-foreground px-4 sm:px-6 py-2 sm:py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              Let's collaborate <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16 sm:mb-32">
          <div className="grid sm:grid-cols-2 gap-12 sm:gap-16">
            {/* Currently Section */}
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 tracking-wider">CURRENTLY</p>
              <h3 className="text-2xl sm:text-3xl font-light mb-3 sm:mb-4">Product Manager</h3>
              <p className="text-muted-foreground mb-2 sm:mb-3">@ BrandComms.ai</p>
              <p className="text-sm text-muted-foreground">Present</p>
            </div>

            {/* Focus Section */}
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 tracking-wider">FOCUS</p>
              <div className="flex flex-wrap gap-3">
                {[
                  "AI/ML Products",
                  "Data Strategy",
                  "Product Leadership",
                  "Enterprise SaaS",
                  "Cross-functional Teams",
                ].map((focus, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border border-border rounded-lg text-sm hover:border-muted-foreground transition-colors"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Exhibition Image */}
      </div>
    </section>
  )
}
