import type { Metadata } from "next"
import "./globals.css"
import { NewsletterSubscribeContextProvider } from "@/context/newsletterSubscribeContext"
import { ContactFormErrorContextProvider } from "@/context/contactFormErrorContext"
export const metadata: Metadata = {
  title: "GreatFrontEnd Challenges. Built by bytswe",
  description: "A challenge by GreatFrontEnd Projects. Built by bytswe"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-tl from-slate-300 to-slate-50 antialiased`}>
        <NewsletterSubscribeContextProvider>
          <ContactFormErrorContextProvider>{children}</ContactFormErrorContextProvider>
        </NewsletterSubscribeContextProvider>
        <div className="credits">
          A challenge by{" "}
          <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank">
            {" "}
            GreatFrontEnd Projects
          </a>
          . Built by{" "}
          <a href="https://www.greatfrontend.com/projects/u/bytswe" target="_blank">
            {" "}
            bytswe
          </a>
          .
        </div>
      </body>
    </html>
  )
}
