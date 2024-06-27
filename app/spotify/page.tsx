/* eslint-disable @next/next/no-img-element */
// import Layout from "../components/Layout";
// "use client"
import NowPlaying from "@/components/NowPlaying"
import TopArtists from "@/components/TopArtists"
import TopTracks from "@/components/TopTracks"
import Link from "next/link"
// import Tip from "@/components/Tip"

async function getData() {
  const res = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=1month`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const resYear = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=12month`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  const response = await res.json()
  const responseYear = await resYear.json()

  const artists = response.topartists.artist
  const artistsYear = responseYear.topartists.artist
  const topArtists = artists.map((artist) => {
    return {
      name: artist.name,
      playcount: artist.playcount,
      url: artist.url,
    }
  })
  const topArtistsYear = artistsYear.map((artist) => {
    return {
      name: artist.name,
      playcount: artist.playcount,
      url: artist.url,
    }
  })
  return { data: topArtists, year: topArtistsYear }
  // return topArtists
  // if (res.status !== 200) {
  //   return new Response(JSON.stringify(await res.json()), {
  //     status: res.status,
  //   })
  // }

  // const response = await res.json()
  // console.log(response)
  // const artists = response.topartists.artist
  // console.log(artists)
  // const topArtists = artists.map((artist) => {
  // return {
  // name: artist.name,
  // playcount: artist.playcount,
  // url: artist.url,
  // }
  // })
  // console.log(topArtists)
}

export default async function Spotify() {
  const { data, year } = await getData()

  console.log(data)
  return (
    <div className="min-h-screen h-full p-8 flex flex-col md:mx-auto mx-1 font-circular">
      <section className="flex flex-col  mt-16 md:mt-0 prose gap-4">
        <div
          className="flex flex-col md:w-1/2
        w-full mx-auto"
        >
          {/* <Tip /> */}
          <h1 className="dark:text-zinc-200 text-zinc-900 leading-none mb-3 font-bold text-5xl">
            Spotify Stats
          </h1>
          <p className="dark:text-zinc-400 text-zinc-800 m-0 leading-tight text-2xl font-semibold">
            My Spotify stats
          </p>
        </div>
        <div
          className="flex flex-col lg:w-1/2 md:w-auto
        w-full mx-auto"
        >
          <NowPlaying />
        </div>
        <div className="flex space-x-0 md:space-x-4 md:flex-row flex-col md:space-y-0 space-y-4 justify-center items-center">
          <div className="flex flex-col justify-between gap-2 p-4 rounded-lg shadow-xl dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 md:w-1/2 w-full">
            <div>
              <h2 className="m-0 text-xl font-black dark:text-zinc-200 text-zinc-900">
                Top Artists
              </h2>

              <div className="flex flex-col ">
                <select name="" id="">
                  <option value="Month">Month</option>
                  <option value="Year">Year</option>
                </select>

                {/* {Array.isArray(data) &&
                  data.map((artist, index) => (
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
                  ))} */}
                {Array.isArray(year) &&
                  year?.map((artist, index) => (
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
            </div>
          </div>
        </div>
        {/* <TopArtists /> */}
        <TopTracks />
        {/* </div> */}
      </section>
    </div>
  )
}
