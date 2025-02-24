"use client"
import Contact from "@/components/contact"
import ContactFormToaster from "@/components/contact-form-toaster"
import FrequentlyAskedQuestions from "@/components/faq"
import FeatuersGrid from "@/components/features-grid"
import FeaturesSideImage from "@/components/features-side-image"
import Footer from "@/components/footer"
import HeroSectionFeatureBullets from "@/components/hero-section-feature-bullets"
import Navbar from "@/components/navbar"
import Testimonials from "@/components/testimonials"

function MarketingFeaturesPage() {
  return (
    <>
      <Navbar />
      <div id="container" className="grid grid-cols-1 justify-center m-5">
        <ContactFormToaster />
        <HeroSectionFeatureBullets />
        <FeatuersGrid />
        <FeaturesSideImage imgPosition="right" />
        <FeaturesSideImage imgPosition="left" />
        <Testimonials />
        <FrequentlyAskedQuestions />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default MarketingFeaturesPage
