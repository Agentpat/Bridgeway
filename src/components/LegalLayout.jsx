import React from "react";
import "./LegalLayout.css";

const LegalLayout = ({ title, children }) => {
  return (
    <section className="legal">
      <div className="legal-container">
        <h1>{title}</h1>
        <div className="legal-content">{children}</div>
      </div>
    </section>
  );
};

export default LegalLayout;
