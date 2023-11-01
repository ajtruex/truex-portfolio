import localFont from "next/font/local"
const seasons = localFont({
  // src: "../fonts/circularstd-regular.ttf",
  src: [
    {
      path: "../../fonts/The Seasons.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/The Seasons Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-seasons",
})
const garamond = localFont({
  src: [
    {
      path: "../../fonts/AppleGaramond.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/AppleGaramond-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../fonts/AppleGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-garamond",
})

export const metadata = {
  title: "Inspiration",
  icons: {
    icon: "/world.ico",
  },
}

export default function InspoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className={`${seasons.variable} ${garamond.variable}`}>
      {children}
    </section>
  )
}
