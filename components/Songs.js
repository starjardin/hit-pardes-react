import React, { useContext } from 'react'
import { SongsContext } from '../context/songContext'
import SongsLists from './songsLists'

export default function Songs() {
  const { allSongs } = useContext(SongsContext)
  return (
    <ul>
      {allSongs.map(song => (
        <SongsLists key={song.id} song={song}/>
      ))}
    </ul>
  )
}
