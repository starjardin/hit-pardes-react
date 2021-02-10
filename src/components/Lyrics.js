import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { SongsContext } from "../context/songContext"

export default function Lyrics() {
  const { songId } = useParams()
  const { allSongs } = useContext(SongsContext)

  const songWithLyrics = allSongs.find(song => song.id === Number(songId))
  const brk = songWithLyrics.lyrics.split(" ~ ").join("<br>")
  const res = brk.replace("~" , "<br />")
  
  return (
    <div>
      <h3>Lyrics</h3>
        <p className="lyrics">{res}</p>
    </div>
  )
}

//https://www.tutorialspoint.com/How-to-use-a-line-break-in-array-values-in-JavaScript#:~:text=To%20add%20a%20line%20break%20in%20array%20values%20for%20every,%3E%20for%20each%20occurrence%20of%20~.