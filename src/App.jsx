
import './App.css'

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import ErrorPage from './pages/ErrorPage.jsx';
import Index from './pages/Index.jsx';
import Login from './pages/auth/Login.jsx';
import Signup from './pages/auth/Signup.jsx';
import Home from './pages/Home.jsx';
import MainLayout from './pages/MainLayout.jsx';
import NewPost from './pages/NewPost.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: (<MainLayout>
                      <ErrorPage />
                    </MainLayout>),
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "auth/",
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <Signup />,
            },
          ],
        },
        {
          path: "home",
          element: <Home />,
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
    
  )
}

export default App

/*

<MainContext.Provider value={{loggedIn, setLoggedIn}}>
    
      <NavBar />
      <Outlet />

    </MainContext.Provider>

    */