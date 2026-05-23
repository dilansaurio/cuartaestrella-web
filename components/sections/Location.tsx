import { locationData } from "@/components/data/DATA_Location";

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
              {locationData.details.map((detail) => (
                <div key={detail.label}>
                  <p className="text-xs font-medium tracking-widest uppercase text-foreground/40 mb-1">
                    {detail.label}
                  </p>
                  <p className="text-sm text-foreground/60 leading-relaxed whitespace-pre-line">
                    {detail.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-foreground/10 overflow-hidden aspect-video">
            <iframe
              src={locationData.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={locationData.mapTitle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
