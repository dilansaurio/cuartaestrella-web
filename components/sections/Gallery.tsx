
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { galleryImages } from "@/components/data/DATA_Gallery";

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
                {galleryImages.map((img, i) => (
                  <RevealOnScroll key={img.src} delay={i * 80}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="rounded-2xl object-cover w-full h-64"
                    />
                  </RevealOnScroll>
                ))}
            </div>
        </div>
    </section>
  );
}