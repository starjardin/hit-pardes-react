import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import  dotsHorizontal from "../assets/dots-horizontal.svg"
import  heart from "../assets/heart.svg"
import  fullHeart from "../assets/full-heart.svg"
import  shoppingChart from "../assets/shopping-cart.svg"
import  fullShoppingChart from "../assets/full-shopping-cart.svg"
import { SongsContext } from '../context/songContext'

export default function SongsLists({song}) {
  const { 
    funcUnlikeSongs,
    funcLikeSongs,
    toggleFavorite,
    addItemsToCart,
    cartItems
  } = useContext(SongsContext)

  const heartSource = song.favorite ? heart : fullHeart

  function showCart (songId) {
    const isAlreadyInCart = cartItems.some(song => song.id === songId)
    if (isAlreadyInCart) {
      return <img src={fullShoppingChart} alt="full-shopping-chart" className="shopping-cart"
      />
    } else {
      return <img src={shoppingChart} alt="shopping-chart" className="shopping-cart" />
    }
  }

  return (
    <li className="song-container">
      <img 
        src={heartSource} 
        alt="heart" 
        onClick={() => toggleFavorite(song.id)}
        className="favorite"
      />
      <div className="song-title">
        <h2>{song.title}</h2>
        <p>{song.artist}</p>
      </div>
      <p className="like" onClick={() => funcLikeSongs(song.id)}>
        {song.like}
      </p>
      <p className="unlike" onClick={() => funcUnlikeSongs(song.id)}>
        {song.unlike}
      </p>
      <div onClick={() => addItemsToCart(song)}>
        {showCart(song.id)}
      </div>
      <Link to={`/song/${song.id}`} key={song.id}>
        <img src={dotsHorizontal} alt="dots" />
      </Link>      
    </li>
  )
}
