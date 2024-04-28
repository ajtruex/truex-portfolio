"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center py-16 my-10 space-x-4 text-center lg:space-x-0 sm:py-32 md:flex-row md:text-center md:py-32">
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
            Hi, I&#39;m Andrew.
          </h1>
          <p className="mt-4 mb-6 text-lg md:text-2xl">
            I&#39;m a web developer with a focus on unique web experiences and
            products, preferably in the realm of movies, culture and comedy.
          </p>
          <Link
            to="projects"
            className="flex items-center justify-center w-1/6 px-6 py-3 mx-auto font-semibold bg-teal-600 rounded shadow cursor-pointer md:w-1/5 text-neutral-100 hover:bg-teal-700 "
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
