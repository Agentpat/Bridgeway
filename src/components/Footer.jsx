import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-brand">Bridgeway</span>
          <span className="footer-copy">
            © {new Date().getFullYear()} Bridgeway. All rights reserved.
          </span>
        </div>

        <div className="footer-right">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
