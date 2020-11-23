import React, { useState, useEffect } from 'react'
import songs from '../songs.js'
const SongsContext = React.createContext();

function SongsContextProvider ({children}) {
  const [ allSongs, setAllSongs ] = useState([])
  const [ sortedSongs, setSortedSongs ] = useState([])
  const [ cartItems, setCartItems ] = useState([])

  useEffect (() => {
    setAllSongs(songs)
  }, [])

  useEffect(() => {
    setSortedSongs(allSongs.sort((a, b) => {
      const like = a.like - a.unlike
      const unlike = b.like - b.unlike
      return unlike - like
    }))
  }, [allSongs])

  function addToCart (songId) {
    const added = allSongs.map(song => {
      if (song.id === songId) {
        return {
          ...song,
          addedToCart : !song.addedToCart
        }
      }
      return song
    })
    setAllSongs(added)
  }

  function removeSongsFromCart (songId) {
    setCartItems(cartItems.filter(song => song.id !== songId))
    const removedSongs = cartItems.find(song => song.id === songId)
    removedSongs.addedToCart = false
  }

  useEffect (() => {
    setCartItems(allSongs.filter(song => song.addedToCart))
  }, [allSongs])

  function emptyCart () {
    setCartItems([])
  }

  function toggleFavorite (songId) {
    const favoriteSongs = allSongs.map(song => {
      if (song.id === songId) {
        return {
          ...song,
          favorite : !song.favorite
        }
      }
      return song
  })
  setAllSongs(favoriteSongs)
  }

  function funcLikeSongs (songId) {
    const likeSongs = allSongs.map(song => {
      if (song.id === songId) {
        return {
          ...song,
          like: song.like + 1,
          }
        }
        return song;
    });
    setAllSongs(likeSongs);
  }

  function funcUnlikeSongs (songId) {
    const unlikeSongs = allSongs.map(song => {
      if (song.id === songId) {
        return {
          ...song,
          unlike: song.unlike + 1,
          }
        }
        return song;
    });
    setAllSongs(unlikeSongs);
  }

  if (!allSongs.length) return null

  return (
    <SongsContext.Provider
      value={{
        allSongs, sortedSongs,
        setAllSongs, cartItems, addToCart, toggleFavorite, funcLikeSongs, funcUnlikeSongs, removeSongsFromCart, emptyCart
      }}
    >
      {children}
    </SongsContext.Provider>
  )
}

export { SongsContextProvider, SongsContext }