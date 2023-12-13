import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Articles from './components/Articles/Articles'
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <UserProvider>
      <Header />
      <Navigation />
      <Articles isLoading={isLoading} setIsLoading={setIsLoading} />
    </UserProvider>
  )
}

export default App
