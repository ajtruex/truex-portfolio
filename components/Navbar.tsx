"use client"
import React, { useState } from "react"
import Image from "next/image"
// import { Link } from "react-scroll/modules"
import Link from "next/link"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

// interface NavItem {
//   label: string
//   page: string
// }

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

  return (
    //     <div className="overflow-hidden mx-auto max-w-5xl flex-col align-center justify-center py-8 px-5 xl:px-0 ">
    //       <div className="flex flex-col items-start md:px-5">
    //         <div className="flex cursor-pointer flex-row  items-center justify-center space-x-3">
    //                     <Link to="home">

    //               <h2 className="text-2xl font-bold mr-4 mx-4">Andrew Truex</h2>

    //           </Link>
    //         </div>
    //         <div className="flex w-full items-center justify-center lg:relative">
    //           <nav className="fixed z-10 cursor-pointer flex-row items-center  overflow-hidden rounded-full border bg-white bg-opacity-95 px-1 py-4 shadow-xl backdrop-blur-sm backdrop-filter dark:border-slate-100/10 dark:bg-black dark:bg-opacity-75 lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:transform  top-8">
    // {NAV_ITEMS.map((item, idx) => {
    //                   return (
    //                     <Link
    //                       key={idx}
    //                       to={item.page}
    //                       className={
    //                         "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
    //                       }
    //                       activeClass="active"
    //                       spy={true}
    //                       smooth={true}
    //                       offset={-100}
    //                       duration={500}
    //                       onClick={() => setNavbar(!navbar)}
    //                     >
    //                       {item.label}
    //                     </Link>
    //                   )
    //                 })}
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    // <nav className="fixed z-10 cursor-pointer flex-row items-center  overflow-hidden rounded-full border bg-white bg-opacity-95 px-1 py-4 shadow-xl backdrop-blur-sm backdrop-filter dark:border-slate-100/10 dark:bg-black dark:bg-opacity-75 lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:transform  top-8">
    //   <ul className="flex space-x-0 lg:space-x-2">
    //     <li className="group relative">
    //       <a
    //         className="px-3 text-sm font-medium tracking-wide transition duration-300 ease-in-out dark:hover:text-primary md:px-6 md:text-base text-secondary dark:text-secondary"
    //         href="/"
    //       >
    //         Home
    //       </a>
    //     </li>
    //     <li className="group relative">
    //       <a
    //         className="px-3 text-sm font-medium tracking-wide transition duration-300 ease-in-out dark:hover:text-primary md:px-6 md:text-base text-secondary dark:text-secondary"
    //         href="/shop"
    //       >
    //         Shop
    //       </a>
    //     </li>
    //     <li className="group relative">
    //       <a
    //         className="px-3 text-sm font-medium tracking-wide transition duration-300 ease-in-out dark:hover:text-primary md:px-6 md:text-base text-secondary dark:text-secondary"
    //         href="/blogs"
    //       >
    //         Blogs
    //       </a>
    //     </li>
    //     <li className="group relative">
    //       <a
    //         className="px-3 text-sm font-medium tracking-wide transition duration-300 ease-in-out dark:hover:text-primary md:px-6 md:text-base text-black dark:text-primary"
    //         href="/stack"
    //       >
    //         Stack
    //         <div
    //           className="underline"
    //           data-projection-id="5"
    //           // style="transform: none; transform-origin: 50% 50% 0px;"
    //         ></div>
    //       </a>
    //     </li>
    //     <li className="group relative">
    //       <a
    //         className="px-3 text-sm font-medium tracking-wide transition duration-300 ease-in-out dark:hover:text-primary md:px-6 md:text-base text-secondary dark:text-secondary"
    //         href="/links"
    //       >
    //         Contact
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
    // <header className="w-full mx-auto px-4 sm:px-20 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600 dark:text-white">
    // <div className="overflow-hidden mx-auto max-w-5xl flex-col align-center justify-center py-8 px-5 xl:px-0">
    <div className="flex flex-col items-center md:items-start  md:px-5">
      <div className="flex cursor-pointer flex-row  items-center justify-center space-x-3">
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
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
      </div>

      <div
        // className="fixed z-10 cursor-pointer flex-row items-center  rounded-full border bg-white bg-opacity-95 px-6 py-2 shadow-xl backdrop-blur-sm backdrop-filter dark:border-slate-100/10 dark:bg-black dark:bg-opacity-75 lg:left-1/2 md:flex lg:-translate-x-1/2 lg:transform ml-12 top-8 hidden left-1/4"
        className={`fixed z-10 cursor-pointer flex-row items-center  rounded-full border bg-white bg-opacity-95 px-6 py-2 shadow-xl backdrop-blur-sm backdrop-filter dark:border-slate-100/10 dark:bg-black dark:bg-opacity-75 lg:left-1/2 md:flex lg:-translate-x-1/2 lg:transform ml-12 top-8 left-1/4 block ${
          navbar ? "block left-4" : "hidden"
        }`}
      >
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    href={item.page}
                    className={
                      "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                    }
                  >
                    {item.label}
                  </Link>
                )
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl text-black"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // {/* // </header> */}
  )
}

export default Navbar
