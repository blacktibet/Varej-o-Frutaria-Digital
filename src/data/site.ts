import heroFruits from "@/assets/hero-1.jpg";
import heroFamily from "@/assets/hero-2.jpg";
import flyer1 from "@/assets/flyer-1-cover.jpg";
import flyer2 from "@/assets/flyer-2-cover.jpg";
import page1 from "@/assets/flyer-page-1.jpg";
import page3 from "@/assets/flyer-page-3.jpg";
import page5 from "@/assets/flyer-page-5.jpg";
import store1a from "@/assets/store-1a.jpg";
import store1b from "@/assets/store-1b.jpg";
import store2a from "@/assets/store-2a.jpg";
import store2b from "@/assets/store-2b.jpg";
import store3a from "@/assets/store-3a.jpg";

/**
 * Dados fictícios da primeira versão.
 * Basta substituir os valores abaixo pelos dados reais.
 */

export const brand = {
  name: "Varejão das Frutas",
  tagline: "Qualidade e variedade perto de você",
};

export type Slide = {
  id: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export const slides: Slide[] = [
  {
    id: "ofertas",
    title: "Ofertas especiais toda semana",
    text: "Confira nossos folhetos e aproveite nossas melhores oportunidades.",
    image: heroFruits,
    alt: "Frutas e verduras frescas expostas em caixas no supermercado",
  },
  {
    id: "variedade",
    title: "Qualidade e variedade perto de você",
    text: "Encontre frutas, verduras, carnes, bebidas, produtos de mercearia e muito mais.",
    image: heroFamily,
    alt: "Família fazendo compras em um corredor de supermercado",
  },
];

export type Flyer = {
  id: string;
  name: string;
  cover: string;
  startDate: string; // ISO
  endDate: string; // ISO (último dia válido)
  pages: string[];
};

export const flyers: Flyer[] = [
  {
    id: "ofertas-da-semana",
    name: "Ofertas da Semana",
    cover: flyer1,
    startDate: "2026-09-01",
    endDate: "2026-09-07",
    pages: [flyer1, page1, page3, page5],
  },
  {
    id: "festival-das-frutas",
    name: "Festival das Frutas",
    cover: flyer2,
    startDate: "2026-09-03",
    endDate: "2026-09-12",
    pages: [flyer2, page1, page3, page5],
  },
];

export type Store = {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  mapsUrl: string;
  images: { src: string; alt: string }[];
};

export const stores: Store[] = [
  {
    id: "centro",
    name: "Loja Centro",
    address: "Rua Exemplo, 100 — Centro",
    city: "Janaúba - MG",
    phone: "(38) 0000-0000",
    hours: "Seg a Sáb: 7h às 20h · Dom: 7h às 13h",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Exemplo+100+Centro+Janauba+MG",
    images: [
      { src: store1a, alt: "Fachada da Loja Centro" },
      { src: store1b, alt: "Corredor de hortifruti da Loja Centro" },
      { src: store2b, alt: "Área de caixas da Loja Centro" },
    ],
  },
  {
    id: "sao-goncalo",
    name: "Loja São Gonçalo",
    address: "Avenida Exemplo, 500 — São Gonçalo",
    city: "Janaúba - MG",
    phone: "(38) 0000-0001",
    hours: "Seg a Sáb: 7h às 20h · Dom: 7h às 13h",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Avenida+Exemplo+500+Sao+Goncalo+Janauba+MG",
    images: [
      { src: store2a, alt: "Fachada da Loja São Gonçalo" },
      { src: store3a, alt: "Interior da Loja São Gonçalo" },
    ],
  },
];

export const contact = {
  phone: "(38) 0000-0000",
  phoneHref: "tel:+553800000000",
  whatsapp: "(38) 90000-0000",
  whatsappHref: "https://wa.me/5538900000000",
  email: "contato@varejaodasfrutas.com.br",
  emailHref: "mailto:contato@varejaodasfrutas.com.br",
};

export const social = [
  { name: "Instagram", url: "https://instagram.com/varejaodasfrutas" },
  { name: "Facebook", url: "https://facebook.com/varejaodasfrutas" },
  { name: "TikTok", url: "https://tiktok.com/@varejaodasfrutas" },
];

export const delivery = {
  cities: ["Janaúba - MG", "Nova Porteirinha - MG"],
  rules: [
    {
      title: "Compras abaixo de R$ 50,00",
      value: "Taxa de R$ 5,00",
      detail: "Entrega com taxa fixa em toda a área atendida.",
      highlight: false,
    },
    {
      title: "Compras a partir de R$ 50,00",
      value: "Entrega grátis",
      detail: "A partir de R$ 50,00 você não paga nada pela entrega.",
      highlight: true,
    },
  ],
};
