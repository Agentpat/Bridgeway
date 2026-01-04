import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./AdminJobs.css";

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (!localStorage.getItem("bridgeway_admin")) {
  return <Navigate to="/admin/login" replace />;
}
  return (
    <div className="admin-page">
      <h1>Job Submissions</h1>

      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs submitted yet.</p>
      ) : (
        <div className="jobs-table">
          {jobs.map((job) => (
            <div className="job-card" key={job._id}>
              <div className="job-header">
                <h3>{job.name}</h3>
                <span className="job-date">
                  {new Date(job.createdAt).toLocaleString()}
                </span>
              </div>

              <p><strong>Email:</strong> {job.email}</p>
              <p><strong>Timeline:</strong> {job.timeline}</p>
              <p><strong>Budget:</strong> {job.budget}</p>
              <p className="job-desc">{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminJobs;
