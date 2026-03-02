import type { Metadata, Viewport } from "next"
import { DM_Serif_Display, Inter } from "next/font/google"
import "./globals.css"
import { LenisProvider } from "@/components/lenis-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
})

export const metadata: Metadata = {
  title: "Quiet Dissent | Operational Continuity Through Authored Insight",
  description:
    "We perceive invisible structural misalignment, give it language, and return agency to people whose time and autonomy have been quietly extracted.",
}

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased bg-[#F5F0E8] text-[#1A1814]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}