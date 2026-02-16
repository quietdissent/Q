import type { Metadata, Viewport } from "next"
import { DM_Serif_Display, Inter } from "next/font/google"
import "./globals.css"

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
  themeColor: "#f5f3f0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";  // ADD THIS IMPORT

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Site",
  description: "Your description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>  {/* ADD THIS WRAPPER */}
          {children}
        </SmoothScroll>  {/* ADD THIS WRAPPER */}
      </body>
    </html>
  );
}
