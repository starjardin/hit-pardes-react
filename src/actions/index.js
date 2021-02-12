export const ACTIONS = {
  like: 'LIKE_SONG',
  dislike: 'DISLIKE_SONG',
  toggleFavorite: 'TOGGLE_FAVORITE',
  addToCart: 'ADD_TO_CART',
  removeSongsFromCart: 'REMOVE_SONGS_FROM_CART',
  emptyCart: 'EMPTY_CART',
  addSongs: 'ADD_SONGS'
}
  
export function addSongs (newSongs) {
  return {
    type: ACTIONS.addSongs,
    payload: newSongs,
  }
}

export function likeSong (songId) {
  return {
    type: ACTIONS.like,
    id: songId
  }
}
export function dislikeSong (songId) {
  return {
    type: ACTIONS.dislike,
    id: songId
  }
}

export function addToCart (songId) {
  return {
    type: ACTIONS.addToCart,
    payload: songId
  }
}

export function removeSongsFromCart (songId) {
  return {
    type: ACTIONS.removeSongsFromCart,
    payload: songId
  }
}

export function emptyCart () {
  return {
    type: ACTIONS.emptyCart
  }
}

export function toggleFavorite(songId) {
  return {
    type: ACTIONS.toggleFavorite,
    payload: songId
  }
}