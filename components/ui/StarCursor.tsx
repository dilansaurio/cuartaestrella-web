'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  spikes: number;
}

const COLORS = ['#ffffff', '#ffe4a0', '#a0c8ff', '#ffd700', '#c8b4ff'];

function createParticle(x: number, y: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const speed = Math.random() * 2.5 + 0.5;
  return {
    x: x + (Math.random() - 0.5) * 8,
    y: y + (Math.random() - 0.5) * 8,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - 1.5,
    alpha: 1,
    size: Math.random() * 7 + 4,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.15,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    spikes: Math.random() < 0.5 ? 4 : 5,
  };
}

function drawStar(ctx: CanvasRenderingContext2D, p: Particle) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);
  ctx.globalAlpha = Math.max(0, p.alpha);
  ctx.fillStyle = p.color;
  ctx.shadowColor = p.color;
  ctx.shadowBlur = p.size * 2.5;

  const outer = p.size;
  const inner = p.size * 0.38;
  ctx.beginPath();
  for (let i = 0; i < p.spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (i * Math.PI) / p.spikes;
    if (i === 0) ctx.moveTo(r * Math.cos(a), r * Math.sin(a));
    else ctx.lineTo(r * Math.cos(a), r * Math.sin(a));
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function StarCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Skip on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (lastPos.current) {
        const dx = x - lastPos.current.x;
        const dy = y - lastPos.current.y;
        if (dx * dx + dy * dy < 64) return; // minimum 8px movement
      }
      lastPos.current = { x, y };
      const count = Math.floor(Math.random() * 2) + 1;
      for (let i = 0; i < count; i++) particles.current.push(createParticle(x, y));
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter(p => p.alpha > 0.02);
      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06; // soft gravity
        p.alpha -= 0.018;
        p.rotation += p.rotationSpeed;
        drawStar(ctx, p);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-9999"
    />
  );
}
