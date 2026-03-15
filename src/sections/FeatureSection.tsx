import Card from '../components/Card';
import SectionLabel from '../components/SectionLabel';

const layers = [
  { id: '01', name: 'Intent Capture', desc: 'human.expertise → structured.intent', tag: 'core', tone: 'layer-1' },
  { id: '02', name: 'Knowledge Governance', desc: 'codified.wisdom → digital.asset', tag: 'active', tone: 'layer-2' },
  { id: '03', name: 'NEXUS Evaluation', desc: '16.dimensions → trust.score', tag: 'verify', tone: 'layer-3' },
  { id: '04', name: 'Output Verification', desc: 'ai.output → verified.response', tag: 'guard', tone: 'layer-4' },
  { id: '05', name: 'Sovereign Delivery', desc: 'traceable.guidance → user.outcome', tag: 'output', tone: 'layer-5' },
];

export default function FeatureSection() {
  return (
    <section className="section section--gradient" id="what">
      <div className="feature-grid container">
        <div className="reveal">
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="feature__title reveal reveal--delay-1">The Infrastructure<br />of Trusted Intelligence</h2>
          <p className="feature__copy reveal reveal--delay-2">
            Angel AI is an ethical pioneer building the governance layer for human-led AI execution. We bridge the "Action Gap" — ensuring that human intent always precedes machine generation.
          </p>
          <p className="feature__copy reveal reveal--delay-3">
            We protect elite expertise from being buried by digital noise, providing an Architecture of Trust that allows experts to codify their wisdom into scalable digital assets without losing control of their intellectual property.
          </p>
        </div>
        <div className="reveal reveal--delay-2">
          <Card className="hero__card">
            <div className="diagram__label">// five-layer constitution</div>
            <div className="layer-stack">
              {layers.map((layer) => (
                <div key={layer.id} className={`layer-row ${layer.tone}`}>
                  <div>
                    {layer.id} · {layer.name}
                    <div className="layer-row__desc">{layer.desc}</div>
                  </div>
                  <span className="layer-row__tag">{layer.tag}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
