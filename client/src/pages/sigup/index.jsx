import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const goToLogin = (e) => {
    e.preventDefault(); 
    navigate('/login');
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-sky-300">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl p-8 w-[90%] max-w-4xl h-auto md:h-[90vh] transition-all duration-300 ease-in-out">
        
        {/* Left Side - Image */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <img src="./images/diversity.png" alt="Logo" className="w-28 h-28 mb-4 animate-pulse" />
          <h1 className="text-4xl font-bold text-sky-950 mb-6 text-center md:text-left" style={{ fontFamily: "'Oleo Script', sans-serif" }}>
            Culturology
          </h1>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex flex-col justify-center w-full md:w-1/2 px-4">
          <h1 className="text-4xl font-bold text-sky-500 mb-8 text-center md:text-left">Sign Up</h1>
          <form className="flex flex-col space-y-4 w-full">
            
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            >
              <option value="">Select State</option>
              <option value="Student">Student</option>
              <option value="Worker">Worker</option>
              <option value="Other">Other</option>
            </select>

            {/* Conditionally show student fields */}
            {state === 'Student' && (
              <>
                <input
                  type="text"
                  placeholder="Year of Study"
                  className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <input
                  type="text"
                  placeholder="Field of Study"
                  className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </>
            )}
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />

            <button
              type="submit"
              className="bg-sky-500 text-white py-3 rounded-full hover:bg-sky-600 transition duration-200"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-500">
              Already have an account?{' '}
              <a className="text-sky-500 hover:underline" onClick={goToLogin}>
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
