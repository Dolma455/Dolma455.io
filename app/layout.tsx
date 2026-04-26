import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Manrope, Syne, Playfair_Display, Archivo, Great_Vibes } from "next/font/google"

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const displayFont = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap", weight: ["500", "600", "700", "800"],
})

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const heroFont = Archivo({
  subsets: ["latin"],
  variable: "--font-hero",
  display: "swap",
  weight: ["600", "700", "800"],
})

const logoFont = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "DolmaLama",
  description: "Portfolio of DolmaLama",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} ${headingFont.variable} ${heroFont.variable} ${logoFont.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
