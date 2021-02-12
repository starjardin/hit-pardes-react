import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {StyleName} from '../components'

export default function StyleNameContainer() {
  const allSongs = useSelector(state => state.allSongs)
  const { styleName } = useParams()
  console.log(styleName);

  const songsFilterdByStyle = allSongs.filter(song => (
    song.style.toLowerCase() === styleName.toLowerCase()
  ))
  
  return (
    <StyleName lassName="style-container">
      <StyleName.Title className="style-header"> 🎧{styleName}</StyleName.Title>
      <StyleName.ListContainer>
        {songsFilterdByStyle.map(song => (
          <StyleName.Link to={`/song/${song.id}`} key={song.id}>
            <StyleName.ListItem>
              <StyleName.SongsTitle className="style-song-title">{song.title}</StyleName.SongsTitle>
              <StyleName.Artist>{song.artist}</StyleName.Artist>
            </StyleName.ListItem>
          </StyleName.Link>
        ))}
      </StyleName.ListContainer>
    </StyleName>
  )
}
