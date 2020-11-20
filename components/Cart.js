import React, { useContext } from 'react'
import { SongsContext } from "../context/songContext"
import trash from '../assets/trash.svg'
export default function Cart() {
  const { cartItems } = useContext(SongsContext)
  const totalPrice = cartItems.reduce((acc, value) => {
    
  }, 0)
  console.log(totalPrice);
  const cartItemsElements = cartItems.map((song, index) => {
    return (<li className="cart-songs" key={index}>
      <img src={trash} alt="trash" />
      <div>
        <h3>{song.title}</h3>
        <h5>{song.artist}</h5>
      </div>
      <p>${song.price}</p>
    </li>)
  })
  return (
    <div>
      {cartItemsElements}
    </div>
  )
}
