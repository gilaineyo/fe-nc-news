import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Articles from './components/Articles/Articles'

function App() {

  return (
    <>
      <Header />
      <Navigation />
      <Articles />
    </>
  )
}

export default App
