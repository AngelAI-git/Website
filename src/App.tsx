import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { ArrowRight, Zap, Shield, Target } from 'lucide-react';
import Lenis from 'lenis';
import logo from './assets/logo.png';

// --- Shared Components & Hooks ---

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Magnetic pull strength
    const strength = 0.35;
    setPosition({ x: distanceX * strength, y: distanceY * strength });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-card relative overflow-hidden group ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
          willChange: 'background, opacity',
          transform: 'translateZ(0)'
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// --- SVG Wave Components ---

const OrganicWave = ({
  delay = 0,
  duration = 4,
  color = "#6366f1",
  path = "",
  width = 2,
  opacity = 0.5
}: {
  delay?: number,
  duration?: number,
  color?: string,
  path: string,
  width?: number,
  opacity?: number
}) => {
  return (
    <motion.svg
      viewBox="0 0 1440 800"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      preserveAspectRatio="none"
    >
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 1],
          pathOffset: [0, 0, 1],
          opacity: [0, opacity, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
          repeatDelay: Math.random() * 5
        }}
        style={{ willChange: 'pathLength, pathOffset, opacity' }}
      />
      {/* Glow effect */}
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={width * 3}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 1],
          pathOffset: [0, 0, 1],
          opacity: [0, opacity * 0.5, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
          repeatDelay: Math.random() * 5
        }}
        style={{ filter: "blur(5px)", willChange: 'pathLength, pathOffset, opacity' }}
      />
    </motion.svg>
  );
};

const BackgroundWaves = () => {
  // Sinuous waves and loops paths - created to look organic and flowy
  const paths = [
    // Large sine wave across screen
    "M-100,400 C300,200 600,600 1540,400",
    // Looping wave from top left
    "M-100,100 C300,100 400,300 300,400 C200,500 400,600 800,800",
    // Loop de loop in center
    "M0,400 C400,400 600,200 720,400 C840,600 600,600 720,400 C840,200 1100,400 1540,400",
    // Vertical sinuous wave
    "M720,-100 C600,300 840,500 720,900",
    // Chaos loop
    "M1540,200 C1200,200 1000,500 800,300 C600,100 400,400 -100,300"
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <OrganicWave path={paths[0]} delay={0} duration={8} color="#818cf8" width={6} opacity={0.3} />
      <OrganicWave path={paths[1]} delay={3} duration={10} color="#a855f7" width={3} opacity={0.5} />
      <OrganicWave path={paths[2]} delay={6} duration={12} color="#6366f1" width={8} opacity={0.2} />
      <OrganicWave path={paths[3]} delay={1} duration={7} color="#c084fc" width={5} opacity={0.4} />
      <OrganicWave path={paths[4]} delay={9} duration={11} color="#818cf8" width={4} opacity={0.3} />
    </div>
  );
};

// --- Sections ---

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* Logo Left */}
        <div className="relative z-50">
          <img
            src={logo}
            alt="Angel Vision Logo"
            className="h-6 w-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Contact Right */}
        <div className="relative z-40">
          <a href="#contact" className="h-10 px-8 flex items-center rounded-full border border-white/5 hover:bg-white/10 transition-all font-medium text-base bg-black/20 backdrop-blur-md">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[9vw] leading-tight font-bold tracking-tighter pb-2"
          >
            Changing
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[9vw] leading-tight font-bold tracking-tighter gradient-text italic pb-2"
          >
            the Gap.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl max-w-xl mx-auto text-white/50 mb-12"
        >
          We are developing a simple ecosystem to connect human intent with AI power.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center"
        >
          <Magnetic>
            <a href="#pillars" className="px-10 py-5 rounded-full bg-white text-black hover:scale-105 transition-transform duration-300 flex items-center gap-2 font-semibold shadow-2xl shadow-indigo-500/20">
              See how Angel works
              <ArrowRight className="w-5 h-5" />
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Hero Mesh Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[80px] rounded-full"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.1, 1.3, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 blur-[80px] rounded-full"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
      </div>
    </header>
  );
};

const Mission = () => {
  return (
    <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">The Mission</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mb-12 rounded-full"></div>
          <p className="text-2xl text-white font-medium mb-10 leading-relaxed">
            Real Life. Real Work. AI is moving fast.
          </p>
          <p className="text-lg text-white/50 leading-relaxed mb-6">
            To make it useful in the real world, we need more than just speed - we need a control layer.
            Angel is building the infrastructure that allows humans and machines to work together safely.
          </p>
        </motion.div>

        <SpotlightCard className="p-16">
          <p className="text-xl italic text-white/80 leading-relaxed font-light">
            "We take real expertise and turn it into clear systems people can reuse, providing the missing link between raw technology and responsible progress."
          </p>
        </SpotlightCard>
      </div>
    </section>
  );
};

const Pillars = () => {
  const pillars = [
    {
      title: 'Structure',
      desc: 'Turning intent into action.',
      icon: <Target className="w-10 h-10 text-indigo-400" />,
    },
    {
      title: 'Safety',
      desc: 'Ensuring technology serves humanity.',
      icon: <Shield className="w-10 h-10 text-purple-400" />,
    },
    {
      title: 'Control',
      desc: 'People and AI working together, with clear responsibility.',
      icon: <Zap className="w-10 h-10 text-blue-400" />,
    },
  ];

  return (
    <section id="pillars" className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Core Pillars</h2>
        <p className="text-white/40 text-lg">We focus on the three things most AI workflows lack.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <SpotlightCard className="p-12 h-full">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="mb-10 p-5 rounded-2xl bg-white/5 w-fit"
              >
                {p.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-5">{p.title}</h3>
              <p className="text-white/40 text-lg leading-relaxed">{p.desc}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Equation = () => {
  return (
    <section className="min-h-[45vh] flex items-center justify-center py-12 relative">
      <div className="w-full max-w-[90vw] md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-16 border-white/5 relative overflow-hidden flex flex-col items-center justify-center min-h-[40vh]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-30"></div>

          <h2 className="text-xl md:text-2xl font-bold mb-12 relative z-10 text-white/40 uppercase tracking-[0.3em]">The Equation</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 relative z-10 font-mono text-base md:text-xl flex-wrap">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="px-5 py-2 rounded-xl bg-white/5 border border-white/5"
            >
              Human Intent
            </motion.span>

            <motion.span
              animate={{ rotate: [0, 90] }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl text-indigo-500 font-bold"
            >
              +
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="px-5 py-2 rounded-xl bg-white/5 border border-white/5"
            >
              AI Power
            </motion.span>

            <motion.span
              animate={{ rotate: [0, 90] }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-3xl text-purple-500 font-bold"
            >
              +
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="px-5 py-2 rounded-xl bg-white/5 border border-white/5"
            >
              Safety Guardrails
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-3xl text-white/60 font-bold"
            >
              =
            </motion.span>
          </div>

          <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10"></div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="text-[7vw] font-bold italic gradient-text relative z-10 leading-tight py-3"
          >
            Real Progress.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-12 coming-soon-badge"
        >
          COMING SOON
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight leading-tight">
          We're taking the necessary time to make sure our technology and values are aligned.
        </h2>

        <SpotlightCard className="p-16">
          <p className="text-white/40 mb-8 text-xl">
            Say hello: <a href="mailto:info@theangelway.ai" className="text-white font-semibold hover:text-indigo-400 transition-colors">info@theangelway.ai</a>
          </p>
          <p className="text-sm text-white/30 max-w-lg mx-auto leading-relaxed">
            (We're selectively sharing early conversations with thoughtful people and organizations who share our priorities).
          </p>
        </SpotlightCard>

        <div className="mt-32 pt-10 border-t border-white/5 text-white/20 text-xs flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <span>Defining the future of human-AI partnership. © 2026 Angel AI. All rights reserved. Built with purpose</span>
          </div>
          <div className="flex gap-10">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('angel-consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      loadGA();
    }
  }, []);

  const loadGA = () => {
    // Inject GA4 Script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Placeholder
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `;
    document.head.appendChild(script2);
  };

  const handleAccept = () => {
    localStorage.setItem('angel-consent', 'accepted');
    loadGA();
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('angel-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-6 right-6 z-[100] max-w-2xl mx-auto"
    >
      <div className="glass-card p-6 border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />
        <div className="relative z-10">
          <p className="text-sm text-white/70 leading-relaxed mb-4">
            We use basic analytics cookies to see how our site is performing. This helps us fix bugs and improve the experience for you. We never use cookies for ads or track you across the web.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="/privacy" className="text-xs text-white/40 hover:text-indigo-400 transition-colors underline decoration-white/20 underline-offset-4">
              Learn more in our Privacy Policy
            </a>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-none px-6 py-2 rounded-full text-xs font-semibold text-white/60 hover:text-white hover:bg-white/5 transition-all outline-none focus:ring-1 focus:ring-white/20"
              >
                No thanks
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-6 py-2 rounded-full text-xs font-semibold bg-white text-black hover:scale-105 transition-all shadow-lg"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen relative bg-[#0B0F19]">
      <div className="noise-overlay" />

      {/* Living Atmospheric Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.5, 0.35, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] bg-indigo-900/15 blur-[100px] rounded-full"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
        <motion.div
          animate={{
            x: [0, -40, 60, 0],
            y: [0, 70, -30, 0],
            scale: [1, 0.9, 1.2, 1],
            opacity: [0.2, 0.4, 0.25, 0.2],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -left-[5%] w-[900px] h-[900px] bg-purple-900/15 blur-[100px] rounded-full"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
      </div>

      <BackgroundWaves />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Mission />
        <Pillars />
        <Equation />
        <Footer />
        <CookieConsent />
      </div>
    </div>
  );
}
