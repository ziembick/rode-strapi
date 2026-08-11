import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Perguntas Frequentes sobre Psicanálise | Rode Ziembick",
  description: "Respostas às principais dúvidas sobre psicanálise, ansiedade, relacionamentos, atendimento online e a clínica da psicanalista Rode Ziembick.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}