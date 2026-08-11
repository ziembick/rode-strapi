import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeto Memórias Ancestrais | Rode Ziembick — Psicanalista",
  description: "Transforme sua história em um livro. Um processo analítico de escuta e registro de memórias de vida, com elaboração subjetiva e publicação personalizada.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}