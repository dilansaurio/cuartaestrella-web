



export default function Gallery() {
  return (
    <section id="galeria" className="py-24 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm font-medium tracking-widest uppercase text-foreground/40 mb-4">
                Galería
            </p>
            <h2 className="text-4xl font-bold tracking-tight mb-16">
                Imágenes de nuestras noches estrelladas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <img
                    src="/gallery1.jpg"
                    alt="Vista del cielo nocturno desde el observatorio"
                    className="rounded-2xl object-cover w-full h-64"
                />
                <img
                    src="/gallery2.jpg"
                    alt="Telescopio apuntando a las estrellas"
                    className="rounded-2xl object-cover w-full h-64"
                />
                <img
                    src="/gallery3.jpg"
                    alt="Grupo de personas observando el cielo con telescopios"
                    className="rounded-2xl object-cover w-full h-64"
                />
                <img
                    src="/gallery4.jpg"
                    alt="Nebulosa capturada desde el observatorio"
                    className="rounded-2xl object-cover w-full h-64"
                />
                <img
                    src="/gallery5.jpg"
                    alt="Planetas visibles desde el observatorio"
                    className="rounded-2xl object-cover w-full h-64"
                />
                <img
                    src="/gallery6.jpg"
                    alt="Cielo estrellado con la Vía Láctea visible"
                    className="rounded-2xl object-cover w-full h-64"
                />
            </div>
        </div>
    </section>
  );
}