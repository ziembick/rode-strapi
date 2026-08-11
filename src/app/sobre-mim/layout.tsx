import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim | Rode Ziembick — Psicanalista em São Paulo",
  description: "Psicanalista formada pela Escola Paulista de Psicanálise, mestranda em Psicologia Social na USP. Orientação freudiana-lacaniana, mais de 10 anos de clínica.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}