import { combineReducers } from "redux";

function  cartItems (state = [], action) {
  return state
}
        
function allSongs (state = []) {
  return state
}

export default combineReducers({
  allSongs,
  cartItems,
})