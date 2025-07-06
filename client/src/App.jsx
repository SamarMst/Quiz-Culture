import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './pages/landing'
import Login from './pages/login';
import Signup from './pages/sigup';
import { ToastContainer } from 'react-toastify';
import ConversationCards from './pages/info';



function App() {
  
   const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/info", element: <ConversationCards /> }
  ])
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
