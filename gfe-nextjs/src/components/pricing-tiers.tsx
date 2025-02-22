"use client"

import { useState } from "react"

function PricingTiers() {
  const [priceType, setPriceType] = useState<"monthly" | "annually">("monthly")

  return (
    <div className="grid grid-cols-1  bg-white drop-shadow-md px-3 py-12 md:px-4 md:py-16 xl:p-24 gap-20">
      <section id="section-top" className="flex flex-col w-full flex-1 gap-y-5 justify-center items-center text-center">
        <h4 className="text-base font-semibold text-indigo-700">Pricing Tiers</h4>
        <h2 className="text-3xl sm:text-5xl font-semibold text-neutral-900">Fit for all your needs</h2>
        <p className="flex flex-wrap font-normal text-xl text-neutral-600">
          Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey
          mapped out.
        </p>
        <div id="payment-recurrence" className="flex flex-row w-fit flex-1 gap-8">
          <button
            id="monthly-plan-btn"
            aria-pressed={`${priceType === "monthly" ? true : false}`}
            onClick={() => setPriceType(() => "monthly")}
            className={`inline-flex flex-1 justify-center items-center text-neutral-900 w-[140px] h-[44px] px-4 py-2.5 text-base cursor-pointer ${priceType === "monthly" ? "bg-white drop-shadow" : "border-[0.5px] border-white"} hover:bg-zinc-50 hover:drop-shadow focus:border focus:border-indigo-50 rounded`}>
            Monthly
          </button>
          <button
            id="annually-plan-btn"
            aria-pressed={`${priceType === "annually" ? true : false}`}
            onClick={() => setPriceType(() => "annually")}
            className={`inline-flex flex-1 justify-center items-center text-neutral-900 w-[140px] h-[44px] px-4 py-2.5 text-base cursor-pointer hover:bg-zinc-50 hover:drop-shadow ${priceType === "annually" ? "bg-white drop-shadow" : "border-[0.5px] border-white"} focus:border focus:border-indigo-50 rounded`}>
            Annually
          </button>
        </div>
      </section>
      <section id="section-bottom" className="grid grid-cols-1 justify-center xl:grid-cols-[384px_384px_384px] gap-8">
        <section id="section-left" className="flex col-span-1 h-full">
          <div
            id="card"
            className="flex flex-1 w-full flex-col place-content-between xl:w-[384px] bg-white p-8 gap-8 rounded-lg drop-shadow-md">
            <div className="flex flex-col gap-8">
              <hgroup id="price" className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-neutral-900">Basic Plan</h1>
                <span className="text-neutral-600 text-base">Access to a curated selection of abstract images</span>
              </hgroup>
              <div className="flex flex-col text-neutral-900">
                <p id="basic-plan-price" className="text-5xl font-semibold">
                  {priceType === "monthly" ? "$9.99" : "$6.99"} <span className="text-base font-normal">/ month</span>
                </p>
                <p id="basic-plan-label" className="text-base font-normal text-neutral-600">
                  {priceType === "monthly" ? "Billed Monthly" : "Billed annually ($84)"}
                </p>
              </div>
              <ul className="flex flex-col text-base text-neutral-600 gap-5">
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                  Standard quality images
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                  Limited to personal use
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                  Email support
                </li>
              </ul>
            </div>
            <button className="w-full rounded-[4px] bg-white hover:bg-neutral-50 text-neutral-900 text-base py-2 drop-shadow">
              Buy now
            </button>
          </div>
        </section>
        <section
          id="section-middle"
          className="flex flex-1 flex-col col-span-1 w-full xl:w-[384px] border border-indigo-600 drop-shadow-2xl rounded-lg">
          <div className="flex w-full bg-indigo-50 rounded-t-lg p-4 justify-center items-center">
            <p className="text-indigo-700 text-xl font-bold">Most Popular</p>
          </div>
          <div
            id="card"
            className="flex flex-1 w-full flex-col place-content-between bg-white p-8 rounded-t-none rounded-l-lg rounded-r-lg rounded-b-lg h-full">
            <div className="flex flex-col gap-8">
              <hgroup id="price" className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-neutral-900">Standard Plan</h1>
                <span className="text-neutral-600 text-base">Next-level Integrations, priced economically</span>
              </hgroup>
              <div className="flex flex-col text-indigo-700">
                <p id="standard-plan-price" className="text-5xl font-semibold">
                  {priceType === "monthly" ? "$19.99" : "$15.99"} <span className="text-base font-normal">/ month</span>
                </p>
                <p id="standard-plan-label" className="text-base font-normal text-neutral-600">
                  {priceType === "monthly" ? "Billed Monthly" : "Billed annually ($192)"}
                </p>
              </div>
              <ul className="flex flex-col text-base text-neutral-600 gap-5">
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                  Expanded library with more diverse abstract images
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                  High-resolution images available
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                    </svg>{" "}
                  </span>
                  Suitable for commercial use
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                    </svg>{" "}
                  </span>
                  Advanced analytics
                </li>
              </ul>
            </div>
            <button className="w-full rounded-[4px] bg-indigo-700 hover:bg-indigo-800 text-white text-base py-2 drop-shadow">
              Buy now
            </button>
          </div>
        </section>
        <section id="section-right" className="flex col-span-1 h-full">
          <div
            id="card"
            className="flex flex-1 w-full flex-col place-content-between xl:w-[384px] bg-white p-8 gap-8 rounded-lg drop-shadow-md">
            <div className="flex flex-col gap-8">
              <hgroup id="price" className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-neutral-900">Premium Plan</h1>
                <span className="text-neutral-600 text-base">Experience limitless living for power users</span>
              </hgroup>
              <div className="flex flex-col text-neutral-900">
                <p id="premium-plan-price" className="text-5xl font-semibold">
                  {priceType === "monthly" ? "$29.99" : "$25.99"} <span className="text-base font-normal">/ month</span>
                </p>
                <p id="premium-plan-label" className="text-base font-normal text-neutral-600">
                  {priceType === "monthly" ? "Billed Monthly" : "Billed annually ($312)"}
                </p>
              </div>
              <ul className="flex flex-col text-base text-neutral-600 gap-5">
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                  Full access to the entire image library, including exclusive content
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                  Highest quality images, including premium collections
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                    </svg>{" "}
                  </span>
                  Commercial and resale rights
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                    </svg>{" "}
                  </span>
                  Dedicated customer support line
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                    </svg>{" "}
                  </span>
                  24/7 support response time
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span className="bg-indigo-50 text-indigo-500 rounded-full p-0 md:p-0.5">
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
                    </svg>{" "}
                  </span>
                  Advanced analytics and insights
                </li>
              </ul>
            </div>
            <button className="w-full rounded-[4px] bg-white hover:bg-neutral-50 text-neutral-900 text-base py-2 drop-shadow">
              Buy now
            </button>
          </div>
        </section>
      </section>
    </div>
  )
}

export default PricingTiers
