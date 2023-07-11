"use client"
import "../styles/globals.css"
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/react'
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "next-themes"
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-black ">
        <link rel="icon" href="/win98.ico" sizes="16x16 32x32" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon-120-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon-180-precomposed.png"
        />
        <main className="overflow-hidden mx-auto max-w-5xl flex-col align-center justify-center py-8 px-5 xl:px-0">
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
