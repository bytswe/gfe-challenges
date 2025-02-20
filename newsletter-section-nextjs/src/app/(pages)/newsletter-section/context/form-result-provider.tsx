"use client"
import React, { useState, createContext, ReactNode, useContext } from "react"

const FormResultContext = createContext<any>(null)

function FormResultProvider({ children }: { children: ReactNode }) {
  const [result, setResult] = useState("")
  return <FormResultContext.Provider value={{ result, setResult }}>{children}</FormResultContext.Provider>
}

export const useFormResultContext = () => useContext(FormResultContext)

export default FormResultProvider
