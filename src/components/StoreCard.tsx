import { ChevronLeft, ChevronRight, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { useState } from "react";
import type { Store } from "@/data/site";

export function StoreCard({ store }: { store: Store }) {
  const [index, setIndex] = useState(0);
  const total = store.images.length;
  const go = (next: number) => setIndex((next + total) % total);

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift">
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {store.images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              loading="lazy"
              className="h-56 w-full shrink-0 object-cover sm:h-64"
            />
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Imagem anterior"
              onClick={() => go(index - 1)}
              className="absolute top-1/2 left-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-primary-dark shadow-card"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Próxima imagem"
              onClick={() => go(index + 1)}
              className="absolute top-1/2 right-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-primary-dark shadow-card"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
              {store.images.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Ver imagem ${i + 1} de ${store.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-2 bg-background/75"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="space-y-3 p-6">
        <h3 className="font-display text-xl font-extrabold text-primary-dark">{store.name}</h3>
        <p className="flex gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>
            {store.address}
            <br />
            {store.city}
          </span>
        </p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4 shrink-0 text-primary" />
          {store.phone}
        </p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0 text-primary" />
          {store.hours}
        </p>
        <a
          href={store.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          <Navigation className="h-4 w-4" />
          Como chegar
        </a>
      </div>
    </article>
  );
}
