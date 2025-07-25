import React from 'react'
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  }
  const handleContact = () => {
    navigate("/contact-us");
  }
  const handleHome = () => {
    navigate("/");
  }
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-sky-500 to-sky-300 p-4">
        <div className="flex items-center">
          <img src="./images/population.png" alt="Logo" className="w-9 h-9" />
          <div className="text-white text-lg font-bold ml-2">Culturology</div>
        </div>
      <div className="space-x-4">
        <button onClick={handleHome} className="text-white hover:text-gray-400">Home</button>
        <button  className="text-white hover:text-gray-400">About</button>
        <button onClick={handleContact} className="text-white hover:text-gray-400">Contact</button>
        <button className="bg-white text-sky-400 px-4 py-2 rounded-3xl hover:bg-gray-200" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default NavBar
