import logo from '../assets/logo.png';
import Button from '../components/Button';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#top" className="nav__brand">
        <img src={logo} alt="Angel AI" className="logo-glow" />
      </a>
      <div className="nav__links">
        <a href="#what" className="nav__link">What We Build</a>
        <a href="#solution" className="nav__link">Solution</a>
        <a href="#nexus" className="nav__link">NEXUS</a>
        <a href="#values" className="nav__link">Values</a>
      </div>
      <Button href="#contact" variant="ghost">Say Hello</Button>
    </nav>
  );
}
