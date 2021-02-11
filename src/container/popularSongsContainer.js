import React from 'react'
import { connect } from 'react-redux'

import { PopularSongs } from '../components'
import HeaderContianer from './HeaderContainer'

const PopularSongsContainer = ({ allSongs }) => {
  return (
    <>
      <HeaderContianer />
      <PopularSongs>
        { allSongs.map(item => (
          <PopularSongs.Item key={ item.id } item={ item }/>
        ))}
      </PopularSongs>
    </>
  )
}

export default connect(({ allSongs }) => ({ allSongs }))(PopularSongsContainer)
