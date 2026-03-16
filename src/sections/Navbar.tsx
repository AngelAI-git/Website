import logo from '../assets/logo.png';
import Button from '../components/Button';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#top" className="nav__brand">
        <img src={logo} alt="Angel AI" className="logo-glow" />
      </a>
      <div className="nav__links">
        <a href="#what" className="nav__link">WHAT WE BUILD</a>
        <a href="#need" className="nav__link">THE NEED</a>
        <a href="#solution" className="nav__link">THE SOLUTION</a>
        <a href="#method" className="nav__link">METHODOLOGY</a>
        <a href="#nexus" className="nav__link">NEXUS</a>
        <a href="#values" className="nav__link">VALUES</a>
        <a href="#ethics" className="nav__link">ETHICAL AI</a>
      </div>
      <Button href="#contact" variant="ghost" size="sm">CONTACT US</Button>
    </nav>
  );
}
