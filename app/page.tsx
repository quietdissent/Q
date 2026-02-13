"use client"

import { Navigation } from "@/components/navigation"
import { SectionDots } from "@/components/section-dots"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem"
import { WhatWeDoSection } from "@/components/sections/what-we-do"
import { AIRealitySection } from "@/components/sections/ai-reality"
import { DiscoverySection } from "@/components/sections/discovery"
import { ApproachTimeline } from "@/components/sections/approach-timeline"
import { CaseStudies } from "@/components/sections/case-studies"
import { DiagnosisSection } from "@/components/sections/diagnosis"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navigation />
      <SectionDots />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatWeDoSection />
        <AIRealitySection />
        <DiscoverySection />
        <ApproachTimeline />
        <CaseStudies />
        <TestimonialsSection />
        <DiagnosisSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
