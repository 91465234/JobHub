import React from "react";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer">
      <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
      <p className="text-gray-600 mt-1">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>
      <p className="text-sm mt-2">{job.type} | {job.salary}</p>
       <div className="mt-4">
        <Link
          to={`/jobs/${job.id}`}
          className="inline-block px-4 py-2 bg-blue-500 text-white text-sm rounded-xl shadow-md hover:bg-blue-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
