import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Articles from './components/Articles/Articles'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path='*' element={<Articles />} />
      </Routes>
    </>
  )
}

export default App
