import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { brand } from "@/data/site";

const linkClass =
  "rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary-dark";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = (
    <>
      <Link to="/" hash="lojas" className={linkClass} onClick={close}>
        Lojas
      </Link>
      <Link
        to="/sobre"
        className={linkClass}
        activeProps={{ className: "bg-secondary text-primary-dark" }}
        onClick={close}
      >
        Sobre
      </Link>
      <Link
        to="/contato"
        className={linkClass}
        activeProps={{ className: "bg-secondary text-primary-dark" }}
        onClick={close}
      >
        Contato
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={close}>
          <img
            src={logo}
            alt=""
            width={512}
            height={512}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight font-extrabold text-primary-dark">
              {brand.name}
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Frutas, hortifruti e mercearia
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">{links}</nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card text-primary-dark md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="section-shell flex flex-col gap-1 py-3 [&_a]:px-4 [&_a]:py-3 [&_a]:text-base">
            {links}
          </div>
        </nav>
      )}
    </header>
  );
}
