import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
// import PlayGame from './pages/PlayGame'
import Home from './pages/Home'
import PlayGameContainer from './pages/PlayGameContainer'

function App() {

  return (
      <Routes>
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGameContainer />} />
        <Route path='/' element={<Home/>} />
      </Routes>
  )
}

export default App
