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
import React, { createContext, useRef, useState } from "react"

export const newsletterSubscribeContext = createContext<any>({
  status: "",
  message: ""
})

export const contactFormErrorContext = createContext<any>({
  status: "",
  message: ""
})
function MarketingLanding() {
  const [subscribeStatus, setSubscribeStatus] = useState({
    status: "",
    message: ""
  })
  const [sendMsgStatus, setSendMsgStatus] = useState({
    status: "",
    message: ""
  })

  return (
    <>
      <Navbar />
      <div id="container" className="grid grid-cols-1 justify-center m-5">
        <newsletterSubscribeContext.Provider value={[subscribeStatus, setSubscribeStatus]}>
          <SubscribeToaster />
        </newsletterSubscribeContext.Provider>
        <contactFormErrorContext.Provider value={[sendMsgStatus, setSendMsgStatus]}>
          <ContactFormToaster />
        </contactFormErrorContext.Provider>
        <HeroSectionSimple />
        <LogoMarquee />
        <FeatuersGrid />
        <FeaturesSideImage imgPosition="right" />
        <FeaturesSideImage imgPosition="left" />
        <PricingTiers />
        <FrequentlyAskedQuestions />
        <newsletterSubscribeContext.Provider value={[setSubscribeStatus, setSubscribeStatus]}>
          <Newsletter />
        </newsletterSubscribeContext.Provider>
        <contactFormErrorContext.Provider value={[sendMsgStatus, setSendMsgStatus]}>
          <Contact />
        </contactFormErrorContext.Provider>
        <Footer />
      </div>
    </>
  )
}

export default MarketingLanding
