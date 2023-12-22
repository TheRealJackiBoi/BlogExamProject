import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './pages/ErrorPage.jsx';
import Index from './pages/Index.jsx';
import Login from './pages/auth/Login.jsx';
import Signup from './pages/auth/SignUp.jsx';
import Home from './pages/Home.jsx';
import MainLayout from './pages/MainLayout.jsx';
import MyPosts, { myPostsLoader as myPostsLoader } from './pages/MyPosts.jsx';
import PostEdit, { loader as postEditLoadder } from './pages/PostEdit.jsx';
import { postsLoader } from './pages/Home.jsx';

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
          loader: postsLoader,
        },
        {
          path: "posts/",
          children: [
            
            {
              path: ":id/edit",
              element: <PostEdit />,
              loader: postEditLoadder,
            },
            {
              path: "user/myposts",
              element: <MyPosts />,
              loader: myPostsLoader,
            }
          ],
        }
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