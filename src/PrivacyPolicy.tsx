export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="noise-overlay" />
      <header className="legal-header">
        <div className="container legal-header__inner">
          <a className="legal-back" href="/">Back to Home</a>
          <span className="legal-brand">Angel AI</span>
        </div>
      </header>
      <main className="legal-content container">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-meta">Last updated: March 2026</p>

        <p>
          Angel AI ("we", "our", or "us") operates the website https://www.theangelway.ai.
        </p>
        <p>
          This Privacy Policy explains how information may be collected and used when you visit our website.
        </p>

        <section className="legal-section">
          <h2>Information We Collect</h2>
          <p>We may collect limited technical information when you access the website, such as:</p>
          <ul>
            <li>browser type</li>
            <li>device type</li>
            <li>pages visited</li>
            <li>approximate location based on IP address</li>
          </ul>
          <p>This information helps us operate, maintain, and improve the website.</p>
        </section>

        <section className="legal-section">
          <h2>Cookies and Analytics</h2>
          <p>
            The website may use cookies or similar technologies to understand how visitors interact with the site and to
            improve the user experience.
          </p>
          <p>You can control cookies through your browser settings.</p>
        </section>

        <section className="legal-section">
          <h2>Third-Party Services</h2>
          <p>
            We may use trusted third-party services such as hosting providers, analytics tools, or infrastructure
            providers that process limited technical data necessary to operate the website.
          </p>
        </section>

        <section className="legal-section">
          <h2>Data Security</h2>
          <p>We take reasonable measures to protect the website and maintain its security.</p>
        </section>

        <section className="legal-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be posted on this page with an updated
            date.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>If you have questions about this Privacy Policy, please contact us through the website.</p>
        </section>
      </main>
    </div>
  );
}
