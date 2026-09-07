import { ChevronLeft, ChevronRight, Maximize, X, ZoomIn, ZoomOut } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Flyer } from "@/data/site";
import { getFlyerStatus } from "@/lib/flyer-status";

export function FlyerViewer({ flyer, onClose }: { flyer: Flyer; onClose: () => void }) {
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const total = flyer.pages.length;
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const status = getFlyerStatus(flyer);

  const goTo = useCallback(
    (next: number) => {
      setPage((p) => {
        const target = Math.min(Math.max(next, 0), total - 1);
        if (target !== p) setZoom(1);
        return target;
      });
    },
    [total],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") setPage((p) => (p > 0 ? (setZoom(1), p - 1) : p));
      if (event.key === "ArrowRight")
        setPage((p) => (p < total - 1 ? (setZoom(1), p + 1) : p));
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose, total]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-neutral-900/97"
      role="dialog"
      aria-modal="true"
      aria-label={`Folheto ${flyer.name}`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 text-white">
        <div className="min-w-0">
          <p className="truncate font-display text-base font-extrabold sm:text-lg">
            {flyer.name}
          </p>
          <p className="truncate text-xs text-white/60">
            {status.expired ? "Promoção encerrada" : status.period}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Diminuir zoom"
            onClick={() => setZoom((z) => Math.max(1, +(z - 0.5).toFixed(2)))}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Aumentar zoom"
            onClick={() => setZoom((z) => Math.min(3, +(z + 0.5).toFixed(2)))}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Ajustar à tela"
            onClick={() => setZoom(1)}
            className="hidden h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 sm:grid"
          >
            <Maximize className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Fechar folheto"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/15 hover:bg-white/25"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-2">
        <div
          className="h-full w-full touch-pan-y overflow-auto"
          onTouchStart={(e) => {
            const t = e.touches[0];
            touchStart.current = t ? { x: t.clientX, y: t.clientY } : null;
          }}
          onTouchEnd={(e) => {
            const start = touchStart.current;
            const t = e.changedTouches[0];
            if (!start || !t || zoom > 1) return;
            const dx = t.clientX - start.x;
            const dy = t.clientY - start.y;
            if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
              goTo(dx < 0 ? page + 1 : page - 1);
            }
          }}
        >
          <div className="flex min-h-full items-center justify-center">
            <img
              key={page}
              src={flyer.pages[page]}
              alt={`${flyer.name} — página ${page + 1} de ${total}`}
              width={912}
              height={1200}
              className="max-h-[calc(100dvh-11rem)] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-200"
              style={{ transform: `scale(${zoom})`, transformOrigin: "center top" }}
            />
          </div>
        </div>

        <button
          type="button"
          aria-label="Página anterior"
          disabled={page === 0}
          onClick={() => goTo(page - 1)}
          className="absolute top-1/2 left-2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 disabled:opacity-30 sm:left-6 sm:h-14 sm:w-14"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button
          type="button"
          aria-label="Próxima página"
          disabled={page === total - 1}
          onClick={() => goTo(page + 1)}
          className="absolute top-1/2 right-2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 disabled:opacity-30 sm:right-6 sm:h-14 sm:w-14"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>

      <div className="flex flex-col items-center gap-2 px-4 pb-5 text-white">
        {status.expired && (
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            Oferta encerrada
          </span>
        )}
        <p className="text-sm font-semibold">
          Página {page + 1} de {total}
        </p>
        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${((page + 1) / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
