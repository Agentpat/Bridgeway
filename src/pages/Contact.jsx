import React, { useState } from "react";
import "../styles/contact.css";
import PostJobModal from "../components/PostJobModal";
import { openCalendly } from "../utils/openCalendly";

const Contact = () => {
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);

  return (
    <>
      <section className="contact">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            Have a question or want to discuss a project?  
            Reach out — we’ll respond promptly.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span>Email</span>
              <a href="mailto:olaideakosile35@gmail.com">
                olaideakosile35@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span>Phone</span>
              <a href="tel:+2348106532809">
                +234 810 653 2809
              </a>
            </div>
          </div>

          <div className="contact-actions">
            <button
              className="primary-btn"
              onClick={() => setIsPostJobOpen(true)}
            >
              Post a Job
            </button>

            <button
              className="secondary-btn"
              onClick={openCalendly}
            >
              Book a Call
            </button>
          </div>
        </div>
      </section>

      <PostJobModal
        isOpen={isPostJobOpen}
        onClose={() => setIsPostJobOpen(false)}
      />
    </>
  );
};

export default Contact;
