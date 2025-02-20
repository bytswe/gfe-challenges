import type { Metadata } from "next"
import "./globals.css"
import FormResultProvider, { useFormResultContext } from "@/app/(pages)/newsletter-section/context/form-result-provider"
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
        <FormResultProvider>{children}</FormResultProvider>
        <div className="credits">
          A challenge by
          <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank">
            GreatFrontEnd Projects
          </a>
          . Built by
          <a href="https://www.greatfrontend.com/u/bytswe" target="_blank">
            bytswe
          </a>
          .
        </div>
      </body>
    </html>
  )
}
