import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mc Benny Copper R. Precilla - UI/UX Designer & Software Developer",
  description:
    "Professional portfolio of Mc Benny Copper R. Precilla, a UI/UX Designer and Software Developer based in Camarines Norte, Philippines.",
  keywords: "UI/UX Designer, Software Developer, Graphics Designer, Portfolio, Camarines Norte",
  authors: [{ name: "Mc Benny Copper R. Precilla" }],
  openGraph: {
    title: "Mc Benny Copper R. Precilla - UI/UX Designer & Software Developer",
    description: "Professional portfolio showcasing UI/UX design and software development work.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
