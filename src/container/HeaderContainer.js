import React from 'react'

import { Header } from '../components'

export default function HeaderContianer () {
  return <>
    <Header>
      <Header.Title>
        <Header.Link to='/'>Popular Songs</Header.Link>
      </Header.Title>
      <Header.Title>
        <Header.Link to='/styles'>Styles</Header.Link>
      </Header.Title>
      <Header.Title>
        <Header.Link to='/add'>Add</Header.Link>
      </Header.Title>
      <Header.Title>
        <Header.Link to='/cart'>Cart</Header.Link>
      </Header.Title>
    </Header>
  </>
}
