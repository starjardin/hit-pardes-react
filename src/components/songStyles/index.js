import React from 'react'

import { Container } from './styles/songStyles'

export default function SongStyles ({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}