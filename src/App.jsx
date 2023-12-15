import { Outlet } from 'react-router-dom'
import './App.css'
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