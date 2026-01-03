import React, { useState } from "react";
import "./PostJobModal.css";

const PostJobModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later: send data to Formspree / backend
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {!submitted ? (
          <>
            <h2>Post a Job</h2>
            <p className="modal-subtitle">
              Tell us what you need. We’ll take it from there.
            </p>

            <form className="post-job-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" required />
              </div>

              <div className="form-group">
                <label>What do you need done?</label>
                <textarea rows="4" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Timeline</label>
                  <select required>
                    <option value="">Select</option>
                    <option>ASAP</option>
                    <option>1–2 weeks</option>
                    <option>This month</option>
                    <option>Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Budget Range</label>
                  <select required>
                    <option value="">Select</option>
                    <option>Under $500</option>
                    <option>$500 – $1,500</option>
                    <option>$1,500 – $5,000</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Submit Job
              </button>
            </form>
          </>
        ) : (
          <div className="success-state">
            <h2>Thank you!</h2>
            <p>
              Your request has been received. We’ll review it and get back to
              you shortly.
            </p>

            <button className="submit-btn" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostJobModal;
