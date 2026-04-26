const highlights = [
  {
    title: "Telescopios profesionales",
    description:
      "Observa el cielo con equipos ópticos de alta potencia, incluyendo reflectores y refractores de apertura profesional.",
  },
  {
    title: "Guías especializados",
    description:
      "Nuestros astrónomos te acompañan durante toda la visita, explicando lo que ves y respondiendo tus preguntas.",
  },
  {
    title: "Cielo sin contaminación lumínica",
    description:
      "Estamos ubicados en una zona de bajo impacto lumínico, lo que garantiza vistas excepcionales del firmamento.",
  },
  {
    title: "Planetas y objetos del espacio profundo",
    description:
      "Dependiendo de la época del año, podrás ver planetas del sistema solar, cúmulos estelares, nebulosas y galaxias.",
  },
  {
    title: "Charlas astronómicas",
    description:
      "Cada visita incluye una charla introductoria sobre el cielo nocturno y los objetos que observarás esa noche.",
  },
  {
    title: "Apto para todas las edades",
    description:
      "Diseñamos la experiencia para que sea accesible y emocionante tanto para niños como para adultos y entusiastas.",
  },
];

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
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-foreground/10 p-6 hover:border-foreground/25 transition-colors"
            >
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-foreground/55 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
