import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { visitTypes, schedule } from "@/components/data/DATA_Visits";

export default function Visits() {
  return (
    <section id="visitas" className="py-24 border-t border-foreground/10">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-foreground/40 mb-4">
          Visitas
        </p>
        <h2 className="text-4xl font-bold tracking-tight mb-12">
          Planifica tu visita
        </h2>

        {/* Visit types */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {visitTypes.map((visit, i) => (
            <RevealOnScroll key={visit.id} delay={i * 110}>
            <div
              className="rounded-2xl border border-foreground/10 p-6 flex flex-col gap-4 hover:border-foreground/25 transition-colors h-full"
            >
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{visit.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  {visit.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-foreground/40 pt-4 border-t border-foreground/8">
                <span>{visit.duration}</span>
                <span>{visit.price}</span>
              </div>
            </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Schedule */}
        <div className="rounded-2xl border border-foreground/10 p-8">
          <h3 className="font-semibold text-lg mb-6">Horarios de apertura</h3>
          <ul className="space-y-3">
            {schedule.map((entry) => (
              <li
                key={entry.day}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 border-b border-foreground/8 last:border-0"
              >
                <span className="text-sm font-medium">{entry.day}</span>
                <span className="text-sm text-foreground/55">
                  {entry.hours}
                  {entry.note && (
                    <span className="ml-2 text-foreground/35">
                      — {entry.note}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-foreground/35 leading-relaxed">
            Las visitas están sujetas a las condiciones climáticas. Ante cielo
            nublado, la sesión se reprograma sin costo adicional.
          </p>
        </div>
      </div>
    </section>
  );
}
