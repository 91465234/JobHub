import React, { useState } from "react";
import Jobcard from '../components/Jobcard';  // 
import { Link } from "react-router-dom";

const Jobs = ({ jobs }) => {
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");
  const [salary, setSalary] = useState("All");

  // Filtering logic
  const filterJobs = (job) => {
    const matchLocation = location === "All" || job.location === location;
    const matchType = type === "All" || job.type === type;

    const matchSalary =
      salary === "All" ||
      (salary === "0-7" && parseInt(job.salary.replace(/\D/g, "")) <= 700000) ||
      (salary === "8-12" &&
        parseInt(job.salary.replace(/\D/g, "")) >= 800000 &&
        parseInt(job.salary.replace(/\D/g, "")) <= 1200000) ||
      (salary === "10+" && parseInt(job.salary.replace(/\D/g, "")) >= 1000000);

    return matchLocation && matchType && matchSalary;
  };

  const filteredJobs = jobs.filter(filterJobs);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Available Jobs
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Locations</option>
          <option value="Bangalore, India">Bangalore</option>
          <option value="Mumbai, India">Mumbai</option>
          <option value="Remote">Remote</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>

        <select
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Salaries</option>
          <option value="0-7">₹0 - ₹7 LPA</option>
          <option value="8-12">₹8 - ₹12 LPA</option>
          <option value="10+">₹10 LPA+</option>
        </select>
      </div>

      {/* Job Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (<Jobcard job={job} />
        ))}

        {filteredJobs.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No jobs found with these filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
