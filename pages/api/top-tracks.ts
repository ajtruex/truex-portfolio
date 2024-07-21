import { getTopTracks } from "../../lib/spotify"

export const config = {
  runtime: "edge",
}

export default async function handler(req) {
  const resp = await getTopTracks()

  if (resp.status !== 200) {
    return new Response(JSON.stringify(await resp.json()), {
      status: resp.status,
    })
  }

  const response = await resp.json()

  const tracks = response.toptracks.track

  const topTracks = tracks.map((track) => {
    return {
      name: track.name,
      playcount: track.playcount,
      url: track.url,
      artist: track.artist.name,
    }
  })

  return new Response(JSON.stringify(topTracks), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "cache-control": "public, s-maxage=86400",
    },
  })
}
