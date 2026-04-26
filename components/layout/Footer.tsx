export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/40">
        <p>© {year} Observatorio Cuarta Estrella</p>
        <p>Observando el universo desde la tierra</p>
      </div>
    </footer>
  );
}
