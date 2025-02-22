"use client"
import React, { createContext, useState, ReactNode, useContext } from "react"

const newsletterSubscribeContext = createContext<any>({})

// Create the provider component
export const NewsletterSubscribeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [subscribeStatus, setSubscribeStatus] = useState({})

  return (
    <newsletterSubscribeContext.Provider value={{ subscribeStatus, setSubscribeStatus }}>
      {children}
    </newsletterSubscribeContext.Provider>
  )
}

// Custom hook to use the context
export const useNewsletterSubscribeContext = () => {
  const { subscribeStatus, setSubscribeStatus } = useContext(newsletterSubscribeContext)
  if (!subscribeStatus || !setSubscribeStatus) {
    throw new Error("newsletterSubscribeContext must be used within a newsletterSubscribeContextProvider")
  }
  return { subscribeStatus, setSubscribeStatus }
}
