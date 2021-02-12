import { combineReducers } from "redux";

import { ACTIONS } from '../actions'

function cartItems (state = [], action) {
  switch (action.type) {
    case ACTIONS.addToCart : {
      return [...state, action.payload]
    }
    case ACTIONS.removeSongsFromCart: {
      return [ ...state.filter(song => song.id !== action.payload) ]
    }
    case ACTIONS.emptyCart: 
      return []
    default : return state
  }
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
      return likeSongs
    }
    case ACTIONS.dislike: {
      const unlikeSongs = state.map(song => {
        if (song.id === action.id) {
          return {
            ...song,
            unlike: song.unlike + 1,
            }
          }
          return song;
      });
      return unlikeSongs
    }
    case ACTIONS.addSongs: {
      return [...state, action.payload]  
    }
    case ACTIONS.toggleFavorite:{
      const songs = state.map(song => {
        if (song.id === action.payload) {
          return {
            ...song,
            favorite: !state.favorite
          }
        }
        return song
      })
      return songs
    }
    default: return state
  }
}

export default combineReducers({
  allSongs,
  cartItems,
})