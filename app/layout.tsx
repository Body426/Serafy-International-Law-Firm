import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Serafy & Partners Law firm - Professional Legal Services",
  description:
    "Leading law firm providing expert legal counsel in corporate law, real estate, arbitration, and intellectual property. Serving clients with integrity and excellence.",
  generator: "v0.app",
  keywords:
    "law firm, legal services, corporate law, real estate law, arbitration, intellectual property, Cairo, Egypt",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <LanguageProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
