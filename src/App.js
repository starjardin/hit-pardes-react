import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddSongsContainer from './container/addSongsContainer'
import CartContainer from './container/cartContainer'
import PopularSongsContainer from './container/popularSongsContainer'
import StylesContainer from './container/stylesContainer'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <PopularSongsContainer />
        </Route>
        <Route path='/add'>
          <AddSongsContainer />
        </Route>
        <Route path='/styles'>
          <StylesContainer />
        </Route>
        <Route path='/cart'>
          <CartContainer />
        </Route>
      </Switch>
    </>
  )
}
