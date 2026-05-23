import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { highlights } from "@/components/data/DATA_Experience";


export default function Experience() {
  return (
    <section id="experiencia" className="py-24 border-t border-foreground/10">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-foreground/40 mb-4">
          La experiencia
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Una noche que no olvidarás
          </h2>
          <p className="text-foreground/60 leading-relaxed">
            Cada visita al Observatorio Cuarta Estrella es una inmersión en el
            universo. Desde el momento en que llegas, el cielo se convierte en
            el protagonista.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 90}>
              <div className="rounded-2xl border border-foreground/10 p-6 hover:border-foreground/25 transition-colors h-full">
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
