import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-50 to-white p-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-gray-700 mb-6">Oops! The page you are looking for does not exist.</p>
      <Link 
        to="/jobs" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Back to Jobs
      </Link>
    </div>
  )
}

export default Notfound
