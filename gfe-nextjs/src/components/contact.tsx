"use client"

import { useContactFormErrorContext } from "@/app/(pages)/marketing-landing-page/page"
import { useRef, useState } from "react"

export type RequiredFiled = {
  name: boolean
  email: boolean
  message: boolean
}
function Contact() {
  const [sendMsgStatus, setSendMsgStatus] = useContactFormErrorContext()
  const [validEmail, setValidEmail] = useState<boolean | null>(null)
  const [requiredField, setRequiredField] = useState<RequiredFiled>({
    name: true,
    email: true,
    message: true
  })
  const msgRef = useRef({} as HTMLElement)
  async function handleSubmit(formData: FormData) {
    const contactMsgPayload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string
    }
    const sendContactMsg = await fetch("https://www.greatfrontend.com/api/projects/challenges/contact", {
      method: "POST",
      body: JSON.stringify(contactMsgPayload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      cache: "no-store"
    })
    const response = await sendContactMsg.json()

    if (Object.hasOwn(response, "message")) {
      setSendMsgStatus({ status: "success", message: response.message })
    } else if (Object.hasOwn(response, "error")) {
      setSendMsgStatus({
        status: "error",
        message: response.error
      })
    }
  }

  function checkEmpty(target: HTMLInputElement | HTMLTextAreaElement) {
    if (target.value.length <= 0) {
      setRequiredField((prevState) => {
        return {
          ...prevState,
          [target.name]: false
        }
      })
    } else {
      setRequiredField((prevState) => {
        return {
          ...prevState,
          [target.name]: true
        }
      })
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
        setRequiredField((prevState) => ({
          ...prevState,
          email: false
        }))
      } else {
        setValidEmail(() => false)
      }
    }

    if (requiredField.email === false) {
      setRequiredField((prevState) => ({
        ...prevState,
        email: true
      }))
    }
  }

  function countMsgLength(message: string) {
    msgRef.current.innerHTML = `${message.length}/500`
  }

  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded">
      <div id="content" className="flex flex-col gap-12 sm:gap-16 px-10 py-12 md:px-4 md:py-16 xl:px-24 xl:py-24">
        <div
          id="section-container"
          className="flex flex-col lg:flex-row h-fit lg:px-8 gap-16 xl:gap-8 justify-center items-center">
          <section id="section-left" className="grid grid-cols-1 w-full gap-12">
            <hgroup className="flex flex-col gap-5">
              <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-neutral-900 text-start align-top">
                Talk to our team
              </h1>
              <p className="text-lg md:text-xl font-normal text-neutral-600">
                {"We're committed to delivering the support you require to make your experience as smooth as possible."}
              </p>
            </hgroup>
            <ul className="flex flex-col text-md md:text-lg lg:text-xl font-normal gap-y-6">
              <li className="flex flex-col items-start">
                <h6 className="flex flex-row text-base font-medium justify-center items-center gap-x-3 text-neutral-600">
                  <span className="bg-white text-indigo-500 rounded-full p-2.5 h-fit drop-shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"></path>
                    </svg>
                  </span>
                  123 Maple Street,Springfield, IL, USA
                </h6>
              </li>
              <li className="flex flex-col items-start">
                <h6 className="flex flex-row text-base font-medium justify-center items-center gap-x-3 text-neutral-600">
                  <span className="bg-white text-indigo-500 rounded-full p-2.5 h-fit drop-shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                    </svg>
                  </span>
                  +1 (650) 555-0198
                </h6>
              </li>
              <li className="flex flex-col items-start">
                <h6 className="flex flex-row text-base font-medium justify-center items-center gap-x-3 text-neutral-600">
                  <span className="bg-white text-indigo-500 rounded-full p-2.5 h-fit drop-shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                    </svg>
                  </span>
                  hello@abstractly.com
                </h6>
              </li>
            </ul>
          </section>
          <section id="section-right" className="grid grid-cols-1 w-full max-h-fit">
            <div id="contact-form-container" className="bg-white drop-shadow rounded-lg">
              {sendMsgStatus.status === "success" ? (
                <div id="contact-form-success" className="flex flex-col p-8 gap-16">
                  <div id="send-success-msg" className="flex flex-col justify-center items-center text-center gap-6">
                    <span className="bg-white text-green-700 rounded-full p-2.5 w-fit h-fit drop-shadow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                      </svg>
                    </span>
                    <p className="flex flex-wrap text-xl text-neutral-900">
                      Submission successful! We will getback to you in 3-5 days via email.
                    </p>
                  </div>
                  <div id="send-new-msg" className="flex flex-col w-full justify-center items-center">
                    <button
                      type="button"
                      onClick={() => setSendMsgStatus({ status: "", message: "" })}
                      className="text-center w-fit h-fit bg-white hover:bg-neutral-50 text-neutral-900 font-medium drop-shadow px-3.5 py-2.5 rounded">
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form action={handleSubmit} className="flex flex-col gap-10 p-8 w-full">
                  <div id="input-fields" className="flex flex-col gap-6">
                    <div id="name-email-fields" className="flex flex-col lg:flex-row gap-8">
                      <span className="flex flex-col w-full gap-[6px]">
                        <label htmlFor="name" className="text-sm text-neutral-700">
                          Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          placeholder="Your name"
                          onChange={(e) => checkEmpty(e.target)}
                          onBlur={(e) => checkEmpty(e.target)}
                          className={`w-full placeholder-neutral-500 ring-2 ${requiredField.name === false ? "ring-red-200 focus:outline-none focus:ring-red-600" : "ring-neutral-200 focus:outline-none focus:ring-indigo-500"} bg-neutral-50 px-3.5 py-2.5 rounded`}
                          required
                        />
                        <span id="error-label" className=" text-base text-red-600">
                          {requiredField.name === false ? "Name is required." : ""}
                        </span>
                      </span>
                      <span className="flex flex-col w-full gap-[6px]">
                        <label htmlFor="email" className="text-sm text-neutral-700">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          onChange={(e) => checkValidEmail(e.target.value)}
                          onBlur={(e) => checkEmpty(e.target)}
                          className={`w-full placeholder-neutral-500 ring-2 ${requiredField.email === false ? "ring-red-200 focus:outline-none focus:ring-red-600" : validEmail === false ? "ring-red-200 focus:outline-none focus:ring-red-600" : "ring-neutral-200 focus:outline-none focus:ring-indigo-500"} bg-neutral-50 px-3.5 py-2.5 rounded`}
                          required
                        />
                        <span id="error-label" className=" text-base text-red-600 ">
                          {validEmail === false ? "Please enter a valid email address." : ""}
                          {requiredField.email === false ? "Email address is required." : ""}
                        </span>
                      </span>
                    </div>
                    <div id="message-field" className="flex flex-col">
                      <span className="flex flex-col w-full gap-2">
                        <label htmlFor="email" className="text-sm text-neutral-700">
                          Message
                        </label>
                        <textarea
                          name="message"
                          placeholder="Write your message..."
                          rows={5}
                          maxLength={500}
                          onChange={(e) => {
                            checkEmpty(e.target)
                            countMsgLength(e.target.value)
                          }}
                          onBlur={(e) => checkEmpty(e.target)}
                          className={`w-full placeholder-neutral-500 ring-2 ${requiredField.message === false ? "ring-red-200 focus:outline-none focus:ring-red-600" : "ring-neutral-200 focus:outline-none focus:ring-indigo-500"} bg-neutral-50 px-3.5 py-3 rounded`}
                          required></textarea>
                        <div id="msg-bottom" className="flex flex-row w-full">
                          <span id="error-label" className=" text-base text-red-600 w-full">
                            {requiredField.message === false ? "Message is required." : ""}
                          </span>
                          <span
                            id="msg-count"
                            ref={msgRef}
                            className="text-sm font-normal text-neutral-500 w-full text-end">
                            0/500
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-center w-full h-fit bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-3.5 py-2.5 rounded">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact
