import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <h1>🔥 Hit Parades, Best Musics 2021 🔥</h1>
      <div className="header-container" >
        <Link to="/" >
          <h3 className="header-heading">Pular Songs</h3>
        </Link>
        <Link to="/styles" >
          <h3 className="header-heading">Styles</h3>
        </Link>
        <Link to="/add" >
          <h3 className="header-heading">Add</h3>
        </Link>
        <Link to="/cart" >
          <h3 className="header-heading">Cart</h3>
        </Link>
      </div>
    </>
  )
}
