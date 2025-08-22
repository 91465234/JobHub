import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 ">
          JobHub
        </Link>
        <div className="spcae-x-4">
          <Link to="/home" className="text-gray-700 hover:text-blue-600 px-2 py-1">
            Home
          </Link>
          <Link to="/jobs" className="text-gray-700 hover:text-blue-600 px-2 py-1">
            Jobs
          </Link>
          <Link to="/post" className="text-gray-700 hover:text-blue-600 px-2 py-1">
            Post a Job
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
