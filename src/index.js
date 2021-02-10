import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './App'
import { SongsContextProvider } from './context/songContext'
import store from './store'

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <SongsContextProvider>
      <Router>
        <App/>
      </Router>
    </SongsContextProvider>,
  </Provider>,
  document.querySelector("#root")
)