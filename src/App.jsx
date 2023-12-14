import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
