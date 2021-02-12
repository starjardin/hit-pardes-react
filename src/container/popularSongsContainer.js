import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import FullShoppingCart from '../assets/full-shopping-cart.svg'
import ShoppingCart from '../assets/shopping-cart.svg'
import heart from '../assets/heart.svg'
import fullHeart from '../assets/full-heart.svg'
import { PopularSongs } from '../components'
import HeaderContianer from './HeaderContainer'
import {
  likeSong,
  dislikeSong,
  addToCart,
  toggleFavorite,
} from '../actions'


const PopularSongsContainer = () => {
  const allSongs = useSelector(state => state.allSongs)
  const cartItems = useSelector(state => state.cartItems)
  const dispatch = useDispatch()
  
  function showCart (songId) {
    const isAlreadyInCart = cartItems.some(song => song.id === songId)
    if (isAlreadyInCart) {
      return <PopularSongs.Image 
        src={FullShoppingCart} 
        alt="full-shopping-chart" 
        className="shopping-cart"
      />
    } else {
      return <PopularSongs.Image 
        src={ShoppingCart} 
        alt="shopping-chart" 
        className="shopping-cart"
      />
    }
  }
  
  return (
    <>
      <HeaderContianer />
      <PopularSongs>
        { allSongs.sort((songA, songB) => {
          const like = songA.like - songA.unlike
          const unlike = songB.like - songB.unlike
          return unlike - like
        }).map(item => (
          <PopularSongs.Item key={ item.id }>
            <PopularSongs.Column>
              <PopularSongs.Favourite
                onClick={() => dispatch(toggleFavorite(item.id))}
              >
                 <PopularSongs.Image 
                  src={`${item.favorite ? heart : fullHeart}`} 
                />
              </PopularSongs.Favourite>
            </PopularSongs.Column>
            <PopularSongs.Column>
              <PopularSongs.SongTitle>{ item.title }</PopularSongs.SongTitle>
              <PopularSongs.SongArtist>{ item.artist }</PopularSongs.SongArtist>
            </PopularSongs.Column>
            <PopularSongs.Column display="flex">
              <PopularSongs.Button
                onClick={() => dispatch(likeSong(item.id))}
              >
                { item.like }Up
              </PopularSongs.Button>
              <PopularSongs.Button
                onClick={() => dispatch(dislikeSong(item.id))}
              >
                { item.unlike } Down
              </PopularSongs.Button>
            </PopularSongs.Column>
            <PopularSongs.Column>
              <PopularSongs.Cart
                onClick={() => (dispatch(addToCart(item)))}
              >
                {showCart(item.id)}
              </PopularSongs.Cart>
            </PopularSongs.Column>
            <PopularSongs.Column>
              <PopularSongs.Lyrics>
                <Link to={`/song/${item.id}`}>Lyrics</Link>
              </PopularSongs.Lyrics>
            </PopularSongs.Column>
          </PopularSongs.Item>
        ))}
      </PopularSongs>
    </>
  )
}

export default PopularSongsContainer;