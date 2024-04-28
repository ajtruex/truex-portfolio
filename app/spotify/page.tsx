/* eslint-disable @next/next/no-img-element */
// import Layout from "../components/Layout";
import NowPlaying from "@/components/NowPlaying"
import TopArtists from "@/components/TopArtists"
import TopTracks from "@/components/TopTracks"

export default function Spotify() {
  return (
    <div className="min-h-screen h-full p-8 flex flex-col md:mx-auto mx-1 font-circular">
      <section className="flex flex-col justify-between mt-16 md:mt-0 prose gap-4">
        <div>
          <h1 className="dark:text-zinc-200 text-zinc-900 leading-none mb-3 font-bold text-5xl">
            Spotify Stats
          </h1>
          <p className="dark:text-zinc-400 text-zinc-800 m-0 leading-tight text-2xl font-semibold">
            My Spotify stats
          </p>
        </div>
        <NowPlaying />
        <TopArtists />
        <TopTracks />
      </section>
    </div>
  )
}
