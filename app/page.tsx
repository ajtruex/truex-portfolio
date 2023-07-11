import type { Metadata } from "next"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectSection from "@/components/ProjectSection"

export const metadata: Metadata = {
  title: "Andrew Truex",
  // icons: {
  //   rel: "icon",
  //   icon: "/happy-mac.ico",
  //   sizes: "32x32",
  // },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  )
}
