import { contactLinks } from "@/components/data/DATA_Contact";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 border-t border-foreground/10">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-foreground/40 mb-4">
          Contacto
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-foreground/60 leading-relaxed">
              Escríbenos para consultas sobre visitas grupales, reservas
              especiales o cualquier duda sobre el observatorio.
            </p>
          </div>
          <div className="space-y-6">
            {contactLinks.map((link) => (
              <div key={link.label}>
                <p className="text-xs font-medium tracking-widest uppercase text-foreground/40 mb-1">
                  {link.label}
                </p>
                <a
                  href={link.href}
                  className="font-medium hover:text-foreground/70 transition-colors"
                >
                  {link.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

