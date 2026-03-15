import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';

export default function Status() {
  return (
    <section className="section" id="status">
      <div className="section__header section__header--centered container" style={{ marginBottom: '64px' }}>
        <SectionLabel className="reveal">Status: Stealth Mode</SectionLabel>
        <h2 className="feature__title reveal reveal--delay-1" style={{ marginTop: '0' }}>Taking the Time to Get It Right</h2>
        <p className="feature__copy feature__copy--lead reveal reveal--delay-2">
          We're taking the necessary time to make sure our technology and values are aligned. The governance layer for AI deserves to be built with care.
        </p>
        <div className="status__actions reveal reveal--delay-3" style={{ marginTop: 'var(--space-6)', display: 'flex', justifyContent: 'center' }}>
          <Button href="#contact" size="lg" variant="primary">Join the conversation →</Button>
        </div>
      </div>
    </section>
  );
}
