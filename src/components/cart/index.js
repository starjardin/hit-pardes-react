import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'

import {
  Container,
  Image,
  ListItem,
  Fragment,
  Price,
  Artist,
  Button,
  SongTitle,
  Link,
} from './styles/cartStyles'

export default function Cart ({children, ...restProps}) {
  return <Container { ...restProps }>{ children }</Container>
}

Cart.Image = function CartImage ({ ...restProps }) {
  return <Image {...restProps}/>
}

Cart.ListItem = function CartListItem ({ children, ...restProps }) {
  return <ListItem { ...restProps } >{ children }</ListItem>
}

Cart.Fragment = function CartFragment ({ children, ...restProps }) {
  return <Fragment { ...restProps } >{ children }</Fragment>
}

Cart.Price = function CartPrice ({ children, ...restProps }) {
  return <Price { ...restProps } >{ children }</Price>
}

Cart.Artist = function CartArtist ({ children, ...restProps }) {
  return <Artist { ...restProps } >{ children }</Artist>
}

Cart.Button = function CartButton ({ children, ...restProps }) {
  return <Button { ...restProps } >{ children }</Button>
}
Cart.SongTitle = function CartSongTitle ({ children, ...restProps }) {
  return <SongTitle { ...restProps } >{ children }</SongTitle>
}

Cart.Link = function CartLink ({ to, children, ...restProps }) {
  return <Link { ...restProps } >
    <ReachRouterLink to={to}>{ children }</ReachRouterLink>
  </Link>
}