import type { Metadata } from "next"
import MainSection from "@/components/MainSection"
import FeaturedWorkSection from "@/components/FeaturedWorkSection"
import RunningProjectsSection from "@/components/RunningProjectsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Juan Carlos | Web Design & Development Expert",
  description:
    "Expert web designer and developer with 7+ years of experience. Specializing in luxury web design, modern web development, and strategic branding solutions for businesses.",
  keywords: [
    "web design",
    "web development",
    "branding",
    "UI/UX design",
    "React developer",
    "Next.js expert",
    "Juan Carlos Jiron",
    "frontend developer",
    "software engineer",
    "Mexico City developer",
  ],
  openGraph: {
    title: "Juan Carlos | Web Design & Development Expert",
    description:
      "Transform your digital presence with expert web design, development, and branding services. View my portfolio of high-impact digital solutions.",
    type: "website",
    url: "https://juancarlosjiron.com",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp",
        width: 1200,
        height: 630,
        alt: "Juan Carlos - Web Design & Development Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Carlos | Web Design & Development Expert",
    description:
      "Transform your digital presence with expert web design, development, and branding services. View my portfolio of high-impact digital solutions.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp"],
  },
  alternates: {
    canonical: "https://juancarlosjiron.com",
  },
  authors: [{ name: "Juan Carlos Jiron" }],
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-medium">
            Harry.
          </Link>
          <div className="hidden sm:flex items-center gap-4 sm:gap-8">
            <Link href="#work" className="hover:text-gray-300">
              Work
            </Link>
            <Link href="#thoughts" className="hover:text-gray-300">
              Thoughts
            </Link>
            <Link href="#contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
          <button className="sm:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
          </button>
        </div>
      </nav>

      <MainSection />
      <FeaturedWorkSection />
      <RunningProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
