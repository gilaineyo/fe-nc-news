import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Articles from './components/Articles/Articles'
import Topics from './components/Topics/Topics'
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <UserProvider>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/articles/*' element={<Articles isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path='/topics/*' element={<Topics isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </Routes>
    </UserProvider>
  )
}

export default App
