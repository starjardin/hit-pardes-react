import React, { useContext } from 'react'
import { SongsContext } from "../context/songContext"
import trash from '../assets/trash.svg'
export default function Cart() {
  const { cartItems } = useContext(SongsContext)
  const totalPrice = cartItems.reduce((acc,song) => {
    return acc + song.price
  }, 0)

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
      {cartItemsElements.length > 0 &&
          <div>
            <button>By Now</button>
            <p>{totalPrice.toLocaleString("en-US", {style: "currency", currency: "URO"})}</p>
        </div>
      }
    </div>
  )
}
