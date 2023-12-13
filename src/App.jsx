import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Articles from './components/Articles/Articles'
import Topics from './components/Topics/Topics'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/articles/*' element={<Articles isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path='/topics' element={<Topics />} />
      </Routes>
    </>
  )
}

export default App
