import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { SongStyles } from '../components/'
import HeaderContianer from './HeaderContainer';

const SongsStylesContainer = () => {
  const allSongs = useSelector(state => state.allSongs)

  const songs = allSongs.map(song => song.style)
  const allStyles = [...new Set (songs)]

  const listOfStylesElem = allStyles.map((style, index) => (
    <p key={index}>🎧 
      <Link to={`/styles/${style}`}>{style}</Link>
    </p>
  ))
  return (
    <>
      <HeaderContianer />
      <SongStyles className="styles">
        {listOfStylesElem}
      </SongStyles>
    </>
  )
}

export default SongsStylesContainer