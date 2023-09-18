"use client"
import React from 'react'
import { HiArrowDown } from "react-icons/hi"
import { Link } from "react-scroll/modules"

const Arrow = () => {
  return (
    <div className="flex flex-row items-center text-center justify-center">
    <Link
      to="projects"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <HiArrowDown size={35} className="animate-bounce" />
    </Link>
  </div>
  )
}

export default Arrow