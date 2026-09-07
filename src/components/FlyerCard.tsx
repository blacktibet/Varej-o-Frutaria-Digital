import { CalendarDays, Clock3 } from "lucide-react";
import type { Flyer } from "@/data/site";
import { getFlyerStatus } from "@/lib/flyer-status";

export function FlyerCard({
  flyer,
  now,
  onOpen,
}: {
  flyer: Flyer;
  now: Date;
  onOpen: (flyer: Flyer) => void;
}) {
  const status = getFlyerStatus(flyer, now);

  const badgeClass = status.expired
    ? "bg-muted text-muted-foreground"
    : status.endingSoon
      ? "bg-sale text-sale-foreground"
      : "bg-accent text-accent-foreground";

  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift">
      <button
        type="button"
        onClick={() => onOpen(flyer)}
        className="grid w-full grid-cols-1 text-left sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]"
      >
        <div className="relative overflow-hidden bg-muted">
          <img
            src={flyer.cover}
            alt={`Capa do folheto ${flyer.name}`}
            width={912}
            height={1200}
            loading="lazy"
            className={`h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 sm:h-full ${
              status.expired ? "opacity-60 grayscale" : ""
            }`}
          />
        </div>

        <div className="flex flex-col gap-3 p-6">
          <span
            className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${badgeClass}`}
          >
            <Clock3 className="h-3.5 w-3.5" />
            {status.label}
          </span>

          <h3 className="font-display text-xl font-extrabold text-primary-dark sm:text-2xl">
            {flyer.name}
          </h3>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
            {status.period}
          </p>

          <p className="text-sm text-muted-foreground">
            {flyer.pages.length} páginas · toque para folhear
          </p>

          <span className="mt-auto inline-flex w-fit rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors group-hover:bg-primary-dark">
            {status.expired ? "Ver folheto encerrado" : "Ver folheto"}
          </span>
        </div>
      </button>
    </article>
  );
}
