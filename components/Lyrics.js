import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { SongsContext } from "../context/songContext"

export default function Lyrics() {
  const { songId } = useParams()
  const { allSongs } = useContext(SongsContext)

  const songWithLyrics = allSongs.find(song => song.id === Number(songId))
  
  return (
    <div>
      <h3>Lyrics</h3>
        <p className="lyrics">{songWithLyrics.lyrics}</p>
    </div>
  )
}
