import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './pages/landing'
import Login from './pages/login';
import Signup from './pages/sigup';



function App() {
  
   const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
