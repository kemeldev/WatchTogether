import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import NotFoundNotAuth from './pages/notFoundNotAuth/notFoundNotAuth'
import Details from './pages/details/details'
import Search from './pages/search/search'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFoundNotAuth />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </>
  )
}

export default App
