
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './pages/ErrorPage.jsx';
import Index from './pages/Index.jsx';
import Login from './pages/auth/Login.jsx';
import Signup from './pages/auth/Signup.jsx';
import Home from './pages/Home.jsx';
import MainLayout from './pages/MainLayout.jsx';

function App() {

  const postsLoader = async () => {
    const response = await fetch("http://localhost:7007/api/posts");
    return response.json();
  };

  

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
          loader: postsLoader,
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