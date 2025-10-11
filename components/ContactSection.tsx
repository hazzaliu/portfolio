"use client"

import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto mt-16 sm:mt-32 px-4 sm:px-6 scroll-mt-24 sm:scroll-mt-32">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-16 lg:gap-32 items-start mb-16 sm:mb-32">
        {/* Left Column - Let's Connect */}
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Let's Connect</h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Most Product Managers speak business.
            <br />
            Few speak business, data, and tech fluently.
            <br />
            With experience across analytics, AI product development, and marketing strategy, I bring a holistic lens to
            product management - ensuring every build delivers both impact and adoption.
          </p>
        </div>

        {/* Right Column - Contact Buttons */}
        <div className="flex flex-col items-end gap-4">
          <Link
            href="https://www.linkedin.com/in/harryliupm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center border border-border rounded-lg w-32 h-32 sm:w-40 sm:h-40 hover:border-foreground transition-colors group"
            aria-label="LinkedIn"
          >
            <div className="text-lg sm:text-xl font-medium">in</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors mt-2">
              LinkedIn
            </div>
          </Link>

          <Link
            href="mailto:liu.harry95@gmail.com"
            className="flex flex-col items-center justify-center border border-border rounded-lg w-32 h-32 sm:w-40 sm:h-40 hover:border-foreground transition-colors group"
            aria-label="Email"
          >
            <div className="text-lg sm:text-xl font-medium">@</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors mt-2">
              Email
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border gap-4">
        <div className="text-sm text-muted-foreground">© 2025 Harry Liu. All rights reserved.</div>
      </div>
    </section>
  )
}
