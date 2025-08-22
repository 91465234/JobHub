import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostJob = ({ addJob }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
    ...formData,
    id: Date.now(),
  };
    addJob(newJob);
    navigate("/jobs");
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Post a New Job</h1>
      <form className="max-w-xl mx-auto bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        {["title", "company", "location", "type", "salary"].map((field) => (
          <div key={field} className="mb-4">
            <label htmlFor={field}
              className="block mb-2 capitalize font-medium text-gray-700">{field}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
        ))}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostJob;
