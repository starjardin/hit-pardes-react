import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SongsContext } from "../context/songContext"

export default function StyleName() {
  const { styleName } = useParams()
  const { allSongs } = useContext(SongsContext)
  const songsFilterdByStyle = allSongs.filter(song => (
    song.style.toLowerCase() === styleName.toLowerCase()
  ))
  
  return (
    <div>
      <h3>{styleName}</h3>
      <ul>
        {songsFilterdByStyle.map(song => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <li>
              <h2>{song.title}</h2>
              <h4>{song.artist}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
