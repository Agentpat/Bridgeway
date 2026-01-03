import "../styles/hero.css";
import Navbar from "./Navbar";
import heroImage from "../assets/images/hero.jpg";
import { useState } from "react";
import PostJobModal from "./PostJobModal";
import { openCalendly } from "../utils/openCalendly";

export default function Hero() {
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);

  return (
    <>
      <section className="hero">
        <img src={heroImage} alt="Bridgeway hero" className="hero-bg" />

        <div className="hero-overlay" />

        <Navbar />

        <div className="hero-content">
          <h1>
            We Diagnose.
            <br />
            We Connect. We Deliver.
          </h1>

          <p>
            Get your projects done without the hassle.
            <br />
            We manage the work so you don’t have to.
          </p>

          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => setIsPostJobOpen(true)}
            >
              Post a Job
            </button>

            <button className="secondary-btn" onClick={openCalendly}>
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
}
