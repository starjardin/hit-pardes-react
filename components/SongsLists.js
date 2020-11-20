import React from 'react'

export default function SongsLists({song}) {
  return (
    <li>
      <div>
        <h2>{song.title}</h2>
        <p>{song.artist}</p>
      </div>
      <p>{song.like}</p>
      <p>{song.unlike}</p>
      <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    </li>
  )
}
