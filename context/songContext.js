import React, { useState, useEffect } from 'react'
import songs from '../songs.js'
const SongsContext = React.createContext();

function SongsContextProvider ({children}) {
  const [ allSongs, setAllSongs ] = useState([])
  const [ sortedSongs, setSortedSongs ] = useState([])
  const [ cartItems, setCartItems ] = useState([])
  const [ songIsAddedToCart, setSonIsAddedToCart] = useState(false)
  const [like, setLike] = useState(0)
  const [unlike, setUnlike] = useState(0)

  function likeSong () {
    setLike(prev => prev + 1)
  }

  function unlikeSong () {
    setUnlike(prev => prev + 1)
  }
  
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

  function addToCart (newSongs) {
    setCartItems(prevSongs => [...prevSongs, newSongs])
  }
  console.log(cartItems);

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
        allSongs, sortedSongs, like, unlike,
        setAllSongs, likeSong, unlikeSong, cartItems, songIsAddedToCart, addToCart, toggleFavorite, funcLikeSongs, funcUnlikeSongs
      }}
    >
      {children}
    </SongsContext.Provider>
  )
}

export { SongsContextProvider, SongsContext }