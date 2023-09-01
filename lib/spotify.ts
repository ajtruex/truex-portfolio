export async function getNpOrRpSong() {
  return fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=2`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}

export async function getTopArtists() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=1month`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}
export async function getTopArtistsYear() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=1year`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}
export async function getTopTracks() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=1month`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}
