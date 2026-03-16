import Badge from '../components/Badge';
import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__orb hero__orb--violet" />
      <div className="hero__orb hero__orb--pink" />
      <div className="hero__layout hero__layout--single container">
        <div>
          <Badge className="hero-load hero-load--1">Stealth Mode · Building Deliberately</Badge>
          <h1 className="hero__title hero-load hero-load--2">
            Bridge the <span>Action Gap</span>
          </h1>
          <p className="hero__sub hero-load hero-load--3">
            We're building the infrastructure layer for human-led AI execution. Welcome to Verified Intelligence.
          </p>
          <div className="hero__actions hero-load hero-load--4">
            <Button href="#contact" size="lg" variant="primary">Request Early Access</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
