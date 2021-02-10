import { combineReducers } from "redux";

function  addItemsToCart (state = [], action) {
  return state
}

function  removeSongsFromCart (state = [], action) {
  return state
}

function  emptyCart (state = [], action) {
  return state
}

function  toggleFavorite (state = false, action) {
  return state
}

function  funcLikeSongs (state = 0, action) {
  return state
}

function  funcUnlikeSongs (state = 0, action) {
  return state
}

function songs (state = []) {
  return state
}

export default combineReducers({
  allSongs : songs
})