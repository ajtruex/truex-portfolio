"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import BoxReveal from "./magicui/box-reveal"
import ShineBorder from "./magicui/shine-border"

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center py-16 my-10 space-x-4 text-center lg:space-x-0 sm:py-32 md:flex-row md:text-center md:py-8">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/memoji-mac.png"
            alt=""
            width={325}
            height={325}
            priority
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-bold md:text-7xl md:mt-0">
            <BoxReveal boxColor={"#5046e6"} duration={0.25}>
              <p>Hi, I&#39;m Andrew.</p>
            </BoxReveal>
          </h1>
          <BoxReveal boxColor={"#5046e6"} duration={0.25}>
            <p className="mt-4 mb-6 text-lg md:text-2xl">
              I&#39;m a web developer with a focus on unique web experiences and
              products, preferably in the realm of movies, culture and comedy.
            </p>
          </BoxReveal>
          <div className="flex flex-row items-center justify-center text-center">
            <ShineBorder
              className="text-center text-2xl font-bold capitalize"
              color={["#6366f1", "#6d28d9", "#d946ef"]}
            >
              Projects
            </ShineBorder>
          </div>
          {/* <Link
            to="projects"
            className="flex items-center justify-center w-1/6 px-6 py-3 mx-auto font-semibold bg-gradient-to-r from-indigo-500  via-violet-700  to-fuchsia-500  cursor-pointer md:w-1/5 text-white rounded-full shadow-lg"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link> */}
        </div>
      </div>
      {/* <div className="flex flex-row items-center justify-center text-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          <HiArrowDown
            size={35}
            className="animate-bounce fill-violet-700 stroke-violet-700 stroke-1"
          />
        </Link>
      </div> */}
    </section>
  )
}

export default HeroSection
