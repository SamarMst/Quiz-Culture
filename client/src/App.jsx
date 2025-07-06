import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './pages/landing'
import Login from './pages/login';
import Signup from './pages/sigup';
import { ToastContainer } from 'react-toastify';
import ConversationCards from './pages/info';
import ResetPassword from './pages/resetPassword';
import ContactPage from './pages/navbar/contact';



function App() {
  
   const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/info", element: <ConversationCards /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/contact-us", element: <ContactPage /> },
  ])
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
