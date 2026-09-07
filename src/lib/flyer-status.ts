import type { Flyer } from "@/data/site";

export type FlyerStatus = {
  expired: boolean;
  endingSoon: boolean;
  label: string;
  period: string;
};

function toDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1);
}

export function formatDate(iso: string) {
  return toDate(iso).toLocaleDateString("pt-BR");
}

export function getFlyerStatus(flyer: Flyer, now: Date = new Date()): FlyerStatus {
  const period = `${formatDate(flyer.startDate)} até ${formatDate(flyer.endDate)}`;
  const end = toDate(flyer.endDate);
  end.setHours(23, 59, 59, 999);
  const diff = end.getTime() - now.getTime();

  if (diff <= 0) {
    return { expired: true, endingSoon: false, label: "Oferta encerrada", period };
  }

  const days = Math.floor(diff / 86_400_000);
  if (days === 0) {
    const hours = Math.floor(diff / 3_600_000);
    return {
      expired: false,
      endingSoon: true,
      label: hours >= 1 ? `Termina hoje · ${hours}h restantes` : "Termina em minutos",
      period,
    };
  }

  return {
    expired: false,
    endingSoon: days <= 2,
    label: days === 1 ? "Termina em 1 dia" : `Termina em ${days} dias`,
    period,
  };
}
