import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Lyrics } from '../components'
import HeaderContianer from './HeaderContainer'

export default function LyricsContainer () {
  const allSongs = useSelector(state => state.allSongs)
  const { songId } = useParams()

  const songWithLyrics = allSongs.find(song => song.id === Number(songId))
  const brk = songWithLyrics.lyrics.split(" ~ ").join("<br>")
  const res = brk.replace("~" , "<br />")
  
  return (
    <>
      <HeaderContianer />
      <Lyrics>
        <Lyrics.Title>Lyrics</Lyrics.Title>
          <Lyrics.Text className="lyrics">{res}</Lyrics.Text>
      </Lyrics>
    </>
  )
}