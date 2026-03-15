export default function TermsOfUse() {
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
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-meta">Last updated: March 2026</p>

        <p>
          These Terms of Service govern your use of the website https://www.theangelway.ai operated by Angel AI ("we",
          "our", or "us").
        </p>
        <p>By accessing the website, you agree to these Terms.</p>

        <section className="legal-section">
          <h2>Use of the Website</h2>
          <p>
            The website is provided for informational purposes. You agree to use the website only for lawful purposes
            and in a way that does not interfere with the operation or security of the site.
          </p>
          <p>You may not attempt to access systems, data, or functionality that are not intended to be publicly available.</p>
        </section>

        <section className="legal-section">
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and design elements, is the property of Angel
            AI or its licensors and may not be copied or reproduced without permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>Disclaimer</h2>
          <p>
            The website and its content are provided "as is" without warranties of any kind. We do not guarantee that
            the website will always be available, accurate, or free of errors.
          </p>
        </section>

        <section className="legal-section">
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Angel AI shall not be liable for any damages arising from the use of
            the website.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes to the Terms</h2>
          <p>
            We may update these Terms from time to time. Updates will be posted on this page with an updated date.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>If you have questions about these Terms, please contact us through the website.</p>
        </section>
      </main>
    </div>
  );
}
