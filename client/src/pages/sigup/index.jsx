import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { auth } from "../../firebase/firebase"; 
import { toast } from 'react-toastify';


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    // Update the user's profile with the username
    updateProfile(user, {
      displayName: username
    }).then(() => {
      toast(`Hello ${username}, Welcome to Culturology!`);
      console.log('User created:', user);
      console.log('Username:', user.displayName);
      console.log('Email:', user.email);
      navigate('/info');
    }).catch((error) => {
      toast.error('Error updating profile:', error);
      setError(error.message);
    });
  })
  .catch((error) => {
    toast.error('Error creating user:', error);
    setError(error.message);
  });
  };

  const goToLogin = (e) => {
    e.preventDefault(); 
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-sky-300">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl p-8 w-[90%] max-w-4xl h-auto md:h-[80vh] transition-all duration-300 ease-in-out">
        {/* Left Side - Image */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <img src="./images/diversity.png" alt="Logo" className="w-28 h-28 mb-4 animate-pulse" />
          <h1 className="text-4xl font-bold text-sky-950 mb-6 text-center md:text-left" style={{ fontFamily: "'Oleo Script', sans-serif" }}>Culturology</h1>
        </div>

        {/* Right Side - SignUp Form */}
        <div className="flex flex-col justify-center w-full md:w-1/2 px-4">
          <h1 className="text-6xl font-bold text-sky-500 mb-8 text-center md:text-left">Sign Up</h1>
          <form className="flex flex-col space-y-5 w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="bg-sky-500 text-white py-3 rounded-full hover:bg-sky-600 transition duration-200"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-500">
              Already have an account?{' '}
              <a href="#" onClick={goToLogin} className="text-sky-500 hover:underline">
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
