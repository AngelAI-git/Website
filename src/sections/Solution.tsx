import Card from '../components/Card';
import SectionLabel from '../components/SectionLabel';

const features = [
  {
    title: 'Intellectual Property Sovereignty',
    copy: 'Experts never lose control of their knowledge assets.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2.5" y="7.5" width="11" height="7.5" rx="2" fill="var(--color-brand-violet)" />
        <path d="M5 7.5V5.5a3 3 0 1 1 6 0v2" stroke="var(--color-brand-violet)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '24/7 Digital Twin Operation',
    copy: 'Your expertise works while you rest, at infinite scale.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M9.5 1.5L3 9h5l-1.5 5.5L13 7H8L9.5 1.5z" fill="var(--color-brand-violet)" />
      </svg>
    ),
  },
  {
    title: 'Zero Hallucination Guarantee',
    copy: 'Every output is traceable to verified human intent.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="var(--color-brand-violet)" strokeWidth="1.4" />
        <path d="M5 8l2.5 2.5 4-4.5" stroke="var(--color-brand-violet)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const pipeline = [
  { step: '01', title: 'Raw Material Ingestion', desc: 'documents, videos, sessions → raw.input', tag: 'auto' },
  { step: '02', title: 'Intent Structuring', desc: 'angel.spark.method → structured.framework', tag: 'auto' },
  { step: '03', title: 'NEXUS Evaluation', desc: '16.dimensions → trust.verified', tag: 'verify' },
  { step: '04', title: 'AI Avatar Generation', desc: 'verified.content → avatar.video', tag: 'auto' },
  { step: '05', title: 'Verified Prompt Deploy', desc: 'sovereign.asset → live.guidance', tag: 'output' },
];

export default function Solution() {
  return (
    <section className="section section--gradient" id="solution">
      <div className="solution-grid container">
        <div className="solution__content">
          <SectionLabel className="reveal">The Solution</SectionLabel>
          <h2 className="feature__title reveal reveal--delay-1">We Turn Expertise Into Sovereign Digital Assets</h2>
          <p className="feature__copy reveal reveal--delay-2">
            Our infrastructure begins with an automated factory that transforms raw professional materials into verified assets and interactive prompts.
          </p>
          <p className="feature__copy reveal reveal--delay-3">
            A safety layer sits between raw expertise and AI outputs — like Stripe for knowledge — enforcing traceability and eliminating hallucinations through our five-layer constitution.
          </p>
          <div className="solution-features reveal reveal--delay-3">
            {features.map((feature) => (
              <div key={feature.title} className="solution-feature">
                <div className="solution-feature__icon">{feature.icon}</div>
                <div>
                  <div className="solution-feature__title">{feature.title}</div>
                  <div className="solution-feature__copy">{feature.copy}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="solution-callout reveal reveal--delay-3">
            CODIFY FIRST, LEVERAGE FOREVER.
          </div>
        </div>

        <Card className="pipeline-card reveal reveal--delay-2">
          <div className="diagram__label">// automated knowledge factory</div>
          <div className="pipeline">
            {pipeline.map((item, index) => (
              <div key={item.step} className="pipeline__row">
                <div className="pipeline__step">
                  <div className="pipeline__num">{item.step}</div>
                  <div>
                    <div className="pipeline__title">{item.title}</div>
                    <div className="pipeline__desc">{item.desc}</div>
                  </div>
                  <span className={`pipeline__tag pipeline__tag--${item.tag}`}>{item.tag}</span>
                </div>
                {index < pipeline.length - 1 ? <div className="pipeline__connector" /> : null}
              </div>
            ))}
          </div>
          <div className="pipeline__output">
            <div className="pipeline__output-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <defs>
                  <linearGradient id="previewRing" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-ring-start)" />
                    <stop offset="50%" stopColor="var(--color-ring-mid)" />
                    <stop offset="100%" stopColor="var(--color-ring-end)" />
                  </linearGradient>
                </defs>
                <circle cx="10" cy="10" r="7" fill="none" stroke="url(#previewRing)" strokeWidth="3" />
              </svg>
            </div>
            <div>
              <div className="pipeline__output-title">Expert Digital Twin — Active</div>
              <div className="pipeline__output-sub">24/7 · fully traceable · hallucination-free</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
