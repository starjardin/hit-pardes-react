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
    songIsAddedToCart,
    funcLikeSongs,
    addToCart,
    toggleFavorite
  } = useContext(SongsContext)
  
  const cartSource = songIsAddedToCart ? fullShoppingChart : shoppingChart
  const heartSource = song.favorite ? heart : fullHeart

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
      <img 
        src={cartSource} 
        onClick={() => addToCart(song)} 
        alt="shopping-chart" 
        className="shopping-cart"
      />
      <Link to={`/song/${song.id}`} key={song.id}>
        <img src={dotsHorizontal} alt="dots" />
      </Link>      
    </li>
  )
}
