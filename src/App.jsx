import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Articles from './components/Articles/Articles'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path='*' element={<Articles isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </Routes>
    </>
  )
}

export default App
