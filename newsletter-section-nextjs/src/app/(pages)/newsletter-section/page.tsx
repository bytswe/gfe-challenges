"use client"
import { useState } from "react"

export default function NewsletterSection() {
  const [subscribeStatus, setSubscribeStatus] = useState({
    status: "",
    message: ""
  })
  const [validEmail, setValidEmail] = useState<boolean | null>(null)
  const [requiredEmail, setRequiredEmail] = useState<boolean | null>(null)

  async function handleSubmit(formData: FormData) {
    const subscribePayload = {
      email: formData.get("email") as string
    }
    const subscribe = await fetch("https://www.greatfrontend.com/api/projects/challenges/newsletter", {
      method: "POST",
      body: JSON.stringify(subscribePayload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      cache: "no-store"
    })
    const response = await subscribe.json()

    if (Object.hasOwn(response, "message")) {
      setSubscribeStatus({ status: "success", message: response.message })
    } else if (Object.hasOwn(response, "error")) {
      setSubscribeStatus({
        status: "error",
        message: response.error
      })
    }
  }

  function checkEmpty(email: string) {
    if (validEmail === null) {
      if (email.length > 0) {
        setRequiredEmail(() => true)
      } else {
        setRequiredEmail(() => false)
      }
    } else {
      if (requiredEmail === false) {
        setRequiredEmail(() => true)
      }
    }
  }

  function checkValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (email.match(emailRegex) !== null) {
      console.log(email)
      setValidEmail(() => true)
    } else {
      if (email.length <= 0) {
        setValidEmail(() => null)
        setRequiredEmail(() => false)
      } else {
        setValidEmail(() => false)
      }
    }

    if (requiredEmail === false) {
      setRequiredEmail(() => true)
    }
  }

  return (
    <div id="container" className="grid grid-cols-1 justify-center m-5">
      <div className="flex flex-col bg-white drop-shadow-md rounded">
        <div id="content" className="flex flex-col gap-12 sm:gap-16 px-4 py-12 sm:px-4 sm:py-16 xl:py-24">
          {subscribeStatus.status === "success" ? (
            <div
              id="toaster-success"
              className="flex flex-row  sticky top-5 drop-shadow-xl bg-green-50 place-self-center justify-center items-center text-green-700 py-1 pl-1 pt-1 pb-1 pr-[10px] gap-3 rounded-full transition-all duration-200 ease-in-out">
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
              className="flex flex-row  sticky top-5 drop-shadow-xl bg-red-50 place-self-center text-red-700 py-1 pl-1 pt-1 pb-1 pr-[10px] gap-3 rounded-full transition-all duration-200 ease-in-out">
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

          <div
            id="section-container"
            className="flex flex-col lg:flex-row h-fit px-8 gap-16 xl:gap-8 justify-center items-center">
            <section id="section-left" className="flex flex-1 flex-col gap-12">
              <hgroup className="flex flex-col gap-16">
                <h1 className="font-semibold text-5xl text-neutral-900 text-start align-top">
                  Get the finest curated abstracts delivered weekly to your inbox
                </h1>
                <ul className="flex flex-col text-lg font-normal text-neutral-600 gap-y-5">
                  <li className="flex flex-row gap-x-3">
                    <span className="bg-indigo-50 text-indigo-500 rounded-xl p-0 md:p-0.5 h-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    Exclusive access to new abstract images and collections
                  </li>
                  <li className="flex flex-row gap-x-3">
                    <span className="bg-indigo-50 text-indigo-500 rounded-xl p-0 md:p-0.5 h-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    Unlock special promotions only for subscribers
                  </li>
                  <li className="flex flex-row gap-x-3">
                    <span className="bg-indigo-50 text-indigo-500 rounded-xl p-0 md:p-0.5 h-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    Regular doses of artistic inspiration
                  </li>
                </ul>
              </hgroup>
              <div id="subscribe-email" className="flex flex-col gap-4">
                <form action={handleSubmit} id="subscribe-form" className="flex flex-col sm:flex-row w-full gap-4">
                  <div className="flex flex-col w-full sm:w-[50%] gap-4">
                    <input
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      onChange={(e) => checkValidEmail(e.target.value)}
                      onBlur={(e) => checkEmpty(e.target.value)}
                      className={`w-full placeholder-neutral-500 ring-2 ${requiredEmail === false ? "ring-red-200 focus:outline-red-600" : validEmail === false ? "ring-red-200 focus:outline-red-600" : "ring-neutral-200 focus:outline-indigo-500"} bg-neutral-50 px-3.5 py-2.5 rounded`}
                      required
                    />
                    <span id="error-label" className=" text-base text-red-600 mt-[-0.625rem]">
                      {validEmail === false ? "Please enter a valid email address." : ""}
                      {requiredEmail === false ? "Email address is required." : ""}
                    </span>
                    <p className="text-base text-neutral-600">We only send you the best! No spam.</p>
                  </div>
                  <button
                    type="submit"
                    className="text-center h-fit bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-3.5 py-2.5 rounded">
                    Subscribe
                  </button>
                </form>
              </div>
            </section>
            <section id="section-right" className="flex flex-1 w-fit max-h-fit">
              <img
                src="newsletter-section/abstract.jpg"
                className="object-cover rounded-3xl max-h-fit"
                alt="subsribe to newsletter abstract image"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
