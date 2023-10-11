"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { FiHeadphones, FiZap } from "react-icons/fi"

const NAV_ITEMS = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "About",
    page: "/about",
  },
  {
    label: "Projects",
    page: "/projects",
  },
  {
    label: "Stack",
    page: "/stack",
  },
  {
    label: "Contact",
    page: "/contact",
  },
  {
    label: "Spotify",
    page: "/spotify",
    icon: "FiHeadphones",
  },
  {
    label: "Inspiration",
    page: "/inspiration",
    icon: "FiZap",
  },
]

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)
  const [mounted, setMounted] = useState(false)

  const handleLinkClick = () => {
    setNavbar(false)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col items-center md:items-start md:px-5">
      <div className="flex cursor-pointer flex-row items-center justify-center space-x-3">
        <Image
          className="shadow-2xl w-[60px] rounded-full border-none bg-black dark:bg-hoverBlack"
          src="/memoji-mac.png"
          alt=""
          width={60}
          height={60}
          priority
        />
        <Link href="/">
          <div className="container lg:flex items-center space-x-2">
            <h2 className="lg:text-2xl text-lg font-bold lg:mr-4 mr-2 tracking-tight">
              Andrew Truex
            </h2>
          </div>
        </Link>
        <div className="md:hidden ">
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
      </div>

      <div
        className={`md:fixed z-10 cursor-pointer flex-row items-center md:rounded-full rounded-xl border bg-white bg-opacity-95 px-6 py-2 shadow-xl backdrop-blur-sm backdrop-filter dark:border-slate-100/10 dark:bg-black md:dark:bg-opacity-75 dark:bg-opacity-90 lg:left-1/2 md:flex lg:-translate-x-1/2 lg:transform md:ml-12 top-24 md:left-1/4 inset-x-0 md:inset-x-auto absolute left-0 md:top-8 ${
          navbar ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex-1 justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0">
          <div className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  href={item.page}
                  className={
                    "flex flex-col text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 text-center items-center justify-center"
                  }
                  onClick={handleLinkClick}
                >
                  {item.icon === "FiHeadphones" ? (
                    <div className="relative inline-block group">
                      <FiHeadphones size={25} />
                      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute z-20 dark:bg-black rounded shadow-lg p-1.5 hidden md:inline-block -ml-8 mt-4 leading-none">
                        {item.label}
                      </div>
                    </div>
                  ) : item.icon === "FiZap" ? (
                    <div className="relative inline-block group">
                      <FiZap size={25} />
                      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute z-20 dark:bg-black rounded shadow-lg p-1.5 hidden md:inline-block -ml-8 mt-4 leading-none">
                        {item.label}
                      </div>
                    </div>
                  ) : (
                    item.label
                  )}
                </Link>
              )
            })}
            {mounted === true ? (
              <div>
                {currentTheme === "light" ? (
                  <button
                    onClick={() => setTheme("dark")}
                    className="bg-slate-100 p-2 rounded-xl text-black md:mx-0 mx-auto flex"
                  >
                    <RiMoonFill size={25} />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("light")}
                    className="bg-slate-100 p-2 rounded-xl md:mx-0 mx-auto flex"
                  >
                    <RiSunLine size={25} color="black" />
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-slate-100 p-2 rounded-xl md:mx-0 mx-auto flex h-[25px] w-[25px]"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
