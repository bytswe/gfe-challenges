import Image from "next/image"

export default function Home() {
  return (
    <div id="container" className="grid grid-cols-1 justify-center m-5">
      <div className="flex flex-col bg-white drop-shadow-md rounded">
        <div id="content" className="flex flex-col gap-12 sm:gap-16 px-4 py-12 sm:px-4 sm:py-16 xl:py-24">
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>{" "}
                    </span>
                    Regular doses of artistic inspiration
                  </li>
                </ul>
              </hgroup>
              <div id="subscribe-email" className="flex flex-col gap-4">
                <form id="subscribe-form" method="post" className="flex flex-col sm:flex-row w-full gap-4" action="/">
                  <div className="flex flex-col w-full sm:w-[50%] gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full placeholder-neutral-500 border-2 border-neutral-200 bg-neutral-50 px-3.5 py-2.5 rounded"
                      required
                    />
                    <p className="text-base text-neutral-600">We only send you the best! No spam.</p>
                  </div>
                  <button
                    type="submit"
                    className="text-center h-fit bg-indigo-700 text-white font-medium px-3.5 py-2.5 rounded">
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
