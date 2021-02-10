import { createStore } from 'redux'

import reducers from './reducers'
import songs from '../songs'

const store = createStore(reducers, songs)
export default store