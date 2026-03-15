import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import SectionLabel from '../components/SectionLabel';

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return <span ref={elementRef}>{count}</span>;
}

const dimensions = [
  { label: 'Safety', value: '94%' },
  { label: 'Integrity', value: '88%' },
  { label: 'Traceability', value: '91%' },
  { label: 'Impact', value: '85%' },
  { label: 'Alignment', value: '96%' },
  { label: 'Evidence-Base', value: '89%' },
  { label: 'Clarity', value: '82%' },
  { label: 'Sovereignty', value: '90%' },
];

export default function Nexus() {
  return (
    <section className="section section--alt" id="nexus">
      <div className="nexus-grid container">
        <div>
          <SectionLabel className="reveal">Evaluation Engine</SectionLabel>
          <h2 className="feature__title reveal reveal--delay-1">NEXUS — The Nutrition Label for AI Content</h2>
          <p className="feature__copy reveal reveal--delay-2">
            Like a nutrition label for food, NEXUS evaluates every digital asset across 16 dimensions of safety, impact, and integrity before anything is published.
          </p>
          <p className="feature__copy reveal reveal--delay-3">
            It provides clear, standardized feedback that makes content quality visible, defensible, and easier to improve — eliminating the opacity that makes AI outputs untrustworthy.
          </p>
          <Card className="nexus-callout reveal">
            <div className="nexus-callout__copy">
              <strong>16-dimensional evaluation</strong> covering safety, impact, integrity, traceability, alignment, and more — enforced before any output reaches an end user.
            </div>
          </Card>
        </div>
        <div className="nexus-cards">
          <Card className="nexus-card reveal" data-animate="dimensions">
            <div className="nexus-card__header">
              <div className="nexus-card__icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v14M6.5 17h7" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M3.5 8.5l2 3.5h-4l2-3.5zM16.5 8.5l-2 3.5h4l-2-3.5z" fill="white" />
                  <path d="M3.5 8.5h13" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="nexus-card__title">NEXUS Evaluation Engine</div>
                <div className="nexus-card__subtitle">16-DIMENSION TRUST SCORE</div>
              </div>
            </div>
            <div className="dimension-grid">
              {dimensions.map((item) => (
                <div key={item.label} className="dimension">
                  <span className="dimension__label">{item.label} — {item.value}</span>
                  <div className="dimension__bar">
                    <span 
                      className="dimension__fill" 
                      style={{ '--target-width': item.value } as React.CSSProperties} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="nexus-card reveal reveal--delay-1" data-animate="overall">
            <div className="nexus-report">
              <div 
                className="nexus-report__score" 
                data-target="87"
              >
                <Counter target={87} />
              </div>
              <div className="nexus-report__content">
                <div className="nexus-report__title">Overall NEXUS Score</div>
                <div className="nexus-report__label">TRUSTED · VERIFIED · SOVEREIGN</div>
                <div className="nexus-report__bar">
                  <span 
                    className="nexus-report__fill" 
                    style={{ '--target-width': '87%' } as React.CSSProperties} 
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
