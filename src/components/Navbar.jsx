import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar overlay-nav">
      <div className="navbar-container">
        <div className="navbar-logo">Bridgeway</div>

        <nav className="navbar-links">
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>

          <a href="#about">About</a>
          <a href="#post">Post a Job</a>
          <a href="#contact" className="navbar-btn">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
