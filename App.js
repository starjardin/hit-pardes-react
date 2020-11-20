import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Songs from './components/songs'

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <Songs />
      </Route>
    </Switch>
  )
}
