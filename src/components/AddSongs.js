import React, { useState, useContext, useEffect } from 'react'
import { SongsContext } from "../context/songContext"

export default function AddSongs() {
  const { allSongs, setAllSongs } = useContext(SongsContext)
  const [newSongs, setNewSongs] = useState({})

  const songs = allSongs.map(song => song.style)
  const allStyles = [...new Set (songs)]

  function handleSubmit (e) {
    e.preventDefault()
    const { title, artist, price, lyrics , style} = e.target
    if (
      title.value.trim() === "" 
      && artist.value.trim() === ""
      && lyrics.value === ""
    ) return
    if (lyrics.value.trim().length < 50) {
      const textarea = document.querySelector("textarea")
      textarea.classList.add("error")
      return
    }
      
    setNewSongs({
      title : title.value,
      artist : artist.value,
      like : 0,
      unlike : 0,
      year : "",
      id : Date.now(),
      style : style.value,
      duration : "",
      favorite : false,
      price : price.value,
      lyrics : lyrics.value,
      addedToCart : false
    })
    // const textarea = document.querySelector("textarea")
    // textarea.classList.remove("error")
    e.target.reset()
  }

  useEffect (() => {
    if (!newSongs.title) return null
    setAllSongs(prevSongs => [...prevSongs, newSongs])
  }, [newSongs])

  return (
    <form action="#" onSubmit={handleSubmit} className="addSong">
      <input type="text" name="title" placeholder="Title" required />
      <input type="text" name="artist" placeholder="Artist" required />
      <input type="number" name="price" placeholder="Price" required />
      <input type="date" name="date" placeholder="Date" required />
      <select className="select" name="style">
        {allStyles.map((style, index) => {
          return <option key={index}  value={style}>{style}</option>
        })}
      </select>
      <textarea name="lyrics" placeholder="Lyrics" required id="lyrics"/>
      <label htmlFor="lyrics">Enter more than fifty character digits</label>
      <button className="btn-submit">add</button>
    </form>
  )
}
