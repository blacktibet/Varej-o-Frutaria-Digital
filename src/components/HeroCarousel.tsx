import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { slides } from "@/data/site";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(timer);
  }, [count, index]);

  return (
    <section className="section-shell pt-6" aria-label="Destaques">
      <div className="relative overflow-hidden rounded-3xl shadow-card">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={slide.id} className="relative w-full shrink-0">
              <img
                src={slide.image}
                alt={slide.alt}
                width={1920}
                height={1080}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-[22rem] w-full object-cover sm:h-[26rem] lg:h-[32rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-xl px-6 sm:px-12">
                  <h1 className="font-display text-3xl leading-tight font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-sm text-primary-foreground/85 sm:text-lg">
                    {slide.text}
                  </p>
                  <a
                    href="#ofertas"
                    className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.03]"
                  >
                    Ver folhetos
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Slide anterior"
          onClick={() => go(index - 1)}
          className="absolute top-1/2 left-3 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-primary-dark shadow-card transition-colors hover:bg-background"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          aria-label="Próximo slide"
          onClick={() => go(index + 1)}
          className="absolute top-1/2 right-3 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-primary-dark shadow-card transition-colors hover:bg-background"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Ir para o slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-accent" : "w-2.5 bg-background/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
