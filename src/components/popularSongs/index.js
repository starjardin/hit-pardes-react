import React from 'react'

import { Container, Item } from './styles/popularSongsStyles'

const PopularSongs = ({children, ...restProps }) => {
  return (
    <Container { ...restProps }>{ children }</Container>
  )
}

PopularSongs.Item = function PopularSongsItem ({ item, children, ...restProps }) {
  return (
    <Item { ...restProps }>{ item.title }</Item>
  )
}

export default PopularSongs