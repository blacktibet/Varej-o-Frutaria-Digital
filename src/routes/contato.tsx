import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MessageCircle, Music2, Phone } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contact, social } from "@/data/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Varejão das Frutas" },
      {
        name: "description",
        content:
          "Fale com o Varejão das Frutas por telefone, WhatsApp ou e-mail e acompanhe nossas redes sociais.",
      },
      { property: "og:title", content: "Contato — Varejão das Frutas" },
      {
        property: "og:description",
        content: "Telefone, WhatsApp, e-mail e redes sociais do Varejão das Frutas.",
      },
    ],
  }),
  component: Contato,
});

const channels = [
  {
    icon: Phone,
    title: "Telefone",
    value: contact.phone,
    href: contact.phoneHref,
    action: "Ligar agora",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: contact.whatsapp,
    href: contact.whatsappHref,
    action: "Abrir conversa",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: contact.email,
    href: contact.emailHref,
    action: "Enviar e-mail",
  },
];

const socialIcons: Record<string, typeof Instagram> = {
  Instagram,
  Facebook,
  TikTok: Music2,
};

function Contato() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-shell pt-12">
        <header className="max-w-2xl">
          <h1 className="font-display text-3xl font-extrabold text-primary-dark sm:text-4xl">
            Fale com a gente
          </h1>
          <p className="mt-4 text-muted-foreground">
            Escolha o canal mais prático para você. Nosso time responde de segunda a
            sábado, no horário de funcionamento das lojas.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary-dark">
                <channel.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-xl font-extrabold text-primary-dark">
                {channel.title}
              </h2>
              <p className="mt-2 break-words text-muted-foreground">{channel.value}</p>
              <span className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground">
                {channel.action}
              </span>
            </a>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-card">
          <h2 className="font-display text-2xl font-extrabold text-primary-dark">
            Redes sociais
          </h2>
          <p className="mt-2 text-muted-foreground">
            Acompanhe as ofertas e novidades do dia a dia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {social.map((item) => {
              const Icon = socialIcons[item.name] ?? Instagram;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-primary-dark transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
