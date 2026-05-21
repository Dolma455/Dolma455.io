import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import localFont from "next/font/local"

const whyteFont = localFont({
  src: "../public/fonts/ABCWhyteInktrap-Bold-Trial.otf",
  variable: "--font-whyte",
  display: "swap",
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
      <body className={`${whyteFont.variable} ${whyteFont.className} antialiased`}>
        {/*
         * Anti-flash script: runs synchronously before React hydrates.
         * Reads localStorage.theme and applies the 'dark' class immediately,
         * so there is never a light→dark flicker on load.
         * Defaults to light mode when no preference has been saved.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
        {/*
         * storageKey="theme" keeps next-themes in sync with the same
         * localStorage key used by the inline script above.
         * defaultTheme="light" + no enableSystem mirrors the reference
         * behaviour: light unless the user has explicitly chosen dark.
         */}
        <ThemeProvider attribute="class" defaultTheme="light" storageKey="theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
