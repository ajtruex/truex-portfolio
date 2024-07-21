/* eslint-disable @next/next/no-img-element */
// import Layout from "../components/Layout";
// "use client"
import NowPlaying from "@/components/NowPlaying"
import TopArtists from "@/components/TopArtists"
import TopTracks from "@/components/TopTracks"
// import Tip from "@/components/Tip"

export default function Spotify() {
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

        {/* <div className="flex flex-row w-full"> */}
        <TopArtists />
        <TopTracks />
        {/* </div> */}
      </section>
    </div>
  )
}
