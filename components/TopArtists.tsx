"use client"
import useSWR from "swr"
import fetcher from "../lib/fetcher"
import Link from "next/link"
import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

export type TopArtistsResponse = {
  name: string
  playcount: string
  url: string
}

export default function TopArtists() {
  const [to, setTo] = useState("Month")
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useSWR<TopArtistsResponse[]>("/api/top-artists", fetcher)
  const { data: year } = useSWR<TopArtistsResponse[]>(
    "/api/top-artists-year",
    fetcher
  )

  return (
    <div className="flex space-x-0 md:space-x-4 md:flex-row flex-col md:space-y-0 space-y-4 justify-center items-center">
      <div className="flex flex-col justify-between gap-2 p-4 rounded-lg shadow-xl dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 md:w-1/2 w-full">
        <div>
          <h2 className="m-0 text-xl font-black dark:text-zinc-200 text-zinc-900">
            Top Artists
          </h2>
          <div className="relative">
            <button
              className="bg-zinc-800 p-2 rounded hover:bg-zinc-800 text-sm dark:text-zinc-400 text-zinc-700"
              onClick={() => setIsOpen(!isOpen)}
              value={to}
            >
              {to}
              <FiChevronDown className="inline ml-1" />
            </button>
            {isOpen && (
              <div className="absolute mt-1 m-0 text-sm dark:text-zinc-400 text-zinc-700 rounded p-1 shadow bg-zinc-800">
                <button
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => (
                    setTo((e.target as HTMLButtonElement).value),
                    setIsOpen(false)
                  )}
                  className="block w-full p-2 rounded  hover:bg-gray-100"
                  value={"Month"}
                >
                  Month
                </button>
                <button
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => (
                    setTo((e.target as HTMLButtonElement).value),
                    setIsOpen(false)
                  )}
                  className="block w-full p-2 rounded hover:bg-gray-100"
                  value={"Year"}
                >
                  Year
                </button>
              </div>
            )}
          </div>
          {to === "Month" ? (
            <div className="flex flex-col ">
              {data?.map((artist, index) => (
                <Link
                  href={artist.url}
                  key={index}
                  className="flex items-center justify-between p-2 duration-200 rounded-lg cursor-pointer dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 hover:shadow-lg"
                  target="_blank"
                >
                  <p className="m-0 dark:text-zinc-200 text-zinc-900">
                    {artist.name}
                  </p>
                  <p className="m-0 dark:text-zinc-200 text-zinc-900">
                    {artist.playcount}{" "}
                    <span className="dark:text-zinc-500 text-zinc-600">
                      plays
                    </span>
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col ">
              {year?.map((artist, index) => (
                <Link
                  href={artist.url}
                  key={index}
                  className="flex items-center justify-between p-2 duration-200 rounded-lg cursor-pointer dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 hover:shadow-lg"
                  target="_blank"
                >
                  <p className="m-0 dark:text-zinc-200 text-zinc-900">
                    {artist.name}
                  </p>
                  <p className="m-0 dark:text-zinc-200 text-zinc-900">
                    {artist.playcount}{" "}
                    <span className="dark:text-zinc-500 text-zinc-600">
                      plays
                    </span>
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <div className="flex flex-col justify-between md:w-1/2 w-full gap-2 p-4 rounded-lg shadow-xl dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200">
        <div>
          <h2 className="m-0 text-xl font-black dark:text-zinc-200 text-zinc-900">
            Top Artists
          </h2>
          <p className="m-0 text-sm dark:text-zinc-400 text-zinc-700">Month</p>
        </div>
        <div className="flex flex-col ">
          {data?.map((artist, index) => (
            <Link
              href={artist.url}
              key={index}
              className="flex items-center justify-between p-2 duration-200 rounded-lg cursor-pointer dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 hover:shadow-lg"
              target="_blank"
            >
              <p className="m-0 dark:text-zinc-200 text-zinc-900">
                {artist.name}
              </p>

              <p className="m-0 dark:text-zinc-200 text-zinc-900">
                {artist.playcount}{" "}
                <span className="dark:text-zinc-500 text-zinc-600">plays</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between md:w-1/2 w-full gap-2 p-4 rounded-lg shadow-xl dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200">
        <div>
          <h2 className="m-0 text-xl font-black dark:text-zinc-200 text-zinc-900">
            Top Artists
          </h2>
          <p className="m-0 text-sm dark:text-zinc-400 text-zinc-700">Year</p>
        </div>
        <div className="flex flex-col ">
          {year?.map((artist, index) => (
            <Link
              href={artist.url}
              key={index}
              className="flex items-center justify-between p-2 duration-200 rounded-lg cursor-pointer dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 hover:shadow-lg"
              target="_blank"
            >
              <p className="m-0 dark:text-zinc-200 text-zinc-900">
                {artist.name}
              </p>

              <p className="m-0 dark:text-zinc-200 text-zinc-900">
                {artist.playcount}{" "}
                <span className="dark:text-zinc-500 text-zinc-600">plays</span>
              </p>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  )
}
