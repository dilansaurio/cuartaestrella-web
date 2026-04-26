export default function Location() {
  return (
    <section id="ubicacion" className="py-24 border-t border-foreground/10">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-foreground/40 mb-4">
          Ubicación
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Cómo llegar
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-foreground/40 mb-1">
                  Dirección
                </p>
                <p className="text-foreground/80">
                  Camino del Cielo 1400, Villa Las Estrellas
                  <br />
                  Provincia de Buenos Aires, Argentina
                </p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-foreground/40 mb-1">
                  En auto
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Desde la ciudad, tomar la Ruta Provincial 6 hacia el norte y
                  seguir la señalización del observatorio a partir del kilómetro
                  48.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-foreground/40 mb-1">
                  Recomendación
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Llevar ropa abrigada aunque sea verano: las noches de
                  observación son frescas. Se recomienda llegar antes del
                  horario de inicio para adaptarse a la oscuridad.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-foreground/10 aspect-video bg-foreground/5 flex items-center justify-center">
            <p className="text-sm text-foreground/30">Mapa próximamente</p>
          </div>
        </div>
      </div>
    </section>
  );
}
