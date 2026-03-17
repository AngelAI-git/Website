import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer" id="trust">
      <div className="footer__brand">
        <img src={logo} alt="Angel AI" className="logo-glow" style={{ height: 22, width: 'auto' }} />
        <span className="footer__meta">the governance layer for human-led ai</span>
      </div>
      <div className="footer__meta footer__links">
        <a href="/privacy.html">Privacy Policy</a>
        <span aria-hidden="true">|</span>
        <a href="/terms.html">Terms of Service</a>
      </div>
      <div className="footer__meta">
        © 2026 angel.ai · <a href="mailto:info@theangelway.ai" style={{ color: 'inherit', textDecoration: 'none' }}>theangelway.ai</a>
      </div>
    </footer>
  );
}
