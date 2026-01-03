import React from "react";
import "../styles/howitworks.css";

import step1 from "../assets/images/step1.png";
import step2 from "../assets/images/step2.png";
import step3 from "../assets/images/step3.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-container">
        <p className="how-subtitle">Simple. Effective. Managed.</p>

        <div className="how-grid">
          {/* Step 1 */}
          <div className="how-card">
            <div className="how-card-image">
              <img src={step1} alt="Submit your job" />
            </div>

            <div className="how-card-content">
              <span className="how-step">1.</span>
              <h3 className="how-title">Submit Your Job</h3>
              <p className="how-desc">
                Tell us what you need done and your timeline.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="how-card">
            <div className="how-card-image">
              <img src={step2} alt="We handle the rest" />
            </div>

            <div className="how-card-content">
              <span className="how-step">2.</span>
              <h3 className="how-title">We Handle the Rest</h3>
              <p className="how-desc">
                We assign, manage, and oversee execution.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="how-card">
            <div className="how-card-image">
              <img src={step3} alt="Get results" />
            </div>

            <div className="how-card-content">
              <span className="how-step">3.</span>
              <h3 className="how-title">Get Results</h3>
              <p className="how-desc">
                You receive quality outcomes — every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
