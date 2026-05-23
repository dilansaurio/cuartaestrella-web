"use client";

import Link from "next/link";
import { useStarField } from "@/hooks/useStarField";

export default function Hero() {
  const canvasRef = useStarField(200);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #03051a 0%, #070d2e 50%, #0d1b55 100%)" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-6">
          Observatorio Astronómico
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
          Cuarta Estrella
        </h1>
        <p className="max-w-lg mx-auto text-lg text-white/60 leading-relaxed mb-10">
          Un lugar donde el cielo nocturno cobra vida. Ven a explorar planetas,
          nebulosas y galaxias con telescopios profesionales bajo cielos
          despejados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#visitas"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-[#03051a] transition-colors hover:bg-white/85"
          >
            Reserva tu visita
          </Link>
          <Link
            href="#experiencia"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Conoce más
          </Link>
        </div>
      </div>
    </section>
  );
}

