import React from 'react'

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-sky-500 to-sky-300 overflow-hidden  hover:scale-75 transition-transform duration-200 ease-in-out">
      
      {/* Decorative Icons */}
     {/* Top Corners */}
      <img src="./images/lamp.png" alt="Lamp" className="absolute top-10 left-10 w-14 h-14 opacity-25" />
      <img src="./images/rocket.png" alt="Rocket" className="absolute top-10 right-10 w-14 h-14 opacity-25" />

      {/* Upper Mid */}
      <img src="./images/star.png" alt="Star" className="absolute top-1/4 left-1/3 w-14 h-14 opacity-25" />
      <img src="./images/worldwide.png" alt="Worldwide" className="absolute top-1/4 right-1/3 w-14 h-14 opacity-25 animate-spin" />

      {/* Center Mid */}
      <img src="./images/healthcare.png" alt="Healthcare" className="absolute top-1/2 left-1/4 w-14 h-14 opacity-25" />
      <img src="./images/body-organ.png" alt="Brain" className="absolute top-1/2 right-1/4 w-14 h-14 opacity-25" />

      {/* Bottom Mid */}
      <img src="./images/relativity.png" alt="Relativity" className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-14 h-14 opacity-25" />

      {/* Bottom Corners */}
      <img src="./images/microscope.png" alt="Microscope" className="absolute bottom-10 left-10 w-14 h-14 opacity-25" />
      <img src="./images/telescope.png" alt="Telescope" className="absolute bottom-10 right-10 w-14 h-14 opacity-25" />

      {/* Optional extra (center-top flair) */}
      <img src="./images/plant.png" alt="Plant" className="absolute top-5 left-1/2 transform -translate-x-1/2 w-14 h-14 opacity-25" />



      {/* Main Content */}
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Culturology</h1>
      <p className="text-lg text-white mb-8">Your one-stop solution for cultural insights.</p>
      <button className="bg-white text-sky-500 px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">Get Started</button>
    </div>
  )
}

export default Hero
