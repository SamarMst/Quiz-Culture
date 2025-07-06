import React from 'react'
import NavBar from '../../navbar'

function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-sky-300 p-8 mt-[-72px]">
        <h1 className="text-4xl font-bold text-white mb-4 mt-10">Contact Us</h1>
        <p className="text-white mb-8 text-center max-w-xl">
          We would love to hear from you! Please reach out with any questions or feedback.
        </p>

        {/* Card containing both image and form */}
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          {/* Image section */}
          <div className="md:w-1/2">
            <img
              src="./images/administration.jpg" 
              alt="Administration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form section */}
          <div className="p-6 md:w-1/2">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors">
                Send Message    
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
