import React, { useState } from "react";
import "../styles/FinalCTA.css";
import PostJobModal from "./PostJobModal";

const FinalCTA = () => {
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);

  return (
    <>
      <section className="final-cta">
        <div className="final-cta-container">
          <h2>Ready to Get Started?</h2>
          <p>Let us take the work off your plate.</p>

          <div className="final-cta-actions">
            <button
              className="cta-primary"
              onClick={() => setIsPostJobOpen(true)}
            >
              Post a Job
            </button>

            <button className="cta-secondary">
              Book a Call
            </button>
          </div>
        </div>
      </section>

      {/* Post a Job Modal */}
      <PostJobModal
        isOpen={isPostJobOpen}
        onClose={() => setIsPostJobOpen(false)}
      />
    </>
  );
};

export default FinalCTA;
