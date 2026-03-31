'use client'

import Hero from '@/components/hero'
import Architecture from '@/components/architecture'
import ValuePropositions from '@/components/value-propositions'
import PricingSection from '@/components/pricing'
import DemoEmbed from '@/components/demo-embed'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950">
      <Hero />
      <Architecture />
      <ValuePropositions />
      <PricingSection />
      <DemoEmbed />
      <Footer />
    </main>
  )
}
