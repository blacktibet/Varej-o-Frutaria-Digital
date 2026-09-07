import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Music2 } from "lucide-react";
import logo from "@/assets/logo.png";
import { brand, social } from "@/data/site";

const icons: Record<string, typeof Instagram> = {
  Instagram,
  Facebook,
  TikTok: Music2,
};

const navClass = "text-sm text-primary-foreground/80 transition-colors hover:text-accent";

export function Footer() {
  return (
    <footer className="mt-20 bg-primary-dark text-primary-foreground">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-3 md:items-start">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            width={512}
            height={512}
            loading="lazy"
            className="h-12 w-12 shrink-0 rounded-full bg-background/95 p-1 object-contain"
          />
          <div className="min-w-0">
            <p className="font-display text-lg font-extrabold">{brand.name}</p>
            <p className="text-sm text-primary-foreground/70">{brand.tagline}</p>
          </div>
        </div>

        <nav className="flex flex-col gap-3 md:items-center">
          <Link to="/" className={navClass}>
            Início
          </Link>
          <Link to="/" hash="lojas" className={navClass}>
            Lojas
          </Link>
          <Link to="/sobre" className={navClass}>
            Sobre
          </Link>
          <Link to="/contato" className={navClass}>
            Contato
          </Link>
        </nav>

        <div className="flex gap-3 md:justify-end">
          {social.map((item) => {
            const Icon = icons[item.name] ?? Instagram;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-5">
        <p className="section-shell text-center text-xs text-primary-foreground/70">
          © 2026 {brand.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
