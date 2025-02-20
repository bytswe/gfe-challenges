"use server"

export async function subscribe(prevState: object, formData: FormData) {
  const subscribePayload = {
    email: formData.get("email") as string
  }

  try {
    const subscribe = await fetch("https://www.greatfrontend.com/api/projects/challenges/newsletter", {
      method: "POST",
      body: JSON.stringify(subscribePayload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      cache: "no-store"
    })
    const response = await subscribe.json()
    console.log(response)
    return response
  } catch (error: unknown) {
    if (error) {
      console.error(error)
    }
  }
}
