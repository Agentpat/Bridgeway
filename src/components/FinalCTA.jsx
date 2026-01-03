import React from "react";
import "../styles/FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="final-cta-container">
        <h2>Ready to Get Started?</h2>
        <p>Let us take the work off your plate.</p>

        <div className="final-cta-actions">
          <button className="cta-primary">Post a Job</button>
          <button className="cta-secondary">Book a Call</button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
