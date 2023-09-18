import React from "react"
import Link from "next/link"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"
import { MdOutlineLogoDev } from "react-icons/md"
import { FaDev } from "react-icons/fa"
import Icon from "./Icon"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-black dark:bg-neutral-200 border-0" />
      <div className="mx-auto  p-4 flex flex-col text-center  md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-black dark:text-neutral-100">
          © 2023 Andrew Truex<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <Link
            href="https://github.com/ajtruex"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer  dark:text-neutral-100"
              size={30}
            />
          </Link>
          <Link
            href="https://twitter.com/ATrueDev"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
              size={30}
            />
          </Link>
          <Link href="https://read.cv/truex" rel="noreferrer" target="_blank">
            {/* <Image
              src="/icon.svg"
              alt="read.cv"
              width={30}
              height={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100 fill-neutral-900 stroke-neutral-900"
            /> */}
            <Icon
              // src="/readcv.svg"
              // alt="read.cv"
              width={30}
              height={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:fill-neutral-100"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ajtruex/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
              size={30}
            />
          </Link>

          <Link href="https://dev.to/truex" rel="noreferrer" target="_blank">
            <FaDev
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
              size={30}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
