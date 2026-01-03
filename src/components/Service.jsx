import "../styles/services.css";

import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/service3.jpg";
import service4 from "../assets/images/service4.jpg";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Tailored solutions for businesses and individuals.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <img src={service1} alt="Digital Operations" />
            <h3>Digital Operations</h3>
            <p>Content, automation, websites, and digital execution.</p>
          </div>

          <div className="service-card">
            <img src={service2} alt="Local Services" />
            <h3>Local Services</h3>
            <p>Moving, cleaning, repairs, and operational coordination.</p>
          </div>

          <div className="service-card">
            <img src={service3} alt="Lead Generation" />
            <h3>Lead Generation</h3>
            <p>Leads, appointment setting, and outreach systems.</p>
          </div>

          <div className="service-card">
            <img src={service4} alt="Systems & Automation" />
            <h3>Systems & Automation</h3>
            <p>Process automation and efficient business systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
