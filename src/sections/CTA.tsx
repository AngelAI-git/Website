import SectionLabel from '../components/SectionLabel';

export default function CTA() {
  return (
    <section className="section section--gradient" id="contact">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionLabel className="reveal" style={{ marginBottom: 'var(--space-8)' }}>Say Hello</SectionLabel>
        
        <div className="contact-card glass-card reveal" style={{ maxWidth: '900px', width: '100%', padding: 'var(--space-24) var(--space-12) var(--space-16)', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2 className="feature__title reveal reveal--delay-1" style={{ marginBottom: 'var(--space-8)', marginTop: 'var(--space-6)' }}>We're Selectively Sharing Early Conversations</h2>


          <p className="feature__copy feature__copy--lead reveal reveal--delay-2" style={{ marginBottom: 'var(--space-8)' }}>
            Thoughtful people and organizations who share our priorities are welcome to reach out. We believe in the same care we build into our products — considered, intentional conversations.
          </p>
          <div className="contact-card__actions reveal reveal--delay-3" style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
            <a href="mailto:info@theangelway.ai" className="btn--ghost" style={{ padding: '12px 24px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@theangelway.ai
            </a>
          </div>
          <div className="contact-card__note reveal reveal--delay-4" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1px solid currentColor' }}></span>
            Currently in stealth — building deliberately, sharing selectively
          </div>
        </div>
      </div>
    </section>
  );
}
