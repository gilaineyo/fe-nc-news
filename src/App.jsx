import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Articles from './components/Articles/Articles'
import Topics from './components/Topics/Topics'
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { FilterProvider } from './contexts/FilterContext'

function App() {

  return (
    <UserProvider>
    <FilterProvider>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/articles/*' element={<Articles />} />
        <Route path='/topics/*' element={<Topics />} />
      </Routes>
    </FilterProvider>
    </UserProvider>
  )
}

export default App
