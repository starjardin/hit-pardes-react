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
          <PopularSongs.Item key={ item.id }>
            <PopularSongs.Column>
              <PopularSongs.Favourite />
            </PopularSongs.Column>
            <PopularSongs.Column>
              <PopularSongs.SongTitle>{ item.title }</PopularSongs.SongTitle>
              <PopularSongs.SongArtist>{ item.artist }</PopularSongs.SongArtist>
            </PopularSongs.Column>
            <PopularSongs.Column>
              <PopularSongs.Button>Up</PopularSongs.Button>
              <PopularSongs.Button>Down</PopularSongs.Button>
            </PopularSongs.Column>
            <PopularSongs.Column>
              <PopularSongs.Cart />
            </PopularSongs.Column>
            <PopularSongs.Column>
              <PopularSongs.Lyrics>...</PopularSongs.Lyrics>
            </PopularSongs.Column>
          </PopularSongs.Item>
        ))}
      </PopularSongs>
    </>
  )
}

export default connect(
  (state) => ({
    allSongs: state.allSongs
  }), null
)(PopularSongsContainer)
