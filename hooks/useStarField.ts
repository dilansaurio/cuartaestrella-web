"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
  depth: number;
}

function createStars(width: number, height: number, count: number): Star[] {
  return Array.from({ length: count }, () => {
    const depth = Math.random();
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: 0.3 + depth * 1.8,
      alpha: Math.random(),
      twinkleSpeed: Math.random() * 0.006 + 0.002,
      depth,
    };
  });
}

export function useStarField(count: number = 200) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let scrollY = 0;
    let rafId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = createStars(canvas.width, canvas.height, count);
    };
    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        star.alpha += star.twinkleSpeed;
        if (star.alpha >= 1 || star.alpha <= 0) star.twinkleSpeed *= -1;

        const parallaxY = scrollY * star.depth * 0.4;

        ctx.beginPath();
        ctx.arc(star.x, star.y - parallaxY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, star.alpha))})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [count]);

  return canvasRef;
}
