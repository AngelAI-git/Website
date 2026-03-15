import Card from '../components/Card';
import SectionLabel from '../components/SectionLabel';

export default function SocialProof() {
  return (
    <section className="section section--alt" id="solution">
      <div className="section__header">
        <SectionLabel className="reveal">The Dual Crisis</SectionLabel>
        <h2 className="feature__title reveal reveal--delay-1">Two Problems. One Architecture.</h2>
        <p className="feature__copy reveal reveal--delay-2">
          We solve a simultaneous crisis on both sides of the knowledge exchange — for those who hold expertise, and those who seek it.
        </p>
      </div>
      <div className="social-grid container">
        <Card className="social-card glow-card reveal">
          <div className="social-card__icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="7" r="4" stroke="white" strokeWidth="1.8" />
              <path d="M3 19.5c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="social-card__title">Expert Marketing Fatigue</h3>
          <p className="feature__copy">
            Elite professionals and organizations are drowning in content demands. Their hard-won expertise risks dilution and loss of IP sovereignty in the noisy AI era.
          </p>
          <div className="social-card__stat">
            <div className="social-card__stat-value" data-count="87" data-suffix="%">0%</div>
            <div className="diagram__label">of experts report losing control of their narrative</div>
          </div>
        </Card>
        <Card className="social-card glow-card reveal reveal--delay-1">
          <div className="social-card__icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.8" />
              <path d="M13.5 8.5L11 14 8.5 14 11 8.5 13.5 8.5z" fill="white" />
              <circle cx="11" cy="11" r="1.2" fill="white" />
            </svg>
          </div>
          <h3 className="social-card__title">The Guidance Desert</h3>
          <p className="feature__copy">
            People seeking solutions are flooded with unverified AI noise. There is no reliable, structured path from expert knowledge to those who need it most.
          </p>
          <div className="social-card__stat">
            <div className="social-card__stat-value">∞</div>
            <div className="diagram__label">unverified AI outputs generated daily</div>
          </div>
        </Card>
      </div>
    </section>
  );
}
