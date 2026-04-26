import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-foreground/40 mb-4">
          404
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Página no encontrada
        </h1>
        <p className="text-foreground/55 mb-8">
          Parece que te perdiste en el cosmos. Esta página no existe.
        </p>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
