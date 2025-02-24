import React from "react"

function HeroSectionFeatureBullets() {
  return (
    <header className="flex flex-col xl:flex-row xl:justify-stretch bg-white rounded-tl rounded-tr drop-shadow-md p-4 md:p-6 xl:p-24">
      <section id="section-left" className="flex flex-col justify-center gap-y-6 md:gap-y-12 xl:gap-y-20">
        <h1 className="mt-12 lx:mt-0 text-4xl md:text-5xl xl:text-6xl font-semibold text-neutral-900">
          Premium abstract images
        </h1>

        <ul className="flex flex-col text-md md:text-lg lg:text-xl font-normal text-neutral-600 gap-y-5">
          <li className="flex flex-row gap-x-3">
            <span className="bg-indigo-50 text-indigo-500 rounded-xl p-0 md:p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-check">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            Minimum 5K image resolution
          </li>
          <li className="flex flex-row gap-x-3">
            <span className="bg-indigo-50 text-indigo-500 rounded-xl p-0 md:p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-check">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            Various format variants available
          </li>
          <li className="flex flex-row gap-x-3">
            <span className="bg-indigo-50 text-indigo-500 rounded-xl p-0 md:p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-check">
                <path d="M20 6 9 17l-5-5" />
              </svg>{" "}
            </span>
            Retina display support
          </li>
        </ul>
        <div id="buttons" className="flex flex-row gap-x-8 justify-stretch md:justify-normal xl:justify-normal">
          <button className="py-4 px-8 md:px-14 xl:px-10 w-full md:w-fit xl:w-fit bg-white hover:bg-neutral-50 drop-shadow-md rounded-[6px]">
            <p className="font-medium text-sm md:text-lg lg:text-xl">Learn More</p>
          </button>
          <button className="py-4 px-8 md:px-14 xl:px-10 w-full md:w-fit xl:w-fit text-white bg-indigo-700 hover:bg-indigo-800 drop-shadow-md rounded-[6px]">
            <p className="font-medium text-sm md:text-lg lg:text-xl">See pricing</p>
          </button>
        </div>
      </section>
      <section id="section-right" className="flex justify-end">
        <img
          src="prism-1.png"
          className="hero-img mt-10 mb-12 md:mt-16 md:mb-28 xl:mt-0 xl:mb-0 xl:w-[70%]"
          alt="Banner image or hero section"
        />
      </section>
    </header>
  )
}

export default HeroSectionFeatureBullets
