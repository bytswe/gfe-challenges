"use client"

import { useState } from "react"

function FrequentlyAskedQuestions() {
  const [isQuestionOpen, setIsQuestionOpen] = useState({
    q1: true,
    q2: true,
    q3: true,
    q4: true,
    q5: true,
    q6: true
  })

  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded">
      <div id="content" className="flex flex-col gap-12 sm:gap-16 px-4 py-12 sm:px-4 sm:py-16 xl:p-24">
        <div id="header" className="flex flex-col w-full justify-center items-center gap-5">
          <h1 className="font-semibold text-3xl sm:text-5xl text-neutral-900 text-center">
            Frequently asked questions
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600">Choose any questions you need</p>
        </div>
        <div id="qna-list" className="flex flex-col gap-7">
          <button
            type="button"
            aria-expanded={isQuestionOpen.q1 ? true : false}
            aria-controls="qna-1"
            id="qna-1"
            onClick={() => setIsQuestionOpen((prevState) => ({ ...prevState, q1: !isQuestionOpen.q1 }))}
            className="flex flex-col flex-wrap p-4 justify-start items-start rounded-xl">
            <div id="question-1" className="flex flex-row w-full justify-between">
              <h4 id="question-header-1" className="font-medium text-lg text-neutral-900 text-start">
                What types of images are available on your platform?
              </h4>
              <div
                id="close-btn-1-div"
                className={` ${isQuestionOpen.q1 ? "flex" : "hidden"} flex-row`}
                aria-hidden="true">
                <svg
                  id="close-btn-1"
                  onClick={() => setIsQuestionOpen((prevState) => ({ ...prevState, q1: !isQuestionOpen.q1 }))}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="close-btn-1"
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
              <div
                id="open-btn-1-div"
                className={` ${isQuestionOpen.q1 ? "hidden" : "flex"} flex-row`}
                aria-hidden="true">
                <svg
                  id="open-btn-1"
                  onClick={() => setIsQuestionOpen((prevState) => ({ ...prevState, q1: !isQuestionOpen.q1 }))}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="open-btn-1"
                    d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
            </div>
            <p id="answer-1" className={`text-base text-neutral-600 text-start ${isQuestionOpen.q1 ? "" : "hidden"} `}>
              Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant
              geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different
              tastes.
            </p>
          </button>
          <hr />
          <button
            type="button"
            aria-expanded={isQuestionOpen.q2 ? true : false}
            onClick={() => setIsQuestionOpen((prevState) => ({ ...prevState, q2: !isQuestionOpen.q2 }))}
            aria-controls="qna-2"
            id="qna-2"
            className="flex flex-col flex-wrap p-4 justify-start items-start rounded-xl">
            <div id="question-2" className="flex flex-row w-full justify-between">
              <h4 id="question-header-2" className="font-medium text-lg text-neutral-900 text-start">
                How can I access and download images from your platform?
              </h4>
              <div
                id="close-btn-2-div"
                className={` ${isQuestionOpen.q2 ? "flex" : "hidden"} flex-row`}
                aria-hidden="true">
                <svg
                  id="close-btn-2"
                  onClick={() => setIsQuestionOpen((prevState) => ({ ...prevState, q2: !isQuestionOpen.q2 }))}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="close-btn-2"
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
              <div
                id="open-btn-2-div"
                className={` ${isQuestionOpen.q2 ? "hidden" : "flex"} flex-row`}
                aria-hidden="true">
                <svg
                  id="open-btn-2"
                  onClick={() => setIsQuestionOpen((prevState) => ({ ...prevState, q2: !isQuestionOpen.q2 }))}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="open-btn-2"
                    d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
            </div>
            <p id="answer-2" className={`text-base text-neutral-600 text-start ${isQuestionOpen.q2 ? "" : "hidden"} `}>
              Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can
              browse through our curated collection and download their chosen images directly to their devices with just
              a few clicks.
            </p>
          </button>
          <hr />
          <button
            type="button"
            aria-expanded={isQuestionOpen.q3 ? true : false}
            aria-controls="qna-3"
            onClick={() => setIsQuestionOpen((prevState) => ({ ...prevState, q3: !isQuestionOpen.q3 }))}
            id="qna-3"
            className="flex flex-col flex-wrap p-4 justify-start items-start rounded-xl">
            <div id="question-3" className="flex flex-row w-full justify-between">
              <h4 id="question-header-3" className="font-medium text-lg text-neutral-900 text-start">
                Do you offer free images, or is there a subscription required?
              </h4>
              <div
                id="close-btn-3-div"
                className={` ${isQuestionOpen.q3 ? "flex" : "hidden"} flex-row`}
                aria-hidden="true">
                <svg
                  id="close-btn-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="close-btn-3"
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
              <div
                id="open-btn-3-div"
                className={` ${isQuestionOpen.q3 ? "hidden" : "flex"} flex-row`}
                aria-hidden="true">
                <svg
                  id="open-btn-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="open-btn-3"
                    d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
            </div>
            <p id="answer-3" className={`text-base text-neutral-600 text-start ${isQuestionOpen.q3 ? "" : "hidden"} `}>
              We provide both free and premium images on our platform. Users can explore a selection of free images
              without any subscription. For access to our entire library and additional features, we offer subscription
              plans tailored to different user needs.
            </p>
          </button>
          <hr />
          <button
            type="button"
            aria-expanded={isQuestionOpen.q4 ? true : false}
            aria-controls="qna-4"
            onClick={() => setIsQuestionOpen((prevState) => ({ ...prevState, q4: !isQuestionOpen.q4 }))}
            id="qna-4"
            className="flex flex-col flex-wrap p-4 justify-start items-start rounded-xl">
            <div id="question-4" className="flex flex-row w-full justify-between">
              <h4 id="question-header-4" className="font-medium text-lg text-neutral-900 text-start">
                What payment methods do you accept for subscriptions?
              </h4>
              <div
                id="close-btn-4-div"
                className={` ${isQuestionOpen.q4 ? "flex" : "hidden"} flex-row`}
                aria-hidden="true">
                <svg
                  id="close-btn-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="close-btn-4"
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
              <div
                id="open-btn-4-div"
                className={` ${isQuestionOpen.q4 ? "hidden" : "flex"} flex-row`}
                aria-hidden="true">
                <svg
                  id="open-btn-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="open-btn-4"
                    d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
            </div>
            <p id="answer-4" className={`text-base text-neutral-600 text-start ${isQuestionOpen.q4 ? "" : "hidden"} `}>
              We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make
              the subscription process convenient for our users.
            </p>
          </button>
          <hr />
          <button
            type="button"
            aria-expanded={isQuestionOpen.q5 ? true : false}
            aria-controls="qna-5"
            onClick={() => setIsQuestionOpen((prevState) => ({ ...prevState, q5: !isQuestionOpen.q5 }))}
            id="qna-5"
            className="flex flex-col flex-wrap p-4 justify-start items-start rounded-xl">
            <div id="question-5" className="flex flex-row w-full justify-between">
              <h4 id="question-header-5" className="font-medium text-lg text-neutral-900 text-start">
                Can I cancel or modify my subscription at any time?
              </h4>
              <div
                id="close-btn-5-div"
                className={` ${isQuestionOpen.q5 ? "flex" : "hidden"} flex-row`}
                aria-hidden="true">
                <svg
                  id="close-btn-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="close-btn-5"
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
              <div
                id="open-btn-5-div"
                className={` ${isQuestionOpen.q5 ? "hidden" : "flex"} flex-row`}
                aria-hidden="true">
                <svg
                  id="open-btn-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="open-btn-5"
                    d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
            </div>
            <p id="answer-5" className={`text-base text-neutral-600 text-start ${isQuestionOpen.q5 ? "" : "hidden"} `}>
              Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your
              account settings. Changes will take effect immediately, ensuring you have full control over your
              subscription preferences.
            </p>
          </button>
          <hr />
          <button
            type="button"
            aria-expanded={isQuestionOpen.q6 ? true : false}
            onClick={() => setIsQuestionOpen((prevState) => ({ ...prevState, q6: !isQuestionOpen.q6 }))}
            aria-controls="qna-6"
            id="qna-6"
            className="flex flex-col flex-wrap p-4 justify-start items-start rounded-xl">
            <div id="question-6" className="flex flex-row w-full justify-between">
              <h4 id="question-header-6" className="font-medium text-lg text-neutral-900 text-start">
                How frequently do you update your image collection?
              </h4>
              <div
                id="close-btn-6-div"
                className={` ${isQuestionOpen.q6 ? "flex" : "hidden"} flex-row`}
                aria-hidden="true">
                <svg
                  id="close-btn-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="close-btn-6"
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
              <div
                id="open-btn-6-div"
                className={` ${isQuestionOpen.q6 ? "hidden" : "flex"} flex-row`}
                aria-hidden="true">
                <svg
                  id="open-btn-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="close-btn-6"
                    d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </div>
            </div>
            <p id="answer-6" className={`text-base text-neutral-600 text-start ${isQuestionOpen.q6 ? "" : "hidden"} `}>
              We regularly update our image collection with fresh and captivating content to keep our users inspired and
              engaged. New images are added consistently to ensure there&apos;s always something new to discover on our
              platform.
            </p>
          </button>
          <hr />
          <div className="flex flex-row flex-wrap p-8 gap-4 justify-between bg-white drop-shadow-md rounded-lg">
            <div id="text-group" className="flex flex-col gap-2">
              <h4 className="font-semibold text-xl text-neutral-900">
                Can&apos;t find the answer you&apos;re looking for?
              </h4>
              <p className="text-base text-neutral-600">
                Reach out to our{" "}
                <a href="#" className="text-base text-indigo-700 hover:text-indigo-800">
                  customer support{" "}
                </a>
                team.
              </p>
            </div>
            <button className="w-full md:w-fit px-5 py-3 bg-indigo-700 hover:bg-indigo-800 rounded font-medium text-white text-base">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestions
