import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  color: string;
};

export default function Ambient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let particles: Particle[] = [];
    const mouse = { x: -999, y: -999 };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const count = Math.min(Math.floor((width * height) / 8000), 120);
      particles = Array.from({ length: count }, () => createParticle());
    };

    const createParticle = (): Particle => {
      const isViolet = Math.random() > 0.6;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.4 + 0.1,
        color: isViolet ? '155,106,255' : '255,107,214',
      };
    };

    const drawConnections = () => {
      // Optimized connection check: step by 2 to reduce O(n^2) impact
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 2) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 8100) { // 90px squared (reduced from 110)
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / 90) * 0.1;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(155,106,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawConnections();
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 14400) { // 120px squared
          const dist = Math.sqrt(distSq);
          p.vx += (dx / dist) * 0.01;
          p.vy += (dy / dist) * 0.01;
        }

        const speedSq = p.vx * p.vx + p.vy * p.vy;
        if (speedSq > 1) {
          p.vx *= 0.96;
          p.vy *= 0.96;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.a})`;
        ctx.fill();
      });

      animationId = window.requestAnimationFrame(animate);
    };

    const handleMouse = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    resize();
    animate();
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 200);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    let gx = -500;
    let gy = -500;
    let tx = -500;
    let ty = -500;
    let raf = 0;

    const handleMouse = (event: MouseEvent) => {
      tx = event.clientX;
      ty = event.clientY;
    };

    const animate = () => {
      gx += (tx - gx) * 0.06;
      gy += (ty - gy) * 0.06;
      // Using transform for better compositor performance
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
      raf = window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouse, { passive: true });
    raf = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas id="bg-canvas" ref={canvasRef} />
      <div className="cursor-glow" ref={glowRef} />
    </>
  );
}
