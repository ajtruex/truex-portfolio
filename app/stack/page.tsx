import React from "react"
import Image from "next/image"
import Link from "next/link"

const STACK_ITEMS = [
  {
    name: "Raycast",
    image: "/raycast-logo.png",
    link: "https://raycast.com/",
  },
  {
    name: "Obsidian",
    image: "/obsidian-logo.svg",
    link: "https://obsidian.md/",
  },
  {
    name: "VS Code",
    image: "/vscode-logo.png",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Spotify",
    image: "/spotify-logo.png",
    link: "https://www.spotify.com/",
  },
  {
    name: "iTerm2",
    image: "/iterm-logo.png",
    link: "https://iterm2.com/",
  },
]

const Stack = () => {
  return (
    <div className="mt-20  flex flex-col justify-center md:px-5 lg:mt-32">
      <div className="flex flex-col items-start space-y-5 md:px-5">
        <h1 className="text-5xl font-bold mb-2">Apps</h1>
        <h4 className="text-2xl font-semibold text-[#888888]">
          Software I use
        </h4>
      </div>
      <div className="mt-10 grid gap-10 justify-items-center md:justify-items-start md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-x-10 lg:gap-y-10">
        {STACK_ITEMS.map((item, idx) => {
          return (
            <Link
              href={item.link}
              key={idx}
              target="_blank"
              className="group flex cursor-pointer flex-col space-y-5 rounded-2xl bg-gray-500 p-5 dark:bg-[#111111] w-[200px] md:w-full"
            >
              {/* <div
                key={idx}
                className="group flex cursor-pointer flex-col space-y-5 rounded-2xl bg-gray-500 p-5 dark:bg-[#111111] w-[200px] md:w-full"
              > */}
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={70}
                className="transform self-center border-none text-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
              <div className="flex flex-col items-start space-y-2">
                <h3 className="font-medium text-lg">{item.name}</h3>
              </div>
              {/* </div> */}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Stack
