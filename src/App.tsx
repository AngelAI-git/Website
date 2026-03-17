import { useEffect } from 'react';
import Ambient from './components/Ambient';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import FeatureSection from './sections/FeatureSection';
import SocialProof from './sections/SocialProof';
import Solution from './sections/Solution';
import Methodology from './sections/Methodology';
import Nexus from './sections/Nexus';
import Values from './sections/Values';
import Ethics from './sections/Ethics';
import Status from './sections/Status';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

export default function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav__link'));

    const animateCount = (el: HTMLElement) => {
      if (el.dataset.counted === 'true') return;
      const target = Number(el.dataset.count || 0);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();
      el.dataset.counted = 'true';
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
        el.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = `${target}${suffix}`;
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target instanceof HTMLElement) {
              const animateType = entry.target.dataset.animate;
              if (animateType === 'dimensions') {
                entry.target.querySelectorAll<HTMLElement>('.dimension__fill').forEach((el) => {
                  const width = el.dataset.width;
                  if (width) el.style.width = width;
                });
              }
              if (animateType === 'overall') {
                const bar = entry.target.querySelector<HTMLElement>('.nexus-overall__fill');
                if (bar) bar.style.width = '87%';
              }
              if (entry.target.dataset.count) {
                animateCount(entry.target);
              }
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => observer.observe(el));
    document.querySelectorAll<HTMLElement>('[data-animate]').forEach((el) => observer.observe(el));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              link.classList.toggle('is-active', href === `#${id}`);
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '-20% 0px -60% 0px' },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const glowCards = Array.from(document.querySelectorAll<HTMLElement>('.glow-card'));
    const handleGlowMove = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      // Using CSS variables to avoid complex background string updates in JS
      card.style.setProperty('--mouse-x', `${Math.round(x)}px`);
      card.style.setProperty('--mouse-y', `${Math.round(y)}px`);
    };
    const handleGlowLeave = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.setProperty('--mouse-x', `-1000px`);
      card.style.setProperty('--mouse-y', `-1000px`);
    };
    glowCards.forEach((card) => {
      card.addEventListener('mousemove', handleGlowMove, { passive: true });
      card.addEventListener('mouseleave', handleGlowLeave, { passive: true });
    });

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
      glowCards.forEach((card) => {
        card.removeEventListener('mousemove', handleGlowMove);
        card.removeEventListener('mouseleave', handleGlowLeave);
      });
    };
  }, []);

  return (
    <div className="site">
      <Ambient />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <FeatureSection />
        <div className="divider" />
        <SocialProof />
        <div className="divider" />
        <Solution />
        <div className="divider" />
        <Methodology />
        <div className="divider" />
        <Nexus />
        <div className="divider" />
        <Values />
        <div className="divider" />
        <Ethics />
        <div className="divider" />
        <Status />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
