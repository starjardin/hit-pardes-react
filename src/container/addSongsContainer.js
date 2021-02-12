import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSongs } from '../actions'

import { AddSongs } from '../components'
import HeaderContianer from './HeaderContainer'

const AddSongsContainer = () => {
  const allSongs = useSelector(state => state.allSongs)
  const dispatch = useDispatch()
  const allStyles = allSongs.map(song => song.style)
  const existedStyles = [ ...new Set(allStyles) ]

  function functionAddNewSongs (e) {
    e.preventDefault()
    const { title, artist, price, lyrics , style} = e.target
    if (
      title.value.trim() === "" 
      && artist.value.trim() === ""
      && lyrics.value === ""
    ) return
      
    const newSongs = {
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
    }
    dispatch(addSongs(newSongs))
    e.target.reset()
  }

  return (
    <>
      <HeaderContianer />
      <AddSongs>
        <AddSongs.Form onSubmit={functionAddNewSongs}>
          <AddSongs.Input
             type="text" name="title" placeholder="Title" required 
          />
          <AddSongs.Input
            type="text" name="artist" placeholder="Artist"
          />
          <AddSongs.Input
            type="number" name="price" placeholder="Price"
          />
          <AddSongs.Select>
            { existedStyles.map((i, index) => (
              <AddSongs.Option key={index} value={ i }>{ i }</AddSongs.Option>
            ))}
          </AddSongs.Select>
          <AddSongs.Textarea
            name="lyrics" placeholder="Lyrics" required id="lyrics"
          />
          <AddSongs.Label>Add more than fifty digits</AddSongs.Label>
          <AddSongs.SubmitButton>
            Add
          </AddSongs.SubmitButton>
        </AddSongs.Form>
      </AddSongs>
    </>
  )
}

export default AddSongsContainer