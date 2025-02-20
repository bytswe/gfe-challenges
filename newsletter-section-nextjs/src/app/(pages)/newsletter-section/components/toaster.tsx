"use client"

import { useEffect, useState } from "react"
import { useFormResultContext } from "../context/form-result-provider"

function Toaster() {
  const [toasterType, setToasterType] = useState<"success" | "error" | null>(null)
  const { result } = useFormResultContext()

  useEffect(() => {
    if (result === "") {
      setToasterType(null)
    } else {
      setToasterType(result)
    }

    return
  }, [result])

  return toasterType === "success" ? (
    <div
      id="toaster-success"
      className="flex flex-row  sticky top-5 drop-shadow-xl bg-green-50 place-self-center text-green-700 py-1 pl-1 pt-1 pb-1 pr-[10px] gap-3 rounded-full transition-all duration-200 ease-in-out">
      <span
        id="toaster-success-badge"
        className=" px-[10px] py-[2px] text-base font-medium text-green-700 bg-white rounded-full ">
        Success
      </span>
      <p>Subscription successful! Please check your email to confirm.</p>
    </div>
  ) : toasterType === "error" ? (
    <div
      id="toaster-error"
      className="flex flex-row  sticky top-5 drop-shadow-xl bg-red-50 place-self-center text-red-700 py-1 pl-1 pt-1 pb-1 pr-[10px] gap-3 rounded-full transition-all duration-200 ease-in-out">
      <span
        id="toaster-error-badge"
        className=" px-[10px] py-[2px] text-base font-medium text-red-700 bg-white rounded-full ">
        Error
      </span>
      <p>Failed to subscribe. Please ensure your email is correct or try again later.</p>
    </div>
  ) : null
}

export default Toaster
