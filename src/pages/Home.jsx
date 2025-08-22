import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl md:max-w-xl p-8 bg-white bg-opacity-90 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Welcome to JobFinder</h1>
        <p className="text-gray-700 text-lg mb-6">
          Discover your next opportunity. Browse available jobs or post a new one to hire the best talent!
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png"
          alt="Job search"
          className="w-30 h-30 object-contain mx-auto mb-6 animate-pulse"
        />
        <p className="text-sm text-gray-600">
          Start by clicking on the navigation links above!
        </p>
        <button onClick={()=>navigate('/jobs')}className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
