import React, { useContext, useEffect } from 'react'
import { SongsContext } from '../context/songContext'
import SongsLists from './songsLists'

export default function Songs() {
  const { sortedSongs } = useContext(SongsContext)

  return (
    <ul>
      {sortedSongs.map((song, index) => (
        <SongsLists key={index} song={song}/>
      ))}
    </ul>
  )
}
