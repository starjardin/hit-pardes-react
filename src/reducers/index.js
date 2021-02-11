import { combineReducers } from "redux";

import { ACTIONS } from '../actions'

function  cartItems (state = [], action) {
  return state
}

function allSongs (state = [], action) {
  switch (action.type) {
    case ACTIONS.like: {
      const likeSongs = state.map(song => {
        if (song.id === action.id) {
          return {
            ...song,
            like: song.like + 1,
            }
          }
          return song;
      });
      return state = likeSongs
    }
    case ACTIONS.dislike: {
      const unlikeSongs = state.map(song => {
        if (song.id === action.id) {
          return {
            ...song,
            unlike: song.like + 1,
            }
          }
          return song;
      });
      return unlikeSongs
    }
    default: return state
  }
}

export default combineReducers({
  allSongs,
  cartItems,
})