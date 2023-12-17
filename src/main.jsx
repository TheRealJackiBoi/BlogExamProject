import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage.jsx';
import Index from './pages/Index.jsx';
import Login, { action as loginAction } from './pages/auth/Login.jsx';
import Signup from './pages/auth/Signup.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
            action: loginAction
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
