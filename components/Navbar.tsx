import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

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
]

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  const handleLinkClick = () => {
    setNavbar(false)
  }

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
          <div className="container lg:flex items-center space-x-2 hidden">
            <h2 className="text-2xl font-bold mr-4">Andrew Truex</h2>
          </div>
        </Link>
        <div className="md:hidden ">
          <button
            onClick={() => setNavbar(!navbar)}
            className={`

          ${navbar ? "ml-24 mr-8" : "ml-0 mr-0"}
          `}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed z-10 cursor-pointer flex-row items-center md:rounded-full rounded-xl border bg-white bg-opacity-95 px-6 py-2 shadow-xl backdrop-blur-sm backdrop-filter dark:border-slate-100/10 dark:bg-black dark:bg-opacity-75 lg:left-1/2 md:flex lg:-translate-x-1/2 lg:transform ml-12 top-8 left-1/4 ${
          navbar ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0">
          <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  href={item.page}
                  className={
                    "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                  }
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )
            })}
            {currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-slate-100 p-2 rounded-xl md:ml-0 ml-2.5"
              >
                <RiSunLine size={25} color="black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-2 rounded-xl text-black md:ml-0 ml-2.5"
              >
                <RiMoonFill size={25} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
