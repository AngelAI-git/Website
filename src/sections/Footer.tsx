import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer" id="trust">
      <div className="footer__brand">
        <img src={logo} alt="Angel AI" className="logo-glow" style={{ height: 22, width: 'auto' }} />
        <span className="footer__meta">the governance layer for human-led ai</span>
      </div>
      <div className="footer__meta">© 2026 angel.ai · theangelway.ai</div>
    </footer>
  );
}
