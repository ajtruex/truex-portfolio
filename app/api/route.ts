import { NextApiRequest, NextApiResponse } from "next"
import { getTopArtists } from "../../lib/spotify"

export async function GET(request: Request) {
  const resp = await getTopArtists()

  if (resp.status !== 200) {
    return new Response(JSON.stringify(await resp.json()), {
      status: resp.status,
    })
  }

  const response = await resp.json()

  const artists = response.topartists.artist
  console.log(artists)
  const topArtists = artists.map((artist) => {
    return {
      name: artist.name,
      playcount: artist.playcount,
      url: artist.url,
    }
  })

  return new Response(JSON.stringify(topArtists), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "cache-control": "public, s-maxage=86400",
    },
  })
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const resp = await getTopArtists()

//   if (resp.status !== 200) {
//     return new Response(JSON.stringify(await resp.json()), {
//       status: resp.status,
//     })
//   }

//   const response = await resp.json()

//   const artists = response.topartists.artist
//   console.log(artists)
//   const topArtists = artists.map((artist) => {
//     return {
//       name: artist.name,
//       playcount: artist.playcount,
//       url: artist.url,
//     }
//   })

//   return new Response(JSON.stringify(topArtists), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//       "cache-control": "public, s-maxage=86400",
//     },
//   })
// }
