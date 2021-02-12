 import React from 'react'
 
 import { Container, Title, Text  } from './styles/lyrics'
 
export default function Lyrics ({ children, ...restProps }) {
  return <Container { ...restProps }>{ children } </Container>
}

Lyrics.Title = function LyricsTitle ({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

Lyrics.Text = function LyricsText ({ children, ...restProps }) {
  return <Text { ...restProps }>{ children }</Text>
}