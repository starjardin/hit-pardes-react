//TODO:
//actions
  //TODO:1-add songs
  //TODO:2-like songs + 1
  //TODO:3-unlike songs + 1
  //TODO:4-togglefavourite songs
  //TODO:5-add to cart
  //TODO:6-removeFromcartIem
  //TODO:7-emptycart
  
export const ACTIONS = {
  like: 'LIKE_SONG',
  dislike: 'DISLIKE_SONG',
  toggleFavorite: 'TOGGLE_FAVORITE',
  addToCart: 'ADD_TO_CART',
  removeFromCart: 'REMOVE_FROM_CART',
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