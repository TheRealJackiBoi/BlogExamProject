import { useState, useEffect } from 'react'
import { Outlet, Route } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar.jsx'
import { getToken } from '../api/services/auth/auth.js';
import NewPost from './NewPost.jsx';


const MainLayout = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)

    const [showModal, setShowModal] = useState(false);
    const [posts, setPosts] = useState([{}])

  useEffect(() => {
    if (getToken()) {
      setLoggedIn(true)
    }
  }, [])

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }


  return (
    <>
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} openModal={openModal} />
        { children ?? <Outlet context={{loggedIn, setLoggedIn, posts, setPosts}} /> }

        {/* Conditionally render the modal */}
        <NewPost showModal={showModal} closeModal={closeModal} setPosts={setPosts} /> 

    </>
  )
}

export default MainLayout