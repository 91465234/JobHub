import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Jobs from "./pages/Jobs";
import jobData from './data/jobs.json'
import PostJob from "./pages/PostJob";
import Welcome from "./pages/Welcome";
import Jobdetails from "./pages/Jobdetails";
import Notfound from "./pages/Notfound";

function App() {
  const [jobs, setNewJob] = useState(jobData)
  const addJob = (job) => {
    setNewJob((prev)=> [...prev, job, ]);
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/jobs" element={<Jobs jobs={jobs}/>}></Route>
          <Route path="/post" element={<PostJob addJob={addJob}/>}></Route>
          <Route path="/jobs/:id" element= {<Jobdetails jobs={jobs}/>} ></Route>
          <Route path="/not-found" element={<Notfound/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
