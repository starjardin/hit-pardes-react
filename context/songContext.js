import React, { useState, useEffect } from 'react'
import songs from '../songs.js'
const SongsContext = React.createContext();

function SongsContextProvider ({children}) {
  const [ allSongs, setAllSongs ] = useState([])

  useEffect (() => {
    setAllSongs(songs)
  }, [])

  if (!allSongs.length) return null

  return (
    <SongsContext.Provider
      value={{allSongs, setAllSongs}}
    >
      {children}
    </SongsContext.Provider>
  )
}

export { SongsContextProvider, SongsContext }