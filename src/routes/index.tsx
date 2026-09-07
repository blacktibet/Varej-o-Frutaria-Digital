import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { FlyerCard } from "@/components/FlyerCard";
import { FlyerViewer } from "@/components/FlyerViewer";
import { StoreCard } from "@/components/StoreCard";
import { flyers, stores, type Flyer } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Varejão das Frutas — Ofertas, folhetos e lojas" },
      {
        name: "description",
        content:
          "Confira os folhetos de ofertas do Varejão das Frutas, veja todas as páginas dos encartes e encontre a loja mais próxima em Janaúba e Nova Porteirinha.",
      },
      { property: "og:title", content: "Varejão das Frutas — Ofertas e folhetos" },
      {
        property: "og:description",
        content:
          "Folhetos de ofertas atualizados, lojas e canais de contato do Varejão das Frutas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [openFlyer, setOpenFlyer] = useState<Flyer | null>(null);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />

        <section id="ofertas" className="section-shell pt-20">
          <header className="max-w-2xl">
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-bold tracking-wide text-primary-dark uppercase">
              Folhetos
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-primary-dark sm:text-4xl">
              Ofertas
            </h2>
            <p className="mt-3 text-muted-foreground">
              Confira nossos folhetos de ofertas e aproveite as melhores oportunidades do
              Varejão das Frutas.
            </p>
          </header>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {flyers.map((flyer) => (
              <FlyerCard key={flyer.id} flyer={flyer} now={now} onOpen={setOpenFlyer} />
            ))}
          </div>
        </section>

        <section id="lojas" className="section-shell pt-20">
          <header className="max-w-2xl">
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-bold tracking-wide text-primary-dark uppercase">
              Onde estamos
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-primary-dark sm:text-4xl">
              Nossas Lojas
            </h2>
            <p className="mt-3 text-muted-foreground">
              Encontre a loja do Varejão das Frutas mais próxima de você.
            </p>
          </header>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {stores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </section>
      </main>
      <Footer />

      {openFlyer && <FlyerViewer flyer={openFlyer} onClose={() => setOpenFlyer(null)} />}
    </div>
  );
}
