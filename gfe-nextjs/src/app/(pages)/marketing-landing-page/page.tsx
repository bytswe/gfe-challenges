"use client"
import Contact from "@/components/contact"
import ContactFormToaster from "@/components/contact-form-toaster"
import FrequentlyAskedQuestions from "@/components/faq"
import FeatuersGrid from "@/components/features-grid"
import FeaturesSideImage from "@/components/features-side-image"
import Footer from "@/components/footer"
import HeroSectionSimple from "@/components/hero-section-simple"
import LogoMarquee from "@/components/logo-marquee"
import Navbar from "@/components/navbar"
import Newsletter from "@/components/newsletter"
import PricingTiers from "@/components/pricing-tiers"
import SubscribeToaster from "@/components/subscribe-toaster"

function MarketingLanding() {
  return (
    <>
      <Navbar />
      <div id="container" className="grid grid-cols-1 justify-center m-5">
        <SubscribeToaster />
        <ContactFormToaster />
        <HeroSectionSimple />
        <LogoMarquee />
        <FeatuersGrid />
        <FeaturesSideImage imgPosition="right" />
        <FeaturesSideImage imgPosition="left" />
        <PricingTiers />
        <FrequentlyAskedQuestions />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default MarketingLanding
