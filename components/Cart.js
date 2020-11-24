import React, { useContext, useState } from 'react'
import { SongsContext } from "../context/songContext"
import trash from '../assets/trash.svg'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cartItems, removeSongsFromCart, emptyCart } = useContext(SongsContext)
  const [ buttonTextContent, setButtonTextContet ] = useState("By Now")

  const totalPrice = cartItems.reduce((acc,song) => {
    return acc + song.price
  }, 0)

  function bySongs () {
    setTimeout(() => {
      setButtonTextContet("Buy Now")
      emptyCart()
    }, 5000)
    setButtonTextContet("Buying.....")
  }

  const cartItemsElements = cartItems.map((song, index) => {
    return (<li className="cart-songs" key={index}>
      <img 
        src={trash} 
        alt="trash" 
        onClick={() => removeSongsFromCart(song.id)} 
        className="trash" 
      />
      <div>
        <h3>{song.title}</h3>
        <h5>{song.artist}</h5>
      </div>
      <p>URO {song.price}</p>
    </li>)
  })
  
  const buyButton = cartItemsElements.length > 0
        ? <div>
            <button className="buy" onClick={bySongs}>{buttonTextContent}</button>
            <p className="total-price">Total price : {totalPrice.toLocaleString("en-US", {style: "currency", currency: "URO"})}</p>
          </div>
        : <div>
            <h3>Add Songs to buy here</h3>
            <Link to="/">
              <button>Click me to add songs</button>
            </Link>
          </div>

  return (
    <div>
      {cartItemsElements}
      {buyButton}
    </div>
  )
}
