import React from 'react'

import {
  Container,
  Item,
  Favourite,
  Column,
  Button,
  Cart,
  Lyrics,
  SongTitle,
  SongArtist,
} from './styles/popularSongsStyles'

const PopularSongs = ({children, ...restProps }) => {
  return (
    <Container { ...restProps }>{ children }</Container>
  )
}

PopularSongs.Item = function PopularSongsItem ({children, ...restProps }) {
  return (
    <Item { ...restProps }>{ children }</Item>
  )
}

PopularSongs.Favourite = function PopularSongsFavourite ({ children, ...restProps }) {
  return <Favourite { ...restProps } >{ children }</Favourite>
}

PopularSongs.Column = function PopularSongsColumn ({ children, ...restProps }) {
  return <Column { ...restProps } >{ children }</Column>
}

PopularSongs.Button = function PopularSongsButton ({ children, ...restProps }) {
  return <Button { ...restProps } >{ children }</Button>
}

PopularSongs.Cart = function PopularSongsCart ({ children, ...restProps }) {
  return <Cart { ...restProps } >{ children }</Cart>
}

PopularSongs.Lyrics = function PopularSongsLyrics ({ children, ...restProps }) {
  return <Lyrics { ...restProps } >{ children }</Lyrics>
}

PopularSongs.SongTitle = function PopularSongsSongTitle ({ children, ...restProps }) {
  return <SongTitle { ...restProps } >{ children }</SongTitle>
}

PopularSongs.SongArtist = function PopularSongsSongArtist ({ children, ...restProps }) {
  return <SongArtist { ...restProps } >{ children }</SongArtist>
}

/*

TODO:
  item>5children
  1-like div
  2-title and artist div > 2spans
  3-button div>buttons
  4-cart div
  5-lyrics div
 */

export default PopularSongs