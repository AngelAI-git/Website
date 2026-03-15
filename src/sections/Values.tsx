import SectionLabel from '../components/SectionLabel';

const values = [
  { letter: 'A', title: 'Accountable', desc: 'Full traceability from input to output. No black boxes.' },
  { letter: 'N', title: 'Nimble', desc: 'Adaptive systems that evolve with human expertise.' },
  { letter: 'G', title: 'Generative', desc: 'Creating scalable value from bounded human knowledge.' },
  { letter: 'E', title: 'Ethical', desc: 'Human intent at the center of every AI interaction.' },
  { letter: 'L', title: 'Legitimate', desc: 'Evidence-based outputs aligned with verified expertise.' },
];

export default function Values() {
  return (
    <section className="section" id="values">
      <div className="section__header">
        <SectionLabel className="reveal">ANGEL Values</SectionLabel>
        <h2 className="feature__title reveal reveal--delay-1">Ethics Aren't Policies. They're Code.</h2>
        <p className="feature__copy reveal reveal--delay-2">
          Our values are implemented directly into the system. Every output reflects these five principles.
        </p>
      </div>
      <div className="values-grid container">
        {values.map((value, index) => (
          <div key={value.letter} className={`value-card glow-card reveal reveal--delay-${index + 1}`}>
            <span className="value-card__letter">{value.letter}</span>
            <div className="value-card__title">{value.title}</div>
            <div className="value-card__desc">{value.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
