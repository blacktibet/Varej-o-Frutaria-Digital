import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Bike, MapPin, Sparkles, Target } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { delivery } from "@/data/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Varejão das Frutas — Quem somos e delivery" },
      {
        name: "description",
        content:
          "Conheça a história, a missão e o compromisso do Varejão das Frutas, além das regras do serviço de entrega em Janaúba e Nova Porteirinha.",
      },
      { property: "og:title", content: "Sobre o Varejão das Frutas" },
      {
        property: "og:description",
        content:
          "Quem somos, nossa missão, nosso compromisso e o serviço de delivery do Varejão das Frutas.",
      },
    ],
  }),
  component: Sobre,
});

const blocks = [
  {
    icon: Sparkles,
    title: "Quem somos",
    text: "O Varejão das Frutas nasceu com o propósito de oferecer variedade, qualidade e praticidade para as famílias da região. Somos um supermercado de bairro que cresceu junto com os nossos clientes.",
  },
  {
    icon: Target,
    title: "Nossa missão",
    text: "Levar produtos frescos e de qualidade para a mesa de cada família, com preços justos e um atendimento simples, próximo e honesto.",
  },
  {
    icon: BadgeCheck,
    title: "Nosso compromisso",
    text: "Qualidade no hortifruti, variedade nas gôndolas, atendimento atencioso e praticidade do começo ao fim da sua compra.",
  },
];

function Sobre() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-shell pt-12">
        <header className="max-w-2xl">
          <h1 className="font-display text-3xl font-extrabold text-primary-dark sm:text-4xl">
            Sobre o Varejão das Frutas
          </h1>
          <p className="mt-4 text-muted-foreground">
            O Varejão das Frutas nasceu com o propósito de oferecer variedade, qualidade e
            praticidade para as famílias da região.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blocks.map((block) => (
            <section
              key={block.title}
              className="rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary-dark">
                <block.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-xl font-extrabold text-primary-dark">
                {block.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-16 overflow-hidden rounded-3xl bg-primary-dark p-8 text-primary-foreground sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1.5 text-xs font-bold tracking-wide uppercase">
            <Bike className="h-4 w-4" />
            Delivery
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Receba suas compras em casa
          </h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">
            Entregamos em {delivery.cities.join(" e ")}. Faça seu pedido e receba tudo
            fresquinho, sem sair de casa.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {delivery.cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold"
              >
                <MapPin className="h-4 w-4" />
                {city}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {delivery.rules.map((rule) => (
              <div
                key={rule.title}
                className={`rounded-2xl p-6 ${
                  rule.highlight
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary-foreground/10"
                }`}
              >
                <p className="text-sm font-semibold opacity-80">{rule.title}</p>
                <p className="mt-2 font-display text-2xl font-extrabold">{rule.value}</p>
                <p className="mt-2 text-sm opacity-80">{rule.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
