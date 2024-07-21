import "../styles/globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar"
import { Provider } from "./theme-provider"
import Footer from "@/components/Footer"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Andrew Truex",
  description: "Andrew Truex's Portfolio Website",
  keywords: ["Andrew Truex", "Portfolio", "Next.js", "React", "JavaScript"],
  creator: "Andrew Truex",
  publisher: "Andrew Truex",
  openGraph: {
    title: "Andrew Truex",
    description: "Andrew Truex's Portfolio Website",
    url: "https://andrewtruex.tech",
    siteName: "Andrew Truex",
    images: [
      {
        url: "/memoji-mac.png",
        width: 421,
        height: 421,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Truex",
    description: "Andrew Truex's Portfolio Website",
    siteId: "1197062210507431937",
    creator: "@atruedev",
    creatorId: "1197062210507431937",
    images: ["/memoji-mac.png"],
  },
  icons: {
    icon: "/win98.ico",
    apple: [
      { url: "/favicon-120-precomposed.png", sizes: "180x180" },
      { url: "/favicon-180-precomposed.png", sizes: "180x180" },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}

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
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        {/* <title>Andrew Truex</title> */}
        <script
          defer
          src="https://unpkg.com/@tinybirdco/flock.js"
          data-host="https://api.us-east.tinybird.co"
          data-token="p.eyJ1IjogImQyZDNkYzY5LWNlZWMtNDJlZi1hMGMxLTExNGMxN2Q5NDE5NiIsICJpZCI6ICJkZWU3MjM2MS02MmM4LTRhOWItYmVmNC1lYjNkZDk2N2U1MGEifQ.OFBCBcMlXedM-c4J4UN-EWlt4uRyyx278lg4Qfl8pjg"
        ></script>
        <script
          src="https://cdn.counter.dev/script.js"
          data-id="29660159-2540-4921-b585-6cfaa524b9e6"
          data-utcoffset="-4"
          defer
        ></script>
        <script
          data-goatcounter="https://jeed317.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="c1ecb30b-bd10-49c9-8eae-34471d9e3830"
        ></Script>
        <script
          async
          src="http://localhost:3000/script.js"
          data-website-id="c60034a0-af9e-437b-b046-a1ea88f1a36e"
        ></script>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "419da8fb28a9475f88966976ff56def9"}'
        ></script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZJ5BZMBEMM" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZJ5BZMBEMM');
        `}
        </Script>
      </head>
      <body
      // className="dark:bg-black"
      >
        {/* <link rel="icon" href="/win98.ico" sizes="16x16 32x32" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon-120-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon-180-precomposed.png"
        /> */}
        <main className="overflow-hidden mx-auto max-w-5xl flex-col align-center justify-center py-8 px-5 xl:px-0">
          <Provider>
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </Provider>
        </main>
      </body>
    </html>
  )
}
