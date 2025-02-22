import { useContactFormErrorContext } from "@/app/(pages)/marketing-landing-page/page"
function ContactFormToaster() {
  const [sendMsgStatus] = useContactFormErrorContext()
  return (
    <>
      {sendMsgStatus.status === "error" ? (
        <div
          id="toaster-error"
          className="flex flex-row sticky top-5 z-50 drop-shadow-xl bg-red-50 place-self-center text-red-700 py-1 pl-1 pt-1 pb-1 pr-[10px] gap-3 rounded-full transition-all duration-200 ease-in-out">
          <span
            id="toaster-error-badge"
            className="px-[10px] py-[2px] text-base font-medium text-red-700 bg-white rounded-full">
            Error
          </span>
          <p>Failed to submit. Please ensure your details are correct or try again later.</p>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default ContactFormToaster
