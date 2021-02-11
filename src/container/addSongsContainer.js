import React from 'react'

import { AddSongs } from '../components'
import HeaderContianer from './HeaderContainer'

const AddSongsContainer = () => {
  return (
    <>
      <HeaderContianer />
      <AddSongs>
        <AddSongs.Form>
          <AddSongs.Input
             type="text" name="title" placeholder="Title" required 
          >
          </AddSongs.Input>
          <AddSongs.Input
            type="text" name="artist" placeholder="Artist"
          >
          </AddSongs.Input>
          <AddSongs.Input
            type="number" name="price" placeholder="Price"
          >
          </AddSongs.Input>
          <AddSongs.Select>
            <AddSongs.Option>Hello</AddSongs.Option>
            <AddSongs.Option>Hello</AddSongs.Option>
            <AddSongs.Option>Hello</AddSongs.Option>
            <AddSongs.Option>Hello</AddSongs.Option>
          </AddSongs.Select>
          <AddSongs.SubmitButton>
            Add
          </AddSongs.SubmitButton>
        </AddSongs.Form>
      </AddSongs>
    </>
  )
}

export default AddSongsContainer