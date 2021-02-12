import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'

import {
  Container,
  Title,
  ListContainer,
  Artist,
  SongsTitle,
  Link,
  ListItem,
} from './styles/styleName'

export default function StyleName ({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

StyleName.Title = function StyleNameTitle ({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

StyleName.ListContainer = function StyleNameListContainer ({ children, ...restProps }) {
  return <ListContainer { ...restProps }>{ children }</ListContainer>
}

StyleName.Artist = function StyleNameArtist ({ children, ...restProps }) {
  return <Artist { ...restProps }>{ children }</Artist>
}

StyleName.SongsTitle = function StyleNameSongsTitle ({ children, ...restProps }) {
  return <SongsTitle { ...restProps }>{ children }</SongsTitle>
}

StyleName.Link = function StyleNameLink ({ to, children, ...restProps }) {
  return <Link { ...restProps }>
    <ReachRouterLink to={to}>{ children }</ReachRouterLink>
  </Link>
}

StyleName.ListItem = function StyleNameListItem ({ children, ...restProps }) {
  return <ListItem { ...restProps }>{ children }</ListItem>
}