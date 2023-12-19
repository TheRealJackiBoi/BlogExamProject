import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar.jsx'
import { getToken } from '../api/services/auth/auth.js';


const MainLayout = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()) {
      setLoggedIn(true)
    }
  }, [])


  return (
    <>
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        { children ?? <Outlet context={[loggedIn, setLoggedIn]} /> }
    </>
  )
}

export default MainLayout