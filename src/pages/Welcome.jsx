import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-100 to-white px-6">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-lg">
        Welcome to Job Portal
      </h1>
      <p className="text-gray-700 text-lg mb-8 max-w-xl">
        Your one-stop platform to find the best job opportunities or post a job opening. Start your journey now!
      </p>
      <div className="flex gap-6">
        <Link to="/jobs">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
            🔍 Browse Jobs
          </button>
        </Link>
        <Link to="/post">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition">
            📢 Post a Job
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
