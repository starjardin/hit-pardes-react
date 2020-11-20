import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddSongs from './components/AddSongs'
import Cart from './components/Cart'
import Header from './components/Header'
import Lyrics from './components/Lyrics'
import Songs from './components/songs'
import StyleName from './components/StyleName'
import Styles from './components/Styles'

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Songs />
        </Route>
        <Route exact path="/add">
          <AddSongs />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/styles">
          <Styles />
        </Route>
        <Route exact path="/styles/:styleName">
          <StyleName />
        </Route>
        <Route exact path="/song/:songId">
          <Lyrics />
        </Route>
      </Switch>
    </>
  )
}
