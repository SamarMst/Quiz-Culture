import React from 'react'

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-sky-500 to-sky-300 overflow-hidden">
      
      {/* Decorative Icons */}
      <img src="./images/lamp.png" alt="Icon1" className="absolute top-10 left-10 w-10 h-10 opacity-30" />
      <img src="./images/rocket.png" alt="Icon2" className="absolute bottom-20 right-20 w-12 h-12 opacity-20" />
      <img src="./images/star.png" alt="Icon3" className="absolute top-1/6 left-1/3 w-16 h-16 opacity-25" />
      <img src="./images/telescope (1).png" alt="Icon3" className="absolute top-1/3 left-1/5 w-16 h-16 opacity-25" />

      {/* Main Content */}
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Culturology</h1>
      <p className="text-lg text-white mb-8">Your one-stop solution for cultural insights.</p>
      <button className="bg-white text-sky-500 px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">Get Started</button>
    </div>
  )
}

export default Hero
