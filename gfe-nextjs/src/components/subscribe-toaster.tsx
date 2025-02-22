"use client"
import { newsletterSubscribeContext } from "@/app/(pages)/marketing-landing-page/page"
import React, { useContext } from "react"

function SubscribeToaster() {
  const [subscribeStatus] = useContext(newsletterSubscribeContext)
  return (
    <>
      {subscribeStatus.status === "success" ? (
        <div
          id="toaster-success"
          className="flex flex-row  sticky top-5 z-50 drop-shadow-xl bg-green-50 place-self-center justify-center items-center text-green-700 py-1 pl-1 pt-1 pb-1 pr-[10px] gap-3 rounded-full transition-all duration-200 ease-in-out">
          <span
            id="toaster-success-badge"
            className=" h-fit px-[10px] py-[2px] text-base font-medium text-green-700 bg-white rounded-full ">
            Success
          </span>
          <p> Subscription successful! Please check your email to confirm. </p>
        </div>
      ) : subscribeStatus.status === "error" ? (
        <div
          id="toaster-error"
          className="flex flex-row  sticky top-5 z-50 drop-shadow-xl bg-red-50 place-self-center text-red-700 py-1 pl-1 pt-1 pb-1 pr-[10px] gap-3 rounded-full transition-all duration-200 ease-in-out">
          <span
            id="toaster-error-badge"
            className=" px-[10px] py-[2px] text-base font-medium text-red-700 bg-white rounded-full ">
            Error
          </span>
          <p> Failed to subscribe. Please ensure your email is correct or try again later. </p>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default SubscribeToaster
