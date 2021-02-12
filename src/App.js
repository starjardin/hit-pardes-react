import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddSongsContainer from './container/addSongsContainer'
import CartContainer from './container/cartContainer'
import PopularSongsContainer from './container/popularSongsContainer'
import LyricsContainer from './container/lyricsContainer'
import SongsStylesContainer from './container/songsStylesContainer'
import StyleNameContainer from './container//styleNameContainer'

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
        <Route path='/styles/:styleName'>
          <StyleNameContainer />
        </Route>
        <Route exact path='/styles'>
          <SongsStylesContainer />
        </Route>
        <Route path='/cart'>
          <CartContainer />
        </Route>
        <Route path='/song/:songId'>
          <LyricsContainer />
        </Route>
      </Switch>
    </>
  )
}
