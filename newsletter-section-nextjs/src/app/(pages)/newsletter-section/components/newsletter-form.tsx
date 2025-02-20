"use client"

import { useActionState, useEffect, useState } from "react"
import { subscribe } from "../actions/subscribe"
import { useFormResultContext } from "../context/form-result-provider"

function NewsletterForm() {
  const [validEmail, setValidEmail] = useState<boolean | null>(null)
  const [requiredEmail, setRequiredEmail] = useState<boolean | null>(null)
  const [subscribeState, subscribeAction, isPending] = useActionState(subscribe, "")
  const { setResult } = useFormResultContext()

  useEffect(() => {
    if (Object.hasOwn(subscribeState, "message")) {
      setResult(() => "success")
    } else if (Object.hasOwn(subscribeState, "error")) {
      setResult(() => "error")
    }

    setTimeout(() => setResult(""), 10000)
  }, [])

  return
}

export default NewsletterForm
