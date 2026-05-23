'use client';

import { useStarCursor } from '@/hooks/useStarCursor';

export default function StarCursor() {
  const canvasRef = useStarCursor();

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-9999"
    />
  );
}
