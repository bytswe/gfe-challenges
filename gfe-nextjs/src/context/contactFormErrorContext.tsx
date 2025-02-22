"use client"
import React, { createContext, useState, ReactNode, useContext } from "react"

const contactFormErrorContext = createContext<any>({
  status: "",
  message: ""
})
// Create the provider component
export const ContactFormErrorContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sendMsgStatus, setSendMsgStatus] = useState({
    status: "",
    message: ""
  })

  return (
    <contactFormErrorContext.Provider value={{ sendMsgStatus, setSendMsgStatus }}>
      {children}
    </contactFormErrorContext.Provider>
  )
}

// Custom hook to use the context
export const useContactFormErrorContext = () => {
  const { sendMsgStatus, setSendMsgStatus } = useContext(contactFormErrorContext)
  if (!sendMsgStatus || !setSendMsgStatus) {
    throw new Error("contactFormErrorContext must be used within a ContactFormErrorContextProvider")
  }
  return { sendMsgStatus, setSendMsgStatus }
}
