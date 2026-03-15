import SectionLabel from '../components/SectionLabel';

const steps = [
  {
    letter: 'A',
    label: 'Step 01 · Assess',
    title: 'Assess — Define the Goal & the Need',
    desc: 'Define the specific goal and the crisis-driven need of the audience. No output begins without a precise understanding of who needs guidance and why they need it now.',
    tag: 'human intent · audience first',
  },
  {
    letter: 'N',
    label: 'Step 02 · Navigate',
    title: 'Navigate — Map the Safe Zone',
    desc: 'Set strict boundaries on what the AI is never allowed to say. The Safe Zone is a non-negotiable perimeter — defining what is out of bounds before any generation begins.',
    tag: 'safety guardrails · hard limits',
  },
  {
    letter: 'G',
    label: 'Step 03 · Generate',
    title: 'Generate — Codify into Locked Records',
    desc: 'Codify expertise into a multi-layered framework — Locked Records. Raw professional knowledge becomes structured, traceable digital assets that cannot be distorted by AI reinterpretation.',
    tag: 'locked records · ai power',
  },
  {
    letter: 'E',
    label: 'Step 04 · Evaluate',
    title: 'Evaluate — Safety & Accuracy Audit',
    desc: 'Conduct the full Safety and Accuracy Audit via the NEXUS layer. Every asset is scored across 16 dimensions of integrity, impact, and safety before any publication is permitted.',
    tag: 'nexus engine · 16-dimension audit',
  },
  {
    letter: 'L',
    label: 'Step 05 · Leverage',
    title: 'Leverage — Deploy at AI Speed',
    desc: 'Deploy verified assets into environments at AI speed, with human authority. Scale is not a compromise — it is proof of the system working exactly as designed.',
    tag: 'sovereign deploy · human authority',
  },
];

export default function Methodology() {
  return (
    <section className="section" id="method">
      <div className="section__header">
        <SectionLabel className="reveal">Methodology</SectionLabel>
        <h2 className="feature__title reveal reveal--delay-1">The ASM Formula</h2>
        <p className="feature__copy reveal reveal--delay-2">
          The non-negotiable operational sequence. Every angel.ai output follows these five steps — in order, without exception — ensuring human authority governs every stage of AI execution.
        </p>
      </div>
      <div className="protocol">
        {steps.map((step, index) => (
          <div key={step.letter} className={`protocol__step reveal reveal--delay-${index + 1}`}>
            <div className="protocol__circle">
              <span className="protocol__letter">{step.letter}</span>
            </div>
            {index < steps.length - 1 && (
              <>
                <div className="protocol__step-racer" />
                <div className="protocol__step-racer protocol__step-racer--2" />
              </>
            )}
            <div className="protocol__content">
              <div className="protocol__label">{step.label}</div>
              <div className="protocol__title">{step.title}</div>
              <div className="protocol__tag">{step.tag}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="formula container reveal">
        <div className="formula__title">The ASM Formula</div>
        <div className="formula__eq">
          <span className="formula__brand">Angel Spark Method</span>
          <span className="diagram__label">=</span>
          <span className="formula__term term--human">(Human Intent)</span>
          <span className="diagram__label">+</span>
          <span className="formula__term term--ai">(AI Power)</span>
          <span className="diagram__label">+</span>
          <span className="formula__term term--safety">(Safety Guardrails)</span>
        </div>
      </div>
    </section>
  );
}
