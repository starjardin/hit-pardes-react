import React from 'react'
import { connect } from 'react-redux'

import { PopularSongs } from '../components'
import HeaderContianer from './HeaderContainer'
import { likeSong, dislikeSong } from '../actions'

const PopularSongsContainer = ({ allSongs, likeSong, dislikeSong }) => {
  return (
    <>
      <HeaderContianer />
      <PopularSongs>
        { allSongs.sort((a, b) => {
          const like = a.like - b.unlike
          const unlike = b.like - a.unlike
          return unlike - like
        }).map(item => (
          <PopularSongs.Item key={ item.id }>
            <PopularSongs.Column>
              <PopularSongs.Favourite>
                 {item.favorite && "favorited"}
              </PopularSongs.Favourite>
            </PopularSongs.Column>
            <PopularSongs.Column>
              <PopularSongs.SongTitle>{ item.title }</PopularSongs.SongTitle>
              <PopularSongs.SongArtist>{ item.artist }</PopularSongs.SongArtist>
            </PopularSongs.Column>
            <PopularSongs.Column display="flex">
              <PopularSongs.Button
                onClick={() => likeSong(item.id)}
              >
                { item.like }Up
              </PopularSongs.Button>
              <PopularSongs.Button
                onClick={() => dislikeSong(item.id)}
              >
                { item.unlike } Down
              </PopularSongs.Button>
            </PopularSongs.Column>
            <PopularSongs.Column>
              <PopularSongs.Cart>
                {item.addedToCart && "Added"}
              </PopularSongs.Cart>
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
  }), {
    likeSong,
    dislikeSong
  }
)(PopularSongsContainer)
