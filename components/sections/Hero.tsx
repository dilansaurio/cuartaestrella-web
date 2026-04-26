import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-foreground/40 mb-6">
          Observatorio Astronómico
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Cuarta Estrella
        </h1>
        <p className="max-w-lg mx-auto text-lg text-foreground/60 leading-relaxed mb-10">
          Un lugar donde el cielo nocturno cobra vida. Ven a explorar planetas,
          nebulosas y galaxias con telescopios profesionales bajo cielos
          despejados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#visitas"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
          >
            Reserva tu visita
          </Link>
          <Link
            href="#experiencia"
            className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-8 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Conoce más
          </Link>
        </div>
      </div>
    </section>
  );
}

