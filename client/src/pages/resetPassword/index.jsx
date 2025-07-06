import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail  } from 'firebase/auth';
import { auth } from '../../firebase/firebase'; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const goToSignup = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  const handleReset = async () => {
      if (!email) {
        toast.error('Please enter your email');
        return;
      }

      try {
        await sendPasswordResetEmail(auth, email);
        toast.success('Password reset email sent!');
      } catch (error) {
        toast.error('Error sending reset email');
      }
    };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-sky-300">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl p-8 w-[90%] max-w-4xl h-auto md:h-[80vh] transition-all duration-300 ease-in-out">
        
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <img src="./images/diversity.png" alt="Logo" className="w-28 h-28 mb-4 animate-pulse" />
          <h1 className="text-4xl font-bold text-sky-950 mb-6 text-center md:text-left" style={{ fontFamily: "'Oleo Script', sans-serif" }}>Culturology</h1>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center w-full md:w-1/2 px-4">
          <h1 className="text-6xl font-bold text-sky-500 mb-8 text-center md:text-left">Reset Password</h1>
          <form onSubmit={handleReset} className="flex flex-col space-y-5 w-full">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <button
              type="submit"
              className="bg-sky-500 text-white py-3 rounded-full hover:bg-sky-600 transition duration-200"
            >
              ResetPassword
            </button>

            <p className="text-center text-gray-500">
              Don't have an account?{' '}
              <a  onClick={goToSignup} className="text-sky-500 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ResetPassword;
