import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SongsContext } from '../context/songContext'

export default function Styles() {
  const { allSongs } = useContext(SongsContext)

  const songs = allSongs.map(song => song.style)
  const allStyles = [...new Set (songs)]

  const listOfStylesElem = allStyles.map((style, index) => (
    <p key={index}>🎧 
      <Link to={`/styles/${style}`}>{style}</Link>
    </p>
  ))
  return (
    <div className="styles">
      {listOfStylesElem}
    </div>
  )
}
