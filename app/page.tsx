import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ExoticSection } from "@/components/exotic-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { FAQSection } from "@/components/faq-section"
import { WhatsAppCTA } from "@/components/whatsapp-cta"
import { MapSection } from "@/components/map-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExoticSection />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <WhatsAppCTA />
      <MapSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
