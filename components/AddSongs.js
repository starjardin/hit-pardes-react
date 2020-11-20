import React, { useState } from 'react'

export default function AddSongs() {
  const [newSongs, setNewSongs] = useState({})
  function handleSubmit (e) {
    e.preventDefault()
    const { name, value } = e.target
    console.log(e.target);
    setNewSongs({
      [name] : value
    })
  }
  console.log(newSongs);
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title"/>
      <input name="artist" placeholder="Artist"/>
      <input name="price" placeholder="Price"/>
      <select>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>
      <textarea name="lyrics" placeholder="Lyrics"/>
      <button className="btn-submit">add</button>
    </form>
  )
}
