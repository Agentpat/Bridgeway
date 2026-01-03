import "../styles/featureStrip.css";

export default function FeatureStrip() {
  return (
    <section className="feature-strip">
      <div className="feature-container">
        <div className="feature-item">
          <div className="feature-icon">✓</div>
          <div>
            <h3>Assess &amp; Advise</h3>
            <p>We identify what needs fixing.</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">◎</div>
          <div>
            <h3>Source &amp; Assign</h3>
            <p>We connect you to vetted experts.</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">↗</div>
          <div>
            <h3>Manage &amp; Deliver</h3>
            <p>We ensure it gets done right.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
