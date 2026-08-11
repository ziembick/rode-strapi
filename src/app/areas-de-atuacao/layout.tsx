// app/areas-de-atuacao/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Áreas de Atuação | Ansiedade, Depressão, Luto — Rode Ziembick",
  description: "Psicanálise para ansiedade, depressão, luto, relacionamentos e carreira. Atendimento presencial em São Paulo (Vila Olímpia e Brooklin) e online.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}