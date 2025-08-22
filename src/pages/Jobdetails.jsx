import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";

const Jobdetails = ({ jobs }) => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id.toString() === id);
  console.log("Job found:", job);

  const [showModal, setShowModal] = useState(false);
  const [resume, setResume] = useState(null);

  if (!job) {
    return <Navigate to="/not-found" replace />;
  }

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleApply = () => {
    if (resume) {
      alert(`Resume "${resume.name}" uploaded successfully for ${job.title}!`);
      setShowModal(false);
      setResume(null);
    } else {
      alert("Please upload your resume before applying.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">{job.title}</h1>
          <p className="text-gray-700 mb-2">
            <strong>Company:</strong> {job.company}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Location:</strong> {job.location}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Type:</strong> {job.type}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Salary:</strong> {job.salary}
          </p>
          <p className="text-gray-600 mt-2">
            {job.description || "No description available."}
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/jobs"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
            >
              Back to Jobs
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Resume Upload */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96 relative">
            <h2 className="text-xl font-bold mb-4">Apply for {job.title}</h2>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="mb-2 w-full"
              
            />
            {resume && (
              <p className="text-sm text-gray-600 mb-2">
                Selected file: <strong>{resume.name}</strong>
              </p>
            )}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Jobdetails;
