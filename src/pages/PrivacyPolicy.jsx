import LegalLayout from "../components/LegalLayout";

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        Bridgeway values your privacy. This Privacy Policy explains how we
        collect, use, and protect your information when you use our website
        and services.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address,
        and project details when you contact us, submit a job, or book a call.
      </p>

      <h2>How We Use Information</h2>
      <p>
        Information collected is used solely to provide, manage, and improve
        our services, communicate with you, and ensure quality delivery.
      </p>

      <h2>Data Protection</h2>
      <p>
        We implement reasonable security measures to protect your information.
        However, no online system is completely secure.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use trusted third-party tools for analytics, scheduling, or
        communication. These services are governed by their own privacy
        policies.
      </p>

      <h2>Updates</h2>
      <p>
        This policy may be updated from time to time. Continued use of our
        services constitutes acceptance of any changes.
      </p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
