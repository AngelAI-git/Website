import SectionLabel from '../components/SectionLabel';

const cards = [
  {
    title: 'Human Intent First',
    copy: 'Instead of relying on machine-generated guesses, our system requires experts to codify their knowledge into structured digital assets. Humans lead. AI executes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" fill="white" />
      </svg>
    ),
  },
  {
    title: 'Full Traceability',
    copy: 'Every output is traceable back to its source expertise. Our system eliminates hallucinations by enforcing traceability and safety at every layer.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 17H7a5 5 0 0 1 0-10h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Reducing AI Noise',
    copy: 'We are building infrastructure that creates trustworthy, responsible AI — designed specifically to reduce the noise and uncertainty common in today’s AI landscape.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v7c0 5 3.5 8 8 9.5C16.5 21 20 18 20 13V6L12 2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8.5 12l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Ethics() {
  return (
    <section className="section section--alt" id="ethics">
      <div className="section__header">
        <SectionLabel className="reveal">Ethical AI</SectionLabel>
        <h2 className="feature__title reveal reveal--delay-1">Transparent. Accountable. Aligned with Human Values.</h2>
      </div>
      <div className="ethics-grid container">
        {cards.map((card) => (
          <div key={card.title} className="ethics-card glow-card reveal">
            <div className="ethics-card__icon">{card.icon}</div>
            <div className="ethics-card__title">{card.title}</div>
            <div className="ethics-card__copy">{card.copy}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
