import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { emptyCart, removeSongsFromCart } from '../actions'
import HeaderContianer from './HeaderContainer';
import trash from '../assets/trash.svg'
import { Cart } from "../components/";

const CartContainer = () => {
  const cartItems = useSelector(state => state.cartItems)
  const dispatch = useDispatch()
  const [ buttonTextContent, setButtonTextContet ] = useState("By Now")
  
  const totalPrice = cartItems.reduce((acc,song) => {
    return acc + song.price
  }, 0)
  
  function bySongs () {
    setTimeout(() => {
      setButtonTextContet("Buy Now")
      dispatch(emptyCart())
    }, 500 * cartItems.length)
    setButtonTextContet("Buying.....")
  }
  
  const cartItemsElements = cartItems.map((song, index) => {
    return (<Cart.ListItem className="cart-songs" key={index}>
      <Cart.Image
        src={trash} 
        alt="trash" 
        onClick={() => dispatch(removeSongsFromCart(song.id))} 
        className="trash" 
      />
      <Cart.Fragment>
        <Cart.SongTitle>{song.title}</Cart.SongTitle>
        <Cart.Artist>{song.artist}</Cart.Artist>
      </Cart.Fragment>
      <Cart.Price>URO {song.price}</Cart.Price>
    </Cart.ListItem>)
  })
  
  const buyButton = cartItemsElements.length > 0
        ? <Cart.Fragment>
      <Cart.Button
        className="buy"
        onClick={bySongs}
      >
        {buttonTextContent}
      </Cart.Button>
      <Cart.Price className="total-price">Total price : { totalPrice }</Cart.Price>
          </Cart.Fragment>
        : <Cart.Fragment>
            <Cart.SongTitle>Add Songs to buy here</Cart.SongTitle>
            <Cart.Link to="/">
              <Cart.Button>Click me to add songs</Cart.Button>
            </Cart.Link>
          </Cart.Fragment>
  
  return (
    <>
      <HeaderContianer />
      <Cart.Fragment>
        {cartItemsElements}
        {buyButton}
    </Cart.Fragment>
    </>
  );
}

export default CartContainer;
